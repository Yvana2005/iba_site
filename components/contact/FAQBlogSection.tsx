import { ChevronRight } from 'lucide-react'



export default function FAQBlogSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-playfair text-gray-700">
            Questions courantes ?
          </h2>
          <p className="text-gray-600 mb-6">
            Consultez notre blog pour obtenir des informations sur le secteur et les questions 
            fréquemment posées sur nos services.
          </p>
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
          >
            Visiter notre Blog
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}