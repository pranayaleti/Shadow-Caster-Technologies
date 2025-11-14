import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { SubscriptionsPage } from '@/components/portal/subscriptions-page'

export default async function SubscriptionsPortalPage() {
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
      },
    },
  })

  const allPlans = await prisma.plan.findMany({
    where: { isActive: true },
    orderBy: { price: 'asc' },
  })

  return <SubscriptionsPage user={user} plans={allPlans} />
}

