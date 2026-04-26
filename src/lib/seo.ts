import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synapsestacks.com'
const SITE_NAME = 'SynapseStacks'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SynapseStacks — Enterprise Software Engineering Agency',
    template: '%s | SynapseStacks',
  },
  description:
    'SynapseStacks builds high-performance digital ecosystems for enterprise companies. Expert web development, mobile apps, SaaS architecture, AI automation, cloud infrastructure & Shopify solutions.',
  keywords: [
    'software engineering agency',
    'enterprise software development',
    'custom web development',
    'React Next.js development',
    'SaaS architecture consulting',
    'AI automation integration',
    'cloud infrastructure DevOps',
    'legacy system modernization',
    'Shopify Plus development',
    'mobile app development',
    'React Native Flutter',
    'scalable software architecture',
    'API integration services',
    'Kubernetes Terraform AWS',
    'software development company',
    'digital transformation agency',
    'microservices architecture',
    'full stack development team',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'SynapseStacks — Engineering Tomorrow\'s Infrastructure',
    description:
      'Premium software engineering agency specialising in web, mobile, SaaS, AI automation, cloud infrastructure, and Shopify solutions.',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'SynapseStacks — Engineering Tomorrow\'s Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SynapseStacks — Engineering Tomorrow\'s Infrastructure',
    description:
      'Premium software engineering agency. Web, mobile, SaaS, AI, cloud & Shopify solutions.',
    images: [`${SITE_URL}/og-image.png`],
    creator: '@synapsestacks',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export function buildPageMeta(overrides: Partial<Metadata>): Metadata {
  return { ...defaultMetadata, ...overrides }
}

export const SITE_URL_CONST = SITE_URL

// JSON-LD helpers
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Premium software engineering agency specialising in web, mobile, SaaS, AI automation, cloud infrastructure, and systems integration.',
    sameAs: [
      `https://twitter.com/synapsestacks`,
      `https://github.com/synapsestacks`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@synapsestacks.com',
    },
    offers: {
      '@type': 'AggregateOffer',
      description: 'Enterprise software engineering services',
    },
  }
}

export function serviceSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}
