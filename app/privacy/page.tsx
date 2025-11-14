import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              Privacy Policy
            </h1>
            <p className="text-text-secondary">
              Last updated: November 2025
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">1. Introduction</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Shadow Caster Technologies (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">2. Information We Collect</h2>
                <div className="text-text-secondary leading-relaxed mb-4">
                  <p className="mb-3"><strong>Personal Information:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Business information (company name, industry, website)</li>
                  </ul>
                  <p className="mb-3"><strong>Usage Information:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on our services</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">3. How We Use Your Information</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Personalize and improve your experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">5. Data Security</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">7. Your Rights and Choices</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">8. Data Retention</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">10. International Data Transfers</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to the transfer of your information to these facilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold font-display mb-4">12. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Email: privacy@shadowcastertech.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: [Your Business Address]
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

