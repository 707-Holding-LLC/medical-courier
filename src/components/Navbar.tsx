"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/who-we-serve", label: "Who We Serve" },
];

function NavLink({
  href,
  label,
  pathname,
  mobile = false,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "relative transition-colors duration-200",
        mobile
          ? "block rounded-xl px-4 py-3 text-sm font-medium"
          : "px-1 py-2 text-sm font-medium",
        isActive
          ? "text-brand-green"
          : "text-slate-700 hover:text-brand-green",
      ].join(" ")}
    >
      {label}
      {!mobile && isActive && (
        <span className="absolute -bottom-3 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-brand-green" />
      )}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-white/90 backdrop-blur-md">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-707.svg"
              alt="707 Holdings"
              width={600}
              height={160}
              className="h-auto w-[220px] md:w-[280px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                pathname={pathname}
              />
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-greenMedium"
            >
              Request Service
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-border bg-white text-slate-700 md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-brand-border py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  mobile
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-greenMedium"
              >
                Request Service
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}