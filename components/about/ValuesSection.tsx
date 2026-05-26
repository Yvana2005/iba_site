import { Sparkles, Globe, Users, Leaf } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Excellence & Raffinement',
    description: 'Nous visons l\'excellence dans chaque aspect de notre travail, de la sélection des produits à leur distribution.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Accessibilité & Adaptation locale',
    description: 'Nous nous engageons à fournir des produits de qualité et adaptés à vos besoins. Nous sommes là pour vous aider à trouver ce que vous recherchez.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Expertise & Proximité',
    description: 'Nous construisons des relations durables basées sur la confiance et le succès mutuel avec nos partenaires.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Leaf,
    title: 'Engagement Éthique & Durable',
    description: 'Nous privilégions les pratiques éthiques et la responsabilité environnementale.Nous nous engageons à minimiser notre impact environnemental et à promouvoir des pratiques durables dans toutes nos opérations.',
    color: 'from-orange-500 to-yellow-500',
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-gray-600">
            Nos Valeurs
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des valeurs qui guident notre action au quotidien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}