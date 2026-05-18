import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair text-gray-800">
              À PROPOS DE IBABEAUTY CAMEROON
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Fondée il y a 20 ans en Espagne, IBABEAUTY est experte dans la beauté professionnelle.
              </p>
              <p>
                La filiale camerounaise se consacre à la distribution et la promotion de produits parapharmaceutiques dermatologiques et capillaires internationaux avec une approche locale et stratégique, adaptée aux réalités du marché local.
              </p>
              <p>
                Nous sommes convaincus que le marketing des produits de beauté doit être aussi raffiné que les produits eux-mêmes. Grâce à un positionnement stratégique, une mise en œuvre experte et une attention constante aux détails, nous aidons les marques à assurer une croissance durable sur des marchés concurrentiels.
              </p>
            </div>
            <Button variant="outline" className="mt-6 group">
              LIRE PLUS
              
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-lg h-96 w-full">
               <Image
                          src="/Images/aboutSection.png"
                          alt="Communauté unie"
                          fill
                          className="object-cover  brightness-90"
                          priority
                        />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-black rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
//<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />