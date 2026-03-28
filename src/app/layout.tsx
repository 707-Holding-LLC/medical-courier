import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.707holding.com"),
  title: {
    default:
      "707 Medical Services | Reliable Healthcare Logistics Supporting Chicago and Illinois",
    template: "%s | 707 Medical Services",
  },
  description:
    "Reliable healthcare logistics supporting Chicago and Illinois. 707 Medical Services provides medical courier, specimen transport, pharmacy logistics, and secure healthcare delivery services.",
  applicationName: "707 Medical Services",
  keywords: [
    "medical courier Chicago",
    "healthcare logistics Illinois",
    "lab specimen transport Chicago",
    "pharmacy delivery Illinois",
    "medical transport services Chicago",
    "HIPAA aware courier",
    "secure specimen handling",
    "medical courier Illinois",
  ],
  authors: [{ name: "707 Medical Services" }],
  creator: "707 Medical Services",
  publisher: "707 Medical Services",
  category: "Healthcare Logistics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.707holding.com",
    title:
      "707 Medical Services | Reliable Healthcare Logistics Supporting Chicago and Illinois",
    description:
      "Reliable healthcare logistics supporting Chicago and Illinois. Medical courier, specimen transport, pharmacy logistics, and secure healthcare delivery services.",
    siteName: "707 Medical Services",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "707 Medical Services | Reliable Healthcare Logistics Supporting Chicago and Illinois",
    description:
      "Reliable healthcare logistics supporting Chicago and Illinois.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "707 Medical Services",
  alternateName: "707 Holdings",
  description:
    "Reliable healthcare logistics supporting Chicago and Illinois. Medical courier, specimen transport, pharmacy logistics, and secure healthcare delivery services.",
  url: "https://www.707holding.com",
  telephone: "+1-872-810-3236",
  email: "admin@707holding.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 E Erie St Suite 525-3498",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60611",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Chicago",
    },
    {
      "@type": "State",
      name: "Illinois",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}