import type { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/services/ServicesHero'
import { StackStrip } from '@/components/sections/services/StackStrip'
import { ServiceBlock } from '@/components/sections/services/ServiceBlock'
import { ServicesCta } from '@/components/sections/services/ServicesCta'
import { TechTicker } from '@/components/ui/TechTicker'
import { services } from '@/lib/data/services'
import {
  buildPageMeta,
  serviceSchema,
  breadcrumbSchema,
  SITE_URL_CONST,
} from '@/lib/seo'
import styles from './page.module.css'

export const metadata: Metadata = buildPageMeta({
  title: 'Software Engineering Services — Web, Mobile, SaaS, AI & Cloud',
  description:
    'Nine specialised engineering disciplines: React & Next.js web development, React Native & Flutter mobile apps, SaaS architecture, AI/LLM automation, legacy modernization, Shopify Plus e-commerce, Kubernetes cloud DevOps, UI/UX design, and API integration services.',
  alternates: {
    canonical: `${SITE_URL_CONST}/services`,
  },
  openGraph: {
    title: 'Software Engineering Services | SynapseStacks',
    description:
      'Nine disciplines, one partner. Web, mobile, SaaS, AI, cloud, e-commerce, UX & API services from a premium engineering agency.',
    url: `${SITE_URL_CONST}/services`,
  },
})

// JSON-LD: ItemList of services for rich search results
const servicesListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SynapseStacks Engineering Services',
  description: 'Nine specialised software engineering disciplines',
  itemListElement: services.map((service, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: serviceSchema(service.name, service.longDesc),
  })),
}

export default function ServicesPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL_CONST },
              { name: 'Services', url: `${SITE_URL_CONST}/services` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />

      <ServicesHero />
      <StackStrip />

      <div className={styles.servicesList}>
        <div className={styles.servicesListInner}>
          {services.map((service, i) => (
            <ServiceBlock
              key={service.id}
              service={service}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>

      <ServicesCta />
      <TechTicker />
    </>
  )
}
