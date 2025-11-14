import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { PlansManagement } from '@/components/admin/plans-management'

export default async function PlansPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const plans = await prisma.plan.findMany({
    include: {
      addOns: true,
      subscriptions: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return <PlansManagement plans={plans} />
}

