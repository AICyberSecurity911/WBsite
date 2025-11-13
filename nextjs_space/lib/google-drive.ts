
import fs from 'fs'
import path from 'path'

export async function getGoogleDriveToken() {
  if (typeof window !== 'undefined') {
    throw new Error('Cannot access secrets from client-side')
  }
  
  const authSecretsPath = path.join(process.env.HOME || '/home/ubuntu', '.config', 'abacusai_auth_secrets.json')
  
  if (!fs.existsSync(authSecretsPath)) {
    throw new Error('Google Drive not configured')
  }
  
  const authSecrets = JSON.parse(fs.readFileSync(authSecretsPath, 'utf-8'))
  const token = authSecrets?.googledriveuser?.secrets?.access_token?.value
  
  if (!token) {
    throw new Error('Google Drive access token not found')
  }
  
  return token
}

export async function listGoogleForms(): Promise<any[]> {
  try {
    const token = await getGoogleDriveToken()
    
    const response = await fetch(
      'https://www.googleapis.com/drive/v3/files?q=mimeType="application/vnd.google-apps.form"&pageSize=10',
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`Google Drive API error: ${response.statusText}`)
    }
    
    const data = await response.json()
    return data.files || []
  } catch (error) {
    console.error('Error fetching Google Forms:', error)
    return []
  }
}

export async function listGoogleDocs(query?: string): Promise<any[]> {
  try {
    const token = await getGoogleDriveToken()
    
    const searchQuery = query 
      ? `mimeType="application/vnd.google-apps.document" and fullText contains "${query}"`
      : 'mimeType="application/vnd.google-apps.document"'
    
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(searchQuery)}&pageSize=20&orderBy=modifiedTime desc`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`Google Drive API error: ${response.statusText}`)
    }
    
    const data = await response.json()
    return data.files || []
  } catch (error) {
    console.error('Error fetching Google Docs:', error)
    return []
  }
}
