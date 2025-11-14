import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-primary/20 matte-surface mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-display gradient-text mb-4">
              Shadow Caster
            </h3>
            <p className="text-text-secondary text-sm">
              Casting your digital presence into the light.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/services" className="hover:text-primary">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary">SEO</Link></li>
              <li><Link href="/services" className="hover:text-primary">Branding</Link></li>
              <li><Link href="/services" className="hover:text-primary">Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/blogs" className="hover:text-primary">Our Blogs</Link></li>
              <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-primary">Terms and Conditions</Link></li>
              <li><Link href="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Shadow Caster Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

