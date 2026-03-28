import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for 707 Medical Services and learn how website information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-5xl">
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              Legal
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
              Privacy Policy
            </h1>

            <div className="mt-6 space-y-2 text-base text-slate-500">
              <p>
                <strong>Effective Date:</strong> March 27, 2026
              </p>
              <p>
                <strong>Last Updated:</strong> March 27, 2026
              </p>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-brand-border bg-white p-8 shadow-card sm:p-10">
              <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
                <p>
                  707 Medical Services (“Company,” “we,” “our,”
                  or “us”) values your privacy. This Privacy Policy explains how
                  we collect, use, disclose, and protect personal information
                  collected through our website and related service inquiries.
                </p>

                <h2>1. Information We Collect</h2>
                <p>We may collect the following categories of information:</p>

                <h3>Information you provide directly</h3>
                <ul>
                  <li>Name</li>
                  <li>Organization name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Pickup location</li>
                  <li>Delivery location</li>
                  <li>Service request details</li>
                  <li>Resume or job application details if you apply for employment</li>
                </ul>

                <h3>Information collected automatically</h3>
                <ul>
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Referral source</li>
                  <li>Pages visited</li>
                  <li>Date and time of visits</li>
                  <li>Basic analytics and usage data collected through cookies or similar technologies</li>
                </ul>

                <h2>2. How We Use Information</h2>
                <p>We may use personal information to:</p>
                <ul>
                  <li>Respond to service inquiries</li>
                  <li>Coordinate courier or logistics requests</li>
                  <li>Communicate with you about requested services</li>
                  <li>Process job applications</li>
                  <li>Improve our website and operations</li>
                  <li>Maintain site security and prevent misuse</li>
                  <li>Comply with legal, regulatory, and business obligations</li>
                </ul>

                <h2>3. Healthcare and Sensitive Information</h2>
                <p>
                  Our website is intended for business communication and service
                  coordination. Please do not submit unnecessary medical records,
                  diagnoses, or other sensitive health information through
                  website forms unless specifically requested through an approved
                  process.
                </p>

                <p>
                  Where our operations involve healthcare-related materials or
                  information, we seek to handle information in accordance with
                  applicable contractual, legal, and operational requirements.
                </p>

                <h2>4. How We Share Information</h2>
                <p>We do not sell personal information.</p>

                <p>We may share information:</p>
                <ul>
                  <li>
                    with service providers that support website hosting, forms,
                    email, analytics, or operations
                  </li>
                  <li>
                    with clients or partners as needed to coordinate requested
                    logistics services
                  </li>
                  <li>
                    when required by law, court order, subpoena, or regulatory
                    request
                  </li>
                  <li>
                    to protect rights, safety, property, or security
                  </li>
                  <li>
                    in connection with a merger, acquisition, or asset transfer
                  </li>
                </ul>

                <h2>5. Cookies and Analytics</h2>
                <p>
                  We may use cookies, analytics tools, and similar technologies
                  to understand website traffic, improve performance, and
                  maintain security.
                </p>

                <p>
                  You can control cookies through your browser settings, though
                  some site functionality may be affected.
                </p>

                <h2>6. Data Retention</h2>
                <p>
                  We retain information only for as long as reasonably necessary
                  for inquiry response, service coordination, recordkeeping,
                  legal, tax, regulatory, or security purposes.
                </p>

                <h2>7. Data Security</h2>
                <p>
                  We use reasonable administrative, technical, and organizational
                  measures to protect personal information. However, no method
                  of transmission or storage is completely secure, and we cannot
                  guarantee absolute security.
                </p>

                <h2>8. Your Choices</h2>
                <p>You may contact us to:</p>
                <ul>
                  <li>request access to information you submitted through the site</li>
                  <li>correct inaccurate contact details</li>
                  <li>request deletion where appropriate</li>
                  <li>opt out of non-essential communications</li>
                </ul>

                <p>
                  We may need to retain certain information where required for
                  legal, operational, or recordkeeping purposes.
                </p>

                <h2>9. Third-Party Services and Links</h2>
                <p>
                  Our website may link to third-party websites or use third-party
                  services such as form providers, embedded maps, analytics, or
                  email tools. We are not responsible for the privacy practices
                  of third parties.
                </p>

                <h2>10. Children’s Privacy</h2>
                <p>
                  Our website is not directed to children under 13, and we do
                  not knowingly collect personal information from children
                  through the site.
                </p>

                <h2>11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The
                  revised version will be posted on this page with an updated
                  effective date.
                </p>

                <h2>12. Contact Us</h2>
                <p>
                  707 Medical Services
                  <br />
                  1 E Erie St Suite 525-3498
                  <br />
                  Chicago, IL 60611
                  <br />
                  Phone: (872) 810-3236
                  <br />
                  Email: admin@707holding.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}