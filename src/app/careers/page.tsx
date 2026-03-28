import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities with 707 Medical Services and join a team focused on reliability, professionalism, and healthcare logistics excellence.",
};

const APPLY_NOW_LINK = "#";

const benefits = [
  {
    title: "Healthcare Impact",
    description:
      "Support the movement of critical healthcare materials and help keep providers, labs, and patients connected.",
  },
  {
    title: "Professional Standards",
    description:
      "Work within a structured, compliance-conscious environment built on reliability, accountability, and trust.",
  },
  {
    title: "Operational Discipline",
    description:
      "Join a team that values punctuality, secure handling procedures, and strong service execution.",
  },
];

const openRoles = [
  {
    title: "Medical Courier Driver",
    type: "Contract / Part-Time / Full-Time",
    location: "Chicago, Illinois",
    summary:
      "Transport medical specimens, documents, and healthcare-related items with professionalism, care, and timeliness.",
    responsibilities: [
      "Complete scheduled pickups and deliveries accurately and on time",
      "Maintain chain-of-custody awareness during transport and handoff",
      "Represent the company professionally at healthcare facilities",
      "Follow routing, communication, and delivery confirmation procedures",
    ],
    requirements: [
      "Valid driver’s license",
      "Clean and reliable driving history",
      "Professional communication and appearance",
      "Punctuality and strong attention to detail",
    ],
  },
  {
    title: "On-Call Courier",
    type: "Flexible / As Needed",
    location: "Chicago Metropolitan Area",
    summary:
      "Support urgent and short-notice healthcare delivery needs with rapid response and dependable execution.",
    responsibilities: [
      "Respond to urgent dispatch assignments",
      "Handle time-sensitive deliveries with care and urgency",
      "Maintain communication with dispatch and clients as needed",
      "Follow delivery documentation and routing procedures",
    ],
    requirements: [
      "Flexible availability",
      "Reliable transportation",
      "Strong time management",
      "Comfort with fast-paced logistics support",
    ],
  },
  {
    title: "Logistics Coordinator",
    type: "Operations / Administrative",
    location: "Chicago, Illinois",
    summary:
      "Support scheduling, dispatch coordination, delivery visibility, and operational communication across service routes.",
    responsibilities: [
      "Coordinate pickup and delivery schedules",
      "Communicate with drivers and client contacts",
      "Monitor delivery progress and service updates",
      "Maintain organized operational records",
    ],
    requirements: [
      "Strong organizational skills",
      "Clear communication",
      "Ability to manage multiple priorities",
      "Experience in logistics or operations is a plus",
    ],
  },
];

const qualifications = [
  "Valid driver’s license and dependable transportation where applicable",
  "Professional attitude and customer-facing communication skills",
  "Strong punctuality and ability to follow structured procedures",
  "Comfort working around healthcare, lab, or time-sensitive delivery environments",
  "Respect for confidentiality, secure handling, and operational discipline",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <section className="section-space pb-10">
        <div className="container-shell">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              Career Opportunities
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
              Join a Team Built on
              <br />
              <span className="text-brand-green">Reliability &amp; Care</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We’re building a professional medical courier operation focused on
              secure handling, dependable service, and healthcare logistics
              excellence across Chicago and Illinois.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={APPLY_NOW_LINK}
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-brand-greenMedium"
              >
                Apply Now
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-brand-green hover:text-brand-green"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-brand-border bg-white p-8 shadow-card"
              >
                <h2 className="font-heading text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-shell">
          <div className="rounded-[1.75rem] bg-[#eef2f4] p-8 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <span className="section-kicker">Open Roles</span>
              <h2 className="section-title">Current Opportunities</h2>
              <p className="body-muted mt-4">
                Explore roles designed for dependable professionals who value
                timeliness, care, and structured logistics operations.
              </p>
            </div>

            <div className="mt-10 grid gap-6">
              {openRoles.map((role) => (
                <article
                  key={role.title}
                  className="rounded-[1.5rem] border border-brand-border bg-white p-8 shadow-card"
                >
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="font-heading text-3xl font-semibold text-slate-900">
                        {role.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-green">
                        {role.type}
                      </p>
                      <p className="mt-2 text-base text-slate-500">
                        {role.location}
                      </p>
                    </div>

                    <Link
                      href={APPLY_NOW_LINK}
                      className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-greenMedium"
                    >
                      Apply Now
                    </Link>
                  </div>

                  <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
                    {role.summary}
                  </p>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h4 className="font-heading text-xl font-semibold text-slate-900">
                        Responsibilities
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {role.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-base leading-7 text-slate-600"
                          >
                            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand-green">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading text-xl font-semibold text-slate-900">
                        Requirements
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {role.requirements.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-base leading-7 text-slate-600"
                          >
                            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand-green">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="section-kicker">What We Look For</span>
              <h2 className="section-title">Candidate Qualifications</h2>
              <p className="body-muted mt-4">
                We value dependable people who can represent the company well,
                follow procedures carefully, and support time-sensitive medical
                logistics operations.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-brand-border bg-white p-8 shadow-card">
              <ul className="space-y-4">
                {qualifications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-7 text-slate-600"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-green/25 bg-white text-sm font-bold text-brand-green">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-10">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#16261f_0%,#0f1b16_100%)] px-8 py-12 text-center shadow-[0_24px_60px_rgba(10,20,14,0.18)] sm:px-10 lg:px-14">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Apply?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Submit your application through our hiring form and we’ll review
              your information as opportunities become available.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={APPLY_NOW_LINK}
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-4 text-base font-semibold text-white shadow-card transition hover:bg-brand-greenMedium"
              >
                Apply Now
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Employment opportunities, if offered, remain subject to company
              requirements, lawful screening, and written terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}