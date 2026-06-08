import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title:
    "About | 707 MEDeliver, LLC — Medical Courier & Healthcare Logistics, Chicago",
  description:
    "707 MEDeliver is a Chicago-based HIPAA-compliant medical courier and healthcare logistics company. Learn about our founding story, leadership, and commitment to precision delivery.",
};

type SanityImage = {
  asset?: unknown;
  url?: string;
  alt?: string;
};

type Differentiator = {
  title?: string;
  description?: string;
  icon?: string;
};

type ValueCard = {
  title?: string;
  description?: string;
};

type StatItem = {
  value?: string;
  label?: string;
};

type AboutPageData = {
  hero?: {
    kicker?: string;
    titleBeforeHighlight?: string;
    titleHighlight?: string;
    titleAfterHighlight?: string;
    descriptionLine1?: string;
    descriptionLine2?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
  };
  problemSolution?: {
    statementBeforeHighlight?: string;
    statementHighlight?: string;
    points?: string[];
    description?: string;
  };
  differentiatorsSection?: {
    kicker?: string;
    title?: string;
    items?: Differentiator[];
  };
  foundingStory?: {
    kicker?: string;
    title?: string;
    paragraphs?: string[];
    quote?: string;
    quoteAttribution?: string;
  };
  leadership?: {
    headshot?: SanityImage;
    kicker?: string;
    name?: string;
    role?: string;
    bioParagraphs?: string[];
  };
  stats?: StatItem[];
  valuesSection?: {
    kicker?: string;
    title?: string;
    items?: ValueCard[];
  };
  cta?: {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
  };
};

const fallbackDifferentiators = [
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
      "Founded by a former HHS senior leader with 18+ years of federal program management experience, 707 MEDeliver applies institutional-grade compliance, structure, and accountability to every client engagement.",
    icon: "gear",
  },
];

const fallbackValues = [
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

const fallbackStats = [
  { value: "18+", label: "Years Experience" },
  { value: "100%", label: "Compliance Rating" },
  { value: "24/7", label: "Secure Monitoring" },
  { value: "Zero", label: "Mission Failures" },
];

const fallbackProblemPoints = [
  "A delayed specimen can compromise a diagnosis.",
  "A missed pharmacy delivery can interrupt patient care.",
  "A logistics failure can cost a health system far more than time.",
];

const fallbackStoryParagraphs = [
  "After 18 years leading federal health programs at the U.S. Department of Health & Human Services, Nnenna Animashaun had an inside view of how healthcare systems work - and where they break down.",
  "One of the most persistent failure points: logistics. Specimens delayed. Medications mishandled. Couriers with no healthcare training operating inside clinical environments. The infrastructure holding patient care together was quietly unreliable.",
  "707 MEDeliver was built to change that. Not by adapting an existing freight model - but by building a healthcare logistics company from the ground up, with compliance, precision, and patient outcomes at the center of every decision.",
];

const fallbackBioParagraphs = [
  "Nnenna Animashaun is a strategic leader, healthcare program expert, and entrepreneur with over 18 years of experience in federal government leadership at the U.S. Department of Health & Human Services - overseeing multimillion-dollar initiatives focused on healthcare access, compliance, and community impact.",
  "She founded 707 MEDeliver, to bring that same standard of operational discipline and accountability to healthcare logistics in Chicago - building a medical courier and logistics platform that treats every delivery as a critical link in the patient care chain.",
  "Nnenna is also the Founder of Divinely Seeded, LLC, a holistic wellness coaching practice, and serves as Vice Chair of the Taes Grace Foundation. Her multidisciplinary background - spanning healthcare, logistics, wellness, and community leadership - uniquely positions her to build companies that are both operationally excellent and deeply human-centered.",
];

async function getAboutPage(): Promise<AboutPageData | null> {
  return client.fetch(aboutPageQuery, {}, { cache: "no-store" });
}

function getImageUrl(image?: SanityImage, fallback?: string) {
  if (image?.url) {
    return image.url;
  }

  if (image?.asset) {
    return urlFor(image).width(900).height(900).url();
  }

  return fallback;
}

function DiffIcon({ type }: { type?: string }) {
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

function HeroSection({ hero }: { hero?: AboutPageData["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-brand-green section-space">
      <div className="absolute inset-0 bg-hero-grid bg-[size:32px_32px] opacity-10" />
      <div className="absolute inset-4 rounded-[2rem] border border-white/10 pointer-events-none" />

      <div className="container-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center" y={28}>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {hero?.kicker || "Chicago, Illinois"}
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {hero?.titleBeforeHighlight ||
              "Chicago's Trusted Medical Courier &"}{" "}
            <span className="text-brand-mint">
              {hero?.titleHighlight || "Healthcare Logistics"}
            </span>{" "}
            {hero?.titleAfterHighlight || "Partner."}
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/75">
            {hero?.descriptionLine1 ||
              "Reliable. HIPAA-Compliant. Time-Sensitive."}
            <br className="hidden sm:block" />
            {hero?.descriptionLine2 ||
              "Built by a leader who knows what's at stake."}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={hero?.primaryButtonHref || "/contact"}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-sm font-semibold text-brand-green shadow-card transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              {hero?.primaryButtonText || "Work With Us →"}
            </Link>
            <a
              href={hero?.secondaryButtonHref || "#our-story"}
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              {hero?.secondaryButtonText || "Learn More ↓"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProblemSolutionSection({
  problemSolution,
}: {
  problemSolution?: AboutPageData["problemSolution"];
}) {
  const points =
    problemSolution?.points && problemSolution.points.length > 0
      ? problemSolution.points
      : fallbackProblemPoints;

  return (
    <section className="section-space bg-[#F9F9F7]">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
            {problemSolution?.statementBeforeHighlight ||
              "In healthcare, late isn't just inconvenient."}{" "}
            <span className="text-brand-green">
              {problemSolution?.statementHighlight || "It's consequential."}
            </span>
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center">
          {points.map((line, i) => (
            <Reveal key={line} delay={0.06 * (i + 1)}>
              <p className="text-lg font-semibold text-slate-800">{line}</p>
            </Reveal>
          ))}

          <Reveal delay={0.28}>
            <div className="mx-auto mt-8 max-w-xl">
              <p className="text-base leading-8 text-slate-600">
                {problemSolution?.description ||
                  "707 MEDeliver was built to eliminate that risk - with HIPAA-compliant, precision-driven courier services designed specifically for Chicago's healthcare community. We don't repurpose general freight infrastructure. We build dedicated healthcare logistics, from the ground up."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection({
  section,
}: {
  section?: AboutPageData["differentiatorsSection"];
}) {
  const differentiators =
    section?.items && section.items.length > 0
      ? section.items
      : fallbackDifferentiators;

  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              {section?.kicker || "Our Differentiators"}
            </span>
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
          </div>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {section?.title || "Why Healthcare Providers Choose 707 MEDeliver"}
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

function FoundingStorySection({
  foundingStory,
}: {
  foundingStory?: AboutPageData["foundingStory"];
}) {
  const paragraphs =
    foundingStory?.paragraphs && foundingStory.paragraphs.length > 0
      ? foundingStory.paragraphs
      : fallbackStoryParagraphs;

  return (
    <section id="our-story" className="bg-[#eef2f4] py-20 lg:py-24">
      <div className="container-shell">
        <Reveal className="max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              {foundingStory?.kicker || "Our Story"}
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {foundingStory?.title || "Why We Built This"}
          </h2>

          <div className="mt-8 space-y-7 text-lg leading-9 text-slate-600">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-[1.5rem] border-l-4 border-brand-green bg-white px-8 py-8 shadow-card transition duration-300 hover:shadow-lg">
            <p className="text-xl italic leading-8 text-slate-700">
              {foundingStory?.quote ||
                "This is what it looks like when operational discipline meets purpose."}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green">
              {foundingStory?.quoteAttribution ||
                "— Nnenna Animashaun, Founder & CEO"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LeadershipSection({
  leadership,
}: {
  leadership?: AboutPageData["leadership"];
}) {
  const headshotSrc = getImageUrl(leadership?.headshot, "/headshot.jpeg");
  const bioParagraphs =
    leadership?.bioParagraphs && leadership.bioParagraphs.length > 0
      ? leadership.bioParagraphs
      : fallbackBioParagraphs;

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr]">
          <Reveal className="flex justify-center lg:justify-start" y={24}>
            <div className="group relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_25px_60px_rgba(22,56,40,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[320px] sm:w-[320px]">
              <Image
                src={headshotSrc || "/headshot.jpeg"}
                alt={
                  leadership?.headshot?.alt ||
                  "Nnenna Animashaun, Founder and CEO of 707 MEDeliver, LLC, Chicago healthcare logistics"
                }
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </Reveal>

          <Reveal className="max-w-3xl" delay={0.08} y={28}>
            <span className="inline-flex items-center rounded-md bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              {leadership?.kicker || "Meet the Founder"}
            </span>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              {leadership?.name || "Nnenna Animashaun"}
            </h2>

            <p className="mt-3 text-lg font-semibold text-brand-green">
              {leadership?.role ||
                "Founder & Chief Executive Officer, 707 MEDeliver, LLC"}
            </p>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-brand-green" />

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsStrip({ stats }: { stats?: StatItem[] }) {
  const statItems = stats && stats.length > 0 ? stats : fallbackStats;

  return (
    <section className="border-y border-brand-border bg-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {statItems.map((stat, index) => (
            <Reveal key={`${stat.value}-${stat.label}`} delay={0.06 * index}>
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

function ValuesSection({
  section,
}: {
  section?: AboutPageData["valuesSection"];
}) {
  const values =
    section?.items && section.items.length > 0 ? section.items : fallbackValues;

  return (
    <section className="section-space bg-[#F9F9F7]">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              {section?.kicker || "Our Character"}
            </span>
            <span className="h-[2px] w-10 rounded-full bg-brand-green" />
          </div>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {section?.title || "What We Stand For"}
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

function CTASection({ cta }: { cta?: AboutPageData["cta"] }) {
  return (
    <section className="section-space pt-10">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-brand-green p-8 shadow-card sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-hero-grid bg-[size:32px_32px] opacity-10" />
          <div className="absolute inset-4 rounded-[1.75rem] border border-white/10 pointer-events-none" />

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {cta?.title ||
                "Ready to Work With a Logistics Partner You Can Trust?"}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              {cta?.description ||
                "Let's talk about how 707 MEDeliver can support your healthcare operations in Chicago."}
            </p>
            <Link
              href={cta?.buttonHref || "/contact"}
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-brand-green shadow-card transition duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
            >
              {cta?.buttonText || "Contact Us Today →"}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default async function AboutPage() {
  const page = await getAboutPage();

  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <HeroSection hero={page?.hero} />
      <ProblemSolutionSection problemSolution={page?.problemSolution} />
      <DifferentiatorsSection section={page?.differentiatorsSection} />
      <FoundingStorySection foundingStory={page?.foundingStory} />
      <LeadershipSection leadership={page?.leadership} />
      <StatsStrip stats={page?.stats} />
      <ValuesSection section={page?.valuesSection} />
      <CTASection cta={page?.cta} />
      <Footer />
    </main>
  );
}