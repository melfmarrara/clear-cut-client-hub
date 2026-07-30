import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";
import heroImage from "@/assets/hero-books.jpg";
import aboutImage from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Construction Bookkeeping — Books, Taxes & Payroll for Contractors" },
      {
        name: "description",
        content:
          "Job-costed bookkeeping, proactive tax planning, and payroll for construction businesses. Know your margins and keep more of what you earn.",
      },
      {
        property: "og:title",
        content: "My Construction Bookkeeping — Books, Taxes & Payroll for Contractors",
      },
      {
        property: "og:description",
        content:
          "Job-costed bookkeeping, proactive tax planning, and payroll built for construction businesses.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    tag: "Bookkeeping",
    title: "Know exactly what each job made",
    body: "Clean, job-costed books reconciled monthly so you can see which projects carry the company and which ones bleed.",
    points: ["Monthly reconciliation", "Job & phase costing", "WIP and retainage tracking"],
  },
  {
    tag: "Taxes",
    title: "Stop overpaying at year end",
    body: "Proactive planning through the year — entity structure, depreciation, and contractor-specific deductions — then we file it all.",
    points: ["Quarterly estimates", "Entity & S-corp strategy", "Federal and state filing"],
  },
  {
    tag: "Payroll",
    title: "Crews paid right, every week",
    body: "Multi-state crews, prevailing wage, and certified payroll handled so compliance never lands on your desk on a Friday night.",
    points: ["Weekly payroll runs", "Certified & prevailing wage", "W-2 and 1099 filings"],
  },
];

const stats = [
  { value: "18 yrs", label: "In construction accounting" },
  { value: "240+", label: "Contractors served" },
  { value: "$3.1M", label: "Tax saved for clients" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="surface-ink">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <p className="eyebrow text-accent">Built for contractors</p>
            <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Books that tell you which jobs actually make money
            </h1>
            <p className="mt-5 max-w-xl text-base opacity-80 sm:text-lg">
              We handle bookkeeping, taxes, and payroll for construction businesses — so you get
              real margins by job, a tax plan you can count on, and crews paid on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Book a free consultation
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-extrabold text-accent">{stat.value}</dt>
                  <dd className="mt-1 text-xs opacity-70">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={heroImage}
            alt="Bookkeeper reviewing job costing spreadsheets with a construction contractor"
            width={1600}
            height={1200}
            className="w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <img
            src={aboutImage}
            alt="Founder of My Construction Bookkeeping at her desk"
            width={1200}
            height={1200}
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <p className="eyebrow text-muted-foreground">About us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              We only work with people who build things
            </h2>
            <p className="mt-5 text-muted-foreground">
              My Construction Bookkeeping started after eighteen years of watching good builders
              fly blind — profitable on paper, broke in the bank account. Construction accounting
              isn't general accounting: retainage, change orders, progress billing, and multi-state
              crews all break the standard playbook.
            </p>
            <p className="mt-4 text-muted-foreground">
              So we built a practice around it. You get a named bookkeeper who knows your jobs, a
              monthly review of where your margins landed, and a tax strategy set before December
              instead of after.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "A named bookkeeper, not a ticket queue",
                "Monthly margin review call",
                "Flat monthly pricing",
                "QuickBooks, Xero & Buildertrend",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow text-muted-foreground">Services</p>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
            Three things, done properly, every month
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.tag}
                className="flex flex-col rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-card)]"
              >
                <p className="eyebrow text-accent">{service.tag}</p>
                <h3 className="mt-3 text-xl">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{service.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-muted-foreground">Contact</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Tell us where the books stand</h2>
            <p className="mt-5 text-muted-foreground">
              Send a note and we'll come back with a straight answer on what we'd fix first, what
              it costs, and whether we're the right fit.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="eyebrow text-muted-foreground">Email</dt>
                <dd className="mt-1">hello@myconstructionbookkeeping.com</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Phone</dt>
                <dd className="mt-1">(555) 214-8890</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Mailing address</dt>
                <dd className="mt-1">1420 Foundry Ave, Suite 210, Denver, CO 80204</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
