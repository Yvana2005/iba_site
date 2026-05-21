import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.articleId || !body.author || !body.email || !body.content) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }
    
    const commentaire = await prisma.commentaire.create({
      data: {
        articleId: body.articleId,
        author: body.author,
        email: body.email,
        content: body.content,
        status: 'pending' // En attente de modération
      }
    })
    
    return NextResponse.json(commentaire, { status: 201 })
  } catch (error) {
    console.error('Erreur:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout du commentaire' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const articleId = searchParams.get('articleId')
  
  if (!articleId) {
    return NextResponse.json({ error: 'articleId requis' }, { status: 400 })
  }
  
  const commentaires = await prisma.commentaire.findMany({
    where: {
      articleId: parseInt(articleId),
      status: 'approved'
    },
    orderBy: { createdAt: 'desc' }
  })
  
  return NextResponse.json(commentaires)
}