import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 707 Holding, LLC — Medical Courier & Healthcare Logistics, Chicago",
  description:
    "707 Holding is a Chicago-based HIPAA-compliant medical courier and healthcare logistics company. Learn about our founding story, leadership, and commitment to precision delivery.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const differentiators = [
  {
    title: "HIPAA-Compliant, Every Delivery",
    description:
      "Every pickup, transit, and drop-off follows a documented chain-of-custody protocol. Our drivers are HIPAA-trained and our systems are built for healthcare compliance - not retrofitted from general delivery.",
    icon: "shield",
  },
  {
    title: "Same-Day & Stat Delivery Capability",
    description:
      "Time-critical deliveries require a partner who treats urgency as a standard, not an exception. We offer same-day and stat transport options for specimens, medications, and medical documents across Chicagoland.",
    icon: "clock",
  },
  {
    title: "Temperature-Sensitive Transport",
    description:
      "Biological specimens, specialty medications, and sensitive lab materials require controlled handling. Our transport protocols are designed to preserve specimen integrity from pickup to delivery.",
    icon: "temp",
  },
  {
    title: "Federal-Grade Operational Standards",
    description:
      "Founded by a former HHS senior leader with 18+ years of federal program management experience, 707 Medical Courier Services applies institutional-grade compliance, structure, and accountability to every client engagement.",
    icon: "gear",
  },
];

const values = [
  {
    title: "Precision & Performance",
    description:
      "We deliver results with accuracy and timeliness. In healthcare logistics, the details are never small - they are the job.",
  },
  {
    title: "Integrity & Compliance",
    description:
      "We uphold the highest standards across every engagement - HIPAA compliance, chain of custody, and ethical business practices are non-negotiable.",
  },
  {
    title: "Strategic Growth",
    description:
      "We build systems designed to scale. Every process and partnership is structured for long-term sustainability, not short-term convenience.",
  },
  {
    title: "Service Excellence",
    description:
      "Our clients depend on us for critical operations. We take that responsibility seriously and show up at the highest level - every time, without exception.",
  },
];

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "100%", label: "Compliance Rating" },
  { value: "24/7", label: "Secure Monitoring" },
  { value: "Zero", label: "Mission Failures" },
];

// ─── Icon Components ──────────────────────────────────────────────────────────

function DiffIcon({ type }: { type: string }) {
  const cls = "h-7 w-7 text-brand-green";
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "shield")
    return (
      <svg viewBox="0 0 24 24" className={cls} {...shared}>
        <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
        <path d="M9.5 12.5l1.8 1.8 3.2-3.6" />
      </svg>
    );

  if (type === "clock")
    return (
      <svg viewBox="0 0 24 24" className={cls} {...shared}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    );

  if (type === "temp")
    return (
      <svg viewBox="0 0 24 24" className={cls} {...shared}>
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    );

  return (
    <svg viewBox="0 0 24 24" className={cls} {...shared}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.2a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6z" />
    </svg>
  );
}

// ─── Page Sections ────────────────────────────────────────────────────────────

/** Section 1 — Hero */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-green section-space">
      <div className="absolute inset-0 bg-hero-grid bg-[size:32px_32px] opacity-10" />
      <div className="absolute inset-4 rounded-[2rem] border border-white/10 pointer-events-none" />

      <div className="container-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center" y={28}>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Chicago, Illinois
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Chicago&apos;s Trusted Medical Courier &amp;{" "}
            <span className="text-brand-mint">Healthcare Logistics</span>{" "}
            Partner.
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/75">
            Reliable. HIPAA-Compliant. Time-Sensitive.
            <br className="hidden sm:block" />
            Built by a leader who knows what&apos;s at stake.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-semibold text-brand-green shadow-card transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              Work With Us →
            </Link>
            <a
              href="#our-story"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              Learn More ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Section 2 — Problem / Solution */
function ProblemSolutionSection() {
  return (
    <section className="section-space bg-[#F9F9F7]">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
            In healthcare, late isn&apos;t just inconvenient.{" "}
            <span className="text-brand-green">It&apos;s consequential.</span>
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
          {[
            "A delayed specimen can compromise a diagnosis.",
            "A missed pharmacy delivery can interrupt patient care.",
            "A logistics failure can cost a health system far more than time.",
          ].map((line, i) => (
            <Reveal key={line} delay={0.06 * (i + 1)}>
              <p className="text-lg font-semibold text-slate-800">{line}</p>
            </Reveal>
          ))}

          <Reveal delay={0.28}>
            <div className="mx-auto mt-8 max-w-xl">
              <p className="text-base leading-8 text-slate-600">
                707 Medical Courier Services was built to eliminate that risk - with
                HIPAA-compliant, precision-driven courier services designed
                specifically for Chicago&apos;s healthcare community. We don&apos;t
                repurpose general freight infrastructure. We build dedicated
                healthcare logistics, from the ground up.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Section 3 — What Sets Us Apart */
function DifferentiatorsSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              Our Differentiators
            </span>
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
          </div>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Why Healthcare Providers Choose 707 Medical Courier Services
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {differentiators.map((card, index) => (
            <Reveal key={card.title} delay={0.07 * index}>
              <article className="group rounded-[1.75rem] border border-brand-border bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft transition duration-300 group-hover:scale-105">
                  <DiffIcon type={card.icon} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Section 4 — Founding Story */
function FoundingStorySection() {
  return (
    <section id="our-story" className="bg-[#eef2f4] py-20 lg:py-24">
      <div className="container-shell">
        <Reveal className="max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              Our Story
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Why We Built This
          </h2>

          <div className="mt-8 space-y-7 text-lg leading-9 text-slate-600">
            <p>
              After 18 years leading federal health programs at the U.S.
              Department of Health &amp; Human Services, Nnenna Animashaun had
              an inside view of how healthcare systems work - and where they
              break down.
            </p>
            <p>
              One of the most persistent failure points: logistics. Specimens
              delayed. Medications mishandled. Couriers with no healthcare
              training operating inside clinical environments. The
              infrastructure holding patient care together was quietly
              unreliable.
            </p>
            <p>
              707 Medical Courier Services was built to change that. Not by adapting an
              existing freight model - but by building a healthcare logistics
              company from the ground up, with compliance, precision, and
              patient outcomes at the center of every decision.
            </p>
          </div>

          <div className="mt-12 rounded-[1.5rem] border-l-4 border-brand-green bg-white px-8 py-8 shadow-card transition duration-300 hover:shadow-lg">
            <p className="text-xl italic leading-8 text-slate-700">
              This is what it looks like when operational discipline meets
              purpose.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green">
              — Nnenna Animashaun, Founder &amp; CEO
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Section 5 — Leadership Bio */
function LeadershipSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr]">
          {/* Headshot — reuses existing circular photo pattern */}
          <Reveal className="flex justify-center lg:justify-start" y={24}>
            <div className="group relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_25px_60px_rgba(22,56,40,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[320px] sm:w-[320px]">
              <Image
                src="/headshot.jpeg"
                alt="Nnenna Animashaun, Founder and CEO of 707 Holding LLC, Chicago healthcare logistics"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal className="max-w-3xl" delay={0.08} y={28}>
            <span className="inline-flex items-center rounded-md bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              Meet the Founder
            </span>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Nnenna Animashaun
            </h2>

            <p className="mt-3 text-lg font-semibold text-brand-green">
              Founder &amp; Chief Executive Officer, 707 Holding, LLC
            </p>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-brand-green" />

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Nnenna Animashaun is a strategic leader, healthcare program
                expert, and entrepreneur with over 18 years of experience in
                federal government leadership at the U.S. Department of Health
                &amp; Human Services - overseeing multimillion-dollar
                initiatives focused on healthcare access, compliance, and
                community impact.
              </p>
              <p>
                She founded 707 Medical Courier Services, to bring that same standard of
                operational discipline and accountability to healthcare
                logistics in Chicago - building a medical courier and logistics
                platform that treats every delivery as a critical link in the
                patient care chain.
              </p>
              <p>
                Nnenna is also the Founder of Divinely Seeded, LLC, a holistic
                wellness coaching practice, and serves as Vice Chair of the
                Taes Grace Foundation. Her multidisciplinary background -
                spanning healthcare, logistics, wellness, and community
                leadership - uniquely positions her to build companies that are
                both operationally excellent and deeply human-centered.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Stats Strip — retained from original */
function StatsStrip() {
  return (
    <section className="border-y border-brand-border bg-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.06 * index}>
              <div className="text-center transition duration-300 hover:-translate-y-1">
                <div className="font-heading text-5xl font-bold tracking-tight text-brand-green sm:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.08em] text-slate-500">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Section 6 — Our Values */
function ValuesSection() {
  return (
    <section className="section-space bg-[#F9F9F7]">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              Our Character
            </span>
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
          </div>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            What We Stand For
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={0.07 * index}>
              <div className="group rounded-[1.75rem] border border-brand-border bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 h-1 w-10 rounded-full bg-brand-green transition-all duration-300 group-hover:w-16" />
                <h3 className="font-heading text-lg font-bold text-brand-green">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Section 7 — Closing CTA */
function CTASection() {
  return (
    <section className="section-space pt-10">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-brand-green p-8 shadow-card sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-hero-grid bg-[size:32px_32px] opacity-10" />
          <div className="absolute inset-4 rounded-[1.75rem] border border-white/10 pointer-events-none" />

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Work With a Logistics Partner You Can Trust?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Let&apos;s talk about how 707 Medical Courier Services can support your healthcare
              operations in Chicago.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-brand-green shadow-card transition duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
            >
              Contact Us Today →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <DifferentiatorsSection />
      <FoundingStorySection />
      <LeadershipSection />
      <StatsStrip />
      <ValuesSection />
      <CTASection />
      <Footer />
    </main>
  );
}