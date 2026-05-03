import styles from './LogosBar.module.css'

const logos = [
  { symbol: '▲', name: 'Vercel' },
  { symbol: '◈', name: 'Anthropic' },
  { symbol: '⬡', name: 'Stripe' },
  { symbol: '◻', name: 'Linear' },
  { symbol: '⬢', name: 'Figma' },
]

export function LogosBar() {
  return (
    <div className={styles.logos} aria-label="Trusted by teams at">
      <span className={styles.label}>Trusted by teams at</span>
      <div className={styles.items}>
        {logos.map((logo) => (
          <span key={logo.name} className={styles.item}>
            {logo.symbol} {logo.name}
          </span>
        ))}
      </div>
    </div>
  )
}
