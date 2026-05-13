import type { Metadata } from 'next'
import { Hero } from '@/components/sections/home/Hero'
import { ShippedSystems } from '@/components/sections/home/ShippedSystems'
import { LogosBar } from '@/components/sections/home/LogosBar'
import { Advantage } from '@/components/sections/home/Advantage'
import { Metrics } from '@/components/sections/home/Metrics'
import { ServicesGrid } from '@/components/sections/home/ServicesGrid'
import { Process } from '@/components/sections/home/Process'
import { FaqSection } from '@/components/sections/home/FaqSection'
import { ContactSection } from '@/components/sections/home/ContactSection'
import { TechTicker } from '@/components/ui/TechTicker'
import {
  buildPageMeta,
  organizationSchema,
  faqSchema,
  SITE_URL_CONST,
} from '@/lib/seo'

export const metadata: Metadata = buildPageMeta({
  title: 'SynapseStacks — Enterprise Software Engineering Agency | React, Next.js & Cloud',
  description:
    'SynapseStacks builds high-performance digital ecosystems for enterprise companies. Expert web development, mobile apps, SaaS architecture, AI automation, cloud infrastructure & Shopify solutions. 50+ enterprise projects, 99.9% uptime.',
  alternates: {
    canonical: SITE_URL_CONST,
  },
  openGraph: {
    title: "SynapseStacks — Engineering Tomorrow's Infrastructure",
    description:
      'Premium software engineering agency. Web, mobile, SaaS, AI automation, cloud infrastructure & Shopify solutions for visionary companies.',
    url: SITE_URL_CONST,
  },
})

const faqData = [
  {
    question: 'What types of software projects does SynapseStacks handle?',
    answer:
      'We help businesses with custom websites, SaaS platforms, dashboards, AI automation, Shopify builds, API integrations, cloud infrastructure, and modernization work. Some clients come to us for one focused project. Others need a long-term engineering partner who can help shape a wider digital system.',
  },
  {
    question: 'How does SynapseStacks approach software architecture?',
    answer:
      'We start by understanding what the business actually needs the system to do, how it will be used, and what will need to change over time. That helps us make architecture decisions that support growth without making the product harder to manage a few months later.',
  },
  {
    question: 'Does SynapseStacks work with enterprise clients?',
    answer:
      'Yes. We can work with teams that need a more rigorous delivery process, clearer documentation, and dependable release practices. We also work well with growing businesses that want that same level of care without building a full internal engineering department first.',
  },
  {
    question: 'What cloud platforms does SynapseStacks support?',
    answer:
      'We support the major cloud platforms including AWS, Google Cloud, and Azure. The right choice depends on the product, the team, and the operational needs around it. We keep the setup practical so it supports the business instead of becoming its own burden.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: FAQ structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqData)) }}
      />

      <Hero />
      <ShippedSystems />
      {/* <LogosBar /> */}
      <Advantage />
      <Metrics />
      <ServicesGrid />
      <Process />
      <TechTicker />
      <FaqSection items={faqData} />
      <ContactSection />
    </>
  )
}
