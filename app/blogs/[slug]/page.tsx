import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getBlogPost, blogPosts } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blogs">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Our Blogs
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-text-secondary mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-text-primary prose-headings:font-display
                  prose-p:text-text-secondary prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-text-primary prose-strong:font-semibold
                  prose-ul:text-text-secondary prose-ol:text-text-secondary
                  prose-li:text-text-secondary prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                  prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3
                  prose-p:mb-4 prose-ul:mb-4 prose-ol:mb-4
                  prose-code:text-primary prose-code:bg-surface prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
              />
            </CardContent>
          </Card>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link href="/contact">
              <Card className="hover:shadow-glow transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold font-display mb-2">Ready to Transform Your Digital Presence?</h3>
                  <p className="text-text-secondary mb-4">
                    Let&apos;s discuss how we can help your business grow
                  </p>
                  <Button>Get in Touch</Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}

function formatBlogContent(content: string): string {
  // Convert markdown-style headers to HTML
  let formatted = content
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
  
  // Convert bold text
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  
  // Convert bullet points
  formatted = formatted.replace(/^- (.*$)/gim, '<li>$1</li>')
  formatted = formatted.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
  
  // Convert numbered lists
  formatted = formatted.replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
  
  // Convert paragraphs (lines that aren't already HTML tags)
  const lines = formatted.split('\n')
  const processedLines: string[] = []
  let currentParagraph: string[] = []
  
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      if (currentParagraph.length > 0) {
        processedLines.push(`<p>${currentParagraph.join(' ')}</p>`)
        currentParagraph = []
      }
      continue
    }
    
    if (trimmed.startsWith('<')) {
      if (currentParagraph.length > 0) {
        processedLines.push(`<p>${currentParagraph.join(' ')}</p>`)
        currentParagraph = []
      }
      processedLines.push(trimmed)
    } else {
      currentParagraph.push(trimmed)
    }
  }
  
  if (currentParagraph.length > 0) {
    processedLines.push(`<p>${currentParagraph.join(' ')}</p>`)
  }
  
  return processedLines.join('\n')
}

