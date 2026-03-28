import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for 707 Medical Services and understand the conditions governing use of this website.",
};

export default function TermsOfServicePage() {
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
              Terms of Service
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
                  These Terms of Service (“Terms”) govern your use of the 
                  707 Medical Services website and any inquiries
                  submitted through it. By accessing or using this website, you
                  agree to these Terms.
                </p>

                <h2>1. Use of the Website</h2>
                <p>
                  You agree to use this website only for lawful purposes and in
                  a manner that does not infringe the rights of others,
                  interfere with site operations, or attempt unauthorized access
                  to systems or data.
                </p>

                <h2>2. No Guarantee of Service Availability</h2>
                <p>
                  Submitting a request through this website does not guarantee
                  acceptance, scheduling, pricing, or availability of courier or
                  logistics services. All service requests are subject to
                  review, operational capacity, geographic availability, and
                  separate confirmation.
                </p>

                <h2>3. Service Information</h2>
                <p>
                  Information on this website is provided for general
                  informational purposes. Descriptions of services, response
                  times, availability, or operational capabilities may change
                  without notice.
                </p>

                <h2>4. User Submissions</h2>
                <p>If you submit information through the website, you represent that:</p>
                <ul>
                  <li>the information is accurate to the best of your knowledge</li>
                  <li>you have authority to provide it</li>
                  <li>
                    you will not submit unlawful, misleading, or infringing content
                  </li>
                  <li>
                    you will not upload unnecessary sensitive information through
                    general website forms
                  </li>
                </ul>

                <h2>5. Healthcare and Regulatory Context</h2>
                <p>
                  Nothing on this website is intended to replace a separate
                  services agreement, confidentiality agreement, business
                  associate agreement, or operational protocol where one is
                  required.
                </p>

                <p>
                  Where applicable, healthcare-related services may require
                  additional documentation, handling requirements, or contractual
                  terms before services begin.
                </p>

                <h2>6. Intellectual Property</h2>
                <p>
                  All website content, including text, branding, layout,
                  graphics, and design elements, is owned by or licensed to the
                  Company unless otherwise stated. You may not copy, reproduce,
                  distribute, or create derivative works without prior written
                  permission.
                </p>

                <h2>7. Third-Party Tools and Links</h2>
                <p>
                  The website may contain links to third-party websites or use
                  third-party platforms such as forms, maps, analytics, or
                  communication tools. We do not control and are not responsible
                  for third-party content, availability, or services.
                </p>

                <h2>8. Disclaimer</h2>
                <p>
                  This website and its content are provided on an “as is” and
                  “as available” basis without warranties of any kind, express
                  or implied, to the fullest extent permitted by law.
                </p>

                <p>We do not warrant that:</p>
                <ul>
                  <li>the website will always be available or error-free</li>
                  <li>content will always be complete, current, or uninterrupted</li>
                  <li>the site will be free of harmful components</li>
                </ul>

                <h2>9. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, 707
                  Medical Services shall not be liable for any indirect,
                  incidental, consequential, special, or punitive damages
                  arising out of or related to your use of the website.
                </p>

                <p>
                  If liability cannot be excluded, our total liability relating
                  to website use shall be limited to the amount, if any, you
                  paid directly for use of the website.
                </p>

                <h2>10. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless the Company, its
                  affiliates, officers, employees, and contractors from claims,
                  liabilities, damages, and expenses arising from your misuse of
                  the website or violation of these Terms.
                </p>

                <h2>11. Employment Pages and Applications</h2>
                <p>
                  Any job postings, application pages, or hiring information on
                  the site are for informational and recruiting purposes only.
                  Submission of an application does not create a contract of
                  employment or guarantee an interview, offer, or hire.
                </p>

                <p>
                  Employment, if offered, remains subject to applicable policies,
                  screening, legal requirements, and written agreements.
                </p>

                <h2>12. Privacy</h2>
                <p>Your use of the website is also governed by our Privacy Policy.</p>

                <h2>13. Governing Law</h2>
                <p>
                  These Terms shall be governed by the laws of the State of
                  Illinois, without regard to conflict-of-law rules, except
                  where applicable federal law requires otherwise.
                </p>

                <h2>14. Changes to These Terms</h2>
                <p>
                  We may revise these Terms at any time by posting an updated
                  version on this page. Continued use of the website after
                  changes are posted constitutes acceptance of the updated Terms.
                </p>

                <h2>15. Contact Us</h2>
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