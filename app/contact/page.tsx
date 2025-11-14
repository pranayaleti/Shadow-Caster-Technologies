import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactIntro } from '@/components/sections/contact-intro'
import { Contact } from '@/components/sections/contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactIntro />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

