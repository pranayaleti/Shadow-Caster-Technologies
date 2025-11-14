import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CampaignDetailPage } from '@/components/portal/campaign-detail-page'
import { notFound } from 'next/navigation'

interface CampaignPageProps {
  params: Promise<{ id: string }>
}

export default async function PortalCampaignDetailPage({ params }: CampaignPageProps) {
  const session = await getServerSession(authOptions)
  const { id } = await params
  
  if (!session?.user?.id) {
    return null
  }

  const campaign = await prisma.campaign.findFirst({
    where: { 
      id,
      userId: session.user.id 
    },
    include: {
      service: true,
    },
  })

  if (!campaign) {
    notFound()
  }

  return <CampaignDetailPage campaign={campaign} />
}

