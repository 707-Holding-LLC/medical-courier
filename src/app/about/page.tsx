import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about 707 Medical Services, our leadership, operational standards, and commitment to reliable healthcare logistics across Chicago and Illinois.",
};

const leadershipCards = [
  {
    title: "Federal Compliance",
    description:
      "Rigorous adherence to federal standards, ensuring every shipment meets the highest regulatory requirements.",
    icon: "shield",
  },
  {
    title: "Performance Monitoring",
    description:
      "Data-driven performance tracking derived from decades of large-scale federal program oversight.",
    icon: "chart",
  },
  {
    title: "Operational Mastery",
    description:
      "Streamlined operations designed for reliability, scalability, and absolute precision in execution.",
    icon: "gear",
  },
];

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "100%", label: "Compliance Rating" },
  { value: "24/7", label: "Secure Monitoring" },
  { value: "Zero", label: "Mission Failures" },
];

function LeadershipIcon({ type }: { type: string }) {
  if (type === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-brand-green"
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
  }

  if (type === "chart") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-brand-green"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16" />
        <path d="M7 16v-5" />
        <path d="M12 16V9" />
        <path d="M17 16V5" />
        <path d="M6 8l4-3 3 2 5-4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-brand-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.2a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6z" />
    </svg>
  );
}

function AboutHero() {
  return (
    <section className="section-space pb-10">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr]">
          <Reveal className="flex justify-center lg:justify-start" y={24}>
            <div className="group relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_25px_60px_rgba(22,56,40,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[320px] sm:w-[320px]">
              <Image
                src="/headshot.jpeg"
                alt="Nnenna Animashaun, Founder and CEO of 707 Holding"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </Reveal>

          <Reveal className="max-w-3xl" delay={0.08} y={28}>
            <span className="inline-flex items-center rounded-md bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              Executive Leadership
            </span>

            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Nnenna Animashaun
            </h1>

            <p className="mt-3 text-xl font-semibold text-brand-green sm:text-2xl">
              Founder &amp; CEO, 707 Holding
            </p>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-brand-green" />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              18+ Years of distinguished Federal Program Management experience
              at the Department of Health and Human Services (HHS).
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leadershipCards.map((card, index) => (
            <Reveal key={card.title} delay={0.06 * index}>
              <article className="group rounded-[1.75rem] border border-brand-border bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft transition duration-300 group-hover:scale-105">
                  <LeadershipIcon type={card.icon} />
                </div>

                <h2 className="mt-6 font-heading text-2xl font-semibold text-slate-900">
                  {card.title}
                </h2>

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

function ExcellenceSection() {
  return (
    <section className="bg-[#eef2f4] py-20 lg:py-24">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="max-w-xl">
            <h2 className="font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Leadership Rooted in Excellence
            </h2>

            <div className="mt-8 space-y-7 text-lg leading-8 text-slate-600">
              <p>
                With over 18 years of experience managing high-stakes federal
                government programs at HHS, Nnenna Animashaun brings
                unparalleled expertise in compliance, performance monitoring,
                and large-scale operations to the logistics industry.
              </p>

              <p>
                This extensive background in public service management
                translates directly into a logistics framework where reliability
                isn&apos;t just a goal, it&apos;s a requirement. We apply the same
                level of scrutiny and dedication required for federal programs
                to every mile of our transportation services.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <Image
                  src="/about-leadership-visual.png"
                  alt="Leadership and healthcare logistics executive visual"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LegacySection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal className="max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              Our Legacy
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            The Founding Story
          </h2>

          <div className="mt-8 space-y-8 text-lg leading-9 text-slate-600">
            <p>
              707 Holdings was born from a vision to bridge the gap between
              complex governmental operational standards and the commercial
              logistics industry. Nnenna Animashaun recognized that the same
              principles of transparency, security, and meticulous planning
              required in federal program management were the missing links for
              many shipping operations.
            </p>

            <p>
              Our founder&apos;s journey began in the halls of HHS, where managing
              large-scale initiatives meant that failure was never an option.
              Today, 707 Holdings operates on that same &quot;Mission-First&quot;
              philosophy. We specialize in secure, time-sensitive transportation
              where operational excellence is the baseline, not the exception.
            </p>
          </div>

          <div className="mt-12 rounded-[1.5rem] border-l-4 border-brand-green bg-[#f4f5f7] px-8 py-8 transition duration-300 hover:shadow-lg">
            <p className="text-xl leading-8 text-slate-700">
              &quot;Logistics is more than just moving freight; it&apos;s about the trust
              placed in us to deliver on a promise. We bring federal-grade
              reliability to every client we serve.&quot;
            </p>
            <p className="mt-6 text-xl font-semibold text-brand-green">
              — Nnenna Animashaun
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <AboutHero />
      <ExcellenceSection />
      <LegacySection />
      <StatsStrip />
      <Footer />
    </main>
  );
}