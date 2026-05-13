import type { MetadataRoute } from 'next'
import { servicePages } from '@/lib/data/servicePages'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://synapsestacks.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work/chainblocks`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...servicePages.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
