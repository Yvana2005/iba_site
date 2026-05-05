import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import { prisma } from '@/lib/prisma'

async function getLatestArticles() {
  const articles = await prisma.article.findMany({
    where: { status: 'published' },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })
  return articles
}

export default async function ActualitesSection() {
  const articles = await getLatestArticles()

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">
            ANALYSE ET ACTUALITÉS
          </h2>
          <Button variant="link">
            VIEW TOLL FREE ATTIRE
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article:any) => (
            <div key={article.id} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.createdAt).toLocaleDateString('fr-FR')}
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Button variant="link" size="sm">
                  Lire plus
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}