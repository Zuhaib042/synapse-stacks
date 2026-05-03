import Link from 'next/link'
import { LogoIcon } from '@/components/ui/Logo'
import styles from './Footer.module.css'

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/company/synapse-stacks', label: 'LinkedIn', external: true },
]

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.brandName}>
            <LogoIcon size={22} />
            SynapseStacks
          </div>
          <p className={styles.brandDesc}>
            Premium software engineering. We build high-performance digital infrastructure for
            visionary companies.
          </p>
        </div>

        <div>
          <div className={styles.colTitle}>Company</div>
          <ul className={styles.links}>
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>Legal</div>
          <ul className={styles.links}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={styles.colTitle}>Social</div>
          <ul className={styles.links}>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">SynapseStacks</div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© {new Date().getFullYear()} SynapseStacks. All rights reserved.</span>
        <span className={styles.copy}>hello@synapsestacks.com</span>
      </div>
    </footer>
  )
}
