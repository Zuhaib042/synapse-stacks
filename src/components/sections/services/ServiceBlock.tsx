import { existsSync } from 'node:fs'
import { join } from 'node:path'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import { type Service } from '@/lib/data/services'
import styles from './ServiceBlock.module.css'

interface ServiceBlockProps {
  service: Service
  reverse?: boolean
}

// Capability column data per service
const capData: Record<string, { left: { section: string; items: string[] }; right: { section: string; items: string[] } }> = {
  web: {
    left: { section: 'Web', items: ['React · Next.js · Vue', 'Headless CMS', 'CDN Optimisation', 'SSR / SSG'] },
    right: { section: 'Mobile', items: ['React Native', 'Flutter', 'iOS · Android', 'Deep OS Integration'] },
  },
  mobile: {
    left: { section: 'Cross-Platform', items: ['React Native', 'Flutter', 'iOS · Android', 'Push Notifications'] },
    right: { section: 'Native', items: ['Deep OS Integration', 'Offline Mode', 'App Store Delivery', 'Performance'] },
  },
  saas: {
    left: { section: 'Architecture', items: ['Multi-tenancy', 'Data Isolation', 'Role-based Access', 'Elastic Scaling'] },
    right: { section: 'Commerce', items: ['Stripe / Billing', 'ERP Integration', 'Shopify Plus', 'Conversion Optimisation'] },
  },
  ai: {
    left: { section: 'AI / ML', items: ['LLM Integration', 'OpenAI · Anthropic', 'Computer Vision', 'Workflow Automation'] },
    right: { section: 'Cloud', items: ['Kubernetes · Terraform', 'AWS · GCP · Azure', 'CI/CD Pipelines', 'High Availability'] },
  },
  legacy: {
    left: { section: 'Modernisation', items: ['Microservices', 'Docker · K8s', 'Zero Downtime', 'API Gateway'] },
    right: { section: 'Migration', items: ['Strangler Pattern', 'Data Migration', 'Rollback Plans', 'Team Handover'] },
  },
  ecommerce: {
    left: { section: 'Commerce', items: ['Shopify Plus', 'Headless Commerce', 'ERP Integration', 'Conversion CRO'] },
    right: { section: 'Integrations', items: ['REST · GraphQL', 'CRM · ERP', 'Payment Gateways', 'Warehouse Systems'] },
  },
  cloud: {
    left: { section: 'Infrastructure', items: ['Kubernetes · Terraform', 'AWS · GCP · Azure', 'CI/CD Pipelines', 'High Availability'] },
    right: { section: 'DevOps', items: ['IaC · GitOps', 'Monitoring · Alerting', 'Cost Optimisation', 'Security Hardening'] },
  },
  ux: {
    left: { section: 'Design', items: ['Design Systems', 'Figma · Prototyping', 'User Research', 'Accessibility'] },
    right: { section: 'Delivery', items: ['Component Libraries', 'Motion Design', 'Responsive UI', 'Developer Handoff'] },
  },
  api: {
    left: { section: 'APIs', items: ['REST · GraphQL', 'WebSockets', 'API Gateway', 'Rate Limiting'] },
    right: { section: 'Integrations', items: ['CRM · ERP · Webhooks', 'Data Pipelines', 'Microservices', 'Docker'] },
  },
}

const mobileAppScreenshots = [
  {
    src: '/work/mobile-app/today1.webp',
    alt: 'Command Center',
  },
  {
    src: '/work/mobile-app/c-drills.webp',
    alt: 'Social Community',
  },
  {
    src: '/work/mobile-app/alpha-chief.webp',
    alt: 'AI Mentorship in hard times',
  },
]

function publicAssetExists(src: string) {
  return existsSync(join(process.cwd(), 'public', src.replace(/^\//, '')))
}

function ChainBlocksProjectVisual() {
  return (
    <div className={`${styles.visual} ${styles.projectVisual}`}>
      <div className={styles.projectDesktopFrame}>
        <Image
          src="/work/chainblocks/cb-dash.webp"
          alt="ChainBlocks dashboard preview showing cross-chain KPIs and analytics"
          width={1600}
          height={1000}
          className={styles.projectDesktopImage}
        />
      </div>
    </div>
  )
}

function MobileAppProjectVisual() {
  return (
    <div className={`${styles.visual} ${styles.projectVisual}`}>
      <div className={styles.projectMobileFrame}>
        <div className={styles.phoneShelf}>
          {mobileAppScreenshots.map((screenshot, index) => (
            <div
              key={screenshot.src}
              className={`${styles.phoneMockup} ${index === 1 ? styles.phoneMockupPrimary : ''}`}
            >
              <div className={styles.phoneSpeaker} />
              {publicAssetExists(screenshot.src) ? (
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={430}
                  height={932}
                  className={styles.phoneImage}
                />
              ) : (
                <div
                  className={styles.phonePlaceholder}
                  role="img"
                  aria-label={`${screenshot.alt}. Add this image at public${screenshot.src}.`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualMockup({ service }: { service: Service }) {
  if (service.id === 'web') {
    return <ChainBlocksProjectVisual />
  }

  if (service.id === 'mobile') {
    return <MobileAppProjectVisual />
  }

  if (service.id === 'ai') {
    return (
      <div className={styles.visual}>
        <div className={styles.visualHeader}>
          <div className={`${styles.dot} ${styles.dotRed}`} />
          <div className={`${styles.dot} ${styles.dotYellow}`} />
          <div className={`${styles.dot} ${styles.dotGreen}`} />
          <span className={styles.visualTitle}>AI Pipeline · inference.ts</span>
        </div>
        <div className={styles.code}>
          {[
            ["01", <><span className={styles.kw}>import</span>{" { openai, anthropic } "}<span className={styles.kw}>from</span>{" "}<span className={styles.str}>&apos;@synapse/ai&apos;</span></>],
            ["02", ""],
            ["03", <><span className={styles.kw}>export async function</span>{" "}<span className={styles.fn}>classifyIntent</span>{"(input: string) {"}</>],
            ["04", <>&nbsp;&nbsp;<span className={styles.kw}>const</span>{" embedding = "}<span className={styles.kw}>await</span>{" openai."}<span className={styles.fn}>embed</span>{"(input)"}</>],
            ["05", <span className={styles.hl}>&nbsp;&nbsp;<span className={styles.kw}>const</span>{" result = "}<span className={styles.kw}>await</span>{" anthropic."}<span className={styles.fn}>classify</span>{"({"}</span>],
            ["06", <span className={styles.hl}>&nbsp;&nbsp;&nbsp;&nbsp;vector: embedding, threshold: <span className={styles.str}>0.92</span></span>],
            ["07", <span className={styles.hl}>&nbsp;&nbsp;{"})"}</span>],
            ["08", ""],
            ["09", <>&nbsp;&nbsp;<span className={styles.kw}>return</span>{" { intent: result.label, confidence: result.score }"}</>],
            ["10", "}"],
          ].map(([ln, code], i) => (
            <div key={i} className={styles.codeLine}>
              <span className={styles.codeLn}>{ln}</span>
              <span className={styles.codeText}>{code}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Default: row-list mockup
  const rows: { icon: string; iconStyle: React.CSSProperties; title: string; sub: string; badge: string; badgeClass: string }[] = {
    web: [
      { icon: '⚡', iconStyle: { background: 'rgba(109,255,3,0.1)' }, title: 'Production Deploy #847', sub: 'main → prod · 2m 14s · Zero downtime', badge: '● Live', badgeClass: styles.badgeGreen },
      { icon: '🔀', iconStyle: { background: 'rgba(127,4,249,0.1)' }, title: 'Mobile Build iOS 2.4.1', sub: 'React Native · TestFlight distributed', badge: 'Staged', badgeClass: styles.badgePurple },
      { icon: '🌐', iconStyle: { background: 'rgba(255,255,255,0.05)' }, title: 'CDN Cache Invalidated', sub: 'Edge nodes: 42 regions updated', badge: 'Done', badgeClass: '' },
      { icon: '📦', iconStyle: { background: 'rgba(255,255,255,0.05)' }, title: 'Bundle Size Audit', sub: 'JS: 112kb gzip · -18% vs last', badge: '✓ Pass', badgeClass: styles.badgeGreen },
    ],
    mobile: [
      { icon: '📱', iconStyle: { background: 'rgba(127,4,249,0.1)' }, title: 'iOS Build 2.4.1', sub: 'React Native · TestFlight distributed', badge: 'Staged', badgeClass: styles.badgePurple },
      { icon: '🤖', iconStyle: { background: 'rgba(109,255,3,0.1)' }, title: 'Android Release r48', sub: 'Flutter · Play Store Live', badge: '● Live', badgeClass: styles.badgeGreen },
      { icon: '🔔', iconStyle: { background: 'rgba(255,255,255,0.05)' }, title: 'Push Notifications', sub: 'FCM · APNS · Delivered: 98.7%', badge: 'Active', badgeClass: '' },
    ],
    saas: [
      { icon: '🏢', iconStyle: { background: 'rgba(127,4,249,0.1)' }, title: 'Tenant: Acme Corp', sub: 'Plan: Enterprise · 840 seats', badge: 'Active', badgeClass: styles.badgePurple },
      { icon: '💳', iconStyle: { background: 'rgba(109,255,3,0.1)' }, title: 'Stripe Billing Sync', sub: 'MRR: $124k · Next invoice: 3d', badge: '● Live', badgeClass: styles.badgeGreen },
      { icon: '📊', iconStyle: { background: 'rgba(255,255,255,0.05)' }, title: 'Usage Analytics', sub: 'API calls: 4.2M / day', badge: 'Healthy', badgeClass: '' },
    ],
    legacy: [
      { icon: '🔄', iconStyle: { background: 'rgba(127,4,249,0.1)' }, title: 'Service Migration: Auth', sub: 'Monolith → Microservice · 100%', badge: '✓ Done', badgeClass: styles.badgePurple },
      { icon: '🐳', iconStyle: { background: 'rgba(109,255,3,0.1)' }, title: 'Docker Containerisation', sub: '14 services containerised · 0 downtime', badge: '● Live', badgeClass: styles.badgeGreen },
      { icon: '🛡️', iconStyle: { background: 'rgba(255,255,255,0.05)' }, title: 'API Gateway Deployed', sub: 'Rate limiting · Auth · Logging', badge: 'Active', badgeClass: '' },
    ],
    ecommerce: [
      { icon: 'GET', iconStyle: { background: 'rgba(109,255,3,0.1)', fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--neon)' }, title: '/api/v2/tenants/{id}/metrics', sub: 'CRM sync · 12ms · 200 OK', badge: '200', badgeClass: styles.badgeGreen },
      { icon: 'POST', iconStyle: { background: 'rgba(127,4,249,0.1)', fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--purple-light)' }, title: '/api/v2/orders/checkout', sub: 'Shopify Plus · ERP webhook fired', badge: '201', badgeClass: styles.badgePurple },
      { icon: 'GQL', iconStyle: { background: 'rgba(255,255,255,0.05)', fontSize: '9px', fontFamily: 'var(--font-mono)' }, title: 'query GetUserDashboard', sub: 'GraphQL · 8ms · 3 resolvers', badge: '200', badgeClass: styles.badgeGreen },
    ],
    cloud: [
      { icon: '☁️', iconStyle: { background: 'rgba(127,4,249,0.1)' }, title: 'K8s Cluster Healthy', sub: 'AWS EKS · 12 nodes · 0 incidents', badge: '● Live', badgeClass: styles.badgeGreen },
      { icon: '🔧', iconStyle: { background: 'rgba(109,255,3,0.1)' }, title: 'Terraform Apply', sub: 'Plan: +3 ~1 -0 · Applied in 42s', badge: '✓ Done', badgeClass: styles.badgeGreen },
      { icon: '📈', iconStyle: { background: 'rgba(255,255,255,0.05)' }, title: 'Auto-scale Triggered', sub: '78% load · 3 nodes added · 2m 14s', badge: 'Active', badgeClass: '' },
    ],
    ux: [
      { icon: '🎨', iconStyle: { background: 'rgba(127,4,249,0.1)' }, title: 'Design System v3.0', sub: '128 components · Figma + Storybook', badge: 'Published', badgeClass: styles.badgePurple },
      { icon: '✅', iconStyle: { background: 'rgba(109,255,3,0.1)' }, title: 'Accessibility Audit', sub: 'WCAG AA · 0 critical issues', badge: '● Pass', badgeClass: styles.badgeGreen },
      { icon: '🧪', iconStyle: { background: 'rgba(255,255,255,0.05)' }, title: 'User Test Session', sub: 'Task completion: 94% · SUS: 88', badge: 'Complete', badgeClass: '' },
    ],
    api: [
      { icon: 'GET', iconStyle: { background: 'rgba(109,255,3,0.1)', fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--neon)' }, title: '/api/v2/users/{id}', sub: 'JWT Auth · 8ms · Cached', badge: '200', badgeClass: styles.badgeGreen },
      { icon: 'POST', iconStyle: { background: 'rgba(127,4,249,0.1)', fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--purple-light)' }, title: '/api/v2/webhooks/crm', sub: 'Salesforce sync · payload 2.4kb', badge: '202', badgeClass: styles.badgePurple },
      { icon: 'GQL', iconStyle: { background: 'rgba(255,255,255,0.05)', fontSize: '9px', fontFamily: 'var(--font-mono)' }, title: 'query GetDashboard', sub: 'GraphQL · 6ms · 4 resolvers', badge: '200', badgeClass: styles.badgeGreen },
    ],
  }[service.id] ?? []

  const title = {
    web: 'Deployments', mobile: 'Mobile Builds', saas: 'SaaS Platform',
    legacy: 'Migration Progress', ecommerce: 'API Gateway · Commerce',
    cloud: 'Infrastructure', ux: 'Design System', api: 'API Gateway',
  }[service.id] ?? service.name

  return (
    <div className={styles.visual}>
      <div className={styles.visualHeader}>
        <div className={`${styles.dot} ${styles.dotRed}`} />
        <div className={`${styles.dot} ${styles.dotYellow}`} />
        <div className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.visualTitle}>{title}</span>
      </div>
      <div className={styles.visualBody}>
        {rows.map((row, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.rowIcon} style={row.iconStyle}>{row.icon}</div>
            <div className={styles.rowContent}>
              <div className={styles.rowTitle}>{row.title}</div>
              <div className={styles.rowSub}>{row.sub}</div>
            </div>
            <div className={styles.rowMeta}>
              <span className={`${styles.badge} ${row.badgeClass}`}>{row.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ServiceBlock({ service, reverse = false }: ServiceBlockProps) {
  const cap = capData[service.id]

  return (
    <FadeUp
      className={[styles.block, reverse ? styles.reverse : ''].filter(Boolean).join(' ')}
      as="article"
    >
      <div>
        <div className={styles.label}>{service.num.padStart(2, '0')} {service.name}</div>
        <h2 className={styles.title}>{service.longDesc.split('.')[0]}.</h2>
        <p className={styles.desc}>{service.longDesc}</p>

        {cap && (
          <div className={styles.caps}>
            <div className={styles.capCol}>
              <div className={styles.capSection}>{cap.left.section}</div>
              {cap.left.items.map((item) => (
                <div key={item} className={styles.capItem}>{item}</div>
              ))}
            </div>
            <div className={styles.capCol}>
              <div className={styles.capSection}>{cap.right.section}</div>
              {cap.right.items.map((item) => (
                <div key={item} className={styles.capItem}>{item}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      <VisualMockup service={service} />
    </FadeUp>
  )
}
