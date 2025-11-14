import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { PortalNav } from '@/components/portal-nav'

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  if (session.user?.role === 'ADMIN') {
    redirect('/admin')
  }

  return (
    <div className="min-h-screen bg-background">
      <PortalNav />
      <main className="pt-16">{children}</main>
    </div>
  )
}

