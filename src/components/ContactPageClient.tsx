"use client";

import { useRef, useState } from "react";

// Google Form action endpoint — note: /formResponse (not /viewform)
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9beJC6jvPqaYQNDMFNIYmc5nfI5_n1lcnxf7eE8TUPgJ6ow/formResponse";

const deliveryOptions = [
  "Standard Delivery (Next Day)",
  "Same-Day Delivery",
  "STAT / Urgent Delivery",
  "Scheduled Route Pickup",
  "Lab Specimen Transport",
  "Pharmacy / Medical Supply Delivery",
  "Medical Records / Documents",
  "Temperature-Controlled Transport",
  "Not Sure Yet",
];

const frequencyOptions = ["One-time", "Recurring"];

// ─── Sub-components (unchanged) ──────────────────────────────────────────────

function MapVisual() {
  const address = "1 E Erie St Suite 525-3498, Chicago, IL 60611";
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <h3 className="font-heading text-2xl font-semibold text-slate-900">
          Service Coverage Area
        </h3>
        <span className="rounded-lg bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-green">
          Active Now
        </span>
      </div>

      <div className="relative h-[300px] bg-slate-100">
        <iframe
          title="707 Holding Chicago Office Map"
          src={embedSrc}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
          className="absolute left-4 top-4 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-green shadow-md transition hover:bg-slate-50"
        >
          Open in Maps ↗
        </a>
        <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-brand-green">
              i
            </span>
            1 E Erie St Suite 525-3498, Chicago, IL 60611
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportCard() {
  return (
    <div className="rounded-[1.5rem] bg-brand-green p-8 text-white shadow-card">
      <h3 className="font-heading text-3xl font-bold tracking-tight">
        Need help immediately?
      </h3>
      <p className="mt-5 text-lg leading-8 text-white/85">
        Our dispatch team is standing by 24/7 to assist with urgent delivery
        requirements.
      </p>
      <div className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            ☎
          </span>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
              Support Hotline
            </div>
            <a
              href="tel:+18728103236"
              className="mt-1 block text-3xl font-bold tracking-tight text-white"
            >
              (872) 810-3236
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            ✉
          </span>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
              Direct Email
            </div>
            <a
              href="mailto:info@707holding.com"
              className="mt-1 block break-all text-2xl font-bold tracking-tight text-white"
            >
              info@707holding.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            ⌂
          </span>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
              Office
            </div>
            <div className="mt-1 text-2xl font-bold tracking-tight text-white">
              1 E Erie St Suite 525-3498
            </div>
            <div className="text-xl text-white/90">Chicago, IL 60611</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-[1.25rem] border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
        <div className="font-heading text-4xl font-bold text-brand-green">
          12min
        </div>
        <div className="mt-1 text-sm font-medium text-slate-500">
          Avg. Response
        </div>
      </div>
      <div className="rounded-[1.25rem] border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
        <div className="font-heading text-4xl font-bold text-brand-green">
          4.9/5
        </div>
        <div className="mt-1 text-sm font-medium text-slate-500">
          Customer Rating
        </div>
      </div>
    </div>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-soft text-4xl text-brand-green">
        ✓
      </div>
      <h2 className="mt-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
        Request Received!
      </h2>
      <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">
        Thank you for reaching out. Our Chicago logistics team will contact you
        within 15 minutes.
      </p>
      <div className="mt-8 flex flex-col items-center gap-2 text-sm text-slate-500">
        <p>Need immediate assistance?</p>
        <a
          href="tel:+18728103236"
          className="font-semibold text-brand-green hover:underline"
        >
          Call (872) 810-3236
        </a>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContactPageClient() {
  // Form field state
  const [organizationName, setOrganizationName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [typeOfDelivery, setTypeOfDelivery] = useState("Same-Day Delivery");
  const [frequency, setFrequency] = useState<"One-time" | "Recurring">("One-time");

  // Submission state
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Hidden iframe ref — absorbs the Google Form redirect response
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Listen for the iframe load that fires after Google accepts the POST
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        setSubmitted(true);
        setSubmitting(false);
      };
    }

    // Submit the real <form> that targets the hidden iframe
    const realForm = e.currentTarget;
    realForm.submit();
  }

  return (
    <section className="section-space pb-10">
      <div className="container-shell">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.9fr]">

          {/* ── Left column: form card ── */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-card sm:p-10">
            {submitted ? (
              <SuccessMessage />
            ) : (
              <>
                <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Request Courier Service
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Fill out the form below and our Chicago logistics team will
                  reach out within 15 minutes.
                </p>

                {/*
                  Real form — POSTs directly to Google's formResponse endpoint.
                  target="hidden-iframe" makes Google's redirect land in the
                  invisible iframe instead of the browser window.
                */}
                <form
                  action={FORM_ACTION}
                  method="POST"
                  target="hidden-iframe"
                  onSubmit={handleSubmit}
                  className="mt-10"
                >
                  {/* ── Hidden Google Form fields (entry IDs as name attrs) ── */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="organizationName"
                        className="mb-3 block text-base font-semibold text-slate-800"
                      >
                        Organization Name
                      </label>
                      <input
                        id="organizationName"
                        name="entry.454892663"
                        type="text"
                        required
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        placeholder="Company LLC"
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contactPerson"
                        className="mb-3 block text-base font-semibold text-slate-800"
                      >
                        Contact Person
                      </label>
                      <input
                        id="contactPerson"
                        name="entry.781986437"
                        type="text"
                        required
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="Full Name"
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="mb-3 block text-base font-semibold text-slate-800"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phoneNumber"
                        name="entry.604739016"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="(312) 555-0123"
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="mb-3 block text-base font-semibold text-slate-800"
                      >
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        name="entry.1053983057"
                        type="email"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="name@company.com"
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div className="my-8 border-t border-slate-200" />

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="pickupLocation"
                        className="mb-3 block text-base font-semibold text-slate-800"
                      >
                        Pickup Location
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          ⌖
                        </span>
                        <input
                          id="pickupLocation"
                          name="entry.2123967211"
                          type="text"
                          required
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          placeholder="Enter Chicago address"
                          className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="deliveryLocation"
                        className="mb-3 block text-base font-semibold text-slate-800"
                      >
                        Delivery Location
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          ➤
                        </span>
                        <input
                          id="deliveryLocation"
                          name="entry.1095850134"
                          type="text"
                          required
                          value={deliveryLocation}
                          onChange={(e) => setDeliveryLocation(e.target.value)}
                          placeholder="Enter destination address"
                          className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                      <div>
                        <label
                          htmlFor="typeOfDelivery"
                          className="mb-3 block text-base font-semibold text-slate-800"
                        >
                          Type of Delivery
                        </label>
                        <select
                          id="typeOfDelivery"
                          name="entry.1293247207"
                          value={typeOfDelivery}
                          onChange={(e) => setTypeOfDelivery(e.target.value)}
                          className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
                        >
                          {deliveryOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-3 block text-base font-semibold text-slate-800">
                          Frequency
                        </label>
                        <div className="flex h-14 items-center gap-3">
                          {frequencyOptions.map((option) => {
                            const active = frequency === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() =>
                                  setFrequency(option as "One-time" | "Recurring")
                                }
                                className={[
                                  "min-w-[112px] rounded-xl border px-5 py-3 text-base font-medium transition",
                                  active
                                    ? "border-brand-green bg-brand-green text-white"
                                    : "border-slate-300 bg-white text-slate-700 hover:border-brand-green",
                                ].join(" ")}
                              >
                                {option}
                              </button>
                            );
                          })}
                          {/* Hidden input carries the frequency value into the POST */}
                          <input
                            type="hidden"
                            name="entry.1223120580"
                            value={frequency}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-xl bg-brand-green px-6 text-lg font-semibold text-white shadow-card transition hover:bg-brand-greenMedium disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting…" : "Request Courier Service"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* ── Right column: map + support ── */}
          <div className="space-y-6">
            <MapVisual />
            <SupportCard />
            <StatsRow />
          </div>
        </div>
      </div>

      {/*
        Hidden iframe — Google's post-submit redirect lands here instead of
        navigating the browser. The name must match the form's target attr.
      */}
      <iframe
        ref={iframeRef}
        name="hidden-iframe"
        title="Form submission target"
        aria-hidden="true"
        className="hidden"
      />
    </section>
  );
}