import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "707 Medical Services supports hospitals, laboratories, clinics, pharmacies, urgent care providers, and healthcare partners across Chicago and Illinois.",
};

const industries = [
  {
    title: "Hospitals",
    description:
      "Comprehensive medical logistics covering multi-campus systems with 24/7 on-demand and scheduled routing.",
    icon: "hospital",
  },
  {
    title: "Laboratories",
    description:
      "Secure, temperature-controlled specimen transport ensuring sample viability and rapid turnaround times.",
    icon: "lab",
  },
  {
    title: "Clinics",
    description:
      "Efficient daily clinical pickups that integrate seamlessly with your office workflow and patient care schedules.",
    icon: "clinic",
  },
  {
    title: "Urgent Care",
    description:
      "Rapid response courier services for critical results and STAT orders when every minute counts.",
    icon: "urgent",
  },
  {
    title: "Pharmacies",
    description:
      "Confidential and safe prescription handling with strict adherence to regulatory safety protocols.",
    icon: "pharmacy",
  },
  {
    title: "Medical Research",
    description:
      "Specialized handling for clinical trials, sensitive biomaterials, and high-value research assets.",
    icon: "research",
  },
];

const reliabilityPoints = [
  {
    title: "HIPAA Awareness & Training",
    description:
      "Every driver is certified and trained in patient privacy and data security protocols.",
  },
  {
    title: "Full Chain-of-Custody",
    description:
      "Real-time digital tracking and signature verification for every single handoff.",
  },
  {
    title: "Professional Uniformed Drivers",
    description:
      "Vetted professionals who represent your brand with dignity and competence.",
  },
  {
    title: "Optimized Reliable Scheduling",
    description:
      "99.9% on-time performance using advanced route optimization software.",
  },
];

const metrics = [
  { value: "100%", label: "HIPAA Compliant" },
  { value: "24/7", label: "Operation" },
  { value: "<15m", label: "STAT Response" },
  { value: "99.9%", label: "On-Time Rate" },
];

function IndustryIcon({ type }: { type: string }) {
  const cls = "h-7 w-7 text-brand-green";

  switch (type) {
    case "hospital":
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
          <path d="M4 21V7a2 2 0 0 1 2-2h8v16" />
          <path d="M14 21V11h4a2 2 0 0 1 2 2v8" />
          <path d="M8 9h2" />
          <path d="M8 13h2" />
          <path d="M8 17h2" />
          <path d="M17 15h.01" />
          <path d="M12 21h8" />
          <path d="M9 2v4" />
          <path d="M7 4h4" />
        </svg>
      );
    case "lab":
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
    case "clinic":
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
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
    case "urgent":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "pharmacy":
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
          <path d="M10.5 6.5l7 7a3 3 0 1 1-4.2 4.2l-7-7a3 3 0 1 1 4.2-4.2z" />
          <path d="M8 9l7 7" />
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
          <path d="M10 2v6l-5.5 9A3 3 0 0 0 7 21h10a3 3 0 0 0 2.5-4l-5.5-9V2" />
          <path d="M8 2h8" />
          <path d="M7 14h10" />
        </svg>
      );
  }
}

function HeroBanner() {
  return (
    <section className="section-space pb-10">
      <div className="container-shell">
        <Reveal y={28}>
          <div className="group relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(10,20,14,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[430px]">
              <Image
                src="/who-we-serve-hero.png"
                alt="Healthcare corridor representing medical logistics excellence"
                fill
                sizes="100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,14,0.72)_0%,rgba(10,20,14,0.42)_45%,rgba(10,20,14,0.18)_100%)]" />

              <div className="absolute inset-0 flex items-center">
                <div className="px-8 sm:px-12 lg:px-14">
                  <div className="max-w-3xl">
                    <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                      Precision Logistics for
                      <br />
                      Healthcare Excellence
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                      Ensuring the integrity of every specimen and the reliability
                      of every delivery across the healthcare spectrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="pb-12">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Specialized medical transport solutions tailored to specific
            institutional needs.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item, index) => (
            <Reveal key={item.title} delay={0.06 * index}>
              <article className="group rounded-[1.5rem] border border-brand-border bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft transition duration-300 group-hover:scale-105">
                  <IndustryIcon type={item.icon} />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReliabilitySection() {
  return (
    <section className="py-12">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-[1.75rem] bg-[#eef2f4] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Reliability &amp; Compliance
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Our foundation is built on trust and regulatory excellence. We
                  don&apos;t just move items; we manage critical healthcare data and
                  assets with military-grade precision.
                </p>

                <div className="mt-8 space-y-6">
                  {reliabilityPoints.map((point, index) => (
                    <Reveal key={point.title} delay={0.05 * index}>
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

                        <div>
                          <h3 className="font-heading text-2xl font-semibold text-slate-900">
                            {point.title}
                          </h3>
                          <p className="mt-1 text-base leading-7 text-slate-600">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {metrics.map((metric, index) => (
                  <Reveal key={metric.label} delay={0.08 * index}>
                    <div className="rounded-[1.25rem] border border-brand-border bg-white px-6 py-8 text-center shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="font-heading text-4xl font-bold tracking-tight text-brand-green sm:text-5xl">
                        {metric.value}
                      </div>
                      <div className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {metric.label}
                      </div>
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

function CommunityIllustration() {
  return (
    <Reveal delay={0.08}>
      <div className="group relative h-[360px] overflow-hidden rounded-[1.5rem] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <Image
          src="/who-we-serve-community.png"
          alt="Healthcare professionals representing community impact"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </Reveal>
  );
}

function CommunityImpactSection() {
  return (
    <section className="py-12">
      <div className="container-shell">
        <div className="grid gap-10 border-t border-brand-border pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <CommunityIllustration />

          <Reveal>
            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Community Impact
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                At 707 Holdings, we view ourselves as an extension of the
                healthcare community. Every delivery we make directly impacts
                patient outcomes. By providing reliable logistics, we help doctors
                diagnose faster, allow researchers to innovate, and ensure
                patients receive their medications without delay.
              </p>

              <div className="mt-8 rounded-[1.25rem] border-l-4 border-brand-green bg-[#f4f5f7] px-6 py-6 transition duration-300 hover:shadow-lg">
                <p className="text-lg leading-8 text-slate-700">
                  &quot;Our mission is to strengthen the backbone of community health
                  by removing the friction from medical transport. When logistics
                  work, lives are saved.&quot;
                </p>
                <p className="mt-5 text-lg font-semibold text-slate-900">
                  — Operations Director, 707 Holdings
                </p>
              </div>
            </div>
          </Reveal>
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
              Partner with the Healthcare Logistics Experts
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Ready to streamline your medical transport operations? Contact us
              today for a custom logistics assessment.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-4 text-base font-semibold text-white shadow-card transition duration-300 hover:-translate-y-1 hover:bg-brand-greenMedium"
              >
                Request a Consultation
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <HeroBanner />
      <IndustriesSection />
      <ReliabilitySection />
      <CommunityImpactSection />
      <CTASection />
      <Footer />
    </main>
  );
}