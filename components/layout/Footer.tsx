import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">IBAIEAUTY</h3>
            <p className="text-gray-400">
              Excellence en distribution de produits parapharmaceutiques.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><Link href="/a-propos" className="text-gray-400 hover:text-white">À propos de nous</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Service</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/actualites" className="text-gray-400 hover:text-white">Actualité</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                FAXTOK - VOUNGDE
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                bloguepharmaciens.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +262 256 225
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-2">Restez informés de nos actualités</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 bg-gray-800 rounded-l text-white"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r hover:bg-gray-200">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; 2024 IBAIEAUTY Cameroon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}