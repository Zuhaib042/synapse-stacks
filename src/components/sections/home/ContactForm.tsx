'use client'

import { useState, useCallback } from 'react'
import styles from './ContactForm.module.css'

interface FormData {
  fullName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  message?: string
}

const EMPTY: FormData = { fullName: '', email: '', phone: '', message: '' }

function validate(data: FormData): FormErrors {
  const e: FormErrors = {}
  if (!data.fullName.trim() || data.fullName.trim().length < 2)
    e.fullName = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    e.email = 'Please enter a valid email address.'
  if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3,6}[-\s.]?[0-9]{2,6}$/.test(data.phone.trim()))
    e.phone = 'Please enter a valid phone number.'
  if (!data.message.trim() || data.message.trim().length < 20)
    e.message = 'Please describe your project (at least 20 characters).'
  return e
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const set = useCallback((field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate({ ...form, [field]: value })[field] }))
    }
  }, [form, touched])

  const blur = useCallback((field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors((prev) => ({ ...prev, [field]: validate(form)[field] }))
  }, [form])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { fullName: true, email: true, phone: true, message: true }
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setServerError(data.error ?? 'Something went wrong.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setServerError('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <div className={styles.successIcon} aria-hidden="true">✓</div>
          <h3 className={styles.successTitle}>Message received.</h3>
          <p className={styles.successSub}>
            Thanks, {form.fullName.split(' ')[0]}. We&apos;ll review your project details and
            be in touch within 24 hours.
          </p>
          <button
            className={styles.resetBtn}
            onClick={() => { setForm(EMPTY); setStatus('idle'); setTouched({}); setErrors({}) }}
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <p className={styles.cardEyebrow}>Get in touch</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            className={`${styles.input}${errors.fullName && touched.fullName ? ` ${styles.inputError}` : ''}`}
            type="text"
            placeholder="Jane Smith"
            value={form.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            onBlur={() => blur('fullName')}
            autoComplete="name"
          />
          {errors.fullName && touched.fullName && (
            <span className={styles.error} role="alert">{errors.fullName}</span>
          )}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input
              id="email"
              className={`${styles.input}${errors.email && touched.email ? ` ${styles.inputError}` : ''}`}
              type="email"
              placeholder="jane@company.com"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              onBlur={() => blur('email')}
              autoComplete="email"
            />
            {errors.email && touched.email && (
              <span className={styles.error} role="alert">{errors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              className={`${styles.input}${errors.phone && touched.phone ? ` ${styles.inputError}` : ''}`}
              type="tel"
              placeholder="+1 555 000 0000"
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              onBlur={() => blur('phone')}
              autoComplete="tel"
            />
            {errors.phone && touched.phone && (
              <span className={styles.error} role="alert">{errors.phone}</span>
            )}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">Project Details</label>
          <textarea
            id="message"
            className={`${styles.textarea}${errors.message && touched.message ? ` ${styles.inputError}` : ''}`}
            placeholder="Tell us about your project — what you're building, your current stack, timeline, and goals..."
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
            onBlur={() => blur('message')}
            rows={5}
          />
          {errors.message && touched.message && (
            <span className={styles.error} role="alert">{errors.message}</span>
          )}
        </div>

        {serverError && (
          <p className={styles.serverError} role="alert">{serverError}</p>
        )}

        <button
          type="submit"
          className={styles.submit}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Send Message →'}
        </button>

        <p className={styles.note}>We respond to all inquiries within 24 hours.</p>
      </form>
    </div>
  )
}
