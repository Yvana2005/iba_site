'use client'

import { useState } from 'react'
import { TrendingUp, ShoppingBag, Package, Truck } from 'lucide-react'

const distributionTypes = [
  {
    icon: Package,
    title: 'Distribution Pharmaceutique',
    description: 'via le réseau structuré des pharmacies, parapharmacies et grossistes agréés, garantissant ainsi la qualité, la traçabilité et l’authenticité des produits dermatologiques et parapharmaceutiques.',
    stats: '60%',
    statLabel: 'Couverture du marché',
  },
  {
    icon: ShoppingBag,
    title: 'La vente au détail',
    description: 'à travers notre réseau de distribution composé d’instituts, salons de coiffure, boutiques spécialisées et grossistes',
    stats: '30%',
    statLabel: 'Couverture du marché',
  },
  {
    icon: Truck,
    title: 'La vente directe',
    description: 'assurée dans notre propre salon de beauté professionnel Aurora, qui sert de vitrine pour les marques que nous distribuons et offre une expérience client unique.',
    stats: '10%',
    statLabel: 'Couverture du marché',
  },
]

export default function DistributionSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-gray-600">
            NOTRE RÉSEAU DE DISTRIBUTION
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {distributionTypes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-500 mb-4">{item.description}</p>
              <div className="border-t pt-4 mt-2">
                <div className="text-2xl font-bold text-black">{item.stats}</div>
                <div className="text-sm text-gray-500">{item.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphique ou statistiques supplémentaires */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Performance du réseau</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1 text-gray-500">
                <span>Couverture nationale</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1 text-gray-500">
                <span>Satisfaction client</span>
                <span>98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1 text-gray-500">
                <span>Points de vente</span>
                <span>500+</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-black h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}