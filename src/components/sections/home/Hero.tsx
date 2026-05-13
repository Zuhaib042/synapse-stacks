'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import styles from './Hero.module.css'

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      if (glowRef.current) glowRef.current.classList.add(styles.glowVisible)
    }, 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="hero-headline">
      <div ref={glowRef} className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.top}>
          <h1 id="hero-headline" className={styles.headline}>
            Build your digital ecosystem without the <em>technical headache.</em>
          </h1>
          <div className={styles.right}>
            <p className={styles.sub}>
              SynapseStacks designs and develops websites, apps, dashboards, and automations that
              simplify operations, improve customer experience, and give your team more time to
              focus on growth.
            </p>
            <div className={styles.actions}>
              <Button href="/#consultation" variant="yellow">
                Schedule a Free Consultation
              </Button>
              <Button href="/services" variant="ghost">
                View Services →
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className={styles.mockup} aria-hidden="true">
          <div className={styles.mockupTopbar}>
            <div className={`${styles.dot} ${styles.dotRed}`} />
            <div className={`${styles.dot} ${styles.dotYellow}`} />
            <div className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.mockupTab}>SynapseStacks Dashboard</span>
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.mockupSidebar}>
              {['Overview', 'Infrastructure', 'Deployments', 'AI Pipelines', 'Services', 'Analytics'].map(
                (item, i) => (
                  <div key={item} className={`${styles.sidebarItem} ${i === 1 ? styles.active : ''}`}>
                    <div
                      className={styles.sidebarDot}
                      style={{ background: i === 1 ? 'var(--neon)' : '#444' }}
                    />
                    {item}
                  </div>
                )
              )}
            </div>
            <div className={styles.mockupMain}>
              <div className={styles.mockupTitle}>Cloud Infrastructure Health</div>
              <div className={styles.mockupId}>#PROD-2026 · AWS us-east-1</div>
              <div className={styles.mockupDesc}>
                All systems nominal. Latest deployment completed in 2m 14s with zero downtime.
                Auto-scaling triggered at 78% load 3 new nodes provisioned.
              </div>
              <div className={styles.mockupTags}>
                <span className={`${styles.mockupTag} ${styles.mockupTagGreen}`}>● Operational</span>
                <span className={`${styles.mockupTag} ${styles.mockupTagPurple}`}>Kubernetes</span>
                <span className={styles.mockupTag}>Terraform</span>
                <span className={styles.mockupTag}>AWS</span>
              </div>
            </div>
          </div>
          <div className={styles.mockupStats}>
            <div className={styles.mockupStat}>
              <div className={`${styles.statVal} ${styles.statValNeon}`}>99.9%</div>
              <div className={styles.statLabel}>Uptime SLA</div>
            </div>
            <div className={styles.mockupStat}>
              <div className={`${styles.statVal} ${styles.statValAccent}`}>50+</div>
              <div className={styles.statLabel}>Projects Live</div>
            </div>
            <div className={styles.mockupStat}>
              <div className={styles.statVal}>~0ms</div>
              <div className={styles.statLabel}>Tech Debt</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
