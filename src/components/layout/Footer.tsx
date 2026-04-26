import Link from 'next/link'
import { LogoIcon } from '@/components/ui/Logo'
import styles from './Footer.module.css'

const footerLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

const socialLinks = [
  { href: 'https://twitter.com/synapsestacks', label: 'Twitter', external: true },
  { href: 'https://github.com/synapsestacks', label: 'GitHub', external: true },
]

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="SynapseStacks home">
          <LogoIcon size={28} />
          <span className={styles.logoText}>SynapseStacks</span>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className={styles.links} role="list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
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
        </nav>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} SynapseStacks. All rights reserved.
      </p>
    </footer>
  )
}
