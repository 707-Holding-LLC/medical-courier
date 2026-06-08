import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PortableText } from "next-sanity";

type LegalPageData = {
  title?: string;
  kicker?: string;
  effectiveDate?: string;
  lastUpdated?: string;
  body?: any[];
};

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3>{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p>{children}</p>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children?: React.ReactNode;
      value?: { href?: string };
    }) => {
      const href = value?.href || "#";
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
  },
};

export default function LegalPageRenderer({
  page,
  fallbackTitle,
}: {
  page?: LegalPageData | null;
  fallbackTitle: string;
}) {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <section className="section-space">
        <div className="container-shell">
          <div className="max-w-5xl">
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              {page?.kicker || "Legal"}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
              {page?.title || fallbackTitle}
            </h1>

            <div className="mt-6 space-y-2 text-base text-slate-500">
              <p>
                <strong>Effective Date:</strong>{" "}
                {page?.effectiveDate || "March 27, 2026"}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {page?.lastUpdated || "March 27, 2026"}
              </p>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-brand-border bg-white p-8 shadow-card sm:p-10">
              <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-brand-green">
                {page?.body && page.body.length > 0 ? (
                  <PortableText
                    value={page.body}
                    components={portableTextComponents}
                  />
                ) : (
                  <p>
                    This legal page content has not been added in Sanity yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}