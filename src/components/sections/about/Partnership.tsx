import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Partnership.module.css'

const blocks = [
  {
    accentColor: 'var(--neon)',
    title: 'Embedded Team Extension',
    desc: 'We integrate directly into your existing workflows, communication tools, and sprint cycles. No overhead, no middlemen, no account managers between you and the engineers doing the work.',
  },
  {
    accentColor: 'var(--accent)',
    title: 'Technical Accountability',
    desc: 'We own what we ship. Every system we build is documented, tested, and handed over with full knowledge transfer. You are never dependent on us to understand your own code.',
  },
  {
    accentColor: 'var(--purple-light)',
    title: 'Strategic Technical Guidance',
    desc: 'Beyond execution, we advise on architecture decisions, tooling choices, and scaling strategies, bringing a senior engineering perspective to every stage of your product journey.',
  },
]

export function Partnership() {
  return (
    <section className={styles.section} aria-labelledby="partnership-title">
      <div className={styles.inner}>
        <FadeUp>
          <p className={styles.eyebrow}>// Partnership model</p>
          <h2 id="partnership-title" className={styles.title}>
            We extend your team.<br />We <em>don&apos;t</em> replace it.
          </h2>
          <p className={styles.sub}>
            We become a direct technical arm of your organisation: embedded, transparent, and fully
            accountable for the systems we build.
          </p>
        </FadeUp>

        <div className={styles.grid}>
          {blocks.map((block, i) => (
            <FadeUp key={block.title} delay={i * 80} className={styles.block}>
              <div className={styles.blockAccent} style={{ background: block.accentColor }} aria-hidden="true" />
              <h3 className={styles.blockTitle}>{block.title}</h3>
              <p className={styles.blockDesc}>{block.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
