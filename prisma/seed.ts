import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@shadowcastertech.com' },
    update: {},
    create: {
      email: 'admin@shadowcastertech.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Create test client
  const clientPassword = await bcrypt.hash('client123', 10)
  const client = await prisma.user.upsert({
    where: { email: 'client@example.com' },
    update: {},
    create: {
      email: 'client@example.com',
      name: 'Test Client',
      password: clientPassword,
      role: 'CLIENT',
    },
  })

  // Create plans
  const basicPlan = await prisma.plan.upsert({
    where: { id: 'basic-plan' },
    update: {},
    create: {
      id: 'basic-plan',
      name: 'Basic',
      description: 'Perfect for small businesses getting started',
      price: 299,
      interval: 'month',
      features: JSON.stringify([
        'Website Development & Management',
        'Basic SEO Setup',
        'Google Business Profile Setup',
        'Monthly Performance Report',
        'Email Support',
      ]),
      isActive: true,
    },
  })

  const proPlan = await prisma.plan.upsert({
    where: { id: 'pro-plan' },
    update: {},
    create: {
      id: 'pro-plan',
      name: 'Pro',
      description: 'Ideal for growing businesses',
      price: 699,
      interval: 'month',
      features: JSON.stringify([
        'Everything in Basic',
        'Advanced SEO & Content Strategy',
        'PPC Campaign Management',
        'Social Media Ad Campaigns',
        'Business Listings Management',
        'Weekly Performance Reports',
        'Priority Support',
        'Digital Asset Storage (50GB)',
      ]),
      isActive: true,
    },
  })

  const enterprisePlan = await prisma.plan.upsert({
    where: { id: 'enterprise-plan' },
    update: {},
    create: {
      id: 'enterprise-plan',
      name: 'Enterprise',
      description: 'Complete digital transformation',
      price: 1499,
      interval: 'month',
      features: JSON.stringify([
        'Everything in Pro',
        'Custom Branding Development',
        'Multi-Channel Marketing Campaigns',
        'Advanced Analytics & Reporting',
        'Dedicated Account Manager',
        '24/7 Priority Support',
        'Unlimited Digital Asset Storage',
        'Custom Integrations',
      ]),
      isActive: true,
    },
  })

  // Create services
  const services = [
    {
      name: 'Website Development & Management',
      description: 'Custom websites built with modern technologies',
      category: 'Development',
    },
    {
      name: 'Business Listings & Directories',
      description: 'Manage your online presence across all major directories',
      category: 'Management',
    },
    {
      name: 'Branding Development & Management',
      description: 'Complete brand identity design and guidelines',
      category: 'Branding',
    },
    {
      name: 'Global & Local SEO',
      description: 'Comprehensive SEO strategies',
      category: 'SEO',
    },
    {
      name: 'Google Business Profile & Maps',
      description: 'Optimize your Google Business Profile',
      category: 'SEO',
    },
    {
      name: 'PPC & Social Media Ads',
      description: 'Targeted ad campaigns on multiple platforms',
      category: 'Marketing',
    },
    {
      name: 'Performance Tracking',
      description: 'Real-time analytics and reporting',
      category: 'Analytics',
    },
    {
      name: 'Content Distribution',
      description: 'Strategic content creation and distribution',
      category: 'Content',
    },
    {
      name: 'Email & Text Marketing',
      description: 'Automated email and SMS campaigns',
      category: 'Marketing',
    },
    {
      name: 'Digital Asset Storage',
      description: 'Secure cloud storage for branding materials',
      category: 'Storage',
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.name.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: {
        id: service.name.toLowerCase().replace(/\s+/g, '-'),
        name: service.name,
        description: service.description,
        category: service.category,
        isActive: true,
      },
    })
  }

  // Create subscription for client
  await prisma.subscription.upsert({
    where: { id: 'client-subscription' },
    update: {},
    create: {
      id: 'client-subscription',
      userId: client.id,
      planId: proPlan.id,
      status: 'ACTIVE',
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      cancelAtPeriodEnd: false,
    },
  })

  console.log('Seed data created successfully!')
  console.log('Admin credentials: admin@shadowcastertech.com / admin123')
  console.log('Client credentials: client@example.com / client123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

