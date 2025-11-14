import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PlansIntro } from '@/components/sections/plans-intro'
import { Plans } from '@/components/sections/plans'
import { CTA } from '@/components/sections/cta'

export default function PlansPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <PlansIntro />
        <Plans />
        <CTA />
      </div>
      <Footer />
    </main>
  )
}

