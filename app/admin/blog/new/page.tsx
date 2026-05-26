'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Save, 
  Plus, 
  LayoutDashboard,
  BookOpen,
  MessageCircle,
  Settings,
  ExternalLink,
  LogOut,
  AlertCircle
} from 'lucide-react'

// Interface pour l'article
interface ArticleFormData {
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl: string
  author: string
  category: string
  tags: string[]
  status: 'draft' | 'published'
  seoTitle?: string
  seoDescription?: string
}

export default function NouvelArticlePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<ArticleFormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    author: '',
    category: '',
    tags: [],
    status: 'draft',
    seoTitle: '',
    seoDescription: ''
  })
  const [tagInput, setTagInput] = useState('')

  // Générer automatiquement le slug à partir du titre
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updates = { [name]: value }
      
      // Auto-générer le slug quand le titre change
      if (name === 'title') {
        return { ...prev, ...updates, slug: generateSlug(value) }
      }
      
      return { ...prev, ...updates }
    })
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Erreur lors de la création de l\'article')

      await response.json()
      router.push('/admin/blog')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar - Navigation Admin */}
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
              <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                <BookOpen className="w-5 h-5" />
                <span>Tous les Posts</span>
              </Link>
              <Link href="/admin/blog/new" className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-lg">
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

        {/* Contenu principal */}
        <main className="flex-1 ml-64">
          <div className="max-w-4xl mx-auto px-8 py-8">
            {/* En-tête */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Créer un nouvel article de blog</h1>
              <p className="text-gray-600 mt-2">Remplissez le formulaire ci-dessous pour publier un nouvel article</p>
            </div>

            {/* Message d'erreur */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="grid grid-cols-1 gap-6">
                      {/* Titre */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Titre <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder="Un titre accrocheur pour votre article"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                          required
                        />
                      </div>

                  {/* Slug (généré automatiquement) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug (URL)
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">/blog/</span>
                      <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50 "
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Généré automatiquement à partir du titre</p>
                  </div>

                  {/* Auteur et Catégorie */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Auteur <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Catégorie
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                      >
                        <option value="">Sélectionner une catégorie</option>
                        <option value="Distribution">Distribution</option>
                        <option value="Produits">Produits</option>
                        <option value="Innovation">Innovation</option>
                        <option value="Partenariat">Partenariat</option>
                        <option value="Actualités">Actualités</option>
                      </select>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                        placeholder="Ajouter un tag (ex: Innovation, Santé)"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Ajouter
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="hover:text-red-500"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Résumé */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Résumé
                    </label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Un bref résumé de votre article qui apparaîtra dans la liste des articles..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image de couverture (URL)
                    </label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                    />
                    {formData.imageUrl && (
                      <div className="mt-2 relative h-32 w-auto">
                        <Image src={formData.imageUrl} alt="Preview" width={200} height={128} className="rounded-lg object-cover" style={{ width: 'auto', height: '100%' }} unoptimized />
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contenu <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      rows={12}
                      placeholder="Écrivez votre article ici... (Support Markdown et HTML)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-mono text-sm text-gray-600"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Vous pouvez utiliser du Markdown ou du HTML pour formater votre contenu
                    </p>
                  </div>

                  {/* Statut */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Statut
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="status"
                          value="draft"
                          checked={formData.status === 'draft'}
                          onChange={handleInputChange}
                          className="w-4 h-4 "
                        />
                        <span className='text-gray-700'>Brouillon</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="status"
                          value="published"
                          checked={formData.status === 'published'}
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <span className='text-gray-700'>Publier</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Section (optionnel mais recommandé) */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Optimisation SEO</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Titre SEO (Meta Title)
                    </label>
                    <input
                      type="text"
                      name="seoTitle"
                      value={formData.seoTitle}
                      onChange={handleInputChange}
                      placeholder="Titre pour les moteurs de recherche (laissez vide pour utiliser le titre principal)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description SEO (Meta Description)
                    </label>
                    <textarea
                      name="seoDescription"
                      value={formData.seoDescription}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="Description pour les moteurs de recherche (150-160 caractères)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-600"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.seoDescription?.length || 0}/160 caractères
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 justify-end">
                <Link
                  href="/admin/blog"
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Publication en cours...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      {formData.status === 'draft' ? 'Enregistrer le brouillon' : 'Publier l\'article'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}