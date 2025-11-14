'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function ServicesIntro() {
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
            Our Services
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your business and drive measurable results
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
                At Shadow Caster Technologies, we offer a complete suite of digital marketing and web development services designed to help your business thrive in the digital landscape. Our team of experts works closely with you to understand your unique needs and deliver solutions that drive real results.
              </p>
              <p className="text-text-secondary leading-relaxed">
                From website development and SEO to branding and digital marketing campaigns, we provide end-to-end solutions that transform your online presence. Every service is backed by data-driven strategies, creative excellence, and a commitment to your success.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

