import { Target, Heart, TrendingUp } from 'lucide-react'

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-gray-600">
            Notre Mission
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche - Description */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              IBABEAUTY s'engage à être le partenaire de confiance dans la distribution et la promotion 
              de produits parapharmaceutiques et cosmétiques de haute qualité.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Notre mission est d'assurer une distribution centrée de marques de prestige en Parapharmacie, 
              Dermo-cosmétique (peau, chevelure) et Parfumerie de luxe. Notre approche humaine est innovante, 
              adaptée à l'environnement local.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Notre mission est de donner aux marques de cosmétique haut de gamme les moyens d'une distribution 
              stratégique, d'une entreprise professionnelle et d'une production de points, transformant ainsi 
              les apports des marchés en avantages concurrentiels durables grâce à un engagement sans filtre 
              envers l'environnement.
            </p>
          </div>

          {/* Colonne droite - Stats ou icônes */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Notre Vision</h3>
              </div>
              <p className="text-gray-600">
                Devenir le leader de la distribution pharmaceutique et cosmétique en Afrique subsaharienne.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Nos Engagements</h3>
              </div>
              <p className="text-gray-600">
                Qualité, traçabilité, et satisfaction client au cœur de nos actions quotidiennes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Notre Impact</h3>
              </div>
              <p className="text-gray-600">
                Contribution au développement du secteur pharmaceutique et cosmétique en Afrique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}