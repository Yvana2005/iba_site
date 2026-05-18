'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ChevronRight as ChevronMore } from 'lucide-react'
import Image from 'next/image'

const partners = [
  { 
    name: 'Pfizer', 
    logo: '/partners/pfizer.png',
    description: 'Leader mondial pharmaceutique',
  },
  { 
    name: 'Neutrogena', 
    logo: '/partners/neutrogena.png',
    description: 'Solutions innovantes en santé',
  },
  { 
    name: 'Johnson & Johnson', 
    logo: '/partners/jnj.png',
    description: 'Soins de santé haut de gamme',
  },
  { 
    name: 'MIZANI', 
    logo: '/partners/logo-mizani.png',
    description: 'Médicaments de spécialité',
  },
  { 
    name: 'Roche', 
    logo: '/partners/roche.png',
    description: 'Biotechnologie avancée',
  },
  { 
    name: 'GSK', 
    logo: '/partners/gsk.png',
    description: 'Vaccins et médicaments',
  },
]

export default function PartnerBrands() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsToShow = 4

  const nextPartners = () => {
    if (startIndex + itemsToShow < partners.length) {
      setStartIndex(startIndex + 1)
    } else {
      setStartIndex(0) // Retour au début
    }
  }

  const prevPartners = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    } else {
      setStartIndex(partners.length - itemsToShow) // Aller à la fin
    }
  }

  const visiblePartners = partners.slice(startIndex, startIndex + itemsToShow)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-gray-800">
            NOS PARTENAIRES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Portefeuille de marques de produits  internationales distribuées avec exclusivité ou en partenariat.
          </p>
        </div>

        {/* Carrousel avec chevrons */}
        <div className="relative">
          {/* Chevron gauche */}
          <button
            onClick={prevPartners}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
                       bg-white rounded-full p-3 shadow-lg hover:shadow-xl 
                       transition-all duration-300 hover:bg-black hover:text-white group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Partners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-8">
            {visiblePartners.map((partner, idx) => (
              <div
                key={startIndex + idx}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 
                         hover:-translate-y-2 transform transition-all duration-500"
              >
                <div className="p-6 text-center">
                  <div className="relative h-24 w-full mb-4 flex items-center justify-center">
                    <div className="w-32 h-20 relative">
                      <div className="w-full h-full bg-gradient-to-br from-white to-white rounded-lg 
                                    flex items-center justify-center group-hover:from-gray-200 
                                    group-hover:to-gray-300 transition-colors">
                        <span className="text-xs text-gray-500 font-bold">
                          {partner.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        fill
                        className="object-contain transition-transform group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-black">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{partner.description}</p>
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="text-sm group-hover:translate-x-1 transition-transform inline-flex items-center"
                  >
                    Découvrir
                    <ChevronMore className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Chevron droit */}
          <button
            onClick={nextPartners}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
                       bg-white rounded-full p-3 shadow-lg hover:shadow-xl 
                       transition-all duration-300 hover:bg-black hover:text-white group"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Indicateur de position */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {startIndex + 1} - {Math.min(startIndex + itemsToShow, partners.length)} sur {partners.length} partenaires
          </p>
        </div>
      </div>
    </section>
  )
}