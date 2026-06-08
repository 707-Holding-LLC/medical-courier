import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { careersPageQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities with 707 Medical Courier Services and join a team focused on reliability, professionalism, and healthcare logistics excellence.",
};

type Benefit = {
  title?: string;
  description?: string;
};

type Role = {
  title?: string;
  type?: string;
  location?: string;
  summary?: string;
  responsibilities?: string[];
  requirements?: string[];
  buttonText?: string;
  buttonHref?: string;
};

type CareersPageData = {
  hero?: {
    kicker?: string;
    titleLine1?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
  };
  benefits?: Benefit[];
  openRolesSection?: {
    kicker?: string;
    title?: string;
    description?: string;
    roles?: Role[];
  };
  qualificationsSection?: {
    kicker?: string;
    title?: string;
    description?: string;
    items?: string[];
  };
  applicationSection?: {
    kicker?: string;
    title?: string;
    description?: string;
  };
};

const fallbackBenefits = [
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

const fallbackOpenRoles: Role[] = [
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
      "Valid driver's license",
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

const fallbackQualifications = [
  "Valid driver's license and dependable transportation where applicable",
  "Professional attitude and customer-facing communication skills",
  "Strong punctuality and ability to follow structured procedures",
  "Comfort working around healthcare, lab, or time-sensitive delivery environments",
  "Respect for confidentiality, secure handling, and operational discipline",
];

async function getCareersPage(): Promise<CareersPageData | null> {
  return client.fetch(careersPageQuery, {}, { cache: "no-store" });
}

export default async function CareersPage() {
  const page = await getCareersPage();

  const benefits =
    page?.benefits && page.benefits.length > 0
      ? page.benefits
      : fallbackBenefits;

  const openRoles =
    page?.openRolesSection?.roles && page.openRolesSection.roles.length > 0
      ? page.openRolesSection.roles
      : fallbackOpenRoles;

  const qualifications =
    page?.qualificationsSection?.items &&
    page.qualificationsSection.items.length > 0
      ? page.qualificationsSection.items
      : fallbackQualifications;

  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <section className="section-space pb-10">
        <div className="container-shell">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              {page?.hero?.kicker || "Career Opportunities"}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
              {page?.hero?.titleLine1 || "Join a Team Built on"}
              <br />
              <span className="text-brand-green">
                {page?.hero?.titleLine2 || "Reliability & Care"}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {page?.hero?.description ||
                "We're building a professional medical courier operation focused on secure handling, dependable service, and healthcare logistics excellence across Chicago and Illinois."}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={page?.hero?.primaryButtonHref || "#apply"}
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-4 text-sm font-semibold text-white shadow-card transition hover:bg-brand-greenMedium"
              >
                {page?.hero?.primaryButtonText || "Apply Now →"}
              </a>
              <Link
                href={page?.hero?.secondaryButtonHref || "/contact"}
                className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-brand-green hover:text-brand-green"
              >
                {page?.hero?.secondaryButtonText || "Contact Us"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item, index) => (
              <article
                key={item.title || index}
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
              <span className="section-kicker">
                {page?.openRolesSection?.kicker || "Open Roles"}
              </span>
              <h2 className="section-title">
                {page?.openRolesSection?.title || "Current Opportunities"}
              </h2>
              <p className="body-muted mt-4">
                {page?.openRolesSection?.description ||
                  "Explore roles designed for dependable professionals who value timeliness, care, and structured logistics operations."}
              </p>
            </div>

            <div className="mt-10 grid gap-6">
              {openRoles.map((role, index) => (
                <article
                  key={role.title || index}
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

                    <a
                      href={role.buttonHref || "#apply"}
                      className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-greenMedium"
                    >
                      {role.buttonText || "Apply Now"}
                    </a>
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
                        {(role.responsibilities || []).map((item) => (
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
                        {(role.requirements || []).map((item) => (
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
              <span className="section-kicker">
                {page?.qualificationsSection?.kicker || "What We Look For"}
              </span>
              <h2 className="section-title">
                {page?.qualificationsSection?.title ||
                  "Candidate Qualifications"}
              </h2>
              <p className="body-muted mt-4">
                {page?.qualificationsSection?.description ||
                  "We value dependable people who can represent the company well, follow procedures carefully, and support time-sensitive medical logistics operations."}
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

      <section id="apply" className="section-space py-16">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <span className="section-kicker">
              {page?.applicationSection?.kicker || "Apply Now"}
            </span>
            <h2 className="section-title">
              {page?.applicationSection?.title || "Submit Your Application"}
            </h2>
            <p className="body-muted mt-4">
              {page?.applicationSection?.description ||
                "Complete the form below. Qualified candidates will be contacted within 5–7 business days. All information is kept confidential and used solely for employment screening purposes."}
            </p>
          </div>

          <CareerApplicationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}