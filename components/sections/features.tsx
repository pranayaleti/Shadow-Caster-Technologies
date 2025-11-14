'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, Zap, Target } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Data-Driven Results',
    description: 'Track your success with real-time analytics and comprehensive reporting. Every campaign is measured and optimized for maximum ROI.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with experienced professionals who understand your business goals and deliver solutions that drive growth.',
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    description: 'Get your digital presence up and running quickly. We streamline processes to deliver results faster.',
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Every business is unique. We create tailored strategies that align with your specific goals and industry needs.',
  },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '250%', label: 'Average ROI Increase' },
  { value: '24/7', label: 'Support Available' },
]

export function Features() {
  return (
    <section className="py-20 px-4 bg-surface/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Why Choose Shadow Caster
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We combine cutting-edge technology with strategic expertise to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-glow transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold font-display mb-2">{feature.title}</h3>
                    <p className="text-text-secondary text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-display gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

