import HeroServices from '@/components/services/HeroServices'
import ServicesList from '@/components/services/ServicesGrid'
import Activities360 from '@/components/services/ActivitiesShowcase'
import CTAServices from '@/components/services/CTAServices'
import ServicesGrid from '@/components/services/Text-image'

export default function ServicesPage() {
  return (
    <main>
      <HeroServices />
      <ServicesList />
      <Activities360 />
      <ServicesGrid />
      <CTAServices />
      
    </main>
  )
}