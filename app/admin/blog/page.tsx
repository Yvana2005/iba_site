'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, BookOpen, LayoutDashboard, MessageCircle, Settings, ExternalLink, LogOut, AlertCircle, Calendar, User } from 'lucide-react'

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string | null
  imageUrl: string | null
  author: string
  status: string
  category: string | null
  createdAt: string
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default function AdminBlogPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/blog')
        if (!response.ok) throw new Error('Erreur de chargement')
        const data = await response.json()
        setArticles(data)
      } catch {
        setError('Impossible de charger les articles')
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="w-64 bg-white shadow-lg min-h-screen fixed left-0 top-0">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold font-playfair">ADMINISTRATION</h2>
            <p className="text-sm text-gray-500 mt-1">Blog Management</p>
          </div>
          <nav className="p-4">
            <div className="space-y-1">
              <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-lg">
                <BookOpen className="w-5 h-5" />
                <span>Tous les Posts</span>
              </Link>
              <Link href="/admin/blog/new" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Créer un nouveau</span>
              </Link>
              <Link href="/admin/commentaires" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>Commentaires</span>
              </Link>
            </div>
            <div className="border-t my-4 pt-4">
              <div className="space-y-1">
                <Link href="/admin/parametres" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <Settings className="w-5 h-5" />
                  <span>Paramètres</span>
                </Link>
                <Link href="/" target="_blank" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span>Voir le site</span>
                </Link>
              </div>
            </div>
            <div className="border-t mt-4 pt-4">
              <button className="flex items-center gap-3 px-4 py-2 text-red-600 rounded-lg hover:bg-red-50 transition-colors w-full">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        <main className="flex-1 ml-64">
          <div className="max-w-6xl mx-auto px-8 py-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tous les articles</h1>
                <p className="text-gray-600 mt-2">Gérez vos articles de blog</p>
              </div>
              <Link
                href="/admin/blog/new"
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Nouvel article
              </Link>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            {isLoading ? (
              <div className="text-center py-16">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
                <p className="text-gray-500 mt-4">Chargement...</p>
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Aucun article</h3>
                <p className="text-gray-500 mb-6">Commencez par créer votre premier article de blog.</p>
                <Link href="/admin/blog/new" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Créer un article
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Titre</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Auteur</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Statut</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                      <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900">{article.title}</p>
                            {article.category && (
                              <span className="text-xs text-gray-500 mt-1">{article.category}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-2 text-gray-600">
                            <User className="w-4 h-4" />
                            {article.author}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            article.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {article.status === 'published' ? 'Publié' : 'Brouillon'}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            {formatDate(article.createdAt)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            href={`/blog/${article.slug}`}
                            target="_blank"
                            className="text-sm text-gray-600 hover:text-black transition-colors mr-4"
                          >
                            Voir
                          </Link>
                          <Link
                            href={`/admin/blog/edit/${article.id}`}
                            className="text-sm text-black hover:underline"
                          >
                            Modifier
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
