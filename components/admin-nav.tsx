'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function AdminNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/clients', label: 'Clients' },
    { href: '/admin/plans', label: 'Plans & Pricing' },
    { href: '/admin/campaigns', label: 'Campaigns' },
    { href: '/admin/services', label: 'Services' },
    { href: '/admin/analytics', label: 'Analytics' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 matte-surface border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/admin" className="text-xl font-bold font-display gradient-text">
          Admin Dashboard
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href && 'text-primary'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">Home</Button>
          </Link>
          <Button variant="outline" size="sm" onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  )
}

