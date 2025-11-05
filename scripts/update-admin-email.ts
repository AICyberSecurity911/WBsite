import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Updating admin email...')

  // Delete the old admin user
  await prisma.adminUser.deleteMany({
    where: {
      email: 'admin@quantumleap.io'
    }
  })

  console.log('✅ Old admin user removed')

  // Create the new admin user
  const defaultPassword = 'QuantumLeap2025!'
  const passwordHash = await bcrypt.hash(defaultPassword, 10)

  const admin = await prisma.adminUser.create({
    data: {
      email: 'paras@leapintoai.com',
      passwordHash,
      name: 'Paras - QuantumLeap Admin',
      role: 'super_admin'
    }
  })

  console.log('✅ New admin user created successfully!')
  console.log(`Email: ${admin.email}`)
  console.log(`Password: ${defaultPassword}`)
  console.log('\n⚠️  Please change the default password after first login!')
}

main()
  .catch((e) => {
    console.error('Error updating admin:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
