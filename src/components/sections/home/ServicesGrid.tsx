import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { FadeUp } from '@/components/ui/FadeUp'
import { services } from '@/lib/data/services'
import styles from './ServicesGrid.module.css'

// Map accent color to CSS class for border-top hover effect
const accentClassMap: Record<string, string> = {
  '#F2C84B': styles.accentYellow,
  '#6EC97A': styles.accentGreen,
  '#E85C8A': styles.accentPink,
  '#3B5BDB': styles.accentBlue,
  '#9B72CF': styles.accentPurple,
}

export function ServicesGrid() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Core Capabilities</p>
            <h2 id="services-title" className={styles.title}>
              Everything you need,
              <br />
              built to last
            </h2>
          </div>
          <p className={styles.sub}>
            Nine deeply specialised engineering practices, delivered by a team that treats your
            infrastructure as its own.
          </p>
        </header>

        <div className={styles.grid} role="list">
          {services.map((service) => (
            <FadeUp key={service.id} as="article" className={[styles.card, accentClassMap[service.accentColor]].join(' ')} role="listitem">
              <div className={styles.num}>
                {service.num} / {service.id}
              </div>
              <h3 className={styles.name}>{service.name}</h3>
              <p className={styles.desc}>{service.shortDesc}</p>
              <span className={styles.tag}>{service.tag}</span>
            </FadeUp>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/services" variant="primary">
            Explore All Services →
          </Button>
        </div>
      </div>
    </section>
  )
}
