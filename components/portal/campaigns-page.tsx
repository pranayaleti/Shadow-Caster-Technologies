'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export function CampaignsPage({ campaigns }: any) {
  const [filter, setFilter] = useState('all')

  const filteredCampaigns = campaigns.filter((campaign: any) => {
    if (filter === 'all') return true
    return campaign.status === filter
  })

  const activeCount = campaigns.filter((c: any) => c.status === 'ACTIVE').length

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-2">
          Active Campaigns
        </h1>
        <p className="text-text-secondary">
          Currently running campaigns
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Campaigns</CardTitle>
              <CardDescription>Currently running campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display mb-4">
                {activeCount}
              </div>
              <div className="h-16 flex items-center justify-center">
                {activeCount === 0 ? (
                  <div className="w-12 h-12 border-2 border-primary/30 border-dashed rounded flex items-center justify-center">
                    <div className="w-6 h-6 border border-primary/50 rotate-45"></div>
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Campaigns</CardTitle>
              <CardDescription>All your campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display mb-4">
                {campaigns.length}
              </div>
              <div className="h-16 flex items-center justify-center">
                {campaigns.length === 0 ? (
                  <div className="w-12 h-12 border-2 border-primary/30 border-dashed rounded flex items-center justify-center">
                    <div className="w-6 h-6 border border-primary/50 rotate-45"></div>
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex gap-2 mb-4">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'ACTIVE' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('ACTIVE')}
          >
            Active
          </Button>
          <Button
            variant={filter === 'PENDING' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('PENDING')}
          >
            Pending
          </Button>
          <Button
            variant={filter === 'COMPLETED' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('COMPLETED')}
          >
            Completed
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>All Campaigns ({filteredCampaigns.length})</CardTitle>
            <CardDescription>Your campaign activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredCampaigns.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-2 border-primary/30 border-dashed rounded flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 border border-primary/50 rotate-45"></div>
                  </div>
                  <p className="text-text-secondary">
                    No campaigns found
                  </p>
                </div>
              ) : (
                filteredCampaigns.map((campaign: any, index: number) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20 hover:shadow-soft transition-all"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{campaign.name}</h3>
                      <p className="text-sm text-text-secondary">{campaign.description}</p>
                      <div className="mt-2 flex gap-4 text-sm text-text-secondary">
                        <span>
                          Service: {campaign.service?.name}
                        </span>
                        <span className={`px-2 py-1 rounded ${
                          campaign.status === 'ACTIVE' ? 'bg-green-500/20 text-green-500' :
                          campaign.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-500' :
                          campaign.status === 'COMPLETED' ? 'bg-blue-500/20 text-blue-500' :
                          'bg-gray-500/20 text-gray-500'
                        }`}>
                          {campaign.status}
                        </span>
                        {campaign.startDate && (
                          <span>
                            Started: {new Date(campaign.startDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <Link href={`/portal/campaigns/${campaign.id}`}>
                      <Button variant="outline" size="sm">View</Button>
                    </Link>
                  </motion.div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

