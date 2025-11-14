'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-display gradient-text">
              Authentication Error
            </CardTitle>
            <CardDescription>
              There was an error signing you in
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-text-secondary text-center">
              Please try again or contact support if the problem persists.
            </p>
            <Link href="/auth/signin" className="block">
              <Button className="w-full">Try Again</Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="outline" className="w-full">Go Home</Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

