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
    where: { email: 'client@shadowcastertech.com' },
    update: {},
    create: {
      email: 'client@shadowcastertech.com',
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

  // Create additional clients
  const additionalClients = [
    {
      email: 'sarah.johnson@techcorp.com',
      name: 'Sarah Johnson',
      password: 'password123',
      planId: basicPlan.id,
    },
    {
      email: 'mike.chen@startup.io',
      name: 'Mike Chen',
      password: 'password123',
      planId: proPlan.id,
    },
    {
      email: 'emily.davis@enterprise.com',
      name: 'Emily Davis',
      password: 'password123',
      planId: enterprisePlan.id,
    },
    {
      email: 'david.wilson@smallbiz.com',
      name: 'David Wilson',
      password: 'password123',
      planId: basicPlan.id,
    },
    {
      email: 'lisa.brown@agency.net',
      name: 'Lisa Brown',
      password: 'password123',
      planId: proPlan.id,
    },
  ]

  const createdClients = []
  for (const clientData of additionalClients) {
    const hashedPassword = await bcrypt.hash(clientData.password, 10)
    const newClient = await prisma.user.upsert({
      where: { email: clientData.email },
      update: {},
      create: {
        email: clientData.email,
        name: clientData.name,
        password: hashedPassword,
        role: 'CLIENT',
      },
    })

    // Create subscription for each client
    await prisma.subscription.upsert({
      where: { id: `subscription-${newClient.id}` },
      update: {},
      create: {
        id: `subscription-${newClient.id}`,
        userId: newClient.id,
        planId: clientData.planId,
        status: 'ACTIVE',
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        cancelAtPeriodEnd: false,
      },
    })

    createdClients.push(newClient)
  }

  // Get all services for creating campaigns
  const allServices = await prisma.service.findMany()
  const allUsers = await prisma.user.findMany({ where: { role: 'CLIENT' } })

  // Create campaigns for various clients
  const campaignData = [
    {
      name: 'Q1 SEO Campaign',
      description: 'Comprehensive SEO optimization for Q1',
      serviceName: 'Global & Local SEO',
      status: 'ACTIVE',
      startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 75 * 24 * 60 * 60 * 1000),
      metrics: JSON.stringify({
        impressions: 12500,
        clicks: 320,
        conversions: 45,
        ctr: 2.56,
      }),
    },
    {
      name: 'Social Media Boost',
      description: 'Facebook and Instagram ad campaign',
      serviceName: 'PPC & Social Media Ads',
      status: 'ACTIVE',
      startDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
      metrics: JSON.stringify({
        reach: 45000,
        engagements: 1200,
        adSpend: 850,
        roas: 3.2,
      }),
    },
    {
      name: 'Website Redesign',
      description: 'Complete website overhaul and modernization',
      serviceName: 'Website Development & Management',
      status: 'PENDING',
      startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 67 * 24 * 60 * 60 * 1000),
    },
    {
      name: 'Brand Identity Refresh',
      description: 'New logo and brand guidelines',
      serviceName: 'Branding Development & Management',
      status: 'ACTIVE',
      startDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 50 * 24 * 60 * 60 * 1000),
    },
    {
      name: 'Google Business Optimization',
      description: 'Optimize Google Business Profile and local listings',
      serviceName: 'Google Business Profile & Maps',
      status: 'ACTIVE',
      startDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      metrics: JSON.stringify({
        views: 8500,
        searches: 3200,
        directionRequests: 450,
        phoneCalls: 120,
      }),
    },
    {
      name: 'Content Marketing Push',
      description: 'Monthly blog posts and content distribution',
      serviceName: 'Content Distribution',
      status: 'ACTIVE',
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      metrics: JSON.stringify({
        postsPublished: 12,
        totalViews: 18500,
        shares: 320,
        backlinks: 45,
      }),
    },
    {
      name: 'Email Campaign - Spring Sale',
      description: 'Promotional email campaign for spring sale',
      serviceName: 'Email & Text Marketing',
      status: 'COMPLETED',
      startDate: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      metrics: JSON.stringify({
        emailsSent: 5000,
        openRate: 24.5,
        clickRate: 8.2,
        conversions: 125,
      }),
    },
  ]

  for (let i = 0; i < campaignData.length; i++) {
    const campaign = campaignData[i]
    const service = allServices.find(s => s.name === campaign.serviceName)
    const user = allUsers[i % allUsers.length]

    if (service && user) {
      await prisma.campaign.create({
        data: {
          userId: user.id,
          serviceId: service.id,
          name: campaign.name,
          description: campaign.description,
          status: campaign.status,
          startDate: campaign.startDate,
          endDate: campaign.endDate,
          metrics: campaign.metrics,
        },
      })
    }
  }

  // Create invoices
  const invoiceNumbers = ['INV-2024-001', 'INV-2024-002', 'INV-2024-003', 'INV-2024-004', 'INV-2024-005']
  const invoiceStatuses = ['paid', 'paid', 'pending', 'paid', 'failed']
  const invoiceAmounts = [699, 299, 1499, 699, 299]

  for (let i = 0; i < invoiceNumbers.length; i++) {
    const user = allUsers[i % allUsers.length]
    await prisma.invoice.upsert({
      where: { invoiceNumber: invoiceNumbers[i] },
      update: {},
      create: {
        userId: user.id,
        amount: invoiceAmounts[i],
        status: invoiceStatuses[i],
        invoiceNumber: invoiceNumbers[i],
        createdAt: new Date(Date.now() - (i * 10 + 5) * 24 * 60 * 60 * 1000),
      },
    })
  }

  // Create assets for clients
  const assetData = [
    { name: 'Company Logo.png', type: 'image', size: 2048000 },
    { name: 'Brand Guidelines.pdf', type: 'document', size: 5120000 },
    { name: 'Product Photos.zip', type: 'image', size: 15728640 },
    { name: 'Marketing Video.mp4', type: 'video', size: 52428800 },
    { name: 'Social Media Templates.psd', type: 'document', size: 10485760 },
  ]

  for (let i = 0; i < assetData.length; i++) {
    const user = allUsers[i % allUsers.length]
    await prisma.asset.create({
      data: {
        userId: user.id,
        name: assetData[i].name,
        type: assetData[i].type,
        url: `/assets/${user.id}/${assetData[i].name}`,
        size: assetData[i].size,
      },
    })
  }

  // Create leads
  const leadsData = [
    {
      name: 'John Smith',
      email: 'john.smith@newcompany.com',
      phone: '+1-555-0101',
      company: 'New Company Inc',
      message: 'Interested in Pro plan for our startup',
      source: 'contact form',
      status: 'new',
    },
    {
      name: 'Jane Doe',
      email: 'jane.doe@business.com',
      phone: '+1-555-0102',
      company: 'Business Solutions LLC',
      message: 'Looking for enterprise solutions',
      source: 'referral',
      status: 'contacted',
    },
    {
      name: 'Robert Taylor',
      email: 'robert@agency.com',
      phone: '+1-555-0103',
      company: 'Creative Agency',
      message: 'Need help with SEO and content marketing',
      source: 'contact form',
      status: 'qualified',
    },
    {
      name: 'Maria Garcia',
      email: 'maria@retail.com',
      phone: '+1-555-0104',
      company: 'Retail Store Chain',
      message: 'Interested in Basic plan',
      source: 'contact form',
      status: 'new',
    },
    {
      name: 'James Anderson',
      email: 'james@techstartup.io',
      phone: '+1-555-0105',
      company: 'Tech Startup',
      message: 'Need full digital marketing suite',
      source: 'referral',
      status: 'converted',
    },
  ]

  for (const leadData of leadsData) {
    await prisma.lead.create({
      data: leadData,
    })
  }

  // Create communication logs
  const communicationLogs = [
    {
      leadEmail: 'jane.doe@business.com',
      type: 'email',
      subject: 'Welcome to Shadow Caster Technologies',
      content: 'Thank you for your interest. We will contact you soon.',
    },
    {
      leadEmail: 'robert@agency.com',
      type: 'call',
      subject: 'Initial consultation call',
      content: 'Discussed SEO and content marketing needs. Follow-up scheduled.',
    },
    {
      leadEmail: 'james@techstartup.io',
      type: 'meeting',
      subject: 'Proposal presentation',
      content: 'Presented enterprise plan options. Client interested in moving forward.',
    },
  ]

  const allLeads = await prisma.lead.findMany()
  for (const logData of communicationLogs) {
    const lead = allLeads.find(l => l.email === logData.leadEmail)
    if (lead) {
      await prisma.communicationLog.create({
        data: {
          leadId: lead.id,
          type: logData.type,
          subject: logData.subject,
          content: logData.content,
        },
      })
    }
  }

  console.log('Seed data created successfully!')
  console.log('Admin credentials: admin@shadowcastertech.com / admin123')
  console.log('Client credentials: client@shadowcastertech.com / client123')
  console.log(`Created ${additionalClients.length} additional clients`)
  console.log(`Created ${campaignData.length} campaigns`)
  console.log(`Created ${invoiceNumbers.length} invoices`)
  console.log(`Created ${assetData.length} assets`)
  console.log(`Created ${leadsData.length} leads`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

