'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

const stats = [
  { number: 50, suffix: '+', label: 'Portefeuilles' },
  { number: 500, suffix: '+', label: 'Produits distribuables' },
  { number: 15, suffix: '', label: 'Années d\'expérience' },
  { number: 98, suffix: '%', label: 'Satisfaction client' },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-white text-black">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isVisible && (
                  <CountUp end={stat.number} duration={2.5} />
                )}
                {stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}