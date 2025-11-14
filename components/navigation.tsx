'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Navigation() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const isPublic = !pathname?.startsWith('/portal') && !pathname?.startsWith('/admin')

  if (!isPublic) return null

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 matte-surface border-b border-primary/20"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-display gradient-text">
          Shadow Caster
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/services' && 'text-primary'
            )}
          >
            Services
          </Link>
          <Link
            href="/plans"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/plans' && 'text-primary'
            )}
          >
            Plans
          </Link>
          <Link
            href="/blogs"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname?.startsWith('/blogs') && 'text-primary'
            )}
          >
            Our Blogs
          </Link>
          <Link
            href="/about"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/about' && 'text-primary'
            )}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === '/contact' && 'text-primary'
            )}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Link href={session.user?.role === 'ADMIN' ? '/admin' : '/portal'}>
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button variant="outline" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

