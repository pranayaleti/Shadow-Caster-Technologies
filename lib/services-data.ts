export interface Service {
  id: number
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: string
  expandedContent: string
  detailedContent: {
    overview: string
    features: string[]
    benefits: string[]
    process?: string[]
  }
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'website-development',
    title: 'Website Development & Management',
    shortTitle: 'Website Development',
    description: 'Custom websites built with modern technologies, optimized for performance and conversion.',
    icon: '🌐',
    expandedContent: 'We build responsive, fast-loading websites using the latest frameworks like Next.js and React. Our sites are optimized for Core Web Vitals, mobile-first design, and conversion optimization. We handle everything from initial design to ongoing maintenance, security updates, and performance monitoring.',
    detailedContent: {
      overview: 'Our development team works with cutting-edge technology to provide the best website services. We make websites built for performance and to leave a lasting impression for anyone visiting your site. With our dedicated team of experts, our strategy is proven for every industry we serve.',
      features: [
        'Responsive design optimized for all devices',
        'Fast loading times and Core Web Vitals optimization',
        'Modern frameworks: Next.js, React, and more',
        'Mobile-first design approach',
        'Conversion optimization and A/B testing',
        'Ongoing maintenance and security updates',
        'Performance monitoring and analytics',
        'SEO-friendly architecture',
      ],
      benefits: [
        'Improved user experience and engagement',
        'Higher conversion rates',
        'Better search engine rankings',
        'Mobile-optimized for all devices',
        'Secure and regularly updated',
        'Scalable architecture for growth',
      ],
      process: [
        'Discovery and requirements gathering',
        'Design and wireframing',
        'Development and implementation',
        'Testing and quality assurance',
        'Launch and deployment',
        'Ongoing maintenance and support',
      ],
    },
  },
  {
    id: 2,
    slug: 'business-listings',
    title: 'Business Listings & Directories',
    shortTitle: 'Business Listings',
    description: 'Manage your online presence across all major directories and listing platforms.',
    icon: '📋',
    expandedContent: 'We ensure your business is listed consistently across Google My Business, Yelp, Bing Places, industry-specific directories, and local business listings. We maintain accurate NAP (Name, Address, Phone) information, respond to reviews, and update business hours and special offers regularly.',
    detailedContent: {
      overview: 'Managing your online presence across directories is crucial for local visibility. We ensure your business is listed consistently and accurately across all major platforms, helping you reach more customers and improve your local search rankings.',
      features: [
        'Google My Business optimization',
        'Yelp, Bing Places, and other major directories',
        'Industry-specific directory listings',
        'NAP (Name, Address, Phone) consistency',
        'Review management and responses',
        'Regular updates to business information',
        'Special offers and promotions',
        'Local citation building',
      ],
      benefits: [
        'Increased local visibility',
        'Improved local SEO rankings',
        'More customer touchpoints',
        'Better online reputation management',
        'Consistent business information',
        'Higher trust and credibility',
      ],
    },
  },
  {
    id: 3,
    slug: 'branding',
    title: 'Branding Development & Management',
    shortTitle: 'Branding',
    description: 'Complete brand identity design, guidelines, and asset management.',
    icon: '🎨',
    expandedContent: 'From logo design to complete brand guidelines, we create cohesive brand identities that resonate with your audience. We develop brand voice, color palettes, typography, and visual assets. All brand materials are stored securely and easily accessible for your team and partners.',
    detailedContent: {
      overview: 'A strong brand identity is essential for standing out in today&apos;s competitive market. We create cohesive brand identities that resonate with your audience and set you apart from competitors. From logo design to complete brand guidelines, we ensure consistency across all touchpoints.',
      features: [
        'Logo design and brand identity',
        'Complete brand guidelines',
        'Color palette and typography selection',
        'Brand voice and messaging',
        'Visual asset creation',
        'Brand asset management',
        'Secure cloud storage',
        'Easy access for your team',
      ],
      benefits: [
        'Professional brand presence',
        'Consistent brand experience',
        'Increased brand recognition',
        'Better customer connection',
        'Competitive differentiation',
        'Scalable brand system',
      ],
    },
  },
  {
    id: 4,
    slug: 'seo',
    title: 'Global & Local SEO',
    shortTitle: 'SEO',
    description: 'Comprehensive SEO strategies to improve your search engine rankings.',
    icon: '🔍',
    expandedContent: 'Our SEO services include keyword research, on-page optimization, technical SEO audits, link building, and content strategy. We optimize for both global reach and local visibility, ensuring your business appears when customers search for your products or services.',
    detailedContent: {
      overview: 'Our approach to handling the complexities of SEO is handled by focusing on strengthening site content, its usability and authority. We aim to make it valuable not only for search engines but your users as well when finding your business.',
      features: [
        'Keyword research and strategy',
        'On-page optimization',
        'Technical SEO audits',
        'Link building and outreach',
        'Content strategy and optimization',
        'Local SEO optimization',
        'Global SEO strategies',
        'Regular performance reporting',
      ],
      benefits: [
        'Higher search engine rankings',
        'Increased organic traffic',
        'Better visibility for your business',
        'Improved user experience',
        'Long-term sustainable growth',
        'Competitive advantage',
      ],
    },
  },
  {
    id: 5,
    slug: 'google-business',
    title: 'Google Business Profile & Maps',
    shortTitle: 'Google Business',
    description: 'Optimize your Google Business Profile to dominate local search results.',
    icon: '📍',
    expandedContent: 'We optimize your Google Business Profile with high-quality photos, regular posts, accurate business information, and prompt review responses. Our strategies help you appear in local search results, Google Maps, and the "near me" searches that drive foot traffic.',
    detailedContent: {
      overview: 'Your Google Business Profile is often the first impression customers have of your business online. We optimize it to dominate local search results and help you appear when customers search for businesses like yours in your area.',
      features: [
        'Complete profile optimization',
        'High-quality photo management',
        'Regular Google Posts',
        'Accurate business information',
        'Review response management',
        'Q&A section optimization',
        'Google Maps optimization',
        'Local search visibility',
      ],
      benefits: [
        'Appear in local search results',
        'Higher visibility on Google Maps',
        'More "near me" search appearances',
        'Increased foot traffic',
        'Better customer engagement',
        'Improved local authority',
      ],
    },
  },
  {
    id: 6,
    slug: 'ppc-ads',
    title: 'PPC & Social Media Ads',
    shortTitle: 'Paid Search',
    description: 'Targeted ad campaigns on Google, Facebook, Instagram, and more.',
    icon: '📢',
    expandedContent: 'We create and manage pay-per-click campaigns on Google Ads, Facebook, Instagram, LinkedIn, and other platforms. Our data-driven approach includes A/B testing, audience targeting, ad copy optimization, and continuous performance monitoring to maximize your ROI.',
    detailedContent: {
      overview: 'Paid search is one of the single most targeted and powerful advertising mediums available for a business. It is also one of the most competitive environments where only the smartest advertisers will manage to succeed. We help you navigate this landscape with data-driven strategies.',
      features: [
        'Google Ads campaign management',
        'Facebook and Instagram advertising',
        'LinkedIn and other platform ads',
        'A/B testing and optimization',
        'Audience targeting and segmentation',
        'Ad copy and creative optimization',
        'Performance monitoring and reporting',
        'ROI maximization strategies',
      ],
      benefits: [
        'Immediate visibility and traffic',
        'Highly targeted audience reach',
        'Measurable ROI and results',
        'Flexible budget management',
        'Quick campaign adjustments',
        'Competitive advantage',
      ],
    },
  },
  {
    id: 7,
    slug: 'performance-tracking',
    title: 'Performance Tracking',
    shortTitle: 'Analytics',
    description: 'Real-time analytics and reporting to measure your digital success.',
    icon: '📊',
    expandedContent: 'We set up comprehensive tracking using Google Analytics, Search Console, and custom dashboards. You&apos;ll receive regular reports on website traffic, conversion rates, campaign performance, SEO rankings, and ROI. Data-driven insights help us optimize your digital strategy continuously.',
    detailedContent: {
      overview: 'With today&apos;s fast pace of evolving technology, it&apos;s vital for your business that your website and campaigns are running efficiently. We provide comprehensive tracking and analysis to ensure you&apos;re getting the best results from your digital marketing efforts.',
      features: [
        'Google Analytics setup and configuration',
        'Google Search Console monitoring',
        'Custom dashboard creation',
        'Conversion tracking',
        'Campaign performance analysis',
        'SEO ranking monitoring',
        'Regular performance reports',
        'Data-driven optimization recommendations',
      ],
      benefits: [
        'Clear visibility into performance',
        'Data-driven decision making',
        'Identify optimization opportunities',
        'Measure ROI accurately',
        'Track progress over time',
        'Continuous improvement',
      ],
    },
  },
  {
    id: 8,
    slug: 'content-distribution',
    title: 'Content Distribution',
    shortTitle: 'Content Marketing',
    description: 'Strategic content creation and distribution across channels.',
    icon: '📤',
    expandedContent: 'We create and distribute engaging content across your website, blog, social media, email newsletters, and industry publications. Our content strategy focuses on providing value to your audience while improving SEO, building brand authority, and driving conversions.',
    detailedContent: {
      overview: 'Our website services go beyond your actual website! When Shadow Caster Technologies launches your content marketing campaign, we&apos;ll create and manage educational, engaging, and personality-enriched content that will represent your brand across all channels.',
      features: [
        'Blog content creation',
        'Social media content',
        'Email newsletter content',
        'Website content optimization',
        'Content distribution strategy',
        'SEO-optimized content',
        'Content calendar management',
        'Performance tracking and optimization',
      ],
      benefits: [
        'Increased brand awareness',
        'Improved SEO rankings',
        'Better audience engagement',
        'Established thought leadership',
        'Higher conversion rates',
        'Consistent brand messaging',
      ],
    },
  },
  {
    id: 9,
    slug: 'email-marketing',
    title: 'Email & Text Marketing',
    shortTitle: 'Email Marketing',
    description: 'Automated email and SMS campaigns to engage and convert customers.',
    icon: '✉️',
    expandedContent: 'We design and execute automated email sequences, newsletters, promotional campaigns, and SMS marketing. Our campaigns are personalized, mobile-optimized, and designed to nurture leads, retain customers, and drive repeat business with measurable results.',
    detailedContent: {
      overview: 'Email and SMS marketing remain among the most effective channels for engaging customers and driving conversions. We create personalized, automated campaigns that nurture leads, retain customers, and drive repeat business with measurable results.',
      features: [
        'Automated email sequences',
        'Newsletter campaigns',
        'Promotional email campaigns',
        'SMS marketing campaigns',
        'Personalization and segmentation',
        'Mobile-optimized design',
        'A/B testing and optimization',
        'Performance tracking and analytics',
      ],
      benefits: [
        'Direct customer communication',
        'High ROI and conversion rates',
        'Automated lead nurturing',
        'Customer retention',
        'Personalized messaging',
        'Measurable results',
      ],
    },
  },
  {
    id: 10,
    slug: 'digital-assets',
    title: 'Digital Asset Storage',
    shortTitle: 'Asset Storage',
    description: 'Secure cloud storage for all your branding and marketing materials.',
    icon: '💾',
    expandedContent: 'We provide secure, organized cloud storage for all your digital assets including logos, images, videos, documents, and marketing materials. Your assets are categorized, tagged, and easily searchable, making it simple for your team to access the right materials when needed.',
    detailedContent: {
      overview: 'Organized and accessible digital assets are essential for maintaining brand consistency and efficiency. We provide secure cloud storage for all your branding and marketing materials, making it easy for your team to find and use the right assets when needed.',
      features: [
        'Secure cloud storage',
        'Organized file structure',
        'Categorization and tagging',
        'Easy search functionality',
        'Version control',
        'Access management',
        'Regular backups',
        'Team collaboration features',
      ],
      benefits: [
        'Easy asset access',
        'Brand consistency',
        'Time savings',
        'Secure storage',
        'Team collaboration',
        'Organized workflow',
      ],
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug)
}

