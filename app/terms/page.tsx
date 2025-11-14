import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              Terms of Service
            </h1>
            <p className="text-text-secondary">
              Last updated: November 2025
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">1. Agreement to Terms</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  By accessing or using Shadow Caster Technologies&apos; services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">2. Services</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Shadow Caster Technologies provides digital marketing, web development, SEO, branding, and related services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">3. User Accounts</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">4. Payment Terms</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change our pricing with 30 days&apos; notice. Failure to pay may result in suspension or termination of services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">5. Intellectual Property</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  All content, features, and functionality of our services are owned by Shadow Caster Technologies and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">6. User Content</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You retain ownership of any content you submit to our services. By submitting content, you grant us a license to use, modify, and display such content as necessary to provide our services. You represent that you have the right to grant this license.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">7. Prohibited Uses</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. Prohibited activities include but are not limited to: spamming, hacking, transmitting malware, or violating any applicable laws or regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">8. Termination</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may terminate or suspend your account and access to our services immediately, without prior notice, for any breach of these Terms of Service. Upon termination, your right to use the services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">10. Limitation of Liability</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  To the maximum extent permitted by law, Shadow Caster Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">11. Indemnification</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You agree to indemnify and hold harmless Shadow Caster Technologies from any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation of these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">12. Governing Law</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Shadow Caster Technologies operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">13. Changes to Terms</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">14. Contact Information</h2>
                <p className="text-text-secondary leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-text-secondary leading-relaxed mt-2">
                  Email: legal@shadowcastertech.com<br />
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

