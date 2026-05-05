import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 md:py-24 lg:py-32">
      <div className="container-custom">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-playfair">
            L'Excellence en Distribution
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
            Spécialiste de la distribution et promotion de produits parapharmaceutiques et cosmétiques haut de gamme.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
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