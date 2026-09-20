"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const CONSENT_KEY = "ivans-cleaning-cookie-consent";
const CONSENT_EVENT = "cookie-consent-change";

export type ConsentValue = "accepted" | "rejected";

// Only used when storage throws: keeps the banner responsive for the current
// page view (the choice just won't persist to the next page load).
let memoryConsent: ConsentValue | null = null;

// Browsers throw a SecurityError on any localStorage access when site data
// is blocked (e.g. "block all cookies"). That must never take the whole
// site down, so every read/write is guarded: a failed read counts as "no
// choice made" (banner shown, analytics off) and a failed write is ignored.
function readStoredConsent(): ConsentValue | null {
  let stored: ConsentValue | null = null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    stored = value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return memoryConsent;
  }
  // If setItem is what fails (e.g. storage full), the read above still works
  // but returns null, so fall back to the choice made in this page view.
  return stored ?? memoryConsent;
}

function writeStoredConsent(value: ConsentValue | null) {
  memoryConsent = value;
  try {
    if (value === null) window.localStorage.removeItem(CONSENT_KEY);
    else window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage unavailable: memoryConsent above still reflects the click.
  }
}

// GA4 sets `_ga` and `_ga_<ID>` on the highest domain it can, so expiring
// them means trying the host and every parent suffix. Withdrawing consent
// has to actually remove what was set while the visitor had accepted, not
// just stop new cookies appearing.
function clearAnalyticsCookies() {
  const parts = window.location.hostname.split(".");
  const domains: (string | undefined)[] = [undefined];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(parts.slice(i).join("."), "." + parts.slice(i).join("."));
  }

  document.cookie
    .split(";")
    .map((entry) => entry.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"))
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie =
          `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` +
          (domain ? `; domain=${domain}` : "");
      });
    });
}

// Google's documented switch: while this window flag is true, gtag sends
// nothing, so a page that already loaded GA stops tracking the moment the
// visitor rejects, without waiting for a reload.
function setAnalyticsDisabled(disabled: boolean) {
  (window as unknown as Record<string, boolean>)[
    `ga-disable-${GA_MEASUREMENT_ID}`
  ] = disabled;
}

// Runs in every tab whenever the stored choice changes (the `storage` event
// fires in the *other* tabs), so rejecting or re-opening settings in one tab
// also stops tracking and clears cookies in a sibling tab that already had
// GA loaded.
function applyConsentSideEffects() {
  if (readStoredConsent() === "accepted") {
    setAnalyticsDisabled(false);
    return;
  }
  setAnalyticsDisabled(true);
  clearAnalyticsCookies();
  // GA4 queues some events (e.g. the 90% scroll hit) and sends them a few
  // seconds later, and the disable flag does not stop ones already queued.
  // If GA has already run in this page, reload so nothing queued can leave
  // after consent was withdrawn. gtag is only defined once GA has loaded, so
  // this never loops: after the reload GA is not loaded.
  if (typeof (window as unknown as { gtag?: unknown }).gtag === "function") {
    window.location.reload();
  }
}

function subscribe(callback: () => void) {
  const onChange = () => {
    applyConsentSideEffects();
    callback();
  };
  // A `storage` event means storage works and another tab changed it, so
  // that is now the truth and any in-memory fallback is stale.
  const onStorage = () => {
    memoryConsent = null;
    onChange();
  };
  // A background tab can receive the storage event late, and a page restored
  // from the back/forward cache never receives it, so re-check the stored
  // choice whenever the tab comes back into view.
  const onVisible = () => {
    if (!document.hidden) onChange();
  };
  const onPageShow = (event: PageTransitionEvent) => {
    if (event.persisted) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CONSENT_EVENT, onChange);
  document.addEventListener("visibilitychange", onVisible);
  window.addEventListener("pageshow", onPageShow);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CONSENT_EVENT, onChange);
    document.removeEventListener("visibilitychange", onVisible);
    window.removeEventListener("pageshow", onPageShow);
  };
}

function getSnapshot(): ConsentValue | null {
  return readStoredConsent();
}

// "pending" on the server and during hydration means neither the banner nor
// GA renders in the server HTML. Otherwise a returning visitor who already
// chose would see the banner flash until hydration, and a visitor with
// JavaScript off would get a banner whose buttons do nothing.
function getServerSnapshot(): "pending" {
  return "pending";
}

// "accepted" | "rejected" | null (no choice yet) | "pending" (not known yet)
export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function setConsent(value: ConsentValue) {
  writeStoredConsent(value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

// Clearing the stored choice re-opens the banner, which is how the footer's
// "Cookie settings" button lets a visitor change their mind later. Tracking
// is paused and analytics cookies cleared until they choose again.
function openCookieSettings() {
  writeStoredConsent(null);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie settings
    </button>
  );
}

export default function CookieConsent() {
  const consent = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-navy-900/10 bg-white p-4 shadow-[0_-4px_20px_rgba(15,27,43,0.12)] sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-navy-800">
          We use Google Analytics cookies to see which pages are useful. They
          are only set if you accept. We do not use them for advertising. See
          our{" "}
          <Link href="/privacy-policy" className="underline hover:text-teal-600">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <button
            onClick={() => setConsent("rejected")}
            className="min-h-[44px] flex-1 rounded-full border border-navy-900/20 px-4 py-2 text-sm font-medium text-navy-800 hover:bg-sand-50 sm:flex-none"
          >
            Reject
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="min-h-[44px] flex-1 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500 sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
