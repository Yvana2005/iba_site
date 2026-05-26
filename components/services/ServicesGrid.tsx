'use client'

import { Sparkles, Truck, GraduationCap, Megaphone } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: Sparkles,
    title: 'Distribution et Promotion spécialisée',
    description: 'Niveaux de distribution destinés aux marques spécialisées.',
    image: '/Images/distribution2.jpg',
    gradient: 'from-rose-500/20 to-purple-500/20'
  },
  {
    icon: Truck,
    title: 'Logistique optimisée',
    description: 'Nous concevons des livraisons, des délais d\'achat et des départs adaptés à votre quotidien.',
    image: '/Images/logistique.jpg',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: GraduationCap,
    title: 'Formation et Expertise',
    description: 'Nous formons les équipes à appliquer les formations, les finitions et les initiatives avec mesurées.',
    image: '/Images/formation.jpg',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    icon: Megaphone,
    title: 'Marketing et Communication',
    description: 'Nous prenons en charge les campagnes de communications, des campagnes de publicité et des promotions sur tous les canaux.',
    image: '/Images/marketing2.jpg',
    gradient: 'from-orange-500/20 to-amber-500/20'
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Notre excellence
          </h2>
          <div className="w-16 h-0.5 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une approche sur mesure pour chaque besoin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image d'arrière-plan */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} z-10`} />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 z-20" />
                <div className="absolute bottom-4 left-6 z-30">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {/* <button className="mt-4 inline-flex items-center gap-2 text-rose-600 font-medium group-hover:gap-3 transition-all">
                  En savoir plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}