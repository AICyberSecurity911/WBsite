
import { prisma } from './db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.SECRET_KEY || 'fallback-secret-key'

export interface AdminSession {
  id: string
  email: string
  name: string
  role: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export async function createAdminToken(admin: AdminSession): Promise<string> {
  return jwt.sign(admin, JWT_SECRET, { expiresIn: '7d' })
}

export async function verifyAdminToken(token: string): Promise<AdminSession | null> {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminSession
    return decoded
  } catch (error) {
    return null
  }
}

export async function createDefaultAdmin() {
  const existingAdmin = await prisma.adminUser.findFirst()
  
  if (!existingAdmin) {
    const defaultPassword = 'QuantumLeap2025!'
    const passwordHash = await hashPassword(defaultPassword)
    
    await prisma.adminUser.create({
      data: {
        email: 'admin@quantumleap.io',
        passwordHash,
        name: 'QuantumLeap Admin',
        role: 'super_admin'
      }
    })
    
    console.log('Default admin created: admin@quantumleap.io / QuantumLeap2025!')
  }
}
