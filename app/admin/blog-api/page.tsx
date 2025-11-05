
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, Key, Copy, Check } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export default function AdminBlogAPI() {
  const router = useRouter()
  const [apiKeys, setApiKeys] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [keyName, setKeyName] = useState('')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
    fetchApiKeys(token)
  }, [router])

  const fetchApiKeys = async (token: string) => {
    try {
      const response = await fetch('/api/admin/blog-api-keys', {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (response.ok) {
        const data = await response.json()
        setApiKeys(data.apiKeys)
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch API keys:', error)
      setLoading(false)
    }
  }

  const createApiKey = async () => {
    if (!keyName) {
      toast({ title: 'Error', description: 'Please enter a key name', variant: 'destructive' })
      return
    }

    setCreating(true)
    const token = localStorage.getItem('adminToken')

    try {
      const response = await fetch('/api/admin/blog-api-keys', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keyName })
      })

      if (response.ok) {
        const data = await response.json()
        setApiKeys([data.apiKey, ...apiKeys])
        setKeyName('')
        toast({ title: 'Success', description: 'API key created successfully' })
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to create API key', variant: 'destructive' })
    }
    setCreating(false)
  }

  const toggleKeyStatus = async (id: string, isActive: boolean) => {
    const token = localStorage.getItem('adminToken')

    try {
      const response = await fetch('/api/admin/blog-api-keys', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, isActive })
      })

      if (response.ok) {
        setApiKeys(apiKeys.map(key => 
          key.id === id ? { ...key, isActive } : key
        ))
        toast({ title: 'Success', description: `API key ${isActive ? 'activated' : 'deactivated'}` })
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update API key', variant: 'destructive' })
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(text)
    setTimeout(() => setCopiedKey(null), 2000)
    toast({ title: 'Copied!', description: 'API key copied to clipboard' })
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

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New API Key</CardTitle>
              <CardDescription>
                Generate API keys for third-party blog posting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="keyName">Key Name</Label>
                  <Input
                    id="keyName"
                    placeholder="e.g., Zapier Integration"
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={createApiKey} disabled={creating}>
                    {creating ? 'Creating...' : 'Create Key'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                API Keys ({apiKeys.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((key) => (
                  <div key={key.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{key.keyName}</h3>
                          <Badge variant={key.isActive ? 'default' : 'secondary'}>
                            {key.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <code className="text-sm bg-white dark:bg-gray-900 px-3 py-1 rounded border">
                            {key.apiKey}
                          </code>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(key.apiKey)}
                          >
                            {copiedKey === key.apiKey ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <span>Created: {new Date(key.createdAt).toLocaleDateString()}</span>
                          {key.lastUsedAt && (
                            <span className="ml-4">
                              Last used: {new Date(key.lastUsedAt).toLocaleDateString()}
                            </span>
                          )}
                          <span className="ml-4">Uses: {key.usageCount}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={key.isActive}
                          onCheckedChange={(checked) => toggleKeyStatus(key.id, checked)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {apiKeys.length === 0 && (
                  <p className="text-center text-gray-500 py-8">No API keys created yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Endpoint</h4>
                  <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded">
                    POST {process.env.NEXT_PUBLIC_BASE_URL || 'https://quantumleap.io'}/api/blog/post
                  </code>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Headers</h4>
                  <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded">
                    x-api-key: YOUR_API_KEY<br />
                    Content-Type: application/json
                  </code>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Request Body</h4>
                  <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded whitespace-pre">
{`{
  "title": "Blog Post Title",
  "content": "Blog post content in markdown",
  "excerpt": "Short excerpt (optional)",
  "author": "Author Name (optional)",
  "category": "Category (optional)",
  "tags": ["tag1", "tag2"],
  "featuredImage": "Image URL (optional)"
}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
