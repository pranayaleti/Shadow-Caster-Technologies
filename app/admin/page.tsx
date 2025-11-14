import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { AdminDashboard } from '@/components/admin/dashboard'

export default async function AdminPage() {
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
    totalSubscriptions: await prisma.subscription.count({ where: { status: 'ACTIVE' } }),
    totalCampaigns: await prisma.campaign.count(),
    totalRevenue: totalRevenue,
  }

  const recentClients = await prisma.user.findMany({
    where: { role: 'CLIENT' },
    include: {
      subscriptions: {
        include: { plan: true },
        take: 1,
      },
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })

  const recentCampaigns = await prisma.campaign.findMany({
    include: {
      user: true,
      service: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })

  return (
    <AdminDashboard
      stats={stats}
      recentClients={recentClients}
      recentCampaigns={recentCampaigns}
    />
  )
}

