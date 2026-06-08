import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { legalPageQuery } from "@/sanity/lib/queries";
import LegalPageRenderer from "@/components/LegalPageRenderer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for MEDeliver and understand the conditions governing use of this website.",
};

async function getTermsOfServicePage() {
  return client.fetch(
    legalPageQuery,
    { slug: "terms-of-service" },
    { cache: "no-store" }
  );
}

export default async function TermsOfServicePage() {
  const page = await getTermsOfServicePage();

  return <LegalPageRenderer page={page} fallbackTitle="Terms of Service" />;
}