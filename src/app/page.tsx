import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Reliable healthcare logistics supporting Chicago and Illinois. Medical courier, specimen transport, pharmacy logistics, and secure healthcare delivery services.",
};

const services = [
  {
    title: "Medical Courier",
    description:
      "Swift and secure transport of medical equipment, supplies, and records with real-time tracking and professional chain-of-custody.",
    icon: "✦",
  },
  {
    title: "Lab Specimen Delivery",
    description:
      "Temperature-controlled transport for time-sensitive laboratory specimens. We maintain integrity and urgency for critical diagnostics.",
    icon: "◌",
  },
  {
    title: "Pharmacy Delivery",
    description:
      "Direct-to-patient and facility delivery of prescriptions and medications, ensuring accuracy and compassionate service.",
    icon: "▣",
  },
];

const audiences = [
  "Hospitals & Clinics",
  "Diagnostic Labs",
  "Pharmacies",
  "Home Health Providers",
];

function HeroMapCard() {
  return (
    <div className="hero-shadow relative overflow-hidden rounded-[2rem] border border-white/20 bg-[radial-gradient(circle_at_top,_#3d7a5a_0%,_#245840_45%,_#1e4d35_100%)] p-5 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-0 bg-hero-grid bg-[size:32px_32px] opacity-10" />
      <div className="absolute inset-4 rounded-[1.5rem] border border-white/15" />
      <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-white/10" />
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-white/10" />

      <div className="relative flex min-h-[380px] items-center justify-center rounded-[1.5rem]">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b6d4c0]/20 blur-2xl" />
          <div className="relative mx-auto h-44 w-32 rounded-[40%_50%_45%_35%/35%_40%_55%_45%] border border-white/40 bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold tracking-[0.22em] text-white/75">
              ILLINOIS
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-4 py-3 text-brand-ink shadow-card">
        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
          On-Time Rate
        </div>
        <div className="mt-1 text-3xl font-bold text-brand-green">99.8%</div>
      </div>
    </div>
  );
}

function OverviewVisuals() {
  return (
    <div className="grid gap-4 sm:grid-cols-[0.9fr_1fr]">
      <Reveal delay={0.05}>
        <div className="group relative h-64 overflow-hidden rounded-[1.75rem] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image
            src="/home-overview-staff.png"
            alt="Medical staff in a clean healthcare supply environment"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="group relative h-64 overflow-hidden rounded-[1.75rem] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <Image
            src="/home-overview-warehouse.png"
            alt="Modern healthcare logistics warehouse interior"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Reveal>
    </div>
  );
}

function AudienceMapVisual() {
  return (
    <Reveal delay={0.1}>
      <div className="group relative h-[320px] overflow-hidden rounded-[1.75rem] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <Image
          src="/services-coverage-map.png"
          alt="Illinois healthcare logistics coverage map"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    </Reveal>
  );
}

function CTASection() {
  return (
    <section className="section-space pt-10">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-brand-green p-6 shadow-card sm:p-8 lg:p-12">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-full w-full bg-brand-green" />
            <div className="absolute left-0 top-0 h-full w-full bg-brand-green [clip-path:polygon(0_0,100%_0,58%_100%,0_100%)]" />
          </div>

          <Reveal className="relative flex flex-col items-center justify-center text-center">
            <h2 className="max-w-3xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to streamline your medical logistics?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
              Experience the reliability of 707 Medical Courier Services team
              today for secure, compliant and time-sensitive delivery support.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-brand-green transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              Request a Service
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <section className="section-space pb-10">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <Reveal className="max-w-2xl" y={28}>
              <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
                Illinois Certified Logistics
              </span>

              <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
                Dependable <br />
                Medical <span className="text-brand-green">Courier &amp;</span>
                <br />
                <span className="text-brand-green">Logistics</span> Services
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
                707 Medical Courier Services provides professional medical transport
                and specialized logistics solutions across Chicago and the entire
                state of Illinois. Trust us with your time-critical healthcare
                needs.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-green px-6 py-4 text-sm font-semibold text-white shadow-card transition duration-300 hover:-translate-y-1 hover:bg-brand-greenMedium hover:shadow-xl"
                >
                  Get a Quote →
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-brand-green hover:text-brand-green hover:shadow-lg"
                >
                  Our Services
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full border-4 border-brand-bg bg-slate-300" />
                  <span className="-ml-2 h-10 w-10 rounded-full border-4 border-brand-bg bg-slate-200" />
                  <span className="-ml-2 h-10 w-10 rounded-full border-4 border-brand-bg bg-slate-400" />
                </div>
                <p className="text-sm font-medium text-brand-muted">
                  Trusted by <span className="font-semibold text-slate-800">50+</span>{" "}
                  Healthcare Facilities in Illinois
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12} y={30}>
              <HeroMapCard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space pt-8">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <OverviewVisuals />

            <Reveal className="max-w-2xl" delay={0.08}>
              <span className="section-kicker">Company Overview</span>
              <h2 className="section-title max-w-xl">
                A Partnership Built on Trust and Precision
              </h2>
              <p className="body-muted mt-6">
                707 Medical Courier Services are committed to providing safe,
                timely, and compliant logistics for the healthcare industry. Our
                dedicated team ensures that critical medical items reach their
                destination with the highest level of care.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-mint text-brand-green transition duration-300 hover:scale-105">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900">
                      HIPAA Compliant
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-brand-muted">
                      Our staff is fully trained in patient privacy and medical
                      handling protocols.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-mint text-brand-green transition duration-300 hover:scale-105">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900">
                      State-Wide Coverage
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-brand-muted">
                      Serving all 102 counties in Illinois with a focus on the
                      Greater Chicago Area.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="section-kicker">Our Expertise</span>
            <h2 className="section-title">Core Transportation Services</h2>
            <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-brand-green" />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.06 * index}>
                <article className="group rounded-[1.75rem] bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-xl text-brand-green transition duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-brand-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-brand-green">
        <div className="container-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="max-w-xl">
              <span className="section-kicker text-white/70">Partnerships</span>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Who We Serve
              </h2>
              <p className="mt-6 text-base leading-8 text-white/75">
                We provide logistics infrastructure for the backbone of Illinois
                healthcare. Our clients depend on us for reliability and
                professional representation.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {audiences.map((audience) => (
                  <div key={audience} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-white/10 text-xs text-white transition duration-300 hover:scale-105 hover:bg-white/15">
                      +
                    </span>
                    <span className="text-base font-medium text-white/90">
                      {audience}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <AudienceMapVisual />
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}