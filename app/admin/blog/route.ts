
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validation des données
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { error: 'Les champs titre, contenu et auteur sont requis' },
        { status: 400 }
      )
    }
    
    // Création de l'article
    const article = await prisma.article.create({
      data: {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt || '',
        content: body.content,
        imageUrl: body.imageUrl || '',
        author: body.author,
        status: body.status || 'draft',
        // Les tags et la catégorie peuvent être stockés dans un champ JSON ou une table séparée
        // Pour simplifier, on les ignore pour l'instant mais on peut les ajouter plus tard
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