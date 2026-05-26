import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { error: 'Les champs titre, contenu et auteur sont requis' },
        { status: 400 }
      )
    }

    const article = await prisma.article.create({
      data: {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt || '',
        content: body.content,
        imageUrl: body.imageUrl || '',
        author: body.author,
        status: body.status || 'draft',
        category: body.category || null,
        tags: body.tags && body.tags.length > 0 ? body.tags : null,
        seoTitle: body.seoTitle || null,
        seoDescription: body.seoDescription || null,
      }
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    console.error('Error creating article:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'article' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        author: true,
        status: true,
        category: true,
        createdAt: true,
      }
    })
    return NextResponse.json(articles)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    )
  }
}
