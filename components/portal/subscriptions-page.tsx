'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'

export function SubscriptionsPage({ user, plans }: any) {
  const currentSubscription = user?.subscriptions?.[0]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-2">
          Subscriptions
        </h1>
        <p className="text-text-secondary">
          Manage your subscription and billing
        </p>
      </motion.div>

      {currentSubscription && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border-primary shadow-glow">
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>
                {currentSubscription.plan.name} - {currentSubscription.status}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Plan</span>
                  <span className="font-semibold">{currentSubscription.plan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Price</span>
                  <span className="font-semibold">
                    ${currentSubscription.plan.price}/{currentSubscription.plan.interval}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Status</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    currentSubscription.status === 'ACTIVE' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-gray-500/20 text-gray-500'
                  }`}>
                    {currentSubscription.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Next Billing Date</span>
                  <span className="font-semibold">
                    {new Date(currentSubscription.currentPeriodEnd).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Manage Subscription
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold font-display mb-6">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan: any, index: number) => {
            const features = JSON.parse(plan.features || '[]')
            const isCurrentPlan = currentSubscription?.planId === plan.id

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className={isCurrentPlan ? 'border-primary shadow-glow' : ''}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold font-display">${plan.price}</span>
                      <span className="text-text-secondary">/{plan.interval}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {isCurrentPlan ? (
                      <Button variant="outline" className="w-full" disabled>
                        Current Plan
                      </Button>
                    ) : (
                      <Button className="w-full">
                        {currentSubscription ? 'Upgrade' : 'Subscribe'}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

