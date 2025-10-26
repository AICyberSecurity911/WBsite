
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Initializing admin user...')

  const existingAdmin = await prisma.adminUser.findFirst()

  if (existingAdmin) {
    console.log('✅ Admin user already exists')
    console.log(`Email: ${existingAdmin.email}`)
    return
  }

  const defaultPassword = 'QuantumLeap2025!'
  const passwordHash = await bcrypt.hash(defaultPassword, 10)

  const admin = await prisma.adminUser.create({
    data: {
      email: 'admin@quantumleap.io',
      passwordHash,
      name: 'QuantumLeap Admin',
      role: 'super_admin'
    }
  })

  console.log('✅ Default admin user created successfully!')
  console.log(`Email: ${admin.email}`)
  console.log(`Password: ${defaultPassword}`)
  console.log('\n⚠️  Please change the default password after first login!')
}

main()
  .catch((e) => {
    console.error('Error initializing admin:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
