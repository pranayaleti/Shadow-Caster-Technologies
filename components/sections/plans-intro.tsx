'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function PlansIntro() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Plans & Packages
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services with varying levels of support and features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-text-secondary leading-relaxed mb-4">
                We understand that every business has unique needs and budgets. That&apos;s why we&apos;ve created flexible plans that scale with your business. Whether you&apos;re just getting started or looking to expand your digital presence, we have a plan that fits.
              </p>
              <p className="text-text-secondary leading-relaxed">
                All our plans include access to our expert team, comprehensive reporting, and ongoing optimization. As your business grows, you can easily upgrade to access more features and support. Need something custom? Contact us to discuss a tailored solution.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

