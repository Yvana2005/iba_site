'use client'

import { useState } from 'react'
import { Globe, Megaphone, Users, Store, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const activities = [
  {
    id: 'distribution',
    icon: Globe,
    title: 'Distribution, Logistique & gestion douanière',
    description: 'Ce service garantit la distribution efficace, rapide et réglementaire des produits de santé et de beauté au Cameroun et dans la région.',
    image: '/Images/distribution-logistique.jpg',
    points: [
      'Lien crucial entre fournisseurs internationaux et clients locaux',
      'Logistique et livraison contrôlée, sécurisée',
      'Respect des normes sur le territoire camerounais',
      'Réseau étendu de points de vente partenaires'
    ]
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing, promotion des marques & communication digitale',
    description: 'Accompagnement des entreprises pour développer et implanter leurs marques en local.',
    image: '/Images/marketing-digital.jpg',
    points: [
      'Stratégies d\'activation terrain personnalisées',
      'Campagnes digitales ciblées',
      'Community management et influence',
      'Publicité et promotion cross-canal'
    ]
  },
  {
    id: 'formation',
    icon: Users,
    title: 'Information, recrutement et formation',
    description: 'Une équipe administrative et terrain, mise en place de délégués opérationnels et efficaces.',
    image: '/Images/maquillage.jpg',
    points: [
      'Recrutement de profils qualifiés',
      'Formation continue des équipes',
      'Développement des compétences terrain',
      'Suivi et évaluation personnalisés'
    ]
  },
  {
    id: 'franchise',
    icon: Store,
    title: 'Magasin de cosmétique & Salon de coiffure professionnel franchise "Aurora"',
    description: 'Gestion de magasins de cosmétiques de prestige et salons de coiffure sous la marque "Aurora".',
    image: '/Images/aurora-franchise.jpg',
    points: [
      'Concept store haut de gamme',
      'Formation aux standards Aurora',
      'Support marketing et opérationnel',
      'Accès aux marques exclusives'
    ]
  }
]

export default function ActivitiesShowcase() {
  const [activeActivity, setActiveActivity] = useState(activities[0].id)

  const currentActivity = activities.find(a => a.id === activeActivity) || activities[0]
  const Icon = currentActivity.icon

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm mb-4">
            360°
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Nos activités à 360°
          </h2>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        {/* Navigation des activités */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {activities.map((activity) => (
            <button
              key={activity.id}
              onClick={() => setActiveActivity(activity.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeActivity === activity.id
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <activity.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{activity.title.split(' ').slice(0, 2).join(' ')}</span>
              <span className="sm:hidden">{activity.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Contenu actif */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-80 md:h-full min-h-[400px]">
              <Image
                src={currentActivity.image}
                alt={currentActivity.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
            </div>

            {/* Contenu */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-playfair text-gray-800">
                  {currentActivity.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {currentActivity.description}
              </p>

              <div className="space-y-3 mb-8">
                {currentActivity.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              {/* <button className="inline-flex items-center gap-2 text-rose-600 font-semibold group">
                En savoir plus
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}