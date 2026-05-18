import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "https://facebook.com/inklusionhub", label: "Facebook" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com/inklusionhub", label: "Twitter (X)" },
    { icon: <TiSocialLinkedin size={20} />, href: "https://linkedin.com/company/inklusionhub", label: "LinkedIn" },
    { icon: <FaInstagram size={20} />, href: "https://instagram.com/inklusionhub", label: "Instagram" },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">IBABEAUTY</h3>
            <p className="text-gray-400">
              une agence spécialisée dans la promotion et la distribution de produits parapharmaceutiques, dermocosmétiques et capillaires. Elle accompagne ses partenaires en rendant disponibles, au Cameroun, les marques qui lui font confiance.
            </p>
            <div className="flex mt-4 space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
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
                BASTOS - YAOUNDE
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                ibabeauty@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +237 698 256 235
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-2">Restez informés sur nos actualités</p>
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
          <p>&copy; 2026 IBABEAUTY Cameroon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}