import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { AnalyticsDashboard } from '@/components/admin/analytics-dashboard'

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const stats = {
    totalClients: await prisma.user.count({ where: { role: 'CLIENT' } }),
    activeSubscriptions: await prisma.subscription.count({ where: { status: 'ACTIVE' } }),
    totalCampaigns: await prisma.campaign.count(),
    totalRevenue: 0, // Calculate from subscriptions
  }

  return <AnalyticsDashboard stats={stats} />
}

