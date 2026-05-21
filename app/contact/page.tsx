import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'
import FAQBlogSection from '@/components/contact/FAQBlogSection'

export default function ContactPage() {
  return (
    <main className='bg-white'>
      <ContactHero />
      <div className="container-custom py-16 bg-white rounded-lg shadow-lg">
        <div className="grid lg:grid-cols-2 gap-12 ">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
      <FAQBlogSection />
    </main>
  )
}
// 'use client'

// import { useState } from 'react'
// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     subject: '',
//     fullName: '',
//     email: '',
//     company: '',
//     message: ''
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     alert('Message envoyé avec succès !')
//     setFormData({ subject: '', fullName: '', email: '', company: '', message: '' })
//   }

//   const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.319968231797!2d11.502!3d3.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfc6f7e0c8b9%3A0x8b7e5a1f6c9d3e2f!2sBastos%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm"

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="bg-gray-900 text-white py-20">
//         <div className="container-custom text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">ENTRER EN CONTACT</h1>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             N'hésitez pas à contacter notre équipe pour discuter des programmes de formation,
//             des opportunités de distribution, des campagnes promotionnelles ou pour toute autre question.
//           </p>
//         </div>
//       </section>

//       {/* Formulaire et Coordonnées */}
//       <div className="container-custom py-16">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Formulaire */}
//           <div>
//             <h2 className="text-2xl font-bold mb-2 font-playfair">ENVOYER VOTRE DEMANDE</h2>
//             <p className="text-gray-600 mb-6">Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les 24 heures.</p>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Objet de la demande</label>
//                 <select
//                   name="subject"
//                   value={formData.subject}
//                   onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
//                   required
//                 >
//                   <option value="">Sélectionnez un objet</option>
//                   <option value="formation">Programme de formation</option>
//                   <option value="distribution">Opportunité de distribution</option>
//                   <option value="promotion">Campagne promotionnelle</option>
//                   <option value="partenariat">Partenariat</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Adresse E-mail</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Nom d'entreprise</label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   rows={5}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 resize-none"
//                   required
//                 />
//               </div>

//               <div className="flex gap-4">
//                 <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800">
//                   ENVOYER
//                 </button>
//                 <button type="reset" className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">
//                   ANNULER
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Coordonnées */}
//           <div>
//             <h2 className="text-2xl font-bold mb-6 font-playfair">Coordonnées</h2>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-gray-700 mt-0.5" />
//                 <div><p className="font-medium">ADRESSE</p><p className="text-gray-600">Bastos YAOUNDE CAMEROUN</p></div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Phone className="w-5 h-5 text-gray-700 mt-0.5" />
//                 <div><p className="font-medium">TÉLÉPHONE</p><p className="text-gray-600">+237 698 25 62 35</p></div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Mail className="w-5 h-5 text-gray-700 mt-0.5" />
//                 <div><p className="font-medium">EMAIL</p><p className="text-gray-600">ibabeauty@gmail.com</p></div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Clock className="w-5 h-5 text-gray-700 mt-0.5" />
//                 <div><p className="font-medium">HEURE</p><p className="text-gray-600">Lun-Ven 09:00-18:00</p></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Google Maps */}
//       <div className="container-custom pb-8">
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <iframe src={googleMapsUrl} width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" title="Plan d'accès"></iframe>
//         </div>
//       </div>

//       {/* FAQ Blog */}
//       <section className="bg-gray-50 py-16">
//         <div className="container-custom text-center">
//           <h2 className="text-2xl font-bold mb-4 font-playfair">Questions courantes ?</h2>
//           <p className="text-gray-600 mb-6">Consultez notre blog pour obtenir des informations sur le secteur et les questions fréquemment posées sur nos services.</p>
//           <a href="/blog" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">Visiter notre Blog →</a>
//         </div>
//       </section>
//     </main>
//   )
// }