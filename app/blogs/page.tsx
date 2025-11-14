'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { blogPosts, getAllCategories } from '@/lib/blog-data'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const categories = getAllCategories()

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              Our Blogs
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Insights, tips, and strategies to help your business thrive in the digital world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/blogs/${post.slug}`}>
                  <Card className="h-full hover:shadow-glow transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                        <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-text-secondary">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold font-display mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blogs?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-surface border border-primary/20 rounded-md hover:bg-primary/10 hover:border-primary transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

