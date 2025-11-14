'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export function PlansManagement({ plans: initialPlans }: any) {
  const [plans, setPlans] = useState(initialPlans)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold font-display gradient-text">
            Plans & Pricing
          </h1>
          <Link href="/admin/plans/new">
            <Button>Create New Plan</Button>
          </Link>
        </div>
        <p className="text-text-secondary">
          Manage your subscription plans and pricing tiers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan: any, index: number) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={plan.isActive ? '' : 'opacity-60'}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  <span className={`px-2 py-1 rounded text-xs ${
                    plan.isActive 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-gray-500/20 text-gray-500'
                  }`}>
                    {plan.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold font-display">${plan.price}</span>
                  <span className="text-text-secondary">/{plan.interval}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-text-secondary">
                    Subscriptions: {plan.subscriptions?.length || 0}
                  </p>
                  <p className="text-sm text-text-secondary">
                    Add-ons: {plan.addOns?.length || 0}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/plans/${plan.id}/edit`} className="flex-1">
                    <Button variant="outline" className="w-full" size="sm">
                      Edit
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {plans.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-text-secondary mb-4">No plans created yet</p>
            <Link href="/admin/plans/new">
              <Button>Create Your First Plan</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

