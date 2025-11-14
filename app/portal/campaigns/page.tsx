import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CampaignsPage } from '@/components/portal/campaigns-page'

export default async function PortalCampaignsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const campaigns = await prisma.campaign.findMany({
    where: { userId: session.user.id },
    include: {
      service: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return <CampaignsPage campaigns={campaigns} />
}

