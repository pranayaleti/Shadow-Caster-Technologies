import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ServicesManagement } from '@/components/admin/services-management'

export default async function ServicesPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const services = await prisma.service.findMany({
    include: {
      campaigns: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return <ServicesManagement services={services} />
}

