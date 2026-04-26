import type { Metadata } from 'next'
import { Hero } from '@/components/sections/home/Hero'
import { Metrics } from '@/components/sections/home/Metrics'
import { ServicesGrid } from '@/components/sections/home/ServicesGrid'
import { Advantage } from '@/components/sections/home/Advantage'
import { Process } from '@/components/sections/home/Process'
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
      'SynapseStacks specialises in nine engineering disciplines: full-service web development, mobile & cross-platform apps, SaaS architecture, AI & intelligent automation, legacy application modernization, e-commerce & Shopify solutions, cloud infrastructure & DevOps, UI/UX design, and API development & systems integration.',
  },
  {
    question: 'How does SynapseStacks approach software architecture?',
    answer:
      'We treat software as a living system, not a feature list. Every engagement starts with systems thinking — mapping constraints, growth trajectory, and architectural requirements before writing code. We use microservices, edge computing, and elastic databases to build for scale from day one.',
  },
  {
    question: 'Does SynapseStacks work with enterprise clients?',
    answer:
      'Yes. SynapseStacks has delivered 50+ enterprise projects across web, mobile, cloud, and AI disciplines. We operate with the rigor of an enterprise engineering organisation — strict CI/CD, TDD, peer reviews, and zero-downtime deployments.',
  },
  {
    question: 'What cloud platforms does SynapseStacks support?',
    answer:
      'We support all major cloud providers: AWS, Google Cloud Platform (GCP), and Microsoft Azure. Our Infrastructure as Code approach uses Terraform and Kubernetes for consistent, auditable deployments across any cloud.',
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
      <Metrics />
      <ServicesGrid />
      <Advantage />
      <Process />
      <ContactSection />
    </>
  )
}
