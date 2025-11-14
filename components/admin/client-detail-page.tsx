'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function ClientDetailPage({ client }: any) {
  const activeSubscription = client.subscriptions?.find((sub: any) => sub.status === 'ACTIVE')
  const totalSpent = client.invoices
    ?.filter((inv: any) => inv.status === 'paid')
    .reduce((sum: number, inv: any) => sum + inv.amount, 0) || 0

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/admin/clients">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Clients
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold font-display gradient-text mb-2">
              {client.name || 'Client'}
            </h1>
            <p className="text-text-secondary">
              {client.email}
            </p>
          </div>
          <Link href={`/admin/clients/${client.id}/edit`}>
            <Button variant="outline">Edit Client</Button>
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-display">
                {activeSubscription?.plan?.name || 'No Plan'}
              </div>
              {activeSubscription?.plan && (
                <p className="text-sm text-text-secondary mt-2">
                  ${activeSubscription.plan.price}/month
                </p>
              )}
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
              <CardTitle className="text-lg">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-display">
                ${totalSpent.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-display">
                {client.campaigns?.filter((c: any) => c.status === 'ACTIVE').length || 0}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Campaigns</CardTitle>
              <CardDescription>Latest campaign activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {client.campaigns?.length === 0 ? (
                  <p className="text-text-secondary text-center py-4">No campaigns</p>
                ) : (
                  client.campaigns?.slice(0, 5).map((campaign: any) => (
                    <Link
                      key={campaign.id}
                      href={`/admin/campaigns/${campaign.id}`}
                      className="block p-3 bg-surface/50 rounded-lg border border-primary/20 hover:shadow-soft transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{campaign.name}</p>
                          <p className="text-sm text-text-secondary">{campaign.service?.name}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${
                          campaign.status === 'ACTIVE' ? 'bg-green-500/20 text-green-500' :
                          campaign.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-500' :
                          'bg-gray-500/20 text-gray-500'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>Payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {client.invoices?.length === 0 ? (
                  <p className="text-text-secondary text-center py-4">No invoices</p>
                ) : (
                  client.invoices?.slice(0, 5).map((invoice: any) => (
                    <div
                      key={invoice.id}
                      className="p-3 bg-surface/50 rounded-lg border border-primary/20"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{invoice.invoiceNumber}</p>
                          <p className="text-sm text-text-secondary">
                            {new Date(invoice.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${invoice.amount.toFixed(2)}</p>
                          <span className={`px-2 py-1 rounded text-xs ${
                            invoice.status === 'paid' ? 'bg-green-500/20 text-green-500' :
                            invoice.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                            'bg-red-500/20 text-red-500'
                          }`}>
                            {invoice.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

