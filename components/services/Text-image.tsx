'use client'

import { Sparkles, Truck, GraduationCap, Megaphone } from 'lucide-react'
import Image from 'next/image'



export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-3 gap-8 items-center">

  {/* Carte gauche */}
  <div
    className="flex flex-col items-center gap-4"
    style={{ transform: "perspective(1000px) rotateY(8deg) rotateX(3deg)" }}
  >
    <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-0 scale-75"></div>
    <Image 
    src="/Image/image1.jpeg" 
    alt="..." 
    fill
    className="w-full drop-shadow-2xl" />
    <p className="font-bold text-center text-sm">Titre carte gauche</p>
  </div>

  {/* Carte centrale */}
  <div
    className="flex flex-col items-center gap-4"
    style={{ transform: "perspective(1000px) rotateX(5deg)" }}
  >
    <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-60 scale-75"></div>
    <Image 
    src="/Image/image2.jpeg" 
    alt="..." 
    fill
    className="w-full drop-shadow-2xl" />
    <p className="font-bold text-center text-sm">Titre carte centrale</p>
  </div>

  {/* Carte droite */}
  <div
    className="flex flex-col items-center gap-4"
    style={{ transform: "perspective(1000px) rotateY(-8deg) rotateX(3deg)" }}
  >
    <div className="absolute inset-0 bg-purple-100 rounded-full blur-3xl opacity-60 scale-75"></div>
    <Image 
    src="/Image/image3.jpeg" 
    alt="..." 
    fill
    className="w-full drop-shadow-2xl" />
    <p className="font-bold text-center text-sm">Titre carte droite</p>
  </div>

</div>
      </div>
    </section>
  )
}