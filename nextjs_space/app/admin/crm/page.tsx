
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, FileText, File } from 'lucide-react'

export default function AdminCRM() {
  const router = useRouter()
  const [forms, setForms] = useState<any[]>([])
  const [docs, setDocs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    fetchGoogleDrive(token)
  }, [router])

  const fetchGoogleDrive = async (token: string) => {
    try {
      const response = await fetch('/api/admin/google-drive', {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (response.ok) {
        const data = await response.json()
        setForms(data.forms || [])
        setDocs(data.docs || [])
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch Google Drive data:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.push('/admin')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Google Drive CRM</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="forms">
              <TabsList>
                <TabsTrigger value="forms">Google Forms</TabsTrigger>
                <TabsTrigger value="docs">Google Docs</TabsTrigger>
              </TabsList>

              <TabsContent value="forms">
                <div className="space-y-4 mt-4">
                  {forms.map((form) => (
                    <div key={form.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <div>
                          <h3 className="font-semibold">{form.name}</h3>
                          <p className="text-sm text-gray-500">Form ID: {form.id}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => window.open(`https://docs.google.com/forms/d/${form.id}`, '_blank')}
                      >
                        Open Form
                      </Button>
                    </div>
                  ))}
                  {forms.length === 0 && (
                    <p className="text-center text-gray-500 py-8">No forms found</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="docs">
                <div className="space-y-4 mt-4">
                  {docs.map((doc) => (
                    <div key={doc.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <File className="h-5 w-5 text-green-500" />
                        <div>
                          <h3 className="font-semibold">{doc.name}</h3>
                          <p className="text-sm text-gray-500">Document ID: {doc.id}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => window.open(`https://docs.google.com/document/d/${doc.id}`, '_blank')}
                      >
                        Open Doc
                      </Button>
                    </div>
                  ))}
                  {docs.length === 0 && (
                    <p className="text-center text-gray-500 py-8">No documents found</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
