'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 299,
    interval: 'month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Website Development & Management',
      'Basic SEO Setup',
      'Google Business Profile Setup',
      'Monthly Performance Report',
      'Email Support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 699,
    interval: 'month',
    description: 'Ideal for growing businesses',
    popular: true,
    features: [
      'Everything in Basic',
      'Advanced SEO & Content Strategy',
      'PPC Campaign Management',
      'Social Media Ad Campaigns',
      'Business Listings Management',
      'Weekly Performance Reports',
      'Priority Support',
      'Digital Asset Storage (50GB)',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 1499,
    interval: 'month',
    description: 'Complete digital transformation',
    features: [
      'Everything in Pro',
      'Custom Branding Development',
      'Multi-Channel Marketing Campaigns',
      'Advanced Analytics & Reporting',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Unlimited Digital Asset Storage',
      'Custom Integrations',
    ],
  },
]

export function Plans() {
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
            Plans & Packages
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                className={`h-full relative ${
                  plan.popular
                    ? 'border-primary shadow-glow scale-105'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold font-display">${plan.price}</span>
                    <span className="text-text-secondary">/{plan.interval}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/auth/signup" className="w-full">
                    <Button
                      variant={plan.popular ? 'default' : 'outline'}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

