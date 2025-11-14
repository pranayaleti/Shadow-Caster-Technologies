import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AboutIntro } from '@/components/sections/about-intro'
import { About } from '@/components/sections/about'
import { Features } from '@/components/sections/features'
import { Process } from '@/components/sections/process'
import { CTA } from '@/components/sections/cta'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutIntro />
        <About />
        <Features />
        <Process />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}

