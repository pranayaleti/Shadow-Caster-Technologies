'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const mockRevenue = [
  { name: 'Jan', revenue: 40000 },
  { name: 'Feb', revenue: 30000 },
  { name: 'Mar', revenue: 50000 },
  { name: 'Apr', revenue: 45000 },
  { name: 'May', revenue: 60000 },
  { name: 'Jun', revenue: 55000 },
]

export function AdminDashboard({ stats, recentClients, recentCampaigns }: any) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-2">
          Admin Dashboard
        </h1>
        <p className="text-text-secondary">
          Overview of your platform and client activity
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Clients</CardTitle>
              <CardDescription>Registered clients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">{stats.totalClients}</div>
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
              <CardTitle className="text-lg">Active Subscriptions</CardTitle>
              <CardDescription>Currently active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">{stats.totalSubscriptions}</div>
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
              <CardTitle className="text-lg">Total Campaigns</CardTitle>
              <CardDescription>All campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">{stats.totalCampaigns}</div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Monthly Revenue</CardTitle>
              <CardDescription>Estimated MRR</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">$0</div>
            </CardContent>
          </Card>
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
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly recurring revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={mockRevenue}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00CED1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00CED1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#00CED1" opacity={0.2} />
                  <XAxis dataKey="name" stroke="#B0B0B0" />
                  <YAxis stroke="#B0B0B0" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#121212', 
                      border: '1px solid #00CED1',
                      borderRadius: '8px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#00CED1" 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
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
              <CardTitle>Recent Clients</CardTitle>
              <CardDescription>Latest registered clients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[300px] overflow-y-auto">
                {recentClients.length === 0 ? (
                  <p className="text-text-secondary text-center py-8">
                    No clients yet
                  </p>
                ) : (
                  recentClients.map((client: any) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20"
                    >
                      <div>
                        <h3 className="font-semibold">{client.name || client.email}</h3>
                        <p className="text-sm text-text-secondary">
                          {client.email} • {client.subscriptions?.[0]?.plan?.name || 'No plan'}
                        </p>
                      </div>
                      <Link href={`/admin/clients/${client.id}`}>
                        <Button variant="ghost" size="sm">View</Button>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Latest campaign activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.length === 0 ? (
                <p className="text-text-secondary text-center py-8">
                  No campaigns yet
                </p>
              ) : (
                recentCampaigns.map((campaign: any) => (
                  <div
                    key={campaign.id}
                    className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20"
                  >
                    <div>
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <p className="text-sm text-text-secondary">
                        {campaign.user?.name || campaign.user?.email} • {campaign.service?.name} • {campaign.status}
                      </p>
                    </div>
                    <Link href={`/admin/campaigns/${campaign.id}`}>
                      <Button variant="ghost" size="sm">View</Button>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

