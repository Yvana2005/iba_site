import MissionSection from '@/components/about/MissionSection'
import DistributionSection from '@/components/about/DistributionSection'
import ValuesSection from '@/components/about/ValuesSection'
import GeographicSection from '@/components/about/GeographicSection'
import CTASection from '@/components/about/CTASection'

export default function AProposPage() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <DistributionSection />
      <ValuesSection />
      <GeographicSection />
      <CTASection />
    </main>
  )
}

// Hero Section intégrée ici car spécifique à la page
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            À PROPOS DE NOUS
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Une histoire d'excellence et d'engagement dans la distribution de produits parapharmaceutiques et cosmétiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Lire Plus
            </button>
            <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300">
              Rencontrez les experts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}