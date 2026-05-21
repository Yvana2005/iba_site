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
    <section className="relative bg-gray-100 text-gray py-24 md:py-32">
      <div className="container-custom bg-white/10 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl text-gray-600 md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
            À PROPOS DE NOUS
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Une histoire d'excellence et d'engagement dans la distribution de produits parapharmaceutiques et cosmétiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-black border-2 border-black text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Lire Plus
            </button>
            <button className="px-6 py-3 bg-white text-black border-gray-300 border-1 rounded-lg hover:bg-gray-100 transition-all duration-300">
              Rencontrez les experts
            </button>
          </div>
        </div>
      </div>
      {/* <div className="w-96 h-0.5 bg-gray-300 mx-auto mt-15"></div> */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
  <svg
    viewBox="0 0 1440 80"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className="w-full h-16 md:h-20"
  >
    <path
      d="M0,80 C360,0 720,80 1080,20 C1260,0 1380,60 1440,40 L1440,80 L0,80 Z"
      fill="white"
    />
  </svg>
</div>
    </section>
  )
}
//bg-gradient-to-r from-gray-900 to-gray-700