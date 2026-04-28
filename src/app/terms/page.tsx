import type { Metadata } from 'next'
import { buildPageMeta, SITE_URL_CONST } from '@/lib/seo'
import styles from '@/app/legal.module.css'

export const metadata: Metadata = buildPageMeta({
  title: 'Terms of Service — SynapseStacks',
  description:
    'Read the Terms of Service governing your use of the SynapseStacks website and engagement with our software engineering services.',
  alternates: { canonical: `${SITE_URL_CONST}/terms` },
  openGraph: {
    title: 'Terms of Service — SynapseStacks',
    description: 'Terms governing use of SynapseStacks and our services.',
    url: `${SITE_URL_CONST}/terms`,
  },
})

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: April 28, 2026</p>

        <div className={styles.section}>
          <p>
            Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using{' '}
            <a href="https://synapsestacks.com">synapsestacks.com</a> (the &ldquo;Site&rdquo;) or
            engaging SynapseStacks for software engineering services. By accessing the Site or
            entering into a service agreement with us you agree to be bound by these Terms.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2>1. About Us</h2>
          <p>
            SynapseStacks is a premium software engineering agency that designs, architects, and
            builds enterprise-grade software products and systems. References to
            &ldquo;SynapseStacks,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;
            refer to SynapseStacks and its team members.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes and in a manner that does not:</p>
          <ul>
            <li>Infringe the rights of any third party.</li>
            <li>
              Transmit any unsolicited or unauthorized advertising, spam, or promotional material.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion or feature of the Site, or any
              other systems connected to the Site.
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the Site or its servers.
            </li>
          </ul>
          <p>
            We reserve the right to terminate or restrict access to the Site for any user who
            violates these Terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Services &amp; Engagements</h2>
          <p>
            Client engagements are governed by a separate Statement of Work (SOW) or Master Service
            Agreement (MSA) executed between SynapseStacks and the client. Those documents take
            precedence over these Terms with respect to the specific services described therein.
          </p>
          <p>
            All projects begin with a discovery call and scoping process. No work commences until a
            written agreement is signed and, where applicable, a deposit is received.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. Intellectual Property</h2>
          <p>
            <strong>Site content.</strong> All content on the Site — including text, graphics, logos,
            and code — is the property of SynapseStacks and is protected by applicable copyright
            and trademark laws. You may not reproduce, distribute, or create derivative works
            without our prior written permission.
          </p>
          <p>
            <strong>Deliverables.</strong> Ownership of deliverables produced under a client
            engagement is defined in the applicable SOW or MSA. Unless otherwise agreed in writing,
            upon receipt of full payment, clients receive a license to use the deliverables for
            their intended business purpose. SynapseStacks retains the right to display work in
            its portfolio unless the client requests confidentiality in writing.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Payment Terms</h2>
          <p>
            Fees, payment schedules, and late-payment terms are specified in the relevant SOW or
            MSA. Where no separate agreement exists:
          </p>
          <ul>
            <li>Invoices are due within 14 days of the invoice date.</li>
            <li>
              Late payments accrue interest at 1.5% per month (or the maximum rate permitted by
              law, whichever is lower).
            </li>
            <li>
              We reserve the right to pause work on any engagement with outstanding overdue invoices.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>6. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any non-public information shared during the
            course of an engagement (&ldquo;Confidential Information&rdquo;). Confidential
            Information may not be disclosed to third parties without prior written consent, except
            as required by law or court order.
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The Site and any information provided on it are offered &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; without warranties of any kind, express or implied, including
            but not limited to warranties of merchantability, fitness for a particular purpose, or
            non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or
            free of viruses or other harmful components.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, SynapseStacks shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages — including
            loss of profits, data, or goodwill — arising out of or in connection with your use of
            the Site, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            Our total aggregate liability arising from or related to these Terms shall not exceed
            the greater of (a) the amount you paid us in the 12 months preceding the claim or
            (b) $100 USD.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless SynapseStacks and its team members
            from and against any claims, liabilities, damages, losses, and expenses (including
            reasonable legal fees) arising out of or in any way connected with your use of the Site
            or violation of these Terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the
            jurisdiction in which SynapseStacks is registered, without regard to conflict-of-law
            principles. Any dispute arising from these Terms shall first be attempted to be resolved
            through good-faith negotiation. If unresolved after 30 days, disputes shall be submitted
            to binding arbitration under the applicable commercial arbitration rules.
          </p>
        </div>

        <div className={styles.section}>
          <h2>11. Changes to These Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. Changes take effect
            immediately upon posting. Continued use of the Site after changes are posted constitutes
            your acceptance of the revised Terms. We encourage you to review this page periodically.
          </p>
        </div>

        <div className={styles.section}>
          <h2>12. Contact Us</h2>
          <p>
            Questions about these Terms? We&apos;re happy to clarify:
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
