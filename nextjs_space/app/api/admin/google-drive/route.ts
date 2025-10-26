
import { NextResponse } from 'next/server'
import { verifyAdminToken } from '@/lib/admin-auth'
import { listGoogleForms, listGoogleDocs } from '@/lib/google-drive'

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')
    
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const query = searchParams.get('query') || undefined
    
    if (type === 'forms') {
      const forms = await listGoogleForms()
      return NextResponse.json({ forms })
    }
    
    if (type === 'docs') {
      const docs = await listGoogleDocs(query)
      return NextResponse.json({ docs })
    }
    
    // Get both by default
    const [forms, docs] = await Promise.all([
      listGoogleForms(),
      listGoogleDocs(query)
    ])
    
    return NextResponse.json({ forms, docs })
  } catch (error) {
    console.error('Google Drive fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Google Drive data' },
      { status: 500 }
    )
  }
}
