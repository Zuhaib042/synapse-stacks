import { colors } from '@/styles/tokens'

export interface Metric {
  value: string
  label: string
  accentColor: string
}

export const metrics: Metric[] = [
  { value: '50+',   label: 'Enterprise Projects', accentColor: colors.yellow },
  { value: '99.9%', label: 'System Uptime',        accentColor: colors.blueLight },
  { value: '~0',    label: 'Technical Debt',        accentColor: colors.green },
  { value: '100%',  label: 'Code Ownership',        accentColor: colors.pink },
]

export const processSteps = [
  {
    num: '// 01',
    title: 'Discover & Architect',
    desc: 'We map your system requirements, technical constraints, and growth trajectory before writing a single line of code.',
    accentColor: colors.yellow,
  },
  {
    num: '// 02',
    title: 'Design & Prototype',
    desc: 'High-fidelity prototypes and architectural blueprints validated against your real users and business objectives.',
    accentColor: colors.blue,
  },
  {
    num: '// 03',
    title: 'Build & Iterate',
    desc: 'Test-driven development, strict CI/CD, and peer reviews. Transparent progress. No black boxes, ever.',
    accentColor: colors.green,
  },
  {
    num: '// 04',
    title: 'Deploy & Scale',
    desc: 'Zero-downtime deployments into hardened cloud environments, with ongoing monitoring, support, and optimisation.',
    accentColor: colors.pink,
  },
]

export const advantagePillars = [
  {
    title: 'Architected for Scale',
    desc: 'Every solution is built with future growth in mind. We use microservices, edge computing, and elastic databases to prevent infrastructure bottlenecks before they form.',
    accentColor: colors.yellow,
  },
  {
    title: 'Intelligent by Design',
    desc: 'Automation and machine learning are woven directly into your applications — reducing operational overhead and enabling data-driven decision making across every layer.',
    accentColor: colors.blue,
  },
  {
    title: 'Relentless Execution',
    desc: 'We operate with the agility of a startup and the rigor of an enterprise — transparent communication, rapid iteration, and uncompromising quality assurance on every commit.',
    accentColor: colors.pink,
  },
]
