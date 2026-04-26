import { FadeUp } from '@/components/ui/FadeUp'
import { type Service } from '@/lib/data/services'
import styles from './ServiceBlock.module.css'

interface ServiceBlockProps {
  service: Service
  reverse?: boolean
}

// Clean SVG icons per service category — no emoji, no circles
function ServiceIcon({ id }: { id: string }) {
  const icons: Record<string, React.ReactNode> = {
    web: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 20L20 32L8 44" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 44h28" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="18" y="8" width="28" height="48" rx="5" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <line x1="24" y1="48" x2="40" y2="48" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="14" x2="36" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    saas: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="12" y="14" width="40" height="10" rx="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
        <rect x="8" y="29" width="40" height="10" rx="3" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none"/>
        <rect x="4" y="44" width="40" height="10" rx="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"/>
        <line x1="22" y1="24" x2="18" y2="29" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <line x1="38" y1="24" x2="34" y2="29" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="32" r="6" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="20" r="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <circle cx="52" cy="20" r="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="44" r="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <circle cx="52" cy="44" r="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <line x1="15" y1="22" x2="27" y2="29" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <line x1="49" y1="22" x2="37" y2="29" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <line x1="15" y1="42" x2="27" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <line x1="49" y1="42" x2="37" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      </svg>
    ),
    legacy: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 32 C10 20 24 12 38 18" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 12 L38 18 L32 24" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M54 32 C54 44 40 52 26 46" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 52 L26 46 L32 40" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    ecommerce: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 12h6l8 28h28l4-20H20" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="30" cy="48" r="3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none"/>
        <circle cx="44" cy="48" r="3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 40a12 12 0 1 1 2-23.8A16 16 0 0 1 48 28a10 10 0 0 1-2 20H16z" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/>
        <line x1="24" y1="50" x2="24" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="50" x2="32" y2="62" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="40" y1="50" x2="40" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    ux: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="8" width="22" height="22" rx="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
        <rect x="34" y="8" width="22" height="10" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <rect x="34" y="24" width="22" height="6" rx="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"/>
        <rect x="8" y="36" width="48" height="20" rx="3" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    api: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="24" width="16" height="16" rx="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
        <rect x="42" y="10" width="16" height="12" rx="4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none"/>
        <rect x="42" y="42" width="16" height="12" rx="4" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none"/>
        <line x1="22" y1="32" x2="42" y2="16" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="32" x2="42" y2="48" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  }
  return icons[id] ?? null
}

export function ServiceBlock({ service, reverse = false }: ServiceBlockProps) {
  return (
    <FadeUp
      className={[styles.block, reverse ? styles.reverse : ''].filter(Boolean).join(' ')}
      as="article"
    >
      <div className={styles.content}>
        <div className={styles.label}>
          <div
            className={styles.dot}
            style={{ background: service.accentColor }}
            aria-hidden="true"
          />
          <span className={styles.num}>
            {service.num} — {service.name}
          </span>
        </div>

        <h2 className={styles.title}>{service.longDesc.split(' — ')[0].split('.')[0]}</h2>
        <p className={styles.desc}>{service.longDesc}</p>

        <div className={styles.chips}>
          {service.chips.map((chip) => (
            <span key={chip} className={styles.chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Dark visual panel — replaces emoji + orbs with clean SVG icon */}
      <div
        className={styles.visual}
        style={{ background: service.visual.gradient }}
        aria-hidden="true"
      >
        {/* Subtle grid texture */}
        <div className={styles.visualGrid} />
        {/* Thin accent top bar */}
        <div
          className={styles.visualAccent}
          style={{ background: service.accentColor }}
        />
        <div className={styles.visualIcon}>
          <ServiceIcon id={service.id} />
        </div>
        <div className={styles.visualLabel}>{service.visual.label}</div>
      </div>
    </FadeUp>
  )
}
