'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface TestCredentialCardProps {
  title: string
  email: string
  password: string
  role: string
  onFill: () => void
}

function TestCredentialCard({ title, email, password, role, onFill }: TestCredentialCardProps) {
  return (
    <div className="p-3 bg-surface/50 rounded-md border border-primary/10">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-sm">{title}</p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onFill}
              className="text-xs px-4 py-1.5 h-auto border-primary/30 text-text-secondary hover:text-primary hover:bg-primary/5"
            >
              Fill
            </Button>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-text-secondary w-16">Email:</span>
              <span className="font-mono text-text">{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-secondary w-16">Password:</span>
              <span className="font-mono text-text">{password}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-secondary w-16">Role:</span>
              <span className="text-text">{role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        router.push('/portal')
        router.refresh()
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
        suppressHydrationWarning
      >
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-display gradient-text">
              Sign In
            </CardTitle>
            <CardDescription>
              Welcome back to Shadow Caster Technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-500 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-surface border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-primary/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-surface text-text-secondary">Or continue with</span>
                </div>
              </div>
              <Button
                type="button"
                variant="outline"
                className="w-full mt-4"
                onClick={() => signIn('google', { callbackUrl: '/portal' })}
              >
                Sign in with Google
              </Button>
            </div>
            <p className="mt-6 text-center text-sm text-text-secondary">
              Don&apos;t have an account?{' '}
              <Link href="/auth/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
            
            {/* Test Credentials */}
            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-md">
              <p className="text-sm font-semibold text-primary mb-3 text-center">
                Test Credentials
              </p>
              <p className="text-xs text-text-secondary mb-4 text-center">
                Use these credentials to sign in for testing purposes
              </p>
              <div className="space-y-3">
                <TestCredentialCard
                  title="Admin Account"
                  email="admin@shadowcastertech.com"
                  password="admin123"
                  role="Administrator"
                  onFill={() => {
                    setEmail('admin@shadowcastertech.com')
                    setPassword('admin123')
                  }}
                />
                <TestCredentialCard
                  title="Client Account"
                  email="client@shadowcastertech.com"
                  password="client123"
                  role="Client"
                  onFill={() => {
                    setEmail('client@shadowcastertech.com')
                    setPassword('client123')
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

