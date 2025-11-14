'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts'

const mockData = {
  revenue: [
    { name: 'Jan', revenue: 40000 },
    { name: 'Feb', revenue: 30000 },
    { name: 'Mar', revenue: 50000 },
    { name: 'Apr', revenue: 45000 },
    { name: 'May', revenue: 60000 },
    { name: 'Jun', revenue: 55000 },
  ],
  campaigns: [
    { name: 'SEO', value: 35 },
    { name: 'PPC', value: 25 },
    { name: 'Social Media', value: 20 },
    { name: 'Content', value: 20 },
  ],
  clients: [
    { name: 'Jan', clients: 10 },
    { name: 'Feb', clients: 15 },
    { name: 'Mar', clients: 20 },
    { name: 'Apr', clients: 25 },
    { name: 'May', clients: 30 },
    { name: 'Jun', clients: 35 },
  ],
}

const COLORS = ['#00CED1', '#00FFFF', '#008B8B', '#40E0D0']

export function AnalyticsDashboard({ stats }: any) {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-text-secondary">
          Comprehensive analytics and insights
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {Object.entries(stats).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">{value as number}</div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly recurring revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={mockData.revenue}>
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
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Campaign Distribution</CardTitle>
              <CardDescription>Campaigns by type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockData.campaigns}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockData.campaigns.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#121212', 
                      border: '1px solid #00CED1',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Client Growth</CardTitle>
            <CardDescription>New clients over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockData.clients}>
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
                <Bar dataKey="clients" fill="#00CED1" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

