'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, Star } from 'lucide-react'

const partnerCategories = [
  {
    name: 'MARQUES PARTENAIRES',
    description: 'Portefeuille de marques de produits parapharmaceutiques, dermatologiques, capillaires et fragrances internationales distribuées avec exclusivité ou en partenariat.',
    brands: [
      { name: 'L\'OREAL', logo: '/partners/Loreal-logo.png', category: 'Cosmétique' },
      { name: 'VICHY', logo: '/partners/vichy.png', category: 'Dermatologique' },
      { name: 'Neutrogena', logo: '/partners/neutrogena.png', category: 'Soins de la peau' },
      { name: 'KEUNÉ', logo: '/partners/kene.png', category: 'Capillaire' },
      { name: 'CERAVE', logo: '/partners/CeraVe-Logo.jpg', category: 'Dermatologie' },
      { name: 'MIZANI', logo: '/partners/mizani.png', category: 'Parfumerie' },
      { name: 'MILK_SHAKE', logo: '/partners/milkshake.png', category: 'Capillaire' },
      { name: 'LA ROCHE POSAY', logo: '/partners/larocheposay.png', category: 'Soins de la peau' },
      { name: 'TOUS', logo: '/partners/tous.png', category: 'Parfumerie' },
      { name: 'LISTERINE', logo: '/partners/listerine.png', category: 'Hygiène buccale' },
      
    ]
  }
]

const distributedBrands = [
  { name: 'L\'OREAL', logo: '/partners/Loreal-logo.png', category: 'Cosmétique' },
  { name: 'MIZANI', logo: '/partners/mizani.png', category: 'Parfumerie' },
  { name: 'CERAVE', logo: '/partners/CeraVe-Logo.jpg', category: 'Dermatologie' },
  { name: 'LA ROCHE POSAY', logo: '/partners/larocheposay.png', category: 'Soins de la peau' },
  { name: 'OGX', logo: '/partners/ogx.jpg', category: 'Hygiène buccale' },
  { name: 'Neutrogena', logo: '/partners/neutrogena.png', category: 'Soins de la peau' },
  { name: 'VICHY', logo: '/partners/vichy.png', category: 'Dermatologique' },
  { name: 'LISTERINE', logo: '/partners/listerine.png', category: 'Hygiène buccale' },
]

export default function PartnersSection() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            NOS PARTENAIRES
          </h2>
          <div className="w-16 h-0.5 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Portefeuille de marques de produits parapharmaceutiques, dermatologiques, 
            capillaires et fragrances internationales distribuées avec exclusivité ou en partenariat.
          </p>
        </div>

        {/* Marques partenaires */}
        {partnerCategories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">LES MARQUES PARTENAIRES DE IBABEAUTY</h3>
              <div className="w-12 h-0.5 bg-rose-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.brands.map((brand, brandIdx) => (
                <div
                  key={brandIdx}
                  onMouseEnter={() => setHoveredBrand(brand.name)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 text-center"
                >
                  <div className="relative h-20 mb-4 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                        {/* <span className="text-sm font-bold text-gray-400">{brand.name.substring(0, 2)}</span> */}
                        <Image
                            src={brand.logo}
                            alt={`Logo ${brand.name.substring(0, 2)}`}
                            fill
                            className="object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">{brand.name}</h4>
                  <p className="text-xs text-gray-500">{brand.category}</p>
                  
                  {/* Effet au survol */}
                  {hoveredBrand === brand.name && (
                    <div className="absolute inset-0 bg-rose-600/10 rounded-2xl pointer-events-none" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Marques distribuées */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">LES MARQUES DISTRIBUÉES PAR IBABEAUTY CAMEROON</h3>
            <div className="w-12 h-0.5 bg-rose-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {distributedBrands.map((brand, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 text-center group">
                <div className="relative h-16 mb-3 flex items-center justify-center">
                  <div className="w-20 h-12 bg-whiterounded-lg flex items-center justify-center group-hover:bg-rose-50 transition-colors">
                    {/* <span className="text-xs font-bold text-gray-400">{brand.name.substring(0, 2)}</span> */}
                    <Image
                        src={brand.logo}
                        alt={`Logo ${brand.name.substring(0, 2)}`}
                        fill
                        className="object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{brand.name}</h4>
                <p className="text-xs text-gray-500">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Devenez Partenaire</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Rejoignez notre réseau de marques d'exception et bénéficiez de notre expertise 
              en distribution sur tout le territoire camerounais.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Nous contacter
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}