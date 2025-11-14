'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return 'bg-green-500/20 text-green-500'
    case 'PENDING':
      return 'bg-yellow-500/20 text-yellow-500'
    case 'COMPLETED':
      return 'bg-blue-500/20 text-blue-500'
    default:
      return 'bg-gray-500/20 text-gray-500'
  }
}

export function CampaignDetailPage({ campaign }: any) {
  const metrics = campaign.metrics ? JSON.parse(campaign.metrics) : null

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/portal/campaigns">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold font-display gradient-text mb-2">
              {campaign.name}
            </h1>
            <p className="text-text-secondary">
              {campaign.description || 'Campaign details'}
            </p>
          </div>
          <span className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(campaign.status)}`}>
            {campaign.status}
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Campaign Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-text-secondary mb-1">Service</p>
                <p className="font-semibold">{campaign.service?.name || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Status</p>
                <span className={`px-2 py-1 rounded text-sm ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>
              {campaign.startDate && (
                <div>
                  <p className="text-sm text-text-secondary mb-1">Start Date</p>
                  <p className="font-semibold">{new Date(campaign.startDate).toLocaleDateString()}</p>
                </div>
              )}
              {campaign.endDate && (
                <div>
                  <p className="text-sm text-text-secondary mb-1">End Date</p>
                  <p className="font-semibold">{new Date(campaign.endDate).toLocaleDateString()}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-text-secondary mb-1">Created</p>
                <p className="font-semibold">{new Date(campaign.createdAt).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {metrics && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Campaign Metrics</CardTitle>
                <CardDescription>Performance data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(metrics).map(([key, value]: [string, any]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-semibold">
                        {typeof value === 'number' ? value.toLocaleString() : value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}

