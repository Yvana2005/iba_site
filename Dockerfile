# syntax=docker/dockerfile:1.7
# Multi-stage Dockerfile optimisé pour Next.js 16 + Prisma (MySQL)
# Utilise le mode standalone (next.config.ts -> output: "standalone")

FROM node:20-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# --- Stage 1: deps ---
FROM base AS deps
# Librairies nécessaires pour prisma et bcrypt sur Alpine
RUN apk add --no-cache libc6-compat openssl
COPY package.json package-lock.json* ./
RUN npm ci

# --- Stage 2: builder ---
FROM base AS builder
RUN apk add --no-cache libc6-compat openssl
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# DATABASE_URL factice pour permettre `prisma generate` et `next build` sans DB réelle
# Sera écrasé au runtime par docker-compose / env
ENV DATABASE_URL="mysql://root:root@localhost:3306/mydb"
RUN npx prisma generate
RUN npm run build

# --- Stage 3: runner (production) ---
FROM base AS runner
RUN apk add --no-cache libc6-compat openssl
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Fichiers nécessaires au runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Standalone output: server.js + node_modules minimalistes + .next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Prisma Client + CLI + deps pour migrate/seed
# On copie l'intégralité de node_modules du builder pour éviter les dépendances manquantes
# (ts-node, wasm, engines, etc.). Cela écrase le node_modules minimal du standalone
# mais garantit que `prisma migrate deploy` et `prisma db seed` fonctionnent.
COPY --from=builder /app/node_modules ./node_modules

# Script d'entrée qui applique les migrations puis lance le serveur
RUN printf '#!/bin/sh\nset -e\necho "→ Prisma migrate deploy..."\nnpx prisma migrate deploy || echo "⚠️  migrate deploy a échoué (DB pas prête ?)" \n# Optionnel: seed automatique si SEED_ON_START=true\nif [ "$SEED_ON_START" = "true" ]; then\n  echo "→ Seeding..."\n  npm run prisma:seed 2>/dev/null || npx prisma db seed || true\nfi\necho "→ Démarrage du serveur Next.js..."\nexec node server.js\n' > /app/docker-entrypoint.sh \
 && chmod +x /app/docker-entrypoint.sh

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/api/health 2>/dev/null || wget -qO- http://127.0.0.1:3000/ | grep -q "<" || exit 1

CMD ["/app/docker-entrypoint.sh"]
