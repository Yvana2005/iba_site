import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

async function getRelatedArticles(currentId: number, currentSlug: string) {
  try {
    const articles = await prisma.article.findMany({
      where: {
        status: 'published',
        id: { not: currentId },
        NOT: { slug: currentSlug }
      },
      orderBy: { createdAt: 'desc' },
      take: 3,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        imageUrl: true,
        createdAt: true,
      }
    })
    return articles
  } catch (error) {
    return []
  }
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('fr-FR', {
    month: 'short',
    year: 'numeric'
  }).toUpperCase()
}

export default async function RelatedArticles({ currentArticleId, currentSlug }: { currentArticleId: number, currentSlug: string }) {
  const articles = await getRelatedArticles(currentArticleId, currentSlug)

  if (articles.length === 0) return null

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">AUTRE ARTICLES</h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link 
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all"
          >
            <div className="flex gap-3 p-3">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                {article.imageUrl ? (
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(article.createdAt)}
                </span>
                <h4 className="font-semibold text-sm group-hover:text-rose-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <span className="text-xs text-gray-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Lire <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all">
          EXPLOREZ D'AUTRES BLOG
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}