import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, MessageCircle } from 'lucide-react'
import CommentSection from '@/components/blog/CommentSection'
import RelatedArticles from '@/components/blog/RelatedArticles'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getArticle(slug: string) {
  try {
    const article = await prisma.article.findUnique({
      where: { slug, status: 'published' },
      include: {
        commentaires: {
          where: { status: 'approved' },
          orderBy: { createdAt: 'desc' }
        }
      }
    })
    return article
  } catch (error) {
    return null
  }
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const commentCount = article.commentaires.length

  return (
    <main>
      {/* Hero Section avec image de couverture */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="relative z-10 container-custom pb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair max-w-4xl">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(article.createdAt)}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              {commentCount} commentaire(s)
            </span>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              {article.excerpt && (
                <div className="text-xl text-gray-600 italic border-l-4 border-rose-500 pl-6 mb-8">
                  {article.excerpt}
                </div>
              )}
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>

            {/* Tags (optionnel) */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  Cosmétique
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  Beauté
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                  Tendance
                </span>
              </div>
            </div>

            {/* Section commentaires */}
            <CommentSection articleId={article.id} initialComments={article.commentaires} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Auteur */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{article.author}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Experte en cosmétique et passionnée par les tendances beauté.
              </p>
              <Link 
                href={`/blog?author=${article.author}`}
                className="text-rose-600 text-sm hover:underline"
              >
                Voir tous ses articles
              </Link>
            </div>

            {/* Articles similaires */}
            <RelatedArticles currentArticleId={article.id} currentSlug={article.slug} />
          </div>
        </div>
      </div>
    </main>
  )
}