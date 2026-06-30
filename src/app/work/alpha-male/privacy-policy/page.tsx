import type { Metadata } from 'next'
import { MarkdownLegalPage } from '../_components/MarkdownLegalPage'
import { buildPageMeta, SITE_URL_CONST } from '@/lib/seo'

export const metadata: Metadata = buildPageMeta({
  title: 'Alpha Male Privacy Policy',
  description:
    'Read the Alpha Male Privacy Policy covering sensitive recovery data, account information, Alpha Chief, Shield Mode, Alpha Tribe, and support data.',
  alternates: { canonical: `${SITE_URL_CONST}/work/alpha-male/privacy-policy` },
  openGraph: {
    title: 'Alpha Male Privacy Policy | SynapseStacks',
    description: 'How Alpha Male handles privacy, sensitive recovery data, AI processing, and account deletion.',
    url: `${SITE_URL_CONST}/work/alpha-male/privacy-policy`,
  },
})

export default function AlphaMalePrivacyPolicyPage() {
  return (
    <MarkdownLegalPage
      eyebrow="Alpha Male Legal"
      markdownPath="src/app/work/alpha-male/legal/privacy-policy.md"
    />
  )
}
