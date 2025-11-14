import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { EditServicePage } from '@/components/admin/edit-service-page'
import { notFound } from 'next/navigation'

interface EditServicePageProps {
  params: Promise<{ id: string }>
}

export default async function AdminEditServicePage({ params }: EditServicePageProps) {
  const session = await getServerSession(authOptions)
  const { id } = await params
  
  if (!session?.user?.id) {
    return null
  }

  const service = await prisma.service.findUnique({
    where: { id },
  })

  if (!service) {
    notFound()
  }

  return <EditServicePage service={service} />
}

