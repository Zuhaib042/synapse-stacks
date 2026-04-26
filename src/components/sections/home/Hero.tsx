import { Button } from '@/components/ui/Button'
import { NodeGraph } from '@/components/ui/NodeGraph'
import styles from './Hero.module.css'
import { TechTicker } from '@/components/ui/TechTicker'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline">
      {/* Technical node-graph background — replaces colorful circles */}
      <NodeGraph className={styles.graph} />

      <div className={styles.eyebrow}>
        <div className={styles.eyebrowDot} aria-hidden="true" />
        <span>The Future of Digital Infrastructure</span>
      </div>

      <h1 id="hero-headline" className={styles.headline}>
        Engineering <em>Tomorrow&apos;s</em> Infrastructure
      </h1>

      <p className={styles.sub}>
        We build high-performance digital ecosystems for visionary companies. From intelligent
        AI&nbsp;automation to scalable cloud architecture.
      </p>

      <TechTicker />
      <div className={styles.actions}>
        <Button href="/#consultation" variant="yellow">
          Schedule a Free Consultation
        </Button>
        <Button href="/services" variant="ghost">
          View Our Services →
        </Button>
      </div>
      
    </section>
  )
}
