import { MapPin, Building2, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const countries = [
  { name: 'CAMEROUN', label: 'BUREAU PRINCIPAL', flag: '🇨🇲' },
  { name: 'NIGERIA', label: 'BUREAU RÉGIONAL', flag: '🇳🇬' },
  { name: 'TOGO', label: 'BUREAU RÉGIONAL', flag: '🇹🇬' },
  { name: 'CONGO-BRAZAVILLE', label: 'BUREAU RÉGIONAL', flag: '🇨🇬' },
  { name: 'MAROC', label: 'Siège SSA : Afrique Sub-Saharienne', flag: '🇲🇦' },
]

export default function GeographicSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            ZONE GÉOGRAPHIQUE
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Présente sur plusieurs marchés africains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carte ou visuel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 text-white text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-2">Présence Africaine</h3>
                <p className="text-gray-300">5 pays et en expansion</p>
              </div>
              {/* Carte simple en SVG */}
              <svg className="w-full h-48 bg-gray-800" viewBox="0 0 800 300">
                <path d="M200,150 L250,120 L300,130 L350,110 L400,125 L450,115 L500,130 L550,140 L600,150" 
                      stroke="#ffffff" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                <circle cx="250" cy="120" r="8" fill="#10b981" />
                <circle cx="350" cy="110" r="8" fill="#10b981" />
                <circle cx="450" cy="115" r="8" fill="#10b981" />
                <circle cx="550" cy="140" r="8" fill="#10b981" />
                <text x="240" y="100" fill="white" fontSize="12">Cameroun</text>
                <text x="340" y="90" fill="white" fontSize="12">Nigeria</text>
                <text x="440" y="95" fill="white" fontSize="12">Togo</text>
                <text x="540" y="120" fill="white" fontSize="12">Congo</text>
                <text x="640" y="130" fill="white" fontSize="12">Maroc</text>
              </svg>
            </div>
          </div>

          {/* Liste des pays */}
          <div className="space-y-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl">{country.flag}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{country.name}</h3>
                  <p className="text-sm text-gray-400">{country.label}</p>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques d'expansion */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-black">5</div>
            <div className="text-sm text-gray-500">Pays couverts</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-black">15+</div>
            <div className="text-sm text-gray-500">Villes stratégiques</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-black">500+</div>
            <div className="text-sm text-gray-500">Points de vente</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="text-2xl font-bold text-black">200+</div>
            <div className="text-sm text-gray-500">Partenaires locaux</div>
          </div>
        </div>
      </div>
    </section>
  )
}