import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Filter } from 'lucide-react'

// Types pour les articles
interface Article {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string
  imageUrl: string | null
  author: string
  createdAt: Date
  category?: string
}

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await prisma.article.findMany({
      where: { status: 'published' },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        imageUrl: true,
        author: true,
        createdAt: true,
      }
    })
    return articles
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error)
    return []
  }
}

// Fonction pour formater la date
function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).toUpperCase()
}

export default async function BlogPage() {
  const articles = await getArticles()
  const hasArticles = articles.length > 0

  return (
    <main className='bg-white'>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">BLOG</h1>
          <div className="w-20 h-0.5 bg-white/50 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez les tendances du secteur, les guides de formation, les stratégies de distribution 
            et les actualités des agences grâce à notre équipe d'experts en cosmétiques.
          </p>
        </div>
         {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
  <svg
    viewBox="0 0 1440 80"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className="w-full h-16 md:h-20"
  >
    <path
      d="M0,80 C360,0 720,80 1080,20 C1260,0 1380,60 1440,40 L1440,80 L0,80 Z"
      fill="white"
    />
  </svg>
</div> */}
      </section>

      <div className="container-custom py-12">
        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">FILTER PAR:</span>
            <select className="ml-2 px-3 py-1 border border-gray-400 text-gray-400 rounded-lg focus:ring-2 focus:ring-gray-900">
              <option>Toutes les Catégories</option>
              <option>Soins capillaires</option>
              <option>Cosmétique</option>
              <option>Distribution</option>
              <option>Formation</option>
            </select>
          </div>
          <div className="text-gray-500 text-sm">
            {hasArticles ? `${articles.length} article(s)` : 'Aucun article'}
          </div>
        </div>

        {/* Liste des articles */}
        {!hasArticles ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Aucun article pour le moment</h3>
            <p className="text-gray-500">Revenez bientôt pour découvrir nos nouveaux articles.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <article key={article.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[250px] overflow-hidden">
                    {article.imageUrl ? (
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-400">📷</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-rose-600 text-white text-xs px-3 py-1 rounded-full">
                        Soins capillaire
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.createdAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-rose-600 transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt || article.content.substring(0, 200)}...
                    </p>
                    
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all"
                    >
                      Lire la suite
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}