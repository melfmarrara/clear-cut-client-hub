import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — My Construction Bookkeeping" },
      {
        name: "description",
        content:
          "Get in touch with My Construction Bookkeeping for bookkeeping, tax, and payroll help. Email, phone, mailing address, and a direct contact form.",
      },
      { property: "og:title", content: "Contact — My Construction Bookkeeping" },
      {
        property: "og:description",
        content:
          "Reach our construction accounting team by email, phone, or the contact form. Replies within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    label: "Email",
    value: "hello@myconstructionbookkeeping.com",
    href: "mailto:hello@myconstructionbookkeeping.com",
  },
  { label: "Phone", value: "(555) 214-8890", href: "tel:+15552148890" },
  {
    label: "Mailing address",
    value: "1420 Foundry Ave, Suite 210, Denver, CO 80204",
  },
  { label: "Hours", value: "Mon–Fri, 8am–5pm MT" },
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="surface-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <p className="eyebrow text-accent">Contact</p>
          <h1 className="mt-4 max-w-2xl text-4xl sm:text-5xl">
            Let's talk about your books
          </h1>
          <p className="mt-4 max-w-xl opacity-80">
            Tell us about your crew, your revenue, and what's messy right now. We reply within one
            business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl">Reach us directly</h2>
            <dl className="mt-6 space-y-5 text-sm">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="eyebrow text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1">
                    {item.href ? (
                      <a href={item.href} className="underline-offset-4 hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-l-2 border-accent pl-4 text-sm text-muted-foreground">
              Already have a bookkeeper? We can run a one-time cleanup and hand the books back
              clean — no long-term commitment required.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
