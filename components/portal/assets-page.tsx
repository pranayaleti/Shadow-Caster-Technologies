'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

const getFileTypeIcon = (type: string) => {
  if (type.includes('image')) return '🖼️'
  if (type.includes('video')) return '🎥'
  if (type.includes('document') || type.includes('pdf')) return '📄'
  return '📦'
}

export function AssetsPage({ assets }: any) {
  const [filter, setFilter] = useState('all')

  const filteredAssets = assets.filter((asset: any) => {
    if (filter === 'all') return true
    return asset.type === filter
  })

  const totalSize = assets.reduce((sum: number, asset: any) => sum + (asset.size || 0), 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold font-display gradient-text mb-2">
          Stored Assets
        </h1>
        <p className="text-text-secondary">
          Digital assets in storage
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Stored Assets</CardTitle>
              <CardDescription>Digital assets in storage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display mb-4">
                {assets.length}
              </div>
              <div className="h-16 flex items-center justify-center">
                {assets.length === 0 ? (
                  <div className="w-12 h-12 border-2 border-primary/30 border-dashed rounded flex items-center justify-center">
                    <div className="w-6 h-6 border border-primary/50 rotate-45"></div>
                  </div>
                ) : null}
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
              <CardTitle className="text-lg">Total Storage</CardTitle>
              <CardDescription>Combined size of all assets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display mb-4">
                {formatFileSize(totalSize)}
              </div>
              <div className="h-16 flex items-center justify-center">
                {assets.length === 0 ? (
                  <div className="w-12 h-12 border-2 border-primary/30 border-dashed rounded flex items-center justify-center">
                    <div className="w-6 h-6 border border-primary/50 rotate-45"></div>
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
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
            variant={filter === 'image' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('image')}
          >
            Images
          </Button>
          <Button
            variant={filter === 'video' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('video')}
          >
            Videos
          </Button>
          <Button
            variant={filter === 'document' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('document')}
          >
            Documents
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>All Assets ({filteredAssets.length})</CardTitle>
            <CardDescription>Your digital asset library</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredAssets.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-2 border-primary/30 border-dashed rounded flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 border border-primary/50 rotate-45"></div>
                  </div>
                  <p className="text-text-secondary">
                    No assets found
                  </p>
                </div>
              ) : (
                filteredAssets.map((asset: any, index: number) => (
                  <motion.div
                    key={asset.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-primary/20 hover:shadow-soft transition-all"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-3xl">
                        {getFileTypeIcon(asset.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{asset.name}</h3>
                        <div className="mt-2 flex gap-4 text-sm text-text-secondary">
                          <span className="capitalize">{asset.type}</span>
                          {asset.size && (
                            <span>{formatFileSize(asset.size)}</span>
                          )}
                          <span>
                            Added: {new Date(asset.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {asset.url && (
                        <Link href={asset.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">Download</Button>
                        </Link>
                      )}
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

