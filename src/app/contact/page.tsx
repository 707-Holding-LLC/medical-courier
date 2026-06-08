import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageClient from "@/components/ContactPageClient";
import { client } from "@/sanity/lib/client";
import { contactSettingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request courier service or contact 707 Medical Services for healthcare logistics support in Chicago and Illinois.",
};

async function getContactSettings() {
  return client.fetch(contactSettingsQuery, {}, { cache: "no-store" });
}

export default async function ContactPage() {
  const settings = await getContactSettings();

  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <ContactPageClient settings={settings} />
      <Footer />
    </main>
  );
}