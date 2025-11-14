import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ClientDetailPage } from '@/components/admin/client-detail-page'
import { notFound } from 'next/navigation'

interface ClientPageProps {
  params: Promise<{ id: string }>
}

export default async function AdminClientDetailPage({ params }: ClientPageProps) {
  const session = await getServerSession(authOptions)
  const { id } = await params
  
  if (!session?.user?.id) {
    return null
  }

  const client = await prisma.user.findUnique({
    where: { id },
    include: {
      subscriptions: {
        include: { plan: true },
        orderBy: { createdAt: 'desc' },
      },
      campaigns: {
        include: { service: true },
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
      assets: {
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
      invoices: {
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
    },
  })

  if (!client || client.role !== 'CLIENT') {
    notFound()
  }

  return <ClientDetailPage client={client} />
}

