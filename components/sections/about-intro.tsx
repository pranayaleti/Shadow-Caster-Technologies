'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function AboutIntro() {
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
            About Shadow Caster
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We&apos;re a team of digital experts dedicated to helping businesses succeed online
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
                Shadow Caster Technologies was founded with a simple mission: to cast your digital presence into the light. We believe that every business, regardless of size, deserves access to professional digital marketing and web development services that drive real results.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our team combines years of industry experience with cutting-edge technology and creative excellence. We specialize in helping small to mid-size businesses achieve professional digital transformation through intelligent automation, creative precision, and measurable results.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

