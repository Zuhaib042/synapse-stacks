import { NodeGraphSmall } from '@/components/ui/NodeGraph'
import styles from './ServicesHero.module.css'

export function ServicesHero() {
  return (
    <div className={styles.hero} aria-labelledby="services-hero-title">
      <NodeGraphSmall className={styles.graph} />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Our Services</p>
        <h1 id="services-hero-title" className={styles.title}>
          Nine disciplines.
          <br />
          <em>One partner.</em>
        </h1>
        <p className={styles.sub}>
          From foundational cloud infrastructure to intelligent AI automation — every capability you
          need to build, scale, and own your digital future.
        </p>
      </div>
    </div>
  )
}
