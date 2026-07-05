import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeUp } from '@/components/ui/FadeUp'
import { buildPageMeta, breadcrumbSchema, SITE_URL_CONST } from '@/lib/seo'
import styles from './page.module.css'

const project = {
  name: 'Astra Concierge',
  slug: 'astra-concierge',
  liveUrl: 'https://astra-concierge.vercel.app/',
  summary:
    'A premium AI website concierge that answers service questions, qualifies serious buyers, and gives business owners a clean operational dashboard.',
  intro:
    'Astra Concierge turns a service website from a static brochure into an always-available sales and support assistant. It gives visitors clear answers from approved business knowledge, recognizes buying intent, captures useful lead context, and prepares the kind of handoff a sales team can actually use.',
  heroImage: {
    src: '/work/astra-concierge/astra-concierge.png',
    alt: 'Astra Concierge public AI chat experience with visitor questions and sales-ready handoff prompts',
  },
  deliverables: [
    'Public AI concierge experience for service-based businesses',
    'Retrieval-augmented answers from a large business knowledge base',
    'AI tool-calling flow for lead capture and qualification',
    'Admin dashboard for conversations, leads, knowledge coverage, and recent messages',
    'Responsive premium interface built for a portfolio-grade product demo',
  ],
  stack: [
    'Next.js App Router',
    'TypeScript',
    'Gemini API',
    'Vercel AI SDK',
    'Neon Postgres',
    'pgvector',
    'Drizzle ORM',
    'Tailwind CSS',
    'shadcn/ui',
    'Framer Motion',
  ],
  stats: [
    {
      label: 'Availability',
      value: '24/7',
      note: 'Answers visitor questions after hours and during busy service windows.',
    },
    {
      label: 'Knowledge base',
      value: '437+',
      note: 'Service guides, FAQs, policies, playbooks, examples, and sales context.',
    },
    {
      label: 'Knowledge readiness',
      value: '100%',
      note: 'Dashboard visibility into embedded content coverage and answer readiness.',
    },
  ],
  valuePoints: [
    {
      title: 'Capture demand while it is warm',
      text: 'Visitors can ask about services, pricing, implementation timelines, policies, and integrations without waiting for a callback. When Astra detects intent, it collects the details needed for a serious follow-up.',
    },
    {
      title: 'Replace vague inquiries with structured handoffs',
      text: 'Instead of a thin contact form entry, owners can see the visitor need, budget range, timeline, company context, conversation history, and requested next step.',
    },
    {
      title: 'Make approved business knowledge usable',
      text: 'The assistant searches a prepared knowledge base before answering, so responses can stay aligned with the business instead of drifting into generic AI guesses.',
    },
    {
      title: 'Show what visitors actually want',
      text: 'The admin view surfaces recent conversations, top visitor needs, lead pipeline details, and knowledge readiness so teams can improve sales copy and service operations.',
    },
  ],
  features: [
    {
      title: 'Grounded AI answers',
      text: 'Gemini-powered chat is paired with retrieval from Neon Postgres and pgvector, letting Astra respond from service guides, policies, FAQs, implementation playbooks, and objection-handling content.',
    },
    {
      title: 'Lead qualification by conversation',
      text: 'Astra can collect names, emails, company details, budget, timeline, business need, and requested next step through a natural chat flow instead of forcing every prospect into the same form.',
    },
    {
      title: 'Conversation persistence',
      text: 'Visitor sessions, user messages, assistant replies, and lead records are stored so the business keeps the context that would usually disappear after a chat widget closes.',
    },
    {
      title: 'Owner-ready dashboard',
      text: 'The admin surface summarizes conversations, captured leads, message counts, recent chat activity, top visitor needs, and lead pipeline status in one operational view.',
    },
    {
      title: 'Knowledge health tracking',
      text: 'The dashboard makes answer coverage visible, including embedded document readiness and category-level knowledge coverage for FAQs, objections, integrations, support, and security.',
    },
    {
      title: 'Premium public experience',
      text: 'The visitor side hides internal technical detail and presents a polished, responsive concierge that feels like part of the brand rather than a bolted-on bot.',
    },
  ],
  gallery: [
    {
      src: '/work/astra-concierge/astra-concierge.png',
      alt: 'Astra Concierge landing page and AI chat interface for service business visitors',
      label: 'Public Concierge',
      note: 'A refined front-of-site assistant that explains services, answers buying questions, and guides visitors toward the right next step.',
    },
    {
      src: '/work/astra-concierge/dashboard.png',
      alt: 'Astra Concierge admin dashboard showing conversations, leads, messages, knowledge base readiness, and lead pipeline',
      label: 'Admin Dashboard',
      note: 'A read-only owner view for conversations, qualified leads, message volume, knowledge readiness, top needs, and pipeline context.',
    },
    {
      src: '/work/astra-concierge/knowledge.png',
      alt: 'Astra Concierge knowledge health and recent conversations view with coverage categories and recent chat activity',
      label: 'Knowledge Health',
      note: 'Coverage tracking for embedded knowledge plus recent conversations and chat activity, capped for dashboard performance.',
    },
  ],
  flow: [
    {
      title: 'Visitor asks',
      text: 'A prospect asks about cost, timelines, integrations, onboarding, or whether the service fits their business.',
    },
    {
      title: 'Astra retrieves',
      text: 'The system searches embedded business knowledge and grounds the answer in approved content.',
    },
    {
      title: 'Intent is qualified',
      text: 'When buying signals appear, Astra captures the details a team needs before following up.',
    },
    {
      title: 'Owner gets context',
      text: 'The dashboard keeps the conversation, lead status, top need, timeline, and recent activity visible.',
    },
  ],
  currentScope: [
    'Live AI chat experience powered by Gemini',
    'RAG pipeline with chunked business knowledge and vector search',
    'Conversation saving for visitor sessions and assistant replies',
    'Lead capture through AI tool calling',
    'Admin dashboard for leads, conversations, knowledge coverage, and recent messages',
  ],
  futureAdditions: [
    'Secure admin authentication and role-based access',
    'Document upload and knowledge management UI',
    'CRM integration for automatic pipeline creation',
    'Calendar booking, email notifications, and owner alerts',
    'Full lead detail pages with richer follow-up workflows',
  ],
}

export const metadata: Metadata = buildPageMeta({
  title: 'Astra Concierge Case Study - AI Website Concierge and Lead Qualification',
  description:
    'See how SynapseStacks built Astra Concierge: a premium AI website concierge with RAG, Gemini, Neon Postgres, pgvector, lead capture, and an admin dashboard.',
  alternates: {
    canonical: `${SITE_URL_CONST}/work/${project.slug}`,
  },
  openGraph: {
    title: 'Astra Concierge Case Study | SynapseStacks',
    description:
      'A polished AI business concierge that answers visitor questions, qualifies leads, and gives owners a clear operational dashboard.',
    url: `${SITE_URL_CONST}/work/${project.slug}`,
  },
})

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Astra Concierge Case Study',
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

export default function AstraConciergeCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL_CONST },
              { name: 'Work', url: `${SITE_URL_CONST}/work` },
              { name: 'Astra Concierge', url: `${SITE_URL_CONST}/work/${project.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <section className={styles.hero} aria-labelledby="astra-title">
        <div className={styles.inner}>
          <FadeUp className={styles.heroIntro}>
            <p className={styles.eyebrow}>// Selected work</p>
            <h1 id="astra-title" className={styles.title}>
              {project.name}.<br />
              <em>An AI concierge</em> for qualified conversations.
            </h1>
            <p className={styles.sub}>{project.summary}</p>
            <div className={styles.heroActions}>
              <Button href={project.liveUrl} variant="yellow" external>
                See It Live
              </Button>
              <Button href="/services/ai-automation" variant="ghost">
                Explore AI Automation
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={90} className={styles.heroVisual}>
            <div className={styles.heroVisualTopbar}>
              <div className={`${styles.dot} ${styles.dotRed}`} />
              <div className={`${styles.dot} ${styles.dotYellow}`} />
              <div className={`${styles.dot} ${styles.dotGreen}`} />
              <span className={styles.heroVisualLabel}>Astra Concierge Public Experience</span>
            </div>
            <div className={styles.heroVisualFrame}>
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                width={2142}
                height={1520}
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
                <div className={styles.metaValue}>AI Automation and Systems Integration</div>
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
                A website concierge that combines <em>answers, qualification, and operational visibility</em>.
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
          <FadeUp>
            <p className={styles.sectionLabel}>// Business value</p>
            <h2 className={styles.sectionTitle}>
              Built for service businesses that cannot afford to let serious visitors go cold.
            </h2>
          </FadeUp>

          <div className={styles.valueGrid}>
            {project.valuePoints.map((item, index) => (
              <FadeUp key={item.title} className={styles.valueCard} delay={index * 60}>
                <div className={styles.resultNum}>0{index + 1}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.resultText}>{item.text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.statsGrid}>
            {project.stats.map((stat, index) => (
              <FadeUp key={stat.label} className={styles.statCard} delay={index * 70}>
                <div className={styles.metaLabel}>{stat.label}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <p className={styles.statNote}>{stat.note}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp>
            <p className={styles.sectionLabel}>// Core capabilities</p>
            <h2 className={styles.sectionTitle}>
              More than chat: a practical AI layer for conversion, support, and follow-up.
            </h2>
          </FadeUp>

          <div className={styles.featureGrid}>
            {project.features.map((feature, index) => (
              <FadeUp key={feature.title} className={styles.featureCard} delay={index * 45}>
                <div className={styles.featureNum}>0{index + 1}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.resultText}>{feature.text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp className={styles.galleryHeader}>
            <p className={styles.sectionLabel}>// Product views</p>
            <h2 className={styles.sectionTitle}>
              The visitor experience and the owner dashboard work as one system.
            </h2>
          </FadeUp>

          <div className={styles.gallery}>
            {project.gallery.map((shot, index) => (
              <FadeUp key={shot.src} className={styles.shot} delay={index * 80}>
                <div className={styles.shotFrame}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.src.includes('dashboard') ? 2128 : shot.src.includes('knowledge') ? 2136 : 2142}
                    height={shot.src.includes('dashboard') ? 1198 : shot.src.includes('knowledge') ? 1506 : 1520}
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
          <FadeUp>
            <p className={styles.sectionLabel}>// How the system thinks</p>
            <h2 className={styles.sectionTitle}>
              A cleaner path from visitor curiosity to a sales-ready handoff.
            </h2>
          </FadeUp>

          <div className={styles.flowGrid}>
            {project.flow.map((item, index) => (
              <FadeUp key={item.title} className={styles.flowStep} delay={index * 60}>
                <div className={styles.featureNum}>0{index + 1}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.resultText}>{item.text}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp className={styles.overview}>
            <div>
              <p className={styles.sectionLabel}>// Honest scope</p>
              <h2 className={styles.sectionTitle}>
                MVP today, with a clear path to <em>production-grade operations</em>.
              </h2>
            </div>

            <div className={styles.overviewPanels}>
              <div className={styles.panel}>
                <div className={styles.panelTitle}>Current version</div>
                <ul className={styles.list}>
                  {project.currentScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.panel}>
                <div className={styles.panelTitle}>Production additions</div>
                <ul className={styles.list}>
                  {project.futureAdditions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.inner}>
          <FadeUp className={styles.cta}>
            <div>
              <p className={styles.sectionLabel}>// Start your project</p>
              <h2 className={styles.sectionTitle}>
                Want your website to qualify buyers while your team is busy?
              </h2>
              <p className={styles.ctaText}>
                We build AI concierge systems, RAG workflows, admin dashboards, and integration
                layers that turn visitor questions into better sales and support operations.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Button href="/#consultation" variant="yellow">
                Schedule a Free Consultation
              </Button>
              <Link href="/services/api-integration" className={styles.secondaryLink}>
                Explore API Integration
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
