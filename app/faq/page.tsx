'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What services does Shadow Caster Technologies offer?',
    answer: 'We offer comprehensive digital marketing and web development services including website development & management, SEO (local and global), Google Business Profile optimization, PPC & social media advertising, branding development, business listings management, content distribution, email & text marketing, performance tracking, and digital asset storage.',
  },
  {
    category: 'General',
    question: 'How long has Shadow Caster Technologies been in business?',
    answer: 'Shadow Caster Technologies has been helping businesses transform their digital presence for several years. Our team brings years of combined experience in digital marketing, web development, and brand management.',
  },
  {
    category: 'General',
    question: 'What industries do you serve?',
    answer: 'We serve businesses across various industries including retail, restaurants, professional services, healthcare, real estate, e-commerce, and more. Our strategies are tailored to each industry&apos;s unique needs and challenges.',
  },
  {
    category: 'Services',
    question: 'How long does it take to build a website?',
    answer: 'Website development timelines vary based on complexity and requirements. A simple website typically takes 2-4 weeks, while more complex sites with custom features may take 6-12 weeks. We&apos;ll provide a detailed timeline during our initial consultation.',
  },
  {
    category: 'Services',
    question: 'Do you provide ongoing website maintenance?',
    answer: 'Yes, we offer ongoing website maintenance and management services. This includes security updates, content updates, performance monitoring, and technical support. Maintenance plans are available to fit your needs and budget.',
  },
  {
    category: 'Services',
    question: 'What is included in your SEO services?',
    answer: 'Our SEO services include keyword research, on-page optimization, technical SEO audits, link building, content strategy, local SEO optimization, and regular performance reporting. We focus on both global reach and local visibility.',
  },
  {
    category: 'Services',
    question: 'How do you manage Google Business Profile?',
    answer: 'We optimize your Google Business Profile by ensuring complete and accurate business information, adding high-quality photos, posting regular updates, responding to reviews promptly, and managing Q&A sections. We also help you appear in local search results and &quot;near me&quot; searches.',
  },
  {
    category: 'Services',
    question: 'What platforms do you use for PPC advertising?',
    answer: 'We create and manage pay-per-click campaigns on Google Ads, Facebook, Instagram, LinkedIn, and other relevant platforms. Our data-driven approach includes A/B testing, audience targeting, and continuous optimization to maximize your ROI.',
  },
  {
    category: 'Pricing',
    question: 'What are your pricing plans?',
    answer: 'We offer three main plans: Basic ($299/month), Pro ($699/month), and Enterprise ($1,499/month). Each plan includes different levels of services and support. We also offer custom solutions tailored to your specific needs. Contact us for detailed pricing information.',
  },
  {
    category: 'Pricing',
    question: 'Do you offer custom pricing for specific needs?',
    answer: 'Yes, we understand that every business has unique needs. We offer custom pricing and service packages tailored to your specific requirements. Contact us to discuss your needs and we&apos;ll create a solution that fits your budget.',
  },
  {
    category: 'Pricing',
    question: 'Are there any setup fees?',
    answer: 'Setup fees vary depending on the services and plan you choose. Some plans include setup in the monthly fee, while others may have a one-time setup charge. We&apos;ll clearly outline all costs during our consultation.',
  },
  {
    category: 'Pricing',
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time. We don&apos;t require long-term contracts, though we do offer discounts for annual commitments. Cancellation takes effect at the end of your current billing period.',
  },
  {
    category: 'Process',
    question: 'What is your typical process for new clients?',
    answer: 'Our process begins with a discovery call to understand your business, goals, and challenges. We then develop a customized strategy and present a proposal. Once approved, we begin implementation with regular check-ins and reporting throughout the process.',
  },
  {
    category: 'Process',
    question: 'How do you communicate with clients?',
    answer: 'We maintain regular communication through email, phone calls, video meetings, and our client portal. You&apos;ll have access to a dedicated account manager who will keep you informed about progress and be available to answer questions.',
  },
  {
    category: 'Process',
    question: 'How often will I receive reports?',
    answer: 'Report frequency depends on your plan. Basic plans typically receive monthly reports, while Pro and Enterprise plans may receive weekly or bi-weekly reports. All clients have access to real-time dashboards in the client portal.',
  },
  {
    category: 'Process',
    question: 'What happens if I need changes or updates?',
    answer: 'You can request changes or updates through our client portal, email, or by contacting your account manager. Response times vary by plan, with priority support available for Pro and Enterprise clients.',
  },
  {
    category: 'Technical',
    question: 'Do I need technical knowledge to work with you?',
    answer: 'No technical knowledge is required. We handle all technical aspects of your digital presence. Our team will explain everything in simple terms and ensure you understand what we&apos;re doing and why.',
  },
  {
    category: 'Technical',
    question: 'Will I own my website and content?',
    answer: 'Yes, you own your website, content, and all digital assets we create for you. We retain no ownership rights to your materials. You can take your website and assets with you at any time.',
  },
  {
    category: 'Technical',
    question: 'What happens to my website if I cancel?',
    answer: 'If you cancel, you retain full ownership of your website and all content. We&apos;ll provide you with all necessary files and access credentials. You can continue using your website independently or transfer it to another provider.',
  },
  {
    category: 'Results',
    question: 'How long until I see results?',
    answer: 'Results vary by service. Website launches are immediate, while SEO results typically begin showing in 3-6 months. PPC campaigns can show results within days. We&apos;ll set realistic expectations during our initial consultation.',
  },
  {
    category: 'Results',
    question: 'How do you measure success?',
    answer: 'We measure success through key performance indicators (KPIs) such as website traffic, conversion rates, search engine rankings, lead generation, ROI, and other metrics relevant to your business goals. We provide regular reports showing progress.',
  },
  {
    category: 'Results',
    question: 'What kind of ROI can I expect?',
    answer: 'ROI varies by industry, service, and investment level. Many of our clients see significant returns, with some experiencing 200-300% ROI increases. We&apos;ll work with you to set realistic goals and track progress toward achieving them.',
  },
]

const categories = Array.from(new Set(faqs.map(faq => faq.category)))

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing, and process
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-md border transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-primary/20 border-primary text-primary'
                    : 'bg-surface border-primary/20 hover:border-primary/40'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md border transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-surface border-primary/20 hover:border-primary/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Card className="hover:shadow-glow transition-all">
                    <CardContent className="pt-6">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full text-left flex items-start justify-between gap-4"
                      >
                        <h3 className="text-lg font-semibold font-display flex-1">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        )}
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-primary/20"
                        >
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12"
          >
            <Card>
              <CardContent className="pt-6 text-center">
                <h2 className="text-2xl font-bold font-display mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-text-secondary mb-6">
                  Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-primary text-background rounded-md hover:bg-primary-dark transition-colors font-medium"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

