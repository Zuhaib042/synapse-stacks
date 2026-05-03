import { FadeUp } from '@/components/ui/FadeUp'
import styles from './Advantage.module.css'

export function Advantage() {
  return (
    <section className={styles.section} aria-labelledby="advantage-title">
      <div className={styles.inner}>
        {/* Capabilities intro — left */}
        <FadeUp className={styles.left}>
          <p className={styles.eyebrow}>// Core capabilities</p>
          <h2 id="advantage-title" className={styles.headline}>
            We <em>architect</em> systems,<br />not just software
          </h2>
        </FadeUp>

        {/* Body copy — right */}
        <FadeUp className={styles.right} delay={80}>
          <div className={styles.body}>
            <p>
              Nine deeply specialised engineering practices, delivered by a team that treats your
              infrastructure as its own. We don&apos;t hand off we embed.
            </p>
            <p>
              Every engagement starts with systems thinking. We map the full trajectory before
              writing a line of code, so what we build is built to last.
            </p>
          </div>
        </FadeUp>

        {/* Quote card — full width */}
        <FadeUp className={styles.quoteCard} delay={120}>
          <blockquote className={styles.quoteText}>
            &ldquo;Every hour spent managing legacy debt is time away from building features that
            move your business. SynapseStacks gives your team the <em>infrastructure</em> to focus
            on what actually matters.&rdquo;
          </blockquote>
          <div className={styles.quoteAttr}>
            <div className={styles.avatar} aria-hidden="true">SS</div>
            <div>
              <div className={styles.attrName}>SynapseStacks</div>
              <div className={styles.attrRole}>Engineering Philosophy</div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
