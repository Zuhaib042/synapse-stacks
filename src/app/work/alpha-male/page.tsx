import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeUp } from '@/components/ui/FadeUp'
import { buildPageMeta, breadcrumbSchema, SITE_URL_CONST } from '@/lib/seo'
import styles from './page.module.css'

const project = {
  name: 'Alpha Male',
  slug: 'alpha-male',
  summary:
    'A React Native discipline system that helps users interrupt destructive digital habits, track clean progress, and build stronger daily routines.',
  intro:
    'Alpha Male gives users a structured mobile environment for moments when attention, impulses, and routines start to drift. The product combines streak tracking, urgent reset tools, guided reflection, accountability spaces, and AI coaching into one focused discipline system.',
  heroScreens: [
    {
      src: '/work/alphamale/today1.webp',
      alt: 'Alpha Male command center showing streaks, milestones, and urgent recovery actions',
    },
    {
      src: '/work/alphamale/ledger.webp',
      alt: 'Alpha Male discipline ledger showing daily pledge and goals',
    },
    {
      src: '/work/alphamale/alpha-chief.webp',
      alt: 'Alpha Male AI mentor screen for practical recovery guidance',
    },
  ],
  deliverables: [
    'React Native mobile application',
    'Supabase-backed progress and accountability data model',
    'Next.js-powered product and support architecture',
    'Mobile UX for streaks, reflection, community, resets, and AI coaching',
  ],
  stack: ['React Native', 'Supabase', 'Next.js', 'Mobile UX', 'AI Coaching', 'Accountability'],
  outcomes: [
    'A clear command center for daily streaks, pledges, risk state, and quick intervention',
    'Private ledgers and reflection flows that turn wins and setbacks into useful context',
    'Community accountability that gives users support without turning the product into distraction',
    'Reset tools and AI guidance that help users choose the next useful action in high-risk moments',
  ],
  gallery: [
    {
      src: '/work/alphamale/today-complete.png',
      alt: 'Alpha Male command center showing a 28 day clean streak and milestone progress',
      label: 'Command Center',
      note: 'A daily discipline dashboard for streaks, pledges, risk awareness, and urgent recovery actions.',
    },
    {
      src: '/work/alphamale/ledger.webp',
      alt: 'Alpha Male discipline ledger with goals, pledge, and reflection entries',
      label: 'Discipline Ledger',
      note: 'A private record of goals, wins, accountability notes, and reflections so progress stays visible.',
    },
    {
      src: '/work/alphamale/c-drills.webp',
      alt: 'Alpha Male community feed showing accountability posts and discipline updates',
      label: 'Alpha Tribe',
      note: 'A focused accountability feed for support, wins, resets, reflections, and goal-sharing.',
    },
    {
      src: '/work/alphamale/reset-lab.png',
      alt: 'Alpha Male reset lab showing cognitive drills for state control',
      label: 'Reset Lab',
      note: 'Fast cognitive drills and state-shifting tools for moments when users need to interrupt an urge loop.',
    },
    {
      src: '/work/alphamale/soundscapes.png',
      alt: 'Alpha Male reset lab soundscapes for calming and attention recovery',
      label: 'Soundscapes',
      note: 'Calming modes that help users cool down, create distance, and return to a controlled state.',
    },
    {
      src: '/work/alphamale/alphachief-mentor.png',
      alt: 'Alpha Male Alpha Chief AI mentor chat for accountability and next steps',
      label: 'Alpha Chief',
      note: 'AI-guided support for urges, accountability, recovery, and breaking goals into practical next moves.',
    },
  ],
}

export const metadata: Metadata = buildPageMeta({
  title: 'Alpha Male Case Study - Mobile Discipline App',
  description:
    'See how SynapseStacks shaped Alpha Male: a React Native discipline app with streak tracking, accountability, reset tools, Supabase, Next.js, and AI coaching.',
  alternates: {
    canonical: `${SITE_URL_CONST}/work/${project.slug}`,
  },
  openGraph: {
    title: 'Alpha Male Case Study | SynapseStacks',
    description:
      'A delivered mobile discipline system built with React Native, Supabase, Next.js, accountability flows, reset tools, and AI coaching.',
    url: `${SITE_URL_CONST}/work/${project.slug}`,
  },
})

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Alpha Male Case Study',
  about: {
    '@type': 'SoftwareApplication',
    name: project.name,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS, Android',
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

export default function AlphaMaleCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL_CONST },
              { name: 'Work', url: `${SITE_URL_CONST}/work` },
              { name: 'Alpha Male', url: `${SITE_URL_CONST}/work/${project.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <section className={styles.hero} aria-labelledby="alpha-male-title">
        <div className={styles.inner}>
          <FadeUp className={styles.heroIntro}>
            <p className={styles.eyebrow}>// Selected work</p>
            <h1 id="alpha-male-title" className={styles.title}>
              {project.name}.<br />
              <em>Built for discipline</em>, not drift.
            </h1>
            <p className={styles.sub}>{project.summary}</p>
          </FadeUp>

          <FadeUp delay={90} className={styles.heroVisual}>
            <div className={styles.heroVisualTopbar}>
              <div className={`${styles.dot} ${styles.dotRed}`} />
              <div className={`${styles.dot} ${styles.dotYellow}`} />
              <div className={`${styles.dot} ${styles.dotGreen}`} />
              <span className={styles.heroVisualLabel}>Alpha Male Mobile App</span>
            </div>
            <div className={styles.heroPhoneStage}>
              {project.heroScreens.map((screen, index) => (
                <div
                  key={screen.src}
                  className={`${styles.phoneMockup} ${
                    index === 1 ? styles.phoneMockupPrimary : ''
                  }`}
                >
                  <div className={styles.phoneSpeaker} />
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={430}
                    height={932}
                    className={styles.phoneImage}
                    priority={index === 1}
                  />
                </div>
              ))}
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
                <div className={styles.metaValue}>Mobile Discipline System</div>
              </div>
              <div className={styles.metaItem}>
                <div className={styles.metaLabel}>Product Surface</div>
                <div className={styles.metaValue}>iOS and Android app experience</div>
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
                A mobile system for <em>prevention, intervention, and recovery</em>.
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
              Product views designed for <em>high-pressure moments</em>.
            </h2>
          </FadeUp>

          <div className={styles.gallery}>
            {project.gallery.map((shot, index) => (
              <FadeUp key={shot.src} className={styles.shot} delay={index * 70}>
                <div className={styles.shotFrame}>
                  <div className={styles.shotPhoneMockup}>
                    <div className={styles.shotPhoneSpeaker} />
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={430}
                      height={932}
                      className={styles.shotImage}
                    />
                  </div>
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
                Clearer choices when <em>willpower gets tired</em>.
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
                Need a mobile system with this level of <em>product focus?</em>
              </h2>
              <p className={styles.ctaText}>
                We design mobile apps, dashboards, and product systems that help users take action
                instead of getting lost in complexity.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Button href="/#consultation" variant="yellow">
                Schedule a Free Consultation
              </Button>
              <Link href="/services" className={styles.secondaryLink}>
                Explore Mobile Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
