import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability & Compliance",
  description:
    "Learn how 707 Medical Services approaches HIPAA awareness, secure specimen handling, chain-of-custody procedures, professional courier standards, and reliable delivery operations.",
};

const compliancePillars = [
  {
    title: "HIPAA Awareness",
    description:
      "Our team operates with privacy awareness, confidentiality discipline, and healthcare-focused handling standards.",
    icon: "shield",
  },
  {
    title: "Secure Specimen Handling Procedures",
    description:
      "Specimens and sensitive materials are handled with care, structure, and documented operational discipline.",
    icon: "specimen",
  },
  {
    title: "Chain-of-Custody Protocols",
    description:
      "Every handoff is treated with accountability, traceability, and secure delivery process standards.",
    icon: "chain",
  },
  {
    title: "Professional Drivers",
    description:
      "Couriers represent the brand professionally, operate with care, and follow established logistics procedures.",
    icon: "driver",
  },
  {
    title: "Reliable Scheduling & Delivery Tracking",
    description:
      "Reliable coordination and delivery visibility support timely fulfillment and trusted healthcare operations.",
    icon: "tracking",
  },
];

const trainingCards = [
  {
    title: "HIPAA Awareness Training",
    description:
      "Annual awareness and privacy-focused courier training that supports secure healthcare logistics operations.",
  },
  {
    title: "Secure Handling Standards",
    description:
      "Operational discipline for specimen integrity, careful transport, and secure handling practices.",
  },
  {
    title: "Chain-of-Custody Workflow",
    description:
      "Structured handoff and documentation processes that support accountability throughout delivery.",
  },
  {
    title: "Professional Operations",
    description:
      "Driver professionalism, process consistency, and dependable service execution across every route.",
  },
];

const trustStats = [
  { value: "HIPAA", label: "Awareness Focus" },
  { value: "Secure", label: "Handling Standards" },
  { value: "Tracked", label: "Delivery Visibility" },
  { value: "Reliable", label: "Operational Discipline" },
];

function ComplianceIcon({ type }: { type: string }) {
  const cls = "h-7 w-7 text-brand-green";

  switch (type) {
    case "shield":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
          <path d="M9.5 12.5l1.8 1.8 3.2-3.6" />
        </svg>
      );
    case "specimen":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 2v6l-5.5 9A3 3 0 0 0 7 21h10a3 3 0 0 0 2.5-4l-5.5-9V2" />
          <path d="M8 2h8" />
          <path d="M7 14h10" />
        </svg>
      );
    case "chain":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
          <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
        </svg>
      );
    case "driver":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21a7 7 0 0 1 14 0" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h5l2-3 4 6 2-3h5" />
          <path d="M3 6h18" />
          <path d="M3 18h18" />
        </svg>
      );
  }
}

function HeroSection() {
  return (
    <section className="section-space pb-10">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="max-w-3xl" y={28}>
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              Reliability &amp; Compliance
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
              Trusted Handling.
              <br />
              Secure Operations.
              <br />
              <span className="text-brand-green">Reliable Delivery.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              707 Medical Services prioritizes privacy awareness, secure specimen
              handling, professional courier operations, and reliable delivery
              processes designed for healthcare logistics.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-4 text-sm font-semibold text-white shadow-card transition duration-300 hover:-translate-y-1 hover:bg-brand-greenMedium hover:shadow-xl"
              >
                Request Service
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-brand-green hover:text-brand-green hover:shadow-lg"
              >
                View Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={30}>
            <div className="group relative overflow-hidden rounded-[2rem] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/compliance.png"
                  alt="Medical courier compliance visual"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="pb-12">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="section-kicker">Core Standards</span>
          <h2 className="section-title">How We Approach Compliance</h2>
          <p className="body-muted mt-4">
            Built around secure handling, structured delivery discipline, and
            professional healthcare logistics practices.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {compliancePillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.06 * index}>
              <article className="group rounded-[1.5rem] border border-brand-border bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft transition duration-300 group-hover:scale-105">
                  <ComplianceIcon type={pillar.icon} />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <section className="py-12">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-[1.75rem] bg-[#eef2f4] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <span className="section-kicker">Training &amp; Standards</span>
                <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Compliance Backed by Process
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Reliability in medical courier operations depends on more than
                  speed. It requires secure handling standards, privacy awareness,
                  disciplined handoff procedures, and consistent professional
                  conduct across every route.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "Privacy-aware courier operations",
                    "Secure specimen handling procedures",
                    "Chain-of-custody discipline",
                    "Professional driver presentation",
                    "Reliable scheduling and delivery coordination",
                  ].map((item, index) => (
                    <Reveal key={item} delay={0.05 * index}>
                      <div className="flex items-start gap-4">
                        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-green/25 bg-white text-brand-green transition duration-300 hover:scale-105">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-base leading-7 text-slate-700">
                          {item}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trainingCards.map((card, index) => (
                  <Reveal key={card.title} delay={0.07 * index}>
                    <div className="rounded-[1.25rem] border border-brand-border bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <h3 className="font-heading text-2xl font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SecureOperationsSection() {
  return (
    <section className="py-12">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <Reveal className="max-w-2xl">
            <span className="section-kicker">Secure Operations</span>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Why Compliance Matters
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                In healthcare logistics, reliability is tied directly to trust.
                Secure handling, disciplined delivery processes, and
                professional execution help protect sensitive materials and
                support stronger partnerships with clinics, labs, pharmacies,
                and healthcare providers.
              </p>

              <p>
                Our compliance-centered operating mindset supports better
                specimen integrity, clearer handoff accountability, more
                dependable scheduling, and a stronger standard of service across
                every route.
              </p>
            </div>

            <div className="mt-8 rounded-[1.25rem] border-l-4 border-brand-green bg-[#f4f5f7] px-6 py-6 transition duration-300 hover:shadow-lg">
              <p className="text-lg leading-8 text-slate-700">
                “Compliance is not just about checking boxes. It is about
                building confidence in every pickup, every handoff, and every
                delivery.”
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustStats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.07 * index}>
                <div className="rounded-[1.25rem] border border-brand-border bg-white px-6 py-8 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="font-heading text-4xl font-bold tracking-tight text-brand-green sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-space pt-10">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#16261f_0%,#0f1b16_100%)] px-8 py-12 text-center shadow-[0_24px_60px_rgba(10,20,14,0.18)] sm:px-10 lg:px-14">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Work with a Compliance-Conscious Logistics Partner
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Need a courier partner that values secure handling, professional
              delivery standards, and reliable healthcare logistics operations?
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-4 text-base font-semibold text-white shadow-card transition duration-300 hover:-translate-y-1 hover:bg-brand-greenMedium"
              >
                Request Service
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <TrainingSection />
      <SecureOperationsSection />
      <CTASection />
      <Footer />
    </main>
  );
}