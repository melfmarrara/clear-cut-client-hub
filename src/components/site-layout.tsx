import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Contact", to: "/contact", hash: undefined },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="surface-ink flex size-9 items-center justify-center rounded-sm font-display text-sm font-extrabold">
            MC
          </span>
          <span className="font-display text-base leading-tight font-extrabold tracking-tight">
            My Construction
            <span className="block text-[0.68rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Bookkeeping
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Free consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="surface-ink mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold">My Construction Bookkeeping</p>
          <p className="mt-2 max-w-xs text-sm opacity-70">
            Bookkeeping, taxes, and payroll built around how contractors actually get paid.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow opacity-60">Services</p>
          <ul className="mt-3 space-y-2 opacity-85">
            <li>Job-costed bookkeeping</li>
            <li>Tax planning &amp; filing</li>
            <li>Payroll &amp; compliance</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow opacity-60">Contact</p>
          <ul className="mt-3 space-y-2 opacity-85">
            <li>hello@myconstructionbookkeeping.com</li>
            <li>(555) 214-8890</li>
            <li>1420 Foundry Ave, Suite 210, Denver, CO 80204</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs opacity-60">
          © {new Date().getFullYear()} My Construction Bookkeeping. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
