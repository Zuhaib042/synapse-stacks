import { colors } from '@/styles/tokens'

export interface Service {
  id: string
  num: string
  slug: string
  name: string
  shortDesc: string
  longDesc: string
  chips: string[]
  tag: string
  accentColor: string
  visual: {
    gradient: string
    label: string
  }
}

export const services: Service[] = [
  {
    id: 'web',
    num: '01',
    slug: 'web-development',
    name: 'Full-Service Web Development',
    shortDesc:
      'End-to-end web architectures built for performance, scale, and seamless user experiences using React, Vue, and Next.js.',
    longDesc:
      'We build custom web applications using modern frameworks like React, Vue, and Next.js. Our approach prioritises separation of concerns, headless architecture, and performance-first delivery across global CDNs, so your product is fast from day one and stays fast as you grow.',
    chips: ['React', 'Next.js', 'Vue', 'Headless CMS', 'CDN Optimisation', 'SSR / SSG'],
    tag: 'Frontend · Headless · CDN',
    accentColor: colors.yellow,
    visual: {
      gradient: 'linear-gradient(135deg, #1C1914 60%, #2A2520)',
      label: 'Web Architecture',
    },
  },
  {
    id: 'mobile',
    num: '02',
    slug: 'mobile-app-development',
    name: 'Mobile & Cross-Platform Engineering',
    shortDesc:
      'Native-feeling applications deployed across platforms from a single, robust codebase with deep OS integrations.',
    longDesc:
      'We deliver native iOS and Android experiences alongside efficient cross-platform solutions using React Native and Flutter. Fluid animations, offline capabilities, and deep OS integrations built to feel like the apps your users already trust.',
    chips: ['React Native', 'Flutter', 'iOS', 'Android', 'Offline Mode', 'Deep OS Integration'],
    tag: 'React Native · Flutter · iOS · Android',
    accentColor: colors.blue,
    visual: {
      gradient: 'linear-gradient(135deg, #1a2a4a 60%, #0d1a30)',
      label: 'Mobile Engineering',
    },
  },
  {
    id: 'saas',
    num: '03',
    slug: 'saas-architecture',
    name: 'Scalable SaaS Architecture',
    shortDesc:
      'Multi-tenant infrastructure with secure data isolation and exponential user growth built in from day one.',
    longDesc:
      'We design SaaS systems from database schema to subscription billing, with secure customer data isolation, efficient shared compute, and the architectural foundations to handle user growth that compounds fast.',
    chips: ['Multi-tenancy', 'Data Isolation', 'Stripe / Billing', 'Postgres', 'Elastic Scaling', 'Role-based Access'],
    tag: 'Multi-tenant · Billing · Scale',
    accentColor: colors.green,
    visual: {
      gradient: 'linear-gradient(135deg, #1a2e1a 60%, #0d1f0d)',
      label: 'SaaS Architecture',
    },
  },
  {
    id: 'ai',
    num: '04',
    slug: 'ai-automation',
    name: 'AI & Intelligent Automation',
    shortDesc:
      'Embedding LLMs, computer vision, and predictive models into your workflows to automate repetitive cognitive tasks at scale.',
    longDesc:
      "We integrate LLMs, computer vision, and predictive models into your existing systems to automate repetitive cognitive tasks, extract insights from data, and enable your team to operate at a scale that wasn't previously possible.",
    chips: ['LLM Integration', 'OpenAI / Anthropic', 'Computer Vision', 'Fine-tuning', 'Predictive Models', 'Workflow Automation'],
    tag: 'LLMs · Computer Vision · OpenAI',
    accentColor: colors.pink,
    visual: {
      gradient: 'linear-gradient(135deg, #2a1a22 60%, #1a0d16)',
      label: 'AI Automation',
    },
  },
  {
    id: 'legacy',
    num: '05',
    slug: 'legacy-modernization',
    name: 'Legacy Application Modernization',
    shortDesc:
      'Systematic migration of monolithic systems into containerised microservices without disrupting live business operations.',
    longDesc:
      'We apply strangler fig migration patterns to systematically decouple and containerise your legacy systems, modernising your architecture without halting your live business operations. No big-bang rewrites.',
    chips: ['Strangler Fig', 'Microservices', 'Docker', 'Event-Driven', 'Zero Downtime', 'Incremental Migration'],
    tag: 'Microservices · Docker · Migration',
    accentColor: colors.purple,
    visual: {
      gradient: 'linear-gradient(135deg, #1e1a2a 60%, #130d1f)',
      label: 'Legacy Modernization',
    },
  },
  {
    id: 'ecommerce',
    num: '06',
    slug: 'ecommerce-shopify',
    name: 'E-Commerce & Shopify Solutions',
    shortDesc:
      'High-conversion storefronts with headless commerce, complex ERP integrations, and sub-second load times.',
    longDesc:
      'We build Shopify Plus and headless commerce storefronts integrated with complex ERP and fulfillment systems. Sub-second load times, custom checkout flows, and inventory logic built for serious commercial volume.',
    chips: ['Shopify Plus', 'Headless Commerce', 'ERP Integration', 'Custom Checkout', 'Inventory APIs', 'Conversion Optimisation'],
    tag: 'Shopify Plus · Headless · ERP',
    accentColor: colors.yellow,
    visual: {
      gradient: 'linear-gradient(135deg, #2a2210 60%, #1f1a0a)',
      label: 'E-Commerce Solutions',
    },
  },
  {
    id: 'cloud',
    num: '07',
    slug: 'cloud-infrastructure-devops',
    name: 'Cloud Infrastructure & DevOps',
    shortDesc:
      'Terraform, Kubernetes, and automated CI/CD pipelines with fault tolerance across AWS, GCP, and Azure.',
    longDesc:
      'Infrastructure as Code with Terraform, Kubernetes orchestration, and automated CI/CD pipelines, with fault tolerance, high availability, and cloud security baked in. We support AWS, GCP, and Azure.',
    chips: ['Terraform', 'Kubernetes', 'CI/CD', 'AWS', 'GCP', 'Azure', 'High Availability'],
    tag: 'AWS · GCP · Azure · K8s · Terraform',
    accentColor: colors.blue,
    visual: {
      gradient: 'linear-gradient(135deg, #101a2a 60%, #0a1020)',
      label: 'Cloud & DevOps',
    },
  },
  {
    id: 'ux',
    num: '08',
    slug: 'ui-ux-design',
    name: 'UI/UX Design & Prototyping',
    shortDesc:
      'High-fidelity interface design rooted in user psychology, complex journey mapping, and premium accessible aesthetics.',
    longDesc:
      'We create design systems, wireframes, and interactive prototypes rooted in user psychology and interaction logic. Accessible, premium aesthetics with complex user journey mapping that accounts for how people actually behave.',
    chips: ['Design Systems', 'Figma', 'Prototyping', 'User Research', 'Accessibility', 'Journey Mapping'],
    tag: 'Design Systems · Figma · Prototyping',
    accentColor: colors.green,
    visual: {
      gradient: 'linear-gradient(135deg, #1a2a1a 60%, #0d200d)',
      label: 'UI/UX Design',
    },
  },
  {
    id: 'api',
    num: '09',
    slug: 'api-integration',
    name: 'API Development & Systems Integration',
    shortDesc:
      'RESTful and GraphQL APIs connecting fragmented software ecosystems including CRM, ERP, and third-party platforms, securely.',
    longDesc:
      'We design RESTful and GraphQL APIs and connect fragmented business software including CRM, ERP, and third-party SaaS into unified data pipelines. Secure integration architecture that gives every system in your stack a clear reason to exist.',
    chips: ['REST APIs', 'GraphQL', 'CRM Integration', 'ERP Integration', 'Webhooks', 'Data Pipelines'],
    tag: 'REST · GraphQL · CRM · ERP',
    accentColor: colors.pink,
    visual: {
      gradient: 'linear-gradient(135deg, #2a101a 60%, #1f0a12)',
      label: 'API & Integrations',
    },
  },
]

export const techStack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Kubernetes',
  'Terraform', 'AWS', 'GCP', 'Azure', 'OpenAI', 'GraphQL',
  'Shopify Plus', 'Flutter', 'React Native', 'PostgreSQL', 'Docker',
]
