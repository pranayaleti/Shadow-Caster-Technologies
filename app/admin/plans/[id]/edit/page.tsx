import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { EditPlanPage } from '@/components/admin/edit-plan-page'
import { notFound } from 'next/navigation'

interface EditPlanPageProps {
  params: Promise<{ id: string }>
}

export default async function AdminEditPlanPage({ params }: EditPlanPageProps) {
  const session = await getServerSession(authOptions)
  const { id } = await params
  
  if (!session?.user?.id) {
    return null
  }

  const plan = await prisma.plan.findUnique({
    where: { id },
  })

  if (!plan) {
    notFound()
  }

  return <EditPlanPage plan={plan} />
}

