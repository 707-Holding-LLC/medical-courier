import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore medical courier services, laboratory specimen transport, pharmacy logistics, and healthcare logistics support from 707 Medical Services.",
};

const services = [
  {
    title: "Medical Courier Services",
    description:
      "Specialized secure transport of sensitive specimens, blood work, and confidential medical documents. We prioritize chain-of-custody protocols for every delivery.",
    bullets: [
      "Real-time tracking and proof of delivery",
      "Biohazard trained professionals",
      "Confidential document handling",
    ],
    icon: "microscope",
    visual: "courier",
  },
  {
    title: "Laboratory Specimen Transport",
    description:
      "Optimized routes for scheduled pickups from clinics to labs and regional hospitals. Temperature-controlled environments for climate-sensitive materials.",
    bullets: [
      "Validated temperature control systems",
      "Scheduled route optimization",
      "Statewide laboratory network support",
    ],
    icon: "flask",
    visual: "vehicle",
  },
  {
    title: "Pharmacy & Medical Supply",
    description:
      "Timely delivery of critical medications and essential medical equipment directly to healthcare facilities and home-based patients.",
    bullets: [
      "Same-day prescription delivery",
      "Medical equipment handling",
      "Stat and urgent delivery options",
    ],
    icon: "clipboard",
    visual: "supply",
  },
  {
    title: "Healthcare Logistics Support",
    description:
      "Comprehensive support for healthcare provider operations, managing complex supply chains and administrative distribution needs.",
    bullets: [
      "Integrated inventory management",
      "Multi-facility distribution strategy",
      "24/7 dedicated support desk",
    ],
    icon: "document",
    visual: "support",
  },
];

function Icon({ type }: { type: string }) {
  const base = "h-7 w-7 text-brand-green";

  switch (type) {
    case "microscope":
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 18h8" />
          <path d="M3 22h14" />
          <path d="M10 22a6 6 0 0 0 6-6" />
          <path d="M8 14l5-5" />
          <path d="M14 9l1.5-1.5a2.1 2.1 0 0 0-3-3L11 6" />
          <path d="M8 14a4 4 0 0 0 4 4" />
        </svg>
      );
    case "flask":
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
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
    case "clipboard":
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M9 12h6" />
          <path d="M9 16h4" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 6h12" />
          <path d="M8 12h12" />
          <path d="M8 18h8" />
          <path d="M4 6h.01" />
          <path d="M4 12h.01" />
          <path d="M4 18h.01" />
        </svg>
      );
  }
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-base leading-7 text-slate-600">
      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-green/20 bg-brand-soft text-[11px] font-bold text-brand-green transition duration-300 hover:scale-105">
        ✓
      </span>
      <span>{text}</span>
    </li>
  );
}

function ServiceVisual({ type }: { type: string }) {
  const imageMap: Record<string, { src: string; alt: string }> = {
    courier: {
      src: "/medical-courier.png",
      alt: "Medical courier service visual",
    },
    vehicle: {
      src: "/suv.png",
      alt: "Laboratory specimen transport vehicle",
    },
    supply: {
      src: "/services-pharmacy-supply.png",
      alt: "Pharmacy and medical supply delivery visual",
    },
    support: {
      src: "/lab-transport.png",
      alt: "Healthcare logistics support visual",
    },
  };

  const image = imageMap[type];

  return (
    <div className="group relative h-44 overflow-hidden rounded-[1.25rem] bg-white">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 520px"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  );
}

function HeroGraphic() {
  return (
    <div className="group relative mx-auto h-[280px] w-full max-w-[430px] overflow-hidden rounded-[2rem] bg-brand-soft shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src="/precision-healthcare.png"
        alt="Precision healthcare logistics visual"
        fill
        sizes="(max-width: 1024px) 100vw, 430px"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  );
}

function CoverageMap() {
  return (
    <Reveal delay={0.1}>
      <div className="group relative overflow-hidden rounded-[1.75rem] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[320px]">
          <Image
            src="/services-coverage-map.png"
            alt="Illinois healthcare logistics coverage map"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute bottom-5 right-5 rounded-[1.25rem] bg-brand-green px-6 py-5 text-white shadow-[0_20px_40px_rgba(22,56,40,0.2)]">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Response Time
          </div>
          <div className="mt-1 font-heading text-4xl font-bold tracking-tight">
            Under 60min
          </div>
          <div className="mt-1 text-sm text-white/80">
            For Chicago metro stat orders
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <section className="section-space pb-8">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="max-w-3xl" y={28}>
              <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-greenMedium">
                HIPAA Compliant Logistics
              </span>

              <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
                Precision Healthcare{" "}
                <span className="text-brand-green">Logistics</span>
                <br />
                Solutions
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Reliable, secure, and professional medical transport specialized
                for the unique demands of the healthcare industry across Chicago
                and statewide Illinois.
              </p>
            </Reveal>

            <Reveal delay={0.12} y={30}>
              <HeroGraphic />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] py-14 md:py-16">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.06 * index}>
                <article className="group rounded-[1.75rem] border border-brand-border bg-white p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft transition duration-300 group-hover:scale-105">
                    <Icon type={service.icon} />
                  </div>

                  <h2 className="mt-6 font-heading text-2xl font-semibold text-slate-900 sm:text-[2rem]">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <Bullet key={bullet} text={bullet} />
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ServiceVisual type={service.visual} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="max-w-2xl">
              <h2 className="font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Service Coverage Areas
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Based in the heart of Illinois, we offer comprehensive coverage
                from downtown Chicago to the furthest reaches of the state. Our
                fleet is equipped to handle long-distance medical transport
                without compromising security or temperature stability.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.25rem] bg-[#f4f5f7] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-green transition duration-300 hover:scale-105">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 21h18" />
                        <path d="M5 21V8l7-4v17" />
                        <path d="M19 21V11l-7-4" />
                        <path d="M9 9h.01" />
                        <path d="M9 13h.01" />
                        <path d="M9 17h.01" />
                        <path d="M15 13h.01" />
                        <path d="M15 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-slate-900">
                        Chicago Metropolitan
                      </h3>
                      <p className="mt-1 text-base leading-7 text-slate-600">
                        Full coverage of Cook County and surrounding suburbs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.25rem] bg-[#f4f5f7] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-green transition duration-300 hover:scale-105">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6l7-2 4 2 7-2v14l-7 2-4-2-7 2V6z" />
                        <path d="M10 4v14" />
                        <path d="M14 6v14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-slate-900">
                        Statewide Illinois
                      </h3>
                      <p className="mt-1 text-base leading-7 text-slate-600">
                        Expedited service to Springfield, Peoria, Rockford, and
                        more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <CoverageMap />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}