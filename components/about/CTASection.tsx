import { Button } from '@/components/ui/button'
import { Users, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Prêt à devenir partenaire ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Découvrez comment notre expertise stratégique et notre réseau professionnel peuvent renforcer 
            la présence de votre marque sur le marché et générer une croissance durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline-light" 
              size="lg"
              className="group"
            >
              <Users className="mr-2 w-5 h-5" />
              <Link href="/team-partners" className="flex items-center">
                Rencontrez les experts
              </Link>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="primary" 
              size="lg"
              className="group bg-white text-black hover:bg-gray-100"
            >
              <Mail className="mr-2 w-5 h-5" />
              <Link href="/contact" className="flex items-center">
                Entrer en Contact
              </Link>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}