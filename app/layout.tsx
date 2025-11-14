import type { Metadata } from 'next'
import { Poppins, Orbitron } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Shadow Caster Technologies | Digital Agency',
  description: 'Casting your digital presence into the light. Professional website development, SEO, branding, and digital marketing services.',
  keywords: 'digital agency, web development, SEO, branding, digital marketing',
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Shadow Caster Technologies',
    description: 'Casting your digital presence into the light.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${orbitron.variable}`}>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

