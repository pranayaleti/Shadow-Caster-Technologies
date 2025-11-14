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
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const mockAnalytics = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
]

export function Dashboard({ user }: any) {
  const subscription = user?.subscriptions?.[0]
  const campaigns = user?.campaigns || []
  const assets = user?.assets || []

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-2">
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p className="text-text-secondary">
          Here&apos;s an overview of your account and campaigns
        </p>
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
              <CardDescription>
                {subscription?.plan?.name || 'No active subscription'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">
                ${subscription?.plan?.price || 0}
                <span className="text-sm text-text-secondary">/month</span>
              </div>
              {subscription && (
                <Link href="/portal/subscriptions">
                  <Button variant="outline" className="mt-4 w-full">
                    Manage Subscription
                  </Button>
                </Link>
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
              <CardTitle className="text-lg">Active Campaigns</CardTitle>
              <CardDescription>Currently running campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">
                {campaigns.filter((c: any) => c.status === 'ACTIVE').length}
              </div>
              <Link href="/portal/campaigns">
                <Button variant="outline" className="mt-4 w-full">
                  View All Campaigns
                </Button>
              </Link>
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
              <CardTitle className="text-lg">Stored Assets</CardTitle>
              <CardDescription>Digital assets in storage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">{assets.length}</div>
              <Link href="/portal/assets">
                <Button variant="outline" className="mt-4 w-full">
                  View Assets
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>Your campaign performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={mockAnalytics}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
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
                  dataKey="value" 
                  stroke="#00CED1" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
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
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Your latest campaign activity</CardDescription>
          </CardHeader>
          <CardContent>
            {campaigns.length === 0 ? (
              <p className="text-text-secondary text-center py-8">
                No campaigns yet. Start by creating a new campaign!
              </p>
            ) : (
              <div className="space-y-4">
                {campaigns.map((campaign: any) => (
                  <div
                    key={campaign.id}
                    className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20"
                  >
                    <div>
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <p className="text-sm text-text-secondary">
                        {campaign.service?.name} • {campaign.status}
                      </p>
                    </div>
                    <Link href={`/portal/campaigns/${campaign.id}`}>
                      <Button variant="ghost" size="sm">View</Button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

