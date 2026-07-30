import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30, "Phone number is too long").optional(),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  service: z.enum(["Bookkeeping", "Taxes", "Payroll", "Not sure yet"]),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (10+ characters)")
    .max(1000, "Message must be under 1000 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const fieldClass =
  "w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSent(true);
    event.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
        <p className="eyebrow text-accent-foreground/70">Message received</p>
        <h3 className="mt-3 text-2xl">Thanks — we'll be in touch</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A bookkeeper will reply within one business day, usually much sooner.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center rounded-sm border border-input px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input name="name" className={fieldClass} placeholder="Dana Whitfield" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input name="email" type="email" className={fieldClass} placeholder="you@company.com" />
        </Field>
        <Field label="Phone (optional)" error={errors.phone}>
          <input name="phone" className={fieldClass} placeholder="(555) 214-8890" />
        </Field>
        <Field label="Company (optional)" error={errors.company}>
          <input name="company" className={fieldClass} placeholder="Whitfield Builders" />
        </Field>
        <Field label="What do you need?" error={errors.service}>
          <select name="service" defaultValue="Bookkeeping" className={fieldClass}>
            <option>Bookkeeping</option>
            <option>Taxes</option>
            <option>Payroll</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="How can we help?" error={errors.message}>
            <textarea
              name="message"
              rows={5}
              className={fieldClass}
              placeholder="Tell us about your crew size, annual revenue, and what's messy right now."
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        Send message
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        We reply within one business day. No sales sequences, no spam.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold tracking-wide text-foreground">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
