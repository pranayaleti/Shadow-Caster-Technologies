'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export function CampaignsList({ campaigns }: any) {
  const [filter, setFilter] = useState('all')

  const filteredCampaigns = campaigns.filter((campaign: any) => {
    if (filter === 'all') return true
    return campaign.status === filter
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-4">
          Campaigns
        </h1>
        <div className="flex gap-2">
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

      <Card>
        <CardHeader>
          <CardTitle>All Campaigns ({filteredCampaigns.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredCampaigns.length === 0 ? (
              <p className="text-text-secondary text-center py-8">
                No campaigns found
              </p>
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
                        Client: {campaign.user?.name || campaign.user?.email}
                      </span>
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
                    </div>
                  </div>
                  <Link href={`/admin/campaigns/${campaign.id}`}>
                    <Button variant="outline" size="sm">View</Button>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

