import { existsSync } from 'node:fs'
import { join } from 'node:path'
import Image from 'next/image'
import { FadeUp } from '@/components/ui/FadeUp'
import styles from './ShippedSystems.module.css'

type ShippedProject =
  | {
      name: string
      label: string
      layout: 'desktop'
      imageSrc: string
      imageAlt: string
      liveUrl: string
      summary: string
      tags: string[]
    }
  | {
      name: string
      label: string
      layout: 'mobile'
      statusLabel: string
      summary: string
      tags: string[]
      screenshots: {
        src: string
        alt: string
      }[]
    }

const shippedProjects: ShippedProject[] = [
  {
    name: 'ChainBlocks',
    label: 'Delivered Work',
    layout: 'desktop',
    imageSrc: '/work/chainblocks/cb-dash.webp',
    imageAlt: 'ChainBlocks dashboard preview showing cross-chain KPIs and analytics',
    liveUrl: 'https://chainblocks-olive.vercel.app',
    summary:
      'A multi-chain analytics dashboard with protected API access, cached data delivery, and product structure built for future growth.',
    tags: ['Analytics Dashboard', 'Caching', 'API Architecture'],
  },
  {
    name: 'Alpha Male',
    label: 'Mobile App',
    layout: 'mobile',
    statusLabel: 'Mobile Screens',
    summary:
      'A mobile-first discipline and accountability app for men who want to take back control from destructive digital habits like porn, compulsive scrolling, trigger-seeking, wasted nights, relapse cycles, and the loss of time, money, energy, confidence, and focus.',
    tags: ['React Native', 'Supabase', 'Next.js', 'Mobile App'],
    screenshots: [
      {
        src: '/work/alphamale/today1.webp',
        alt: 'Command Center',
      },
      {
        src: '/work/alphamale/c-drills.webp',
        alt: 'Social Community',
      },
      {
        src: '/work/alphamale/alpha-chief.webp',
        alt: 'AI Mentorship in hard times',
      },
    ],
  },
]

function publicAssetExists(src: string) {
  return existsSync(join(process.cwd(), 'public', src.replace(/^\//, '')))
}

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
            The work matters more than the pitch. Here are a few systems shaped into real product
            surfaces.
          </p>
        </FadeUp>

        <div className={styles.slider} role="list" aria-label="Selected shipped systems">
          <div className={styles.track}>
            {shippedProjects.map((project) => (
              <article key={project.name} className={styles.card} role="listitem">
                <div
                  className={`${styles.cardFrame} ${
                    project.layout === 'mobile' ? styles.mobileFrame : ''
                  }`}
                >
                  {project.layout === 'mobile' ? (
                    <div className={styles.phoneShelf}>
                      {project.screenshots?.map((screenshot, index) => (
                        <div
                          key={screenshot.src}
                          className={`${styles.phoneMockup} ${
                            index === 1 ? styles.phoneMockupPrimary : ''
                          }`}
                        >
                          <div className={styles.phoneSpeaker} />
                          {publicAssetExists(screenshot.src) ? (
                            <Image
                              src={screenshot.src}
                              alt={screenshot.alt}
                              width={430}
                              height={932}
                              className={styles.phoneImage}
                            />
                          ) : (
                            <div
                              className={styles.phonePlaceholder}
                              role="img"
                              aria-label={`${screenshot.alt}. Add this image at public${screenshot.src}.`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      width={1600}
                      height={1000}
                      className={styles.cardImage}
                    />
                  )}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div>
                      <div className={styles.cardLabel}>{project.label}</div>
                      <h3 className={styles.cardTitle}>{project.name}</h3>
                    </div>
                    {project.layout === 'desktop' ? (
                      <a
                        href={project.liveUrl}
                        className={styles.liveChip}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See it Live
                      </a>
                    ) : (
                      <span className={styles.liveChip}>{project.statusLabel}</span>
                    )}
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
