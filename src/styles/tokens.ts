/**
 * SynapseStacks Design Tokens
 *
 * Single source of truth for all design values.
 * Import this file in any component to access colors, typography,
 * spacing, shadows, and radii as TypeScript constants.
 *
 * CSS custom properties (variables) are set in globals.css using
 * these same values, so you can also reference them as var(--token-name)
 * in CSS Modules.
 */

export const colors = {
  // Backgrounds
  cream: '#F4F0E6',
  creamDark: '#EAE5D8',

  // Text
  ink: '#1C1914',
  inkMid: '#4A4540',
  inkLight: '#7A7268',

  // Accent palette
  yellow: '#F2C84B',
  yellowDark: '#D9AE2A',
  green: '#6EC97A',
  pink: '#E85C8A',
  blue: '#3B5BDB',
  blueLight: '#5B8EF0',
  purple: '#9B72CF',

  // Base
  white: '#FFFFFF',
} as const

export const fonts = {
  sans: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
  mono: "var(--font-mono, 'JetBrains Mono', monospace)",
} as const

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const

export const radii = {
  sm: '10px',
  md: '16px',
  lg: '24px',
  full: '100px',
} as const

export const shadows = {
  card: '0 2px 24px rgba(28,25,20,0.08)',
  cardHover: '0 8px 40px rgba(28,25,20,0.12)',
} as const

export const transitions = {
  fast: '0.15s',
  base: '0.2s',
  slow: '0.6s',
} as const

// Accent color cycle used across service cards, process steps, pillars, etc.
export const accentCycle = [
  colors.yellow,
  colors.blue,
  colors.green,
  colors.pink,
  colors.purple,
] as const

export type ColorKey = keyof typeof colors
export type AccentColor = (typeof accentCycle)[number]
