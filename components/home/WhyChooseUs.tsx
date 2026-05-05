// import { TrendingDown, Truck, GraduationCap } from 'lucide-react'

// const features = [
//   {
//     icon: TrendingDown,
//     title: 'Minimalist Strategy',
//     description: 'Le projet est basé sur une stratégie simple et efficace. Nous mettons l\'accent sur les actions clés pour atteindre nos objectifs.',
//   },
//   {
//     icon: Truck,
//     title: 'Distribution Optimale',
//     description: 'Faisons de la distribution efficiente pour garantir que vos produits soient disponibles à vos clients.',
//   },
//   {
//     icon: GraduationCap,
//     title: 'Expert Training',
//     description: 'Les experts ont une expérience professionnelle et nous offrons des conseils pratiques pour améliorer votre stratégie marketing.',
//   },
// ]

// export default function WhyChooseUs() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
//             POURQUOI NOUS CHOISIR?
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Une expertise reconnue et un engagement central sont le outil.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
//                 <feature.icon className="w-6 h-6 text-white" />
//               </div>
//               <h3 className="text-xl text-gray-500 font-bold mb-3">{feature.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { useState, useRef, useEffect } from 'react'
import { TrendingDown, Truck, GraduationCap } from 'lucide-react'

const features = [
  {
    icon: TrendingDown,
    title: 'Minimalist Strategy',
    description: 'Le projet est basé sur une stratégie simple et efficace. Nous mettons l\'accent sur les actions clés pour atteindre nos objectifs.',
  },
  {
    icon: Truck,
    title: 'Distribution Optimale',
    description: 'Faisons de la distribution efficiente pour garantir que vos produits soient disponibles à vos clients.',
  },
  {
    icon: GraduationCap,
    title: 'Expert Training',
    description: 'Les experts ont une expérience professionnelle et nous offrons des conseils pratiques pour votre stratégie marketing.',
  },
]

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex === index && cardRefs.current[index]) {
      const rect = cardRefs.current[index]!.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      setMousePosition({ x, y })
    }
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            POURQUOI NOUS CHOISIR?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une expertise reconnue et un engagement total envers la qualité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isHovered = hoveredIndex === index
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index
            
            return (
              <div
                key={index}
                ref={el => { cardRefs.current[index] = el }}
                className={`
                  relative transition-all duration-500 ease-out
                  ${isOtherHovered ? 'scale-95' : ''}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null)
                  setMousePosition({ x: 0, y: 0 })
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Effet de reflet au survol */}
                {isHovered && (
                  <div 
                    className="absolute -inset-px bg-gradient-to-r from-black/0 via-white/30 to-black/0 rounded-2xl blur-xl opacity-50"
                    style={{
                      transform: `rotate(${mousePosition.x * 0.5}deg)`,
                    }}
                  />
                )}
                
                <div
                  className={`
                    relative bg-white rounded-2xl shadow-md overflow-hidden
                    transition-all duration-500 ease-out
                    will-change-transform
                    ${isHovered ? 'shadow-2xl' : ''}
                  `}
                  style={{
                    transform: isHovered 
                      ? `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateY(-8px)`
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <div className="p-8">
                    <div className={`
                      w-14 h-14 rounded-xl mb-6 flex items-center justify-center
                      transition-all duration-300
                      ${isHovered ? 'bg-black text-white' : 'bg-gray-100 text-black'}
                    `}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className={`
                      text-xl font-bold mb-3 transition-all duration-300
                      ${isHovered ? 'text-black' : 'text-gray-800'}
                    `}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Effet de brillance progressive */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent
                    transition-all duration-700
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}