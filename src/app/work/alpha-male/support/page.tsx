import type { Metadata } from 'next'
import { MarkdownLegalPage } from '../_components/MarkdownLegalPage'
import { buildPageMeta } from '@/lib/seo'

const SUPPORT_URL = 'https://www.synapsestacks.com/work/alpha-male/support'

export const metadata: Metadata = buildPageMeta({
  title: 'Alpha Male Support',
  description:
    'Contact Alpha Male support for app issues, feedback, feature requests, account access, subscriptions, privacy questions, and data deletion requests.',
  alternates: { canonical: SUPPORT_URL },
  openGraph: {
    title: 'Alpha Male Support | SynapseStacks',
    description:
      'Contact SynapseStacks for Alpha Male app issues, feedback, feature requests, and support.',
    url: SUPPORT_URL,
  },
})

export default function AlphaMaleSupportPage() {
  return (
    <MarkdownLegalPage
      eyebrow="Alpha Male Support"
      markdownPath="src/app/work/alpha-male/legal/support.md"
    />
  )
}
