import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { Philosophy } from '@/components/sections/about/Philosophy'
import { Values } from '@/components/sections/about/Values'
import { Approach } from '@/components/sections/about/Approach'
import { Partnership } from '@/components/sections/about/Partnership'
import { AboutCta } from '@/components/sections/about/AboutCta'
import { TechTicker } from '@/components/ui/TechTicker'
import { buildPageMeta, breadcrumbSchema, SITE_URL_CONST } from '@/lib/seo'

export const metadata: Metadata = buildPageMeta({
  title: 'About SynapseStacks — Engineering Philosophy & Premium Software Agency',
  description:
    'Learn how SynapseStacks approaches software engineering: radical simplicity, rigorous TDD, transparent partnership, and systems thinking that builds for scale and longevity. 50+ enterprise projects delivered.',
  alternates: {
    canonical: `${SITE_URL_CONST}/about`,
  },
  openGraph: {
    title: 'About SynapseStacks — We build systems that outlast the hype',
    description:
      'Premium engineering agency with a philosophy built on radical simplicity, engineering rigor, and transparent partnership. Not a feature factory — an engineering partner.',
    url: `${SITE_URL_CONST}/about`,
  },
})

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL_CONST },
              { name: 'About', url: `${SITE_URL_CONST}/about` },
            ])
          ),
        }}
      />

      <AboutHero />
      <Philosophy />
      <Values />
      <Approach />
      <Partnership />
      <AboutCta />
      <TechTicker />
    </>
  )
}
