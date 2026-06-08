import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { legalPageQuery } from "@/sanity/lib/queries";
import LegalPageRenderer from "@/components/LegalPageRenderer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for 707 Medical Services and learn how website information is collected, used, and protected.",
};

async function getPrivacyPolicyPage() {
  return client.fetch(
    legalPageQuery,
    { slug: "privacy-policy" },
    { cache: "no-store" }
  );
}

export default async function PrivacyPolicyPage() {
  const page = await getPrivacyPolicyPage();

  return <LegalPageRenderer page={page} fallbackTitle="Privacy Policy" />;
}