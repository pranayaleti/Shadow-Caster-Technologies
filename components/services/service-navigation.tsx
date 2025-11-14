'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { services } from '@/lib/services-data'
import { cn } from '@/lib/utils'

interface ServiceNavigationProps {
  currentSlug: string
}

export function ServiceNavigation({ currentSlug }: ServiceNavigationProps) {
  const pathname = usePathname()

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-2">
        <h3 className="text-lg font-semibold font-display mb-4">Services</h3>
        {services.map((s) => (
          <Link
            key={s.id}
            href={`/services/${s.slug}`}
            className={cn(
              'block p-4 rounded-lg border transition-all',
              pathname === `/services/${s.slug}` || currentSlug === s.slug
                ? 'bg-primary/20 border-primary text-primary'
                : 'bg-surface border-primary/20 hover:border-primary/40 hover:bg-surface/80'
            )}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <span className="font-medium">{s.shortTitle}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

