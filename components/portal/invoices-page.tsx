'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'paid':
      return 'bg-green-500/20 text-green-500'
    case 'pending':
      return 'bg-yellow-500/20 text-yellow-500'
    case 'failed':
      return 'bg-red-500/20 text-red-500'
    default:
      return 'bg-gray-500/20 text-gray-500'
  }
}

export function InvoicesPage({ invoices }: any) {
  const [filter, setFilter] = useState('all')

  const filteredInvoices = invoices.filter((invoice: any) => {
    if (filter === 'all') return true
    return invoice.status.toLowerCase() === filter.toLowerCase()
  })

  const totalPaid = invoices
    .filter((inv: any) => inv.status.toLowerCase() === 'paid')
    .reduce((sum: number, inv: any) => sum + inv.amount, 0)

  const pendingAmount = invoices
    .filter((inv: any) => inv.status.toLowerCase() === 'pending')
    .reduce((sum: number, inv: any) => sum + inv.amount, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-2">
          Invoices
        </h1>
        <p className="text-text-secondary">
          View and manage your billing history
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Invoices</CardTitle>
              <CardDescription>All invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">
                {invoices.length}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Paid</CardTitle>
              <CardDescription>Amount paid</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">
                ${totalPaid.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pending</CardTitle>
              <CardDescription>Amount pending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">
                ${pendingAmount.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <div className="flex gap-2 mb-4">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'paid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('paid')}
          >
            Paid
          </Button>
          <Button
            variant={filter === 'pending' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('pending')}
          >
            Pending
          </Button>
          <Button
            variant={filter === 'failed' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('failed')}
          >
            Failed
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Invoice History ({filteredInvoices.length})</CardTitle>
            <CardDescription>Your billing and payment records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredInvoices.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-2 border-primary/30 border-dashed rounded flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 border border-primary/50 rotate-45"></div>
                  </div>
                  <p className="text-text-secondary">
                    No invoices found
                  </p>
                </div>
              ) : (
                filteredInvoices.map((invoice: any, index: number) => (
                  <motion.div
                    key={invoice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20 hover:shadow-soft transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-semibold text-lg">{invoice.invoiceNumber}</h3>
                        <span className={`px-2 py-1 rounded text-sm ${getStatusColor(invoice.status)}`}>
                          {invoice.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex gap-4 text-sm text-text-secondary">
                        <span>
                          Amount: <span className="text-text-primary font-semibold">${invoice.amount.toFixed(2)}</span>
                        </span>
                        <span>
                          Date: {new Date(invoice.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

