import { FadeUp } from '@/components/ui/FadeUp'
import styles from './FaqSection.module.css'

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={styles.inner}>
        <FadeUp className={styles.header}>
          <p className={styles.eyebrow}>// Frequently asked questions</p>
          <h2 id="faq-title" className={styles.title}>
            A few things people usually want to know <em>before they reach out.</em>
          </h2>
          <p className={styles.sub}>
            The short version is this: we build practical digital systems, we keep the work clear,
            and we care a lot about what the business has to live with after launch.
          </p>
        </FadeUp>

        <div className={styles.list}>
          {items.map((item, index) => (
            <FadeUp key={item.question} className={styles.card} delay={index * 60}>
              <h3 className={styles.question}>{item.question}</h3>
              <p className={styles.answer}>{item.answer}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
