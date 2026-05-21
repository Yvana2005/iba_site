import Image from 'next/image'

export default function HeroServices() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
  {/* Image de fond */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/Images/Background-service.jpg"
      alt="Services beauté et cosmétique"
      fill
      className="object-cover brightness-50"
      priority
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray opacity-1"></div>
  </div>

  {/* Contenu */}
  <div className="relative z-10 container-custom py-20">
    <div className="max-w-3xl mx-auto text-center text-white">
      <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-6">
        Notre savoir-faire
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair">
        Nos services
      </h1>
      <div className="w-20 h-0.5 bg-white/50 mx-auto mb-6"></div>
      <p className="text-lg md:text-xl text-white/90">
        Des solutions complètes pour l'excellence en matière de distribution,
        de formation, de promotion et de marketing des produits cosmétiques.
      </p>
    </div>
  </div>

  {/* Courbe en bas — même style que Flexmail */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
    <svg
      viewBox="0 0 1440 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-20"
    >
      <path
        d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z"
        fill="white"
      />
    </svg>
  </div>
</section>
  )
}