"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface EnquiryFormProps {
  context?: string;
}

export default function EnquiryForm({ context }: EnquiryFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {context && <input type="hidden" name="context" value={context} />}

      {/* Honeypot field: hidden from real users via CSS, bots that auto-fill every field get caught server-side. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy-800">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-navy-900/15 px-4 py-3 text-navy-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-navy-900/15 px-4 py-3 text-navy-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-navy-900/15 px-4 py-3 text-navy-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="postcode" className="mb-1 block text-sm font-medium text-navy-800">
          Postcode
        </label>
        <input
          id="postcode"
          name="postcode"
          type="text"
          required
          className="w-full rounded-lg border border-navy-900/15 px-4 py-3 text-navy-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy-800">
          What do you need cleaned?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-navy-900/15 px-4 py-3 text-navy-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </button>

      <p className="text-xs text-navy-800/60">
        By submitting, you agree to our{" "}
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        . We&apos;ll only use your details to reply to your enquiry.
      </p>
    </form>
  );
}
