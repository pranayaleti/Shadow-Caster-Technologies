'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Our Story
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Learn more about who we are and what drives us
          </p>
        </motion.div>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold font-display mb-4">Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">
                  At Shadow Caster Technologies, we believe in casting your digital presence into the light.
                  We specialize in helping small to mid-size businesses achieve professional digital transformation
                  through intelligent automation, creative precision, and measurable results.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold font-display mb-4">Design Philosophy</h3>
                <p className="text-text-secondary leading-relaxed">
                  Our design approach is rooted in Gestalt psychology principles—creating clear hierarchy,
                  grouped elements, and consistent alignment. We believe that great design should be both
                  beautiful and functional, guiding users intuitively through their digital journey.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold font-display mb-4">Core Values</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Intelligent Automation:</strong> Streamlining processes to maximize efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Creative Precision:</strong> Attention to detail in every project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Measurable Results:</strong> Data-driven strategies that deliver ROI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Client-Centric Approach:</strong> Your success is our priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Continuous Innovation:</strong> Staying ahead of digital trends</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

