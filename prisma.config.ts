// @ts-nocheck
// Prisma 6+ config — ignoré avec Prisma 5.x (le projet utilise 5.22)
// Gardé pour compatibilité future, mais neutralisé pour `next build` avec Prisma 5.
// Si vous passez à Prisma 6+, retirez la ligne `// @ts-nocheck` et assurez-vous que `prisma/config` existe.
import "dotenv/config";
let defineConfig: any;
let env: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const prismaConfig = require("prisma/config");
  defineConfig = prismaConfig.defineConfig;
  env = prismaConfig.env;
} catch {
  // Prisma 5.x : pas de `prisma/config` — on fournit un stub pour que le build Next.js passe
  defineConfig = (c: any) => c;
  env = (k: string) => process.env[k] ?? "";
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
