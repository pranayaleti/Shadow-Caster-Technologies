import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { AdminNav } from '@/components/admin-nav'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  if (session.user?.role !== 'ADMIN') {
    redirect('/portal')
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <main className="pt-16">{children}</main>
    </div>
  )
}

