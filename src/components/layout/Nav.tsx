'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'
import { servicePages } from '@/lib/data/servicePages'
import styles from './Nav.module.css'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
]

const workLinks = [
  { href: '/work/chainblocks', label: 'ChainBlocks' },
  { href: '/work/alpha-male', label: 'Alpha Male' },
]

export function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<'services' | 'work' | null>(null)
  const workActive = pathname.startsWith('/work')
  const servicesActive = pathname.startsWith('/services')

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <Logo />

      {/* Desktop nav */}
      <ul className={styles.links} role="list">
        <li>
          <Link
            href="/"
            className={`${styles.link}${pathname === '/' ? ` ${styles.active}` : ''}`}
            onClick={() => setOpenDropdown(null)}
          >
            Home
          </Link>
        </li>
        <li
          className={styles.dropdown}
          onMouseEnter={() => setOpenDropdown('services')}
          onMouseLeave={() => setOpenDropdown((current) => (current === 'services' ? null : current))}
        >
          <Link
            href="/services"
            className={`${styles.link}${servicesActive ? ` ${styles.active}` : ''} ${styles.dropdownToggle}`}
            onClick={() => setOpenDropdown(null)}
          >
            Services
            <span
              className={`${styles.caret}${openDropdown === 'services' ? ` ${styles.caretOpen}` : ''}`}
              aria-hidden="true"
            >
              ›
            </span>
          </Link>
          <div
            className={`${styles.dropdownMenu} ${styles.dropdownMenuWide} ${openDropdown === 'services' ? styles.dropdownMenuOpen : ''}`}
          >
            <Link href="/services" className={styles.dropdownLink} onClick={() => setOpenDropdown(null)}>
              All Services
            </Link>
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.dropdownLink}
                onClick={() => setOpenDropdown(null)}
              >
                {service.navLabel}
              </Link>
            ))}
          </div>
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${styles.link}${pathname === link.href ? ` ${styles.active}` : ''}`}
              onClick={() => setOpenDropdown(null)}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li
          className={styles.dropdown}
          onMouseEnter={() => setOpenDropdown('work')}
          onMouseLeave={() => setOpenDropdown((current) => (current === 'work' ? null : current))}
        >
          <button
            type="button"
            className={`${styles.link}${workActive ? ` ${styles.active}` : ''} ${styles.dropdownToggle}`}
            aria-haspopup="true"
            onClick={() => setOpenDropdown((current) => (current === 'work' ? null : 'work'))}
          >
            Work
            <span
              className={`${styles.caret}${openDropdown === 'work' ? ` ${styles.caretOpen}` : ''}`}
              aria-hidden="true"
            >
              ›
            </span>
          </button>
          <div className={`${styles.dropdownMenu} ${openDropdown === 'work' ? styles.dropdownMenuOpen : ''}`}>
            {workLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.dropdownLink}
                onClick={() => setOpenDropdown(null)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </li>
      </ul>

      <div className={styles.actions}>
        <Link href="/#consultation" className={styles.cta}>
          Schedule a Consultation
        </Link>
      </div>

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
            <li className={styles.mobileGroup}>
              <div className={`${styles.mobileLink}${servicesActive ? ` ${styles.mobileLinkActive}` : ''}`}>
                Services
              </div>
              <div className={styles.mobileSubmenu}>
                <Link
                  href="/services"
                  className={`${styles.mobileSubLink}${pathname === '/services' ? ` ${styles.mobileLinkActive}` : ''}`}
                  onClick={() => {
                    setMenuOpen(false)
                    setOpenDropdown(null)
                  }}
                >
                  All Services
                </Link>
                {servicePages.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className={`${styles.mobileSubLink}${pathname === `/services/${service.slug}` ? ` ${styles.mobileLinkActive}` : ''}`}
                    onClick={() => {
                      setMenuOpen(false)
                      setOpenDropdown(null)
                    }}
                  >
                    {service.navLabel}
                  </Link>
                ))}
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileLink}${pathname === link.href || (link.href === '/#faq' && pathname === '/') ? ` ${styles.mobileLinkActive}` : ''}`}
                  onClick={() => {
                    setMenuOpen(false)
                    setOpenDropdown(null)
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileGroup}>
              <div className={`${styles.mobileLink}${workActive ? ` ${styles.mobileLinkActive}` : ''}`}>
                Work
              </div>
              <div className={styles.mobileSubmenu}>
                {workLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${styles.mobileSubLink}${pathname === link.href ? ` ${styles.mobileLinkActive}` : ''}`}
                    onClick={() => {
                      setMenuOpen(false)
                      setOpenDropdown(null)
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link
                href="/#consultation"
                className={styles.mobileCta}
                onClick={() => {
                  setMenuOpen(false)
                  setOpenDropdown(null)
                }}
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
