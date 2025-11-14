import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              Terms and Conditions
            </h1>
            <p className="text-text-secondary">
              Last updated: November 2025
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-8">
              <section>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Please read these Terms and Conditions carefully before using Shadow Caster Technologies&apos; services. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access our services.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  For our complete Terms of Service, please see our <Link href="/terms" className="text-primary hover:underline">Terms of Service page</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">1. Service Availability</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We strive to ensure our services are available 24/7, but we do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">2. Service Modifications</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">3. User Responsibilities</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring the accuracy of information you provide</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using our services for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">4. Subscription and Billing</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time through your account settings. Refunds are provided in accordance with our refund policy, which may vary by service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">5. Content and Materials</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  All content provided through our services, including text, graphics, logos, and software, is the property of Shadow Caster Technologies or its content suppliers and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">6. Prohibited Activities</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful code, viruses, or malware</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use our services to send spam or unsolicited communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">7. Limitation of Liability</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  To the fullest extent permitted by law, Shadow Caster Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, incurred by you or any third party, whether in an action in contract or tort.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">8. Dispute Resolution</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Any disputes arising out of or relating to these Terms and Conditions shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">9. Severability</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">10. Entire Agreement</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  These Terms and Conditions, together with our Terms of Service and Privacy Policy, constitute the entire agreement between you and Shadow Caster Technologies regarding the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">11. Contact Information</h2>
                <p className="text-text-secondary leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:
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

