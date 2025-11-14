import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ClientsList } from '@/components/admin/clients-list'

export default async function ClientsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const clients = await prisma.user.findMany({
    where: { role: 'CLIENT' },
    include: {
      subscriptions: {
        include: { plan: true },
      },
      campaigns: {
        include: { service: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return <ClientsList clients={clients} />
}

