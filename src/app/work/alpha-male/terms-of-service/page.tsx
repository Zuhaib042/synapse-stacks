import type { Metadata } from 'next'
import { MarkdownLegalPage } from '../_components/MarkdownLegalPage'
import { buildPageMeta, SITE_URL_CONST } from '@/lib/seo'

export const metadata: Metadata = buildPageMeta({
  title: 'Alpha Male Terms of Service',
  description:
    'Read the Alpha Male Terms of Service covering app eligibility, user content, Alpha Tribe, Alpha Chief, Shield Mode, subscriptions, and acceptable use.',
  alternates: { canonical: `${SITE_URL_CONST}/work/alpha-male/terms-of-service` },
  openGraph: {
    title: 'Alpha Male Terms of Service | SynapseStacks',
    description: 'Terms governing Alpha Male, including AI mentor features, Shield Mode, Alpha Tribe, and account use.',
    url: `${SITE_URL_CONST}/work/alpha-male/terms-of-service`,
  },
})

export default function AlphaMaleTermsOfServicePage() {
  return (
    <MarkdownLegalPage
      eyebrow="Alpha Male Legal"
      markdownPath="src/app/work/alpha-male/legal/terms-of-service.md"
    />
  )
}
