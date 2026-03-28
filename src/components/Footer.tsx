import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "/services", label: "Medical Courier" },
  { href: "/services", label: "Lab Specimen Transport" },
  { href: "/services", label: "Pharmacy Logistics" },
  { href: "/services", label: "Healthcare Logistics Support" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/careers", label: "Career Opportunities" },
  { href: "/contact", label: "Contact" },
];

const complianceLinks = [
  { href: "/compliance", label: "Reliability & Compliance" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="container-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
         <div className="max-w-md">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo-icon-707.svg"
                  alt="707 Holdings icon"
                  fill
                  className="object-contain"
                />
              </div>
              </div>

              
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/75">
              Providing critical healthcare logistics and courier solutions
              across Illinois since inception. Committed to safety, compliance,
              and excellence.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/nnenna-animashaun-2b42b9359?trk=contact-info"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/707hldllc?igsh=OWkzeDM3Z28yMXdt&utm_source=qr"
                aria-label="Instagram"
                className="ml-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16.5 7.5h.01" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Services
            </h3>
            <ul className="mt-6 space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">
              Compliance
            </h3>
            <ul className="mt-6 space-y-4">
              {complianceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm leading-6 text-white/60">
            © 2026 707 Medical Courier Services. All Rights
            Reserved. Designed for excellence in healthcare logistics.
          </p>
        </div>
      </div>
    </footer>
  );
}