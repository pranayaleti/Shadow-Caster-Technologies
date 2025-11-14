import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { EditClientPage } from '@/components/admin/edit-client-page'
import { notFound } from 'next/navigation'

interface EditClientPageProps {
  params: Promise<{ id: string }>
}

export default async function AdminEditClientPage({ params }: EditClientPageProps) {
  const session = await getServerSession(authOptions)
  const { id } = await params
  
  if (!session?.user?.id) {
    return null
  }

  const client = await prisma.user.findUnique({
    where: { id },
  })

  if (!client || client.role !== 'CLIENT') {
    notFound()
  }

  return <EditClientPage client={client} />
}

