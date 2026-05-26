import { Button } from '@/components/ui/button'
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
          <Image
            src="/Images/background3.jpg"
            alt="Communauté unie"
            fill
            className="object-cover  brightness-90"
            priority
          />
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gray opacity-1"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-playfair">
            L'Excellence en Distribution
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-100 ">
            Spécialiste de la distribution et promotion de produits parapharmaceutiques et cosmétiques haut de gamme.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Button variant="primary" size="lg" className="w-full sm:w-auto border-white border-2">
              Nos services
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
//bg-gradient-to-r from-gray-900 to-gray-700