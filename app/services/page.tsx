import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ServicesIntro } from '@/components/sections/services-intro'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { CTA } from '@/components/sections/cta'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ServicesIntro />
        <Services />
        <Process />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}

