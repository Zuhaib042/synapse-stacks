'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'
import styles from './Nav.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
]

export function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <Logo />

      {/* Desktop nav */}
      <ul className={styles.links} role="list">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={[
                styles.link,
                pathname === link.href ? styles.active : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/#consultation" className={styles.cta}>
            Schedule a Consultation
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={[styles.bar, menuOpen ? styles.barOpen1 : ''].filter(Boolean).join(' ')} />
        <span className={[styles.bar, menuOpen ? styles.barOpen2 : ''].filter(Boolean).join(' ')} />
        <span className={[styles.bar, menuOpen ? styles.barOpen3 : ''].filter(Boolean).join(' ')} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true">
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    styles.mobileLink,
                    pathname === link.href ? styles.mobileLinkActive : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#consultation"
                className={styles.mobileCta}
                onClick={() => setMenuOpen(false)}
              >
                Schedule a Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
