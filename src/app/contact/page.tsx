import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request courier service or contact 707 Medical Services for healthcare logistics support in Chicago and Illinois.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <ContactPageClient />
      <Footer />
    </main>
  );
}