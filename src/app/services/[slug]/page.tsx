import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServicePageContent } from '@/components/sections/services/ServicePageContent'
import { ServicesCta } from '@/components/sections/services/ServicesCta'
import { faqSchema, breadcrumbSchema, serviceSchema, SITE_URL_CONST } from '@/lib/seo'
import { servicePages, servicePagesBySlug } from '@/lib/data/servicePages'

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicePagesBySlug[slug]

  if (!service) {
    return {}
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `${SITE_URL_CONST}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | SynapseStacks`,
      description: service.seoDescription,
      url: `${SITE_URL_CONST}/services/${service.slug}`,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicePagesBySlug[slug]

  if (!service) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL_CONST },
              { name: 'Services', url: `${SITE_URL_CONST}/services` },
              { name: service.name, url: `${SITE_URL_CONST}/services/${service.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service.name, service.seoDescription)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faq)),
        }}
      />

      <ServicePageContent service={service} />
      <ServicesCta />
    </>
  )
}
