import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { client } from "@/sanity/lib/client";
import { insightPostsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Healthcare logistics insights from 707 MEDeliver, including service education, compliance tips, industry awareness, and client-focused delivery guidance.",
};

type SanityImage = {
  asset?: unknown;
  alt?: string;
};

type InsightPost = {
  _id: string;
  title?: string;
  slug?: {
    current?: string;
  };
  contentPillar?: string;
  excerpt?: string;
  featuredImage?: SanityImage;
  featuredImageAlt?: string;
  author?: string;
  publishAt?: string;
};

async function getInsightPosts(): Promise<InsightPost[]> {
  return client.fetch(insightPostsQuery, {}, { next: { revalidate: 60 } });
}

function formatDate(date?: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function formatPillar(pillar?: string) {
  const labels: Record<string, string> = {
    "service-spotlight": "Service Spotlight",
    "compliance-tips": "Compliance Tips",
    "industry-insight": "Industry Insight",
    "behind-the-scenes": "Behind-the-Scenes",
    "client-focused-value": "Client-Focused Value",
  };

  return pillar ? labels[pillar] || pillar : "707 MEDeliver";
}

function getImageUrl(image?: SanityImage) {
  if (image?.asset) {
    return urlFor(image).width(1200).height(800).url();
  }

  return null;
}

export default async function InsightsPage() {
  const posts = await getInsightPosts();

  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <section className="section-space pb-10">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-4xl text-center" y={28}>
            <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-greenMedium">
              Healthcare Logistics Insights
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl">
              Practical insight for safer, clearer healthcare logistics.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
              Explore MEDeliver articles on medical courier operations,
              compliance awareness, service reliability, and healthcare-adjacent
              delivery support across Illinois.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space pt-6">
        <div className="container-shell">
          {posts.length === 0 ? (
            <Reveal>
              <div className="mx-auto max-w-3xl rounded-[2rem] border border-brand-border bg-white p-8 text-center shadow-card">
                <h2 className="font-heading text-3xl font-bold text-slate-900">
                  No insights yet
                </h2>
                <p className="mt-3 text-base leading-7 text-brand-muted">
                  MEDeliver insights will appear here once they are published, and ready to share.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post, index) => {
                const imageUrl = getImageUrl(post.featuredImage);

                return (
                  <Reveal key={post._id} delay={0.06 * index}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative aspect-[16/10] overflow-hidden bg-brand-soft">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={
                              post.featuredImageAlt ||
                              post.title ||
                              "707 MEDeliver insight image"
                            }
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-brand-green text-white">
                            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                              707 MEDeliver
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-greenMedium">
                          <span>{formatPillar(post.contentPillar)}</span>
                          {post.publishAt ? (
                            <span>· {formatDate(post.publishAt)}</span>
                          ) : null}
                        </div>

                        <h2 className="mt-4 font-heading text-2xl font-bold leading-snug text-slate-900">
                          {post.title}
                        </h2>

                        {post.excerpt ? (
                          <p className="mt-4 flex-1 text-base leading-7 text-brand-muted">
                            {post.excerpt}
                          </p>
                        ) : null}

                        {post.slug?.current ? (
                          <Link
                            href={`/insights/${post.slug.current}`}
                            className="mt-6 inline-flex font-semibold text-brand-green transition hover:text-brand-greenMedium"
                          >
                            Read insight →
                          </Link>
                        ) : null}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}