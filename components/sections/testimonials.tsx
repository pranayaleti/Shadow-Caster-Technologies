'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Solutions',
    role: 'CEO',
    content: 'Shadow Caster transformed our online presence. Our website traffic increased by 300% in just three months, and we\'re seeing real results from their SEO strategies.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'Local Eats Restaurant',
    role: 'Owner',
    content: 'The team at Shadow Caster helped us dominate local search results. We\'re now the top restaurant in our area on Google, and reservations have doubled.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    company: 'Boutique Fashion Co.',
    role: 'Marketing Director',
    content: 'Their branding work is exceptional. They created a cohesive brand identity that resonates with our audience. Our social media engagement has skyrocketed.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    company: 'Thompson Law Firm',
    role: 'Managing Partner',
    content: 'Professional, responsive, and results-driven. Shadow Caster manages our PPC campaigns and we\'ve seen a 250% increase in qualified leads. Highly recommend!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from businesses that have transformed their digital presence with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-glow transition-all">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

