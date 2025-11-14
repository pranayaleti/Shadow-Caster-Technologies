import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { AnalyticsDashboard } from '@/components/admin/analytics-dashboard'

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const activeSubscriptions = await prisma.subscription.findMany({
    where: { status: 'ACTIVE' },
    include: { plan: true },
  })

  const totalRevenue = activeSubscriptions.reduce((sum, sub) => sum + (sub.plan?.price || 0), 0)

  const stats = {
    totalClients: await prisma.user.count({ where: { role: 'CLIENT' } }),
    activeSubscriptions: await prisma.subscription.count({ where: { status: 'ACTIVE' } }),
    totalCampaigns: await prisma.campaign.count(),
    totalRevenue: totalRevenue,
  }

  return <AnalyticsDashboard stats={stats} />
}

