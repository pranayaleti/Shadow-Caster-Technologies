'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function ServicesManagement({ services }: any) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold font-display gradient-text">
            Services
          </h1>
          <Link href="/admin/services/new">
            <Button>Add New Service</Button>
          </Link>
        </div>
        <p className="text-text-secondary">
          Manage your service offerings
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service: any, index: number) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={service.isActive ? '' : 'opacity-60'}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{service.name}</CardTitle>
                  <span className={`px-2 py-1 rounded text-xs ${
                    service.isActive 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-gray-500/20 text-gray-500'
                  }`}>
                    {service.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-text-secondary">
                    Category: {service.category}
                  </p>
                  <p className="text-sm text-text-secondary">
                    Campaigns: {service.campaigns?.length || 0}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/services/${service.id}/edit`} className="flex-1">
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

      {services.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-text-secondary mb-4">No services created yet</p>
            <Link href="/admin/services/new">
              <Button>Create Your First Service</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

