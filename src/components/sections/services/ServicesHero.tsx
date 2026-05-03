import styles from './ServicesHero.module.css'

export function ServicesHero() {
  return (
    <div className={styles.hero} aria-labelledby="services-hero-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>// Our services</p>
        <h1 id="services-hero-title" className={styles.title}>
          Nine disciplines.<br /><em>One partner.</em>
        </h1>
        <p className={styles.sub}>
          From foundational cloud infrastructure to intelligent AI automation. Every capability you
          need to build, scale, and own your digital future.
        </p>
      </div>
    </div>
  )
}
