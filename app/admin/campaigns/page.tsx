import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CampaignsList } from '@/components/admin/campaigns-list'

export default async function CampaignsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  const campaigns = await prisma.campaign.findMany({
    include: {
      user: true,
      service: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return <CampaignsList campaigns={campaigns} />
}

