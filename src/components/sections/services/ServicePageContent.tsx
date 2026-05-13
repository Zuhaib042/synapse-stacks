import { FadeUp } from '@/components/ui/FadeUp'
import Image from 'next/image'
import Link from 'next/link'
import type { ServicePageData } from '@/lib/data/servicePages'
import styles from './ServicePageContent.module.css'

export function ServicePageContent({ service }: { service: ServicePageData }) {
  return (
    <>
      <section className={styles.hero} aria-labelledby="service-page-title">
        <div className={styles.inner}>
          <FadeUp className={styles.heroIntro}>
            <p className={styles.eyebrow}>{service.heroLabel}</p>
            <h1 id="service-page-title" className={styles.title}>
              {service.heroTitle}
            </h1>
            <p className={styles.sub}>{service.heroIntro}</p>
          </FadeUp>

          <FadeUp delay={90} className={styles.heroMeta}>
            <div className={styles.summaryCard}>
              <div className={styles.metaLabel}>Service Focus</div>
              <p className={styles.summaryText}>{service.heroSummary}</p>
            </div>

            <div className={styles.stackCard}>
              <div className={styles.metaLabel}>Common Stack</div>
              <div className={styles.chips}>
                {service.techStack.map((item) => (
                  <span key={item} className={styles.chip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <FadeUp className={styles.panel}>
              <p className={styles.sectionLabel}>// What you get</p>
              <h2 className={styles.sectionTitle}>A cleaner path from idea to execution.</h2>
              <ul className={styles.list}>
                {service.valuePoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={70} className={styles.panel}>
              <p className={styles.sectionLabel}>// Best fit</p>
              <h2 className={styles.sectionTitle}>Teams we usually help most.</h2>
              <ul className={styles.list}>
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp className={styles.processBlock}>
            <p className={styles.sectionLabel}>// How we approach it</p>
            <h2 className={styles.sectionTitle}>{service.processTitle}</h2>
            <div className={styles.processBody}>
              {service.processBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp>
            <p className={styles.sectionLabel}>// Typical deliverables</p>
            <h2 className={styles.sectionTitle}>What the engagement usually includes.</h2>
          </FadeUp>

          <div className={styles.deliverables}>
            {service.deliverables.map((item, index) => (
              <FadeUp key={item} className={styles.deliverableCard} delay={index * 60}>
                <div className={styles.deliverableNum}>0{index + 1}</div>
                <p className={styles.deliverableText}>{item}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {service.featuredWork && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <FadeUp>
              <p className={styles.sectionLabel}>{service.featuredWork.eyebrow}</p>
              <h2 className={styles.sectionTitle}>A real product that shows the architecture in practice.</h2>
            </FadeUp>

            <FadeUp delay={70}>
              <Link href={service.featuredWork.href} className={styles.workCard}>
                <div className={styles.workFrame}>
                  <Image
                    src={service.featuredWork.imageSrc}
                    alt={service.featuredWork.imageAlt}
                    width={1600}
                    height={1000}
                    className={styles.workImage}
                  />
                </div>
                <div className={styles.workBody}>
                  <div className={styles.workTitle}>{service.featuredWork.title}</div>
                  <p className={styles.workSummary}>{service.featuredWork.summary}</p>
                  <span className={styles.workLink}>View case study</span>
                </div>
              </Link>
            </FadeUp>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.inner}>
          <FadeUp>
            <p className={styles.sectionLabel}>// Questions we hear often</p>
            <h2 className={styles.sectionTitle}>Short answers before we talk.</h2>
          </FadeUp>

          <div className={styles.faqList}>
            {service.faq.map((item, index) => (
              <FadeUp key={item.question} className={styles.faqItem} delay={index * 60}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
