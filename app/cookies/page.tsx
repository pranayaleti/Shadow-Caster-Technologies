import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              Cookie Policy
            </h1>
            <p className="text-text-secondary">
              Last updated: November 2025
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">1. What Are Cookies</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">2. How We Use Cookies</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Shadow Caster Technologies uses cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Authenticate your identity and maintain your session</li>
                  <li>Analyze how our services are used to improve performance</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">3. Types of Cookies We Use</h2>
                <div className="text-text-secondary leading-relaxed mb-4">
                  <p className="mb-3"><strong>Essential Cookies:</strong></p>
                  <p className="mb-4 ml-4">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <p className="mb-3"><strong>Analytics Cookies:</strong></p>
                  <p className="mb-4 ml-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <p className="mb-3"><strong>Functional Cookies:</strong></p>
                  <p className="mb-4 ml-4">
                    These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                  </p>
                  <p className="mb-3"><strong>Marketing Cookies:</strong></p>
                  <p className="ml-4">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">4. Third-Party Cookies</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide other services. These third parties may include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for social sharing features</li>
                  <li>Advertising networks for targeted advertising</li>
                  <li>Payment processors for secure transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">5. Managing Cookies</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies, delete cookies, or be notified when a cookie is being sent. You can adjust these settings in your browser preferences.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong>Opt-Out Tools:</strong> You can opt out of certain third-party cookies by visiting the Network Advertising Initiative or Digital Advertising Alliance websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">6. Cookie Consent</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  When you first visit our website, we will ask for your consent to use non-essential cookies. You can withdraw your consent at any time by adjusting your cookie preferences in your browser settings or by contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">7. Updates to This Policy</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this policy periodically for any updates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">8. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <p className="text-text-secondary leading-relaxed mt-2">
                  Email: privacy@shadowcastertech.com<br />
                  Phone: +1 (555) 123-4567
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  )
}

