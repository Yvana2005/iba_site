'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, ChevronRight } from 'lucide-react'
import { TiSocialLinkedin } from 'react-icons/ti';

const teamMembers = [
  {
    name: 'Dr. NYANDZE Julie',
    position: 'DIRECTRICE GENERAL',
    department: 'BUREAU ADMINISTRATIF ET LOGISTIQUE',
    departmentDesc: 'Gestion des opérations quotidiennes et coordination logistique.',
    email: 'j.nyandze@ibabeauty.com',
    phone: '+237 698 25 62 35',
    image: '/team/julie-nyandze.jpg',
    bio: 'Plus de 15 ans d\'expérience dans la distribution pharmaceutique et cosmétique au Cameroun.'
  },
  {
    name: 'Mme NDOM NDOM Ornella',
    position: 'ASSISTANTE DE DIRECTION',
    department: 'BUREAU ADMINISTRATIF ET LOGISTIQUE',
    departmentDesc: 'Gestion des opérations quotidiennes et coordination logistique.',
    email: 'o.ndom@ibabeauty.com',
    phone: '+237 698 25 62 36',
    image: '/team/ornella-ndom.jpg',
  },
  {
    name: 'Dr. NDOMBE Blandine',
    position: 'Responsable Commercial et RH',
    department: 'FORCE DE VENTE TERRAIN',
    departmentDesc: 'Superviseur, délégués médicaux, commerciaux, dermo-cosmétiques.',
    email: 'b.ndombe@ibabeauty.com',
    phone: '+237 698 25 62 37',
    image: '/team/blandine-ndombe.jpg',
  },
  {
    name: 'Mme NDJENEG Anne Y.',
    position: 'Responsable marketing et communication',
    department: 'COMMUNICATION DIGITALE & MARKETING',
    departmentDesc: 'Stratégie de marque et présence numérique.',
    email: 'a.ndjeneg@ibabeauty.com',
    phone: '+237 698 25 62 38',
    image: '/team/anne-ndjeneg.jpg',
  },
  {
    name: 'Mme AKOA Yanisse',
    position: 'Superviseur Pays',
    department: 'FORCE DE VENTE TERRAIN',
    departmentDesc: 'Superviseur, délégués médicaux, commerciaux, dermo-cosmétiques.',
    email: 'y.akoa@ibabeauty.com',
    phone: '+237 698 25 62 39',
    image: '/team/yanisse-akoa.jpg',
  },
  {
    name: 'Mr IKOULA Jacques',
    position: 'Logisticien',
    department: 'BUREAU ADMINISTRATIF ET LOGISTIQUE',
    departmentDesc: 'Gestion des opérations quotidiennes et coordination logistique.',
    email: 'j.ikoula@ibabeauty.com',
    phone: '+237 698 25 62 40',
    image: '/team/jacques-ikoula.jpg',
  },
]

const departments = [
  {
    name: 'BUREAU ADMINISTRATIF ET LOGISTIQUE',
    description: 'Gestion des opérations quotidiennes et coordination logistique.',
    color: 'from-blue-600 to-blue-800',
    members: teamMembers.filter(m => m.department === 'BUREAU ADMINISTRATIF ET LOGISTIQUE')
  },
  {
    name: 'FORCE DE VENTE TERRAIN',
    description: 'Superviseur, délégués médicaux, commerciaux, dermo-cosmétiques.',
    color: 'from-emerald-600 to-emerald-800',
    members: teamMembers.filter(m => m.department === 'FORCE DE VENTE TERRAIN')
  },
  {
    name: 'COMMUNICATION DIGITALE & MARKETING',
    description: 'Stratégie de marque et présence numérique.',
    color: 'from-rose-600 to-rose-800',
    members: teamMembers.filter(m => m.department === 'COMMUNICATION DIGITALE & MARKETING')
  }
]

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            L'ÉQUIPE IBABEAUTY CAMEROUN
          </h2>
          <div className="w-16 h-0.5 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Notre équipe allie des décennies d'expertise dans le secteur à un engagement envers l'excellence 
            en matière de distribution, de formation et de marketing stratégique des produits cosmétiques.
          </p>
        </div>

        {/* Départements */}
        <div className="space-y-16">
          {departments.map((dept, idx) => (
            <div key={idx}>
              <div className={`inline-block bg-gradient-to-r ${dept.color} text-white px-6 py-3 rounded-t-2xl mb-6`}>
                <h3 className="text-xl font-bold">{dept.name}</h3>
              </div>
              <p className="text-gray-600 mb-8">{dept.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.members.map((member, memberIdx) => (
                  <div
                    key={memberIdx}
                    onClick={() => setSelectedMember(member)}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-6xl">👤</span>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <h4 className="text-xl font-bold text-white">{member.name}</h4>
                        <p className="text-white/80 text-sm">{member.position}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-100">
                      <div className="flex justify-center gap-3">
                        <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-colors">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-colors">
                          <TiSocialLinkedin className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal membre (optionnel) */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMember(null)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {selectedMember.image ? (
                  <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-8xl">👤</span>
                  </div>
                )}
                <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100" onClick={() => setSelectedMember(null)}>
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h3>
                <p className="text-rose-600 font-medium mb-2">{selectedMember.position}</p>
                <p className="text-gray-500 text-sm mb-4">{selectedMember.department}</p>
                <p className="text-gray-700 mb-6">{selectedMember.bio || 'Experte passionnée par l\'excellence dans la distribution de produits cosmétiques de qualité.'}</p>
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a href={`mailto:${selectedMember.email}`} className="flex items-center gap-2 text-gray-600 hover:text-rose-600">
                    <Mail className="w-4 h-4" /> {selectedMember.email}
                  </a>
                  <a href={`tel:${selectedMember.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-rose-600">
                    <Phone className="w-4 h-4" /> {selectedMember.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}