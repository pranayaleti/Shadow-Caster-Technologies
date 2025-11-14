import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NewPlanPage } from '@/components/admin/new-plan-page'

export default async function AdminNewPlanPage() {
  const session = await getServerSession(authOptions)
  
  if (!session?.user?.id) {
    return null
  }

  return <NewPlanPage />
}

