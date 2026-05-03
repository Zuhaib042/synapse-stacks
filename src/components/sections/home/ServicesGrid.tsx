'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { services } from '@/lib/data/services'
import styles from './ServicesGrid.module.css'

function useCardObserver(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(container.children).indexOf(entry.target as HTMLElement)
            setTimeout(() => entry.target.classList.add(styles.visible), idx * 55)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.04, rootMargin: '0px 0px -40px 0px' }
    )

    container.querySelectorAll(`.${styles.card}`).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  useCardObserver(gridRef)

  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>// Core capabilities</p>
            <h2 id="services-title" className={styles.title}>
              Nine disciplines.<br /><em>One partner.</em>
            </h2>
          </div>
          <p className={styles.sub}>
            Every capability you need to build, scale, and own your digital future delivered by a
            team that treats your infrastructure as its own.
          </p>
        </header>

        <div className={styles.grid} ref={gridRef} role="list">
          {services.map((service) => (
            <article key={service.id} className={styles.card} role="listitem">
              <div className={styles.topBar} aria-hidden="true" />
              <div className={styles.num}>{service.num} / {service.id}</div>
              <h3 className={styles.name}>{service.name}</h3>
              <p className={styles.desc}>{service.shortDesc}</p>
              <span className={styles.tag}>{service.tag}</span>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/services" variant="ghost">
            Explore All Services →
          </Button>
        </div>
      </div>
    </section>
  )
}
