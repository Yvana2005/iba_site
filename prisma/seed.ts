
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Démarrage du seeding...')

  // Hash des mots de passe
  const salt = await bcrypt.genSalt(10)

  const users = [
    {
      name: 'Super Admin',
      email: 'admin@ibabeauty.com',
      password: await bcrypt.hash('Admin123!', salt),
      role: 'admin',
      isActive: true,
    },
    {
      name: 'Rédacteur Principal',
      email: 'editor@ibabeauty.com',
      password: await bcrypt.hash('Editor123!', salt),
      role: 'editor',
      isActive: true,
    },
    {
      name: 'Modérateur',
      email: 'moderator@ibabeauty.com',
      password: await bcrypt.hash('Moderator123!', salt),
      role: 'editor',
      isActive: true,
    },
  ]

  for (const user of users) {
    // Correction importante: utiliser 'adminUser' (camelCase) au lieu de 'AdminUser'
    const existingUser = await prisma.adminUser.findUnique({
      where: { email: user.email },
    })

    if (!existingUser) {
      await prisma.adminUser.create({
        data: user,
      })
      console.log(`✅ Utilisateur créé: ${user.email} (${user.role})`)
    } else {
      console.log(`⚠️ Utilisateur existe déjà: ${user.email}`)
    }
  }

  console.log('🎉 Seeding terminé!')
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })