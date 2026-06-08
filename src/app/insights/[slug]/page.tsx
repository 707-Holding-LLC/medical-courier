import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { insightPostBySlugQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type SanityImage = {
  asset?: unknown;
  alt?: string;
};

type PortableTextBlock = {
  _key?: string;
  _type: string;
  children?: {
    _key?: string;
    _type?: string;
    text?: string;
    marks?: string[];
  }[];
  markDefs?: {
    _key?: string;
    _type?: string;
    href?: string;
  }[];
  style?: string;
  listItem?: string;
  level?: number;
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
  body?: PortableTextBlock[];
  author?: string;
  publishAt?: string;
};

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({children}) => (
      <p className="mt-6 text-lg leading-8 text-brand-muted">{children}</p>
    ),
    h2: ({children}) => (
      <h2 className="mt-12 font-heading text-3xl font-bold tracking-tight text-slate-900">
        {children}
      </h2>
    ),
    h3: ({children}) => (
      <h3 className="mt-10 font-heading text-2xl font-bold tracking-tight text-slate-900">
        {children}
      </h3>
    ),
    blockquote: ({children}) => (
      <blockquote className="mt-8 border-l-4 border-brand-green bg-brand-soft px-6 py-5 text-xl italic leading-8 text-slate-900">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}) => (
      <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-brand-muted">
        {children}
      </ul>
    ),
    number: ({children}) => (
      <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-brand-muted">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({children, value}) => {
      const href = value?.href || "#";

      return (
        <a
          href={href}
          className="font-semibold text-brand-green underline underline-offset-4"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

async function getInsightPost(slug: string): Promise<InsightPost | null> {
  return client.fetch(
    insightPostBySlugQuery,
    {slug},
    {next: {revalidate: 60}}
  );
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
    return urlFor(image).width(1400).height(900).url();
  }

  return null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const {slug} = await params;
  const post = await getInsightPost(slug);

  if (!post) {
    return {
      title: "Insight Not Found",
    };
  }

  const imageUrl = getImageUrl(post.featuredImage);

  return {
    title: `${post.title} | 707 MEDeliver`,
    description:
      post.excerpt ||
      "Read this healthcare logistics insight from 707 MEDeliver.",
    openGraph: {
      title: post.title,
      description:
        post.excerpt ||
        "Read this healthcare logistics insight from 707 MEDeliver.",
      url: `/insights/${slug}`,
      images: imageUrl ? [{url: imageUrl}] : undefined,
    },
    twitter: {
      title: post.title,
      description:
        post.excerpt ||
        "Read this healthcare logistics insight from 707 MEDeliver.",
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function InsightDetailPage({params}: PageProps) {
  const {slug} = await params;
  const post = await getInsightPost(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = getImageUrl(post.featuredImage);

  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />

      <article className="section-space pb-16">
        <div className="container-shell max-w-5xl">
          <Link
            href="/insights"
            className="inline-flex font-semibold text-brand-green transition hover:text-brand-greenMedium"
          >
            ← Back to insights
          </Link>

          <header className="mt-10">
            <span className="section-kicker">
              {formatPillar(post.contentPillar)}
            </span>

            <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-brand-muted">
              {post.author ? <span>By {post.author}</span> : null}
              {post.publishAt ? <span>· {formatDate(post.publishAt)}</span> : null}
            </div>

            {post.excerpt ? (
              <p className="mt-8 max-w-3xl text-xl leading-8 text-brand-muted">
                {post.excerpt}
              </p>
            ) : null}
          </header>

          {imageUrl ? (
            <div className="relative mt-12 h-[420px] overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src={imageUrl}
                alt={
                  post.featuredImageAlt ||
                  post.title ||
                  "707 MEDeliver insight image"
                }
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
              />
            </div>
          ) : null}

          <section className="mt-12 rounded-[2rem] bg-white p-8 shadow-card sm:p-10">
            {post.body && post.body.length > 0 ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className="text-lg leading-8 text-brand-muted">
                This insight is being prepared.
              </p>
            )}
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}