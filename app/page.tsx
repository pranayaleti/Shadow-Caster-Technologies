import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

