import type { Metadata } from 'next'
import { buildPageMeta, SITE_URL_CONST } from '@/lib/seo'
import styles from '@/app/legal.module.css'

export const metadata: Metadata = buildPageMeta({
  title: 'Privacy Policy — SynapseStacks',
  description:
    'Learn how SynapseStacks collects, uses, and protects your personal information when you use our website and services.',
  alternates: { canonical: `${SITE_URL_CONST}/privacy` },
  openGraph: {
    title: 'Privacy Policy — SynapseStacks',
    description: 'How SynapseStacks handles your data and privacy.',
    url: `${SITE_URL_CONST}/privacy`,
  },
})

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: April 28, 2026</p>

        <div className={styles.section}>
          <p>
            SynapseStacks (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed
            to protecting your privacy. This Privacy Policy explains what information we collect when
            you visit{' '}
            <a href="https://synapsestacks.com">synapsestacks.com</a> (the
            &ldquo;Site&rdquo;), how we use it, and the choices you have.
          </p>
          <p>
            By using the Site you agree to the practices described in this policy. If you do not
            agree, please do not use the Site.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>
            <strong>Information you provide directly.</strong> When you submit our contact form or
            reach out by email, we collect the information you voluntarily share — such as your name,
            email address, company name, and the content of your message.
          </p>
          <p>
            <strong>Usage data.</strong> We may automatically collect certain technical information
            when you visit the Site, including your IP address, browser type, operating system,
            referring URLs, pages viewed, and timestamps. This data is collected in aggregate and is
            not linked to any personally identifiable information unless you submit a form.
          </p>
          <p>
            <strong>Cookies and similar technologies.</strong> The Site may use essential cookies to
            ensure basic functionality. We do not use tracking or advertising cookies. You can
            configure your browser to refuse cookies; some parts of the Site may not function
            correctly as a result.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and deliver the services you request.</li>
            <li>Improve the Site&apos;s content, performance, and user experience.</li>
            <li>Prevent fraud, abuse, and violations of our Terms of Service.</li>
            <li>Comply with applicable legal obligations.</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third parties for their
            own marketing purposes.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Third-Party Services</h2>
          <p>
            We may use reputable third-party service providers to operate the Site — such as hosting
            providers, analytics tools, and email delivery services. These providers are
            contractually required to use your information only on our behalf and to keep it
            confidential.
          </p>
          <p>
            Any third-party links on the Site are governed by those parties&apos; own privacy
            policies. We are not responsible for the privacy practices of external sites.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary for the purposes described
            above, or as required by law. Contact form submissions are kept for up to 24 months and
            then deleted, unless an ongoing business relationship is established.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We use industry-standard technical and organizational measures to protect your
            information against unauthorized access, disclosure, alteration, or destruction.
            However, no method of transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Your Rights</h2>
          <p>
            Depending on your location you may have rights under applicable data protection laws,
            including the right to access, correct, or delete personal data we hold about you. To
            exercise any of these rights, please contact us at the address below.
          </p>
          <p>
            If you are located in the European Economic Area, United Kingdom, or California, you
            may have additional rights under GDPR, UK GDPR, or the CCPA respectively. We will
            respond to verified requests within 30 days.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Children&apos;s Privacy</h2>
          <p>
            The Site is not directed to children under 13. We do not knowingly collect personal
            information from children. If you believe we have inadvertently collected such
            information, please contact us so we can delete it promptly.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &ldquo;Last updated&rdquo; date at the top of the page. Continued use of the Site after
            any changes constitutes your acceptance of the updated policy.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data rights,
            please reach out:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@synapsestacks.com">contact@synapsestacks.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
