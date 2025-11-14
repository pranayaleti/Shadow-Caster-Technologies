'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, CreditCard, Megaphone, TrendingUp, Plus, ArrowRight } from 'lucide-react'

export function AdminDashboard({ stats, recentClients, recentCampaigns }: any) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold font-display gradient-text">
                Admin Dashboard
              </h1>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                CONTROL CENTER
              </span>
            </div>
            <p className="text-text-secondary">
              Manage clients, campaigns, and platform operations
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/admin/clients/new">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Client
              </Button>
            </Link>
            <Link href="/admin/services/new">
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                New Service
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/admin/clients">
            <Card className="cursor-pointer hover:shadow-soft transition-all border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Total Clients</CardTitle>
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>Registered clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-display mb-2">{stats.totalClients}</div>
                <Link href="/admin/clients" className="text-sm text-primary hover:underline flex items-center gap-1">
                  Manage clients <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/admin/clients">
            <Card className="cursor-pointer hover:shadow-soft transition-all border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Active Subscriptions</CardTitle>
                  <CreditCard className="w-5 h-5 text-green-500" />
                </div>
                <CardDescription>Currently active</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-display mb-2">{stats.totalSubscriptions}</div>
                <Link href="/admin/clients" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View subscriptions <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/admin/campaigns">
            <Card className="cursor-pointer hover:shadow-soft transition-all border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Total Campaigns</CardTitle>
                  <Megaphone className="w-5 h-5 text-blue-500" />
                </div>
                <CardDescription>All campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-display mb-2">{stats.totalCampaigns}</div>
                <Link href="/admin/campaigns" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View campaigns <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/admin/analytics">
            <Card className="cursor-pointer hover:shadow-soft transition-all border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Monthly Revenue</CardTitle>
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                </div>
                <CardDescription>Estimated MRR</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-display mb-2">${stats.totalRevenue.toLocaleString()}</div>
                <Link href="/admin/analytics" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View analytics <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Clients</CardTitle>
                  <CardDescription>Latest registered clients</CardDescription>
                </div>
                <Link href="/admin/clients">
                  <Button variant="ghost" size="sm">
                    View All <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {recentClients.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 text-text-secondary/30 mx-auto mb-3" />
                    <p className="text-text-secondary">No clients yet</p>
                    <Link href="/admin/clients/new">
                      <Button variant="outline" size="sm" className="mt-4">
                        <Plus className="w-4 h-4 mr-2" />
                        Add First Client
                      </Button>
                    </Link>
                  </div>
                ) : (
                  recentClients.map((client: any) => (
                    <Link
                      key={client.id}
                      href={`/admin/clients/${client.id}`}
                      className="block"
                    >
                      <div className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-surface/70 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{client.name || client.email}</h3>
                            <p className="text-sm text-text-secondary">
                              {client.email} • {client.subscriptions?.[0]?.plan?.name || 'No plan'}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-text-secondary" />
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
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Campaigns</CardTitle>
                  <CardDescription>Latest campaign activity</CardDescription>
                </div>
                <Link href="/admin/campaigns">
                  <Button variant="ghost" size="sm">
                    View All <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {recentCampaigns.length === 0 ? (
                  <div className="text-center py-8">
                    <Megaphone className="w-12 h-12 text-text-secondary/30 mx-auto mb-3" />
                    <p className="text-text-secondary">No campaigns yet</p>
                  </div>
                ) : (
                  recentCampaigns.map((campaign: any) => (
                    <Link
                      key={campaign.id}
                      href={`/admin/campaigns/${campaign.id}`}
                      className="block"
                    >
                      <div className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-surface/70 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <Megaphone className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{campaign.name}</h3>
                            <p className="text-sm text-text-secondary">
                              {campaign.user?.name || campaign.user?.email} • {campaign.service?.name} • {campaign.status}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-text-secondary" />
                      </div>
                    </Link>
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

