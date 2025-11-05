
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

async function verifyBlogApiKey(apiKey: string): Promise<boolean> {
  try {
    const key = await prisma.blogApiKey.findUnique({
      where: { apiKey, isActive: true }
    })
    
    if (key) {
      // Update usage stats
      await prisma.blogApiKey.update({
        where: { id: key.id },
        data: {
          lastUsedAt: new Date(),
          usageCount: { increment: 1 }
        }
      })
      return true
    }
    
    return false
  } catch (error) {
    console.error('API key verification error:', error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = request.headers.get('x-api-key')
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 401 }
      )
    }
    
    const isValid = await verifyBlogApiKey(apiKey)
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid or inactive API key' },
        { status: 401 }
      )
    }
    
    const { title, content, excerpt, author, category, tags, featuredImage } = await request.json()
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    
    // Create markdown content
    const frontmatter = {
      title,
      excerpt: excerpt || content.substring(0, 160),
      author: author || 'QuantumLeap AI Team',
      date: new Date().toISOString().split('T')[0],
      category: category || 'AI Insights',
      tags: tags || ['AI', 'Automation'],
      featuredImage: featuredImage || '/og-image.png'
    }
    
    const markdownContent = matter.stringify(content, frontmatter)
    
    // Save to file system
    const blogDir = path.join(process.cwd(), 'content', 'blog')
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true })
    }
    
    const filePath = path.join(blogDir, `${slug}.md`)
    
    // Check if file already exists
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'A blog post with this title already exists' },
        { status: 409 }
      )
    }
    
    fs.writeFileSync(filePath, markdownContent)
    
    return NextResponse.json({
      success: true,
      slug,
      message: 'Blog post created successfully',
      url: `/blog/${slug}`
    })
  } catch (error) {
    console.error('Blog post creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  return NextResponse.json({
    message: 'Blog API',
    version: '1.0',
    endpoints: {
      post: {
        method: 'POST',
        description: 'Create a new blog post',
        headers: {
          'x-api-key': 'Your API key',
          'Content-Type': 'application/json'
        },
        body: {
          title: 'Blog post title (required)',
          content: 'Blog post content in markdown (required)',
          excerpt: 'Short excerpt (optional)',
          author: 'Author name (optional)',
          category: 'Category (optional)',
          tags: 'Array of tags (optional)',
          featuredImage: 'Image URL (optional)'
        }
      }
    }
  })
}
