import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 font-playfair">Coordonnées</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-700 mt-0.5" />
          <div>
            <p className="font-medium text-gray-400">ADRESSE</p>
            <p className="text-gray-600">Bastos YAOUNDE CAMEROUN</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-gray-700 mt-0.5" />
          <div>
            <p className="font-medium text-gray-400">TÉLÉPHONE</p>
            <p className="text-gray-600">+237 698 25 62 35</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-gray-700 mt-0.5" />
          <div>
            <p className="font-medium text-gray-400">EMAIL</p>
            <p className="text-gray-600">ibabeauty@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gray-700 mt-0.5" />
          <div>
            <p className="font-medium text-gray-400">HEURE</p>
            <p className="text-gray-600">Lun-Ven 09:00-18:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}