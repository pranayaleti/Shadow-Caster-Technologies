import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Dashboard } from '@/components/portal/dashboard'

export default async function PortalPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      subscriptions: {
        include: { plan: true },
        orderBy: { createdAt: 'desc' },
        take: 1,
      },
      campaigns: {
        include: { service: true },
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
      assets: {
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
    },
  })

  return <Dashboard user={user} />
}

