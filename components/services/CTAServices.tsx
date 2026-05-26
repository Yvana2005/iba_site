import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-beauty-bg.jpg"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* <Sparkles className="w-12 h-12 mx-auto mb-6 text-rose-400" /> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair">
            Prêt(e) à transformer votre marque de cosmétiques ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Découvrez comment nos services intégrés peuvent accélérer votre croissance 
            et vous permettre de devenir leader sur le marché.
          </p>
          <Link href="/contact">
            <button className="group inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              Commencez votre voyage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
