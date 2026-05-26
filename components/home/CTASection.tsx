import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
          Prêt à collaborer ?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Spécialisée la distribution et promotion des produits parapharmaceutiques 
          et de médicaments haut de gamme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            <Link href="/contact" className="flex items-center">
              ENTRÉE EN CONTACT →
            </Link>
          </Button>
          <Button variant="outline-light" size="lg">
            <Link href="/services" className="flex items-center">
            EXPLORER LES SERVICES
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}