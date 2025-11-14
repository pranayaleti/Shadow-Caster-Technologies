'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Target, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business, goals, and target audience. Through comprehensive analysis, we identify opportunities and challenges.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Strategy & Planning',
    description: 'Our team develops a customized strategy tailored to your specific needs. We create a roadmap with clear objectives and measurable milestones.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementation',
    description: 'We execute your digital strategy with precision and care. Our experts work diligently to bring your vision to life while maintaining quality standards.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Optimization & Growth',
    description: 'Continuous monitoring and optimization ensure your digital presence keeps improving. We track performance and refine strategies for maximum impact.',
  },
]

export function Process() {
  return (
    <section className="py-20 px-4 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Our Process
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A proven methodology that delivers results at every stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary/20 z-0" style={{ width: 'calc(100% - 2rem)' }} />
                )}
                <Card className="h-full hover:shadow-glow transition-all relative z-10">
                  <CardContent className="pt-6">
                    <div className="text-6xl font-bold font-display text-primary/20 mb-4">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold font-display mb-3">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

