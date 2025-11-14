import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getServiceBySlug, services } from '@/lib/services-data'
import { ServiceNavigation } from '@/components/services/service-navigation'
import { Check, ArrowRight } from 'lucide-react'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold font-display mb-4">Service Not Found</h1>
            <Link href="/services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Navigation */}
            <ServiceNavigation currentSlug={slug} />

            {/* Right Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="pt-6 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{service.icon}</span>
                      <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display gradient-text">
                          {service.title}
                        </h1>
                        <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                      </div>
                    </div>
                    <p className="text-xl text-text-secondary leading-relaxed">
                      {service.detailedContent.overview}
                    </p>
                  </div>

                  {service.detailedContent.features && (
                    <section>
                      <h2 className="text-2xl font-semibold font-display mb-4">What We Offer</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.detailedContent.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {service.detailedContent.benefits && (
                    <section>
                      <h2 className="text-2xl font-semibold font-display mb-4">Benefits</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.detailedContent.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-text-secondary">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {service.detailedContent.process && (
                    <section>
                      <h2 className="text-2xl font-semibold font-display mb-4">Our Process</h2>
                      <div className="space-y-3">
                        {service.detailedContent.process.map((step, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                              {index + 1}
                            </div>
                            <p className="text-text-secondary pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  <div className="pt-6 border-t border-primary/20">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

