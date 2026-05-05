import { PrismaClient } from "@prisma/client";

// Un singleton pour réutiliser la même connexion dans tout le projet
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Optionnel : pour voir les requêtes SQL dans la console
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma