import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { AdminCampaignDetailPage } from '@/components/admin/campaign-detail-page'
import { notFound } from 'next/navigation'

interface CampaignPageProps {
  params: Promise<{ id: string }>
}

export default async function AdminCampaignPage({ params }: CampaignPageProps) {
  const session = await getServerSession(authOptions)
  const { id } = await params
  
  if (!session?.user?.id) {
    return null
  }

  const campaign = await prisma.campaign.findUnique({
    where: { id },
    include: {
      service: true,
      user: true,
    },
  })

  if (!campaign) {
    notFound()
  }

  return <AdminCampaignDetailPage campaign={campaign} />
}

