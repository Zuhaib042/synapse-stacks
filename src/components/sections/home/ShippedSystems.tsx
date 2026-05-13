import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import styles from './ShippedSystems.module.css'

const shippedProjects = [
  {
    name: 'ChainBlocks',
    imageSrc: '/work/chainblocks/cb-dash.webp',
    imageAlt: 'ChainBlocks dashboard preview showing cross-chain KPIs and analytics',
    liveUrl: 'https://chainblocks-olive.vercel.app',
    summary:
      'A multi-chain analytics dashboard with protected API access, cached data delivery, and product structure built for future growth.',
    tags: ['Analytics Dashboard', 'Caching', 'API Architecture'],
  },
]

export function ShippedSystems() {
  return (
    <section className={styles.section} aria-labelledby="shipped-title">
      <div className={styles.inner}>
        <FadeUp className={styles.header}>
          <div>
            <p className={styles.eyebrow}>// Systems we&apos;ve shipped</p>
            <h2 id="shipped-title" className={styles.title}>
              Real products, platforms, and dashboards built to <em>do useful work.</em>
            </h2>
          </div>
          <p className={styles.sub}>
            The work matters more than the pitch. Here is one of the systems currently live.
          </p>
        </FadeUp>

        <div className={styles.slider} role="list" aria-label="Selected shipped systems">
          <div className={styles.track}>
            {shippedProjects.map((project) => (
              <article key={project.name} className={styles.card} role="listitem">
                <div className={styles.cardFrame}>
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={1600}
                    height={1000}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div>
                      <div className={styles.cardLabel}>Delivered Work</div>
                      <h3 className={styles.cardTitle}>{project.name}</h3>
                    </div>
                    <a
                      href={project.liveUrl}
                      className={styles.liveChip}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See it Live
                    </a>
                  </div>
                  <p className={styles.cardSummary}>{project.summary}</p>
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
