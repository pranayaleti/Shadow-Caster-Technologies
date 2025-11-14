'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function ClientsList({ clients }: any) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredClients = clients.filter((client: any) =>
    client.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold font-display gradient-text">
            Clients
          </h1>
          <Link href="/admin/clients/new">
            <Button>Add New Client</Button>
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-surface border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>All Clients ({filteredClients.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredClients.length === 0 ? (
              <p className="text-text-secondary text-center py-8">
                No clients found
              </p>
            ) : (
              filteredClients.map((client: any, index: number) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20 hover:shadow-soft transition-all"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{client.name || 'No name'}</h3>
                    <p className="text-sm text-text-secondary">{client.email}</p>
                    <div className="mt-2 flex gap-4 text-sm text-text-secondary">
                      <span>
                        Plan: {client.subscriptions?.[0]?.plan?.name || 'No plan'}
                      </span>
                      <span>
                        Campaigns: {client.campaigns?.length || 0}
                      </span>
                      <span>
                        Joined: {new Date(client.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/clients/${client.id}`}>
                      <Button variant="outline" size="sm">View</Button>
                    </Link>
                    <Link href={`/admin/clients/${client.id}/edit`}>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </Link>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

