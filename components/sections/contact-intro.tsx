'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@shadowcastertech.com',
    link: 'mailto:hello@shadowcastertech.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Available Worldwide',
    link: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon-Fri: 9AM-6PM EST',
    link: null,
  },
]

export function ContactIntro() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            Get In Touch
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to transform your digital presence? Let&apos;s discuss how we can help your business grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const content = (
              <Card className="h-full hover:shadow-glow transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-semibold mb-1">{info.label}</div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-primary hover:underline text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-text-secondary text-sm">{info.value}</div>
                  )}
                </CardContent>
              </Card>
            )

            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {content}
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold font-display mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Free Consultation:</strong> Get expert advice on your digital strategy with no obligation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Custom Solutions:</strong> We&apos;ll create a tailored plan that fits your specific needs and budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Quick Response:</strong> We typically respond to inquiries within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>No Pressure:</strong> We&apos;ll answer your questions and help you make informed decisions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

