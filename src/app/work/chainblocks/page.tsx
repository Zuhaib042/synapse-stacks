import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeUp } from '@/components/ui/FadeUp'
import { buildPageMeta, breadcrumbSchema, SITE_URL_CONST } from '@/lib/seo'
import styles from './page.module.css'

const project = {
  name: 'ChainBlocks',
  slug: 'chainblocks',
  liveUrl: 'https://chainblocks-olive.vercel.app',
  summary:
    'A production-style multi-chain analytics dashboard built with Next.js, server-side caching, and cost-aware API architecture.',
  intro:
    'ChainBlocks turns noisy blockchain activity into a clean operational dashboard. It was designed to protect third-party API budgets, keep sensitive keys server-side, and give users a fast way to compare chain health, activity, and search results.',
  heroImage: {
    src: '/work/chainblocks/cb-dash.webp',
    alt: 'ChainBlocks overview dashboard showing cross-chain KPIs, charts, and chain health data',
  },
  deliverables: [
    'Next.js App Router build',
    'Server-side API proxy architecture',
    'Caching and request-budget strategy',
    'Dashboard UX and chain comparison views',
  ],
  stack: ['Next.js', 'TypeScript', 'Blockchair API', 'Caching', 'Dashboard UI', 'Vercel-ready'],
  outcomes: [
    'Server-only API access to keep external keys protected',
    'Cache-first request flow to reduce third-party API usage',
    'Search, comparison, and chain detail pages in one product surface',
    'Portfolio-ready interface with production-oriented architecture',
  ],
  gallery: [
    {
      src: '/work/chainblocks/chains-view.webp',
      alt: 'ChainBlocks chain comparison screen with multi-chain performance data',
      label: 'Chain Comparison',
      note: 'Dedicated comparison experience for tracking multiple supported chains.',
    },
    {
      src: '/work/chainblocks/search-view.webp',
      alt: 'ChainBlocks search interface for chain lookups and activity data',
      label: 'Search Experience',
      note: 'Controlled query flow for transactions, blocks, and address lookups.',
    },
    {
      src: '/work/chainblocks/system-design-api-usage.webp',
      alt: 'ChainBlocks system design and API usage page explaining architecture and request flow',
      label: 'System Design',
      note: 'Architecture and API-budget view showing how the product keeps requests efficient.',
    },
  ],
}

export const metadata: Metadata = buildPageMeta({
  title: 'ChainBlocks Case Study — Multi-Chain Analytics Dashboard',
  description:
    'See how SynapseStacks designed ChainBlocks: a cost-aware blockchain analytics dashboard with server-side API protection, caching, and multi-chain monitoring.',
  alternates: {
    canonical: `${SITE_URL_CONST}/work/${project.slug}`,
  },
  openGraph: {
    title: 'ChainBlocks Case Study | SynapseStacks',
    description:
      'A delivered analytics dashboard built with Next.js, cache-aware API architecture, and multi-chain operational views.',
    url: `${SITE_URL_CONST}/work/${project.slug}`,
  },
})

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'ChainBlocks Case Study',
  about: {
    '@type': 'SoftwareApplication',
    name: project.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: project.liveUrl,
    description: project.summary,
  },
  author: {
    '@type': 'Organization',
    name: 'SynapseStacks',
    url: SITE_URL_CONST,
  },
  url: `${SITE_URL_CONST}/work/${project.slug}`,
  description: project.intro,
}

export default function ChainBlocksCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL_CONST },
              { name: 'Work', url: `${SITE_URL_CONST}/work` },
              { name: 'ChainBlocks', url: `${SITE_URL_CONST}/work/${project.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <section className={styles.hero} aria-labelledby="chainblocks-title">
        <div className={styles.inner}>
          <FadeUp className={styles.heroIntro}>
            <p className={styles.eyebrow}>// Selected work</p>
            <h1 id="chainblocks-title" className={styles.title}>
              {project.name}.<br />
              <em>Built for signal</em>, not noise.
            </h1>
            <p className={styles.sub}>{project.summary}</p>
          </FadeUp>

          <FadeUp delay={90} className={styles.heroVisual}>
            <div className={styles.heroVisualTopbar}>
              <div className={`${styles.dot} ${styles.dotRed}`} />
              <div className={`${styles.dot} ${styles.dotYellow}`} />
              <div className={`${styles.dot} ${styles.dotGreen}`} />
              <span className={styles.heroVisualLabel}>ChainBlocks Overview Dashboard</span>
            </div>
            <div className={styles.heroVisualFrame}>
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                width={1600}
                height={1000}
                className={styles.heroImage}
                priority
              />
            </div>
          </FadeUp>

          <FadeUp delay={120} className={styles.heroMeta}>
            <div className={styles.metaCard}>
              <div className={styles.metaLabel}>Project Summary</div>
              <p className={styles.metaText}>{project.intro}</p>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Delivered By</div>
                <div className={styles.metaValue}>SynapseStacks</div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Category</div>
                <div className={styles.metaValue}>Analytics Dashboard</div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Live Project</div>
                <a
                  href={project.liveUrl}
                  className={styles.metaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.liveUrl.replace('https://', '')}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp className={styles.overview}>
            <div>
              <p className={styles.sectionLabel}>// What we delivered</p>
              <h2 className={styles.sectionTitle}>
                A focused dashboard with <em>production-minded</em> architecture.
              </h2>
            </div>

            <div className={styles.overviewPanels}>
              <div className={styles.panel}>
                <div className={styles.panelTitle}>Scope</div>
                <ul className={styles.list}>
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.panel}>
                <div className={styles.panelTitle}>Stack</div>
                <div className={styles.chips}>
                  {project.stack.map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp className={styles.galleryHeader}>
            <p className={styles.sectionLabel}>// Interface snapshots</p>
            <h2 className={styles.sectionTitle}>
              Product views that make the system <em>easy to scan</em>.
            </h2>
          </FadeUp>

          <div className={styles.gallery}>
            {project.gallery.map((shot, index) => (
              <FadeUp key={shot.src} className={styles.shot} delay={index * 80}>
                <div className={styles.shotFrame}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1600}
                    height={1000}
                    className={styles.shotImage}
                  />
                </div>
                <div className={styles.shotBody}>
                  <div className={styles.shotLabel}>{shot.label}</div>
                  <p className={styles.shotNote}>{shot.note}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.results}>
            <FadeUp>
              <p className={styles.sectionLabel}>// Why it matters</p>
              <h2 className={styles.sectionTitle}>
                Stronger product behavior, <em>less operational waste</em>.
              </h2>
            </FadeUp>

            <div className={styles.resultGrid}>
              {project.outcomes.map((item, index) => (
                <FadeUp key={item} className={styles.resultCard} delay={index * 70}>
                  <div className={styles.resultNum}>0{index + 1}</div>
                  <p className={styles.resultText}>{item}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.inner}>
          <FadeUp className={styles.cta}>
            <div>
              <p className={styles.sectionLabel}>// Start your project</p>
              <h2 className={styles.sectionTitle}>
                Need a system like this for your <em>own business?</em>
              </h2>
              <p className={styles.ctaText}>
                We build dashboards, portals, websites, and automation systems that help teams move
                faster without inheriting a mess.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Button href="/#consultation" variant="yellow">
                Schedule a Free Consultation
              </Button>
              <Link href="/services" className={styles.secondaryLink}>
                Explore Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
