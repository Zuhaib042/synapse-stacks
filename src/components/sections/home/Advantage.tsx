import { FadeUp } from '@/components/ui/FadeUp'
import { LayerShapes } from '@/components/ui/LayerShapes'
import { advantagePillars } from '@/lib/data/metrics'
import styles from './Advantage.module.css'

export function Advantage() {
  return (
    <section className={styles.section} aria-labelledby="advantage-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>The Synapse Advantage</p>
        <h2 id="advantage-title" className={styles.title}>
          We don&apos;t just write code.
          <br />
          We engineer frameworks.
        </h2>

        <div className={styles.grid}>
          {/* Pillars */}
          <div className={styles.pillars}>
            {advantagePillars.map((pillar) => (
              <FadeUp key={pillar.title} className={styles.pillar}>
                <div
                  className={styles.pillarMark}
                  style={{ background: pillar.accentColor }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Dark visual panel */}
          <FadeUp className={styles.visual}>
            {/* Layered wireframe decoration */}
            <LayerShapes />

            <blockquote className={styles.quote}>
              &ldquo;Software is not a collection of features. It&apos;s a living system — every
              component must interact seamlessly, predictably, and securely.&rdquo;
            </blockquote>
            <p className={styles.quoteSub}>// SynapseStacks Engineering Philosophy</p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
