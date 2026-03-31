"use client";

import { useRef, useState } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScC4rDmLmsucJWJ6nBYJ4IkoOHybaWGJEia0wvvqHCPr89bXA/formResponse";

// Section 1 — Personal & Contact Information
const ENTRY_FULL_NAME           = "entry.991604259";
const ENTRY_EMAIL               = "entry.1822572988";
const ENTRY_PHONE               = "entry.1155352723";
const ENTRY_CITY_ZIP            = "entry.260136650";
const ENTRY_WORK_AUTH           = "entry.1645952370";
const ENTRY_AGE_18              = "entry.1759802213";
const ENTRY_HOW_HEARD           = "entry.1425028451";

// Section 2 — Driving Experience & License Details
const ENTRY_HAS_LICENSE         = "entry.1896998695";
const ENTRY_LICENSE_STATE       = "entry.2023419134";
const ENTRY_LICENSE_NUMBER      = "entry.1963493998";
const ENTRY_LICENSE_EXPIRY      = "entry.1589630759";
const ENTRY_DRIVING_HISTORY     = "entry.319239010";   // checkbox — repeated per value
const ENTRY_YEARS_EXPERIENCE    = "entry.914902232";
const ENTRY_MEDICAL_COURIER     = "entry.485485689";
const ENTRY_COURIER_DETAIL      = "entry.1598300472";
const ENTRY_CHICAGO_FAMILIARITY = "entry.1206828987";

// Section 3 — Availability & Schedule
const ENTRY_POSITION_TYPE       = "entry.513387443";
const ENTRY_DAYS_AVAILABLE      = "entry.903354159";   // checkbox — repeated per value
const ENTRY_SHIFTS_AVAILABLE    = "entry.196346311";   // checkbox — repeated per value
const ENTRY_STAT_AVAILABLE      = "entry.168141876";
const ENTRY_START_DATE          = "entry.965116204";

// Section 4 — Background Check & Drug Test Consent
const ENTRY_BACKGROUND_CONSENT  = "entry.1847838794";
const ENTRY_MVR_CONSENT         = "entry.756226499";
const ENTRY_DRUG_CONSENT        = "entry.1570135677";
const ENTRY_FELONY              = "entry.506898609";
const ENTRY_SUBSTANCE           = "entry.651655022";

// Section 5 — HIPAA & Confidentiality Acknowledgment
const ENTRY_PHI_ACKNOWLEDGE     = "entry.1311304001";
const ENTRY_HIPAA_TRAINING      = "entry.393387752";
const ENTRY_NO_DISCLOSURE       = "entry.993288239";
const ENTRY_SIGNATURE           = "entry.514853542";
const ENTRY_TODAY_DATE          = "entry.763666452";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  cityZip: string;
  workAuth: string;
  age18: string;
  howHeard: string;
  hasLicense: string;
  licenseState: string;
  licenseNumber: string;
  licenseExpiry: string;
  drivingHistory: string[];
  yearsExperience: string;
  medicalCourier: string;
  courierDetail: string;
  chicagoFamiliarity: string;
  positionType: string;
  daysAvailable: string[];
  shiftsAvailable: string[];
  statAvailable: string;
  startDate: string;
  backgroundConsent: string;
  mvrConsent: string;
  drugConsent: string;
  felony: string;
  substance: string;
  phiAcknowledge: string;
  hipaaTraining: string;
  noDisclosure: string;
  signature: string;
  todayDate: string;
};

const initialFormData: FormData = {
  fullName: "", email: "", phone: "", cityZip: "",
  workAuth: "", age18: "", howHeard: "",
  hasLicense: "", licenseState: "", licenseNumber: "", licenseExpiry: "",
  drivingHistory: [], yearsExperience: "", medicalCourier: "",
  courierDetail: "", chicagoFamiliarity: "",
  positionType: "", daysAvailable: [], shiftsAvailable: [],
  statAvailable: "", startDate: "",
  backgroundConsent: "", mvrConsent: "", drugConsent: "",
  felony: "", substance: "",
  phiAcknowledge: "", hipaaTraining: "", noDisclosure: "",
  signature: "", todayDate: new Date().toLocaleDateString("en-US"),
};

// ─── Reusable UI Primitives ───────────────────────────────────────────────────

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-3 block text-base font-semibold text-slate-800">
      {children}
      {required && <span className="ml-1 text-brand-green">*</span>}
    </label>
  );
}

function TextInput({
  value, onChange, placeholder, type = "text", required,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 outline-none transition focus:border-brand-green"
    />
  );
}

function TextArea({
  value, onChange, placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-brand-green"
    />
  );
}

function RadioGroup({
  name, options, value, onChange, required,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt}
          className={[
            "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition",
            value === opt
              ? "border-brand-green bg-brand-soft"
              : "border-slate-200 bg-white hover:border-brand-green/40",
          ].join(" ")}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            required={required && !value}
            className="accent-brand-green"
          />
          <span className="text-base text-slate-700">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({
  options, values, onChange,
}: {
  options: string[];
  values: string[];
  onChange: (v: string[]) => void;
}) {
  function toggle(opt: string) {
    onChange(
      values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]
    );
  }
  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt}
          className={[
            "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition",
            values.includes(opt)
              ? "border-brand-green bg-brand-soft"
              : "border-slate-200 bg-white hover:border-brand-green/40",
          ].join(" ")}
        >
          <input
            type="checkbox"
            checked={values.includes(opt)}
            onChange={() => toggle(opt)}
            className="accent-brand-green"
          />
          <span className="text-base text-slate-700">{opt}</span>
        </label>
      ))}
    </div>
  );
}

function SectionNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 rounded-xl border border-brand-green/20 bg-brand-soft px-5 py-4 text-sm leading-7 text-slate-600">
      {children}
    </div>
  );
}

// ─── Step Progress Bar ────────────────────────────────────────────────────────

const STEPS = [
  "Personal Info",
  "Driving & License",
  "Availability",
  "Background",
  "HIPAA & Sign",
];

function StepBar({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {STEPS.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {i > 0 && (
                  <div className={["h-0.5 flex-1 transition-colors duration-300", done ? "bg-brand-green" : "bg-slate-200"].join(" ")} />
                )}
                <div
                  className={[
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300",
                    done
                      ? "bg-brand-green text-white"
                      : active
                      ? "border-2 border-brand-green bg-white text-brand-green"
                      : "border-2 border-slate-200 bg-white text-slate-400",
                  ].join(" ")}
                >
                  {done ? "✓" : i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={["h-0.5 flex-1 transition-colors duration-300", done ? "bg-brand-green" : "bg-slate-200"].join(" ")} />
                )}
              </div>
              <span
                className={[
                  "mt-2 hidden text-center text-[11px] font-semibold uppercase tracking-wide sm:block",
                  active ? "text-brand-green" : done ? "text-slate-500" : "text-slate-300",
                ].join(" ")}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Section Components ───────────────────────────────────────────────────────

function Section1({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-heading text-2xl font-bold text-slate-900">Personal &amp; Contact Information</h2>
        <p className="mt-2 text-base text-slate-500">All fields marked * are required.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <FieldLabel required>Full Legal Name</FieldLabel>
          <TextInput value={data.fullName} onChange={(v) => set("fullName", v)} placeholder="Jane Doe" required />
        </div>
        <div>
          <FieldLabel required>Email Address</FieldLabel>
          <TextInput type="email" value={data.email} onChange={(v) => set("email", v)} placeholder="name@email.com" required />
        </div>
        <div>
          <FieldLabel required>Phone Number</FieldLabel>
          <TextInput type="tel" value={data.phone} onChange={(v) => set("phone", v)} placeholder="(312) 555-0123" required />
        </div>
        <div>
          <FieldLabel required>City and ZIP Code (Chicago area)</FieldLabel>
          <TextInput value={data.cityZip} onChange={(v) => set("cityZip", v)} placeholder="Chicago, IL 60601" required />
        </div>
      </div>

      <div>
        <FieldLabel required>Are you legally authorized to work in the United States?</FieldLabel>
        <RadioGroup name="workAuth" options={["Yes", "No"]} value={data.workAuth} onChange={(v) => set("workAuth", v)} required />
      </div>

      <div>
        <FieldLabel required>Are you 18 years of age or older?</FieldLabel>
        <RadioGroup name="age18" options={["Yes", "No"]} value={data.age18} onChange={(v) => set("age18", v)} required />
      </div>

      <div>
        <FieldLabel>How did you hear about this opportunity?</FieldLabel>
        <RadioGroup
          name="howHeard"
          options={["707 Medical Courier Website", "Indeed", "Facebook / Social Media", "Referred by a friend or colleague", "Craigslist", "Other"]}
          value={data.howHeard}
          onChange={(v) => set("howHeard", v)}
        />
      </div>
    </div>
  );
}

function Section2({ data, set, setArr }: { data: FormData; set: (k: keyof FormData, v: string) => void; setArr: (k: keyof FormData, v: string[]) => void }) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-heading text-2xl font-bold text-slate-900">Driving Experience &amp; License Details</h2>
        <p className="mt-2 text-base text-slate-500">Please provide accurate information — this will be verified.</p>
      </div>

      <div>
        <FieldLabel required>Do you have a valid driver&apos;s license?</FieldLabel>
        <RadioGroup
          name="hasLicense"
          options={["Yes — Illinois", "Yes — Another state (please specify below)", "No"]}
          value={data.hasLicense}
          onChange={(v) => set("hasLicense", v)}
          required
        />
      </div>

      {data.hasLicense === "Yes — Another state (please specify below)" && (
        <div>
          <FieldLabel>Please specify your state:</FieldLabel>
          <TextInput value={data.licenseState} onChange={(v) => set("licenseState", v)} placeholder="e.g. Indiana" />
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <FieldLabel required>Driver&apos;s License Number</FieldLabel>
          <TextInput value={data.licenseNumber} onChange={(v) => set("licenseNumber", v)} placeholder="License number" required />
          <p className="mt-2 text-xs text-slate-400">Used for Motor Vehicle Record (MVR) verification only.</p>
        </div>
        <div>
          <FieldLabel required>License Expiration Date</FieldLabel>
          <TextInput value={data.licenseExpiry} onChange={(v) => set("licenseExpiry", v)} placeholder="MM/YYYY" required />
        </div>
      </div>

      <div>
        <FieldLabel required>Have you had any of the following in the past 3 years? (Select all that apply)</FieldLabel>
        <CheckboxGroup
          options={["DUI or DWI", "Suspended or revoked license", "More than 2 at-fault accidents", "More than 2 moving violations", "None of the above"]}
          values={data.drivingHistory}
          onChange={(v) => setArr("drivingHistory", v)}
        />
      </div>

      <div>
        <FieldLabel required>How many years of professional driving or delivery experience do you have?</FieldLabel>
        <RadioGroup
          name="yearsExperience"
          options={["Less than 1 year", "1–2 years", "3–5 years", "6–10 years", "More than 10 years"]}
          value={data.yearsExperience}
          onChange={(v) => set("yearsExperience", v)}
          required
        />
      </div>

      <div>
        <FieldLabel required>Have you previously worked as a medical, healthcare, or pharmaceutical courier?</FieldLabel>
        <RadioGroup name="medicalCourier" options={["Yes", "No"]} value={data.medicalCourier} onChange={(v) => set("medicalCourier", v)} required />
      </div>

      {data.medicalCourier === "Yes" && (
        <div>
          <FieldLabel>If yes, please briefly describe your experience:</FieldLabel>
          <TextArea value={data.courierDetail} onChange={(v) => set("courierDetail", v)} placeholder="Describe your medical courier experience…" />
        </div>
      )}

      <div>
        <FieldLabel required>Are you familiar with the Chicago road network and surrounding suburbs?</FieldLabel>
        <RadioGroup
          name="chicagoFamiliarity"
          options={["Yes — very familiar", "Somewhat familiar", "No, but I am willing to learn"]}
          value={data.chicagoFamiliarity}
          onChange={(v) => set("chicagoFamiliarity", v)}
          required
        />
      </div>
    </div>
  );
}

function Section3({ data, set, setArr }: { data: FormData; set: (k: keyof FormData, v: string) => void; setArr: (k: keyof FormData, v: string[]) => void }) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-heading text-2xl font-bold text-slate-900">Availability &amp; Schedule Preferences</h2>
        <p className="mt-2 text-base text-slate-500">Tell us when you&apos;re available to work.</p>
      </div>

      <div>
        <FieldLabel required>What type of position are you applying for?</FieldLabel>
        <RadioGroup
          name="positionType"
          options={["Part-time (20–30 hours/week)", "Full-time (30–40 hours/week)", "On-call / as-needed", "Open to any"]}
          value={data.positionType}
          onChange={(v) => set("positionType", v)}
          required
        />
      </div>

      <div>
        <FieldLabel required>Which days are you available to work? (Select all that apply)</FieldLabel>
        <CheckboxGroup
          options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
          values={data.daysAvailable}
          onChange={(v) => setArr("daysAvailable", v)}
        />
      </div>

      <div>
        <FieldLabel required>Which shifts are you available for? (Select all that apply)</FieldLabel>
        <CheckboxGroup
          options={["Morning (6am – 12pm)", "Afternoon (12pm – 6pm)", "Evening (6pm – 10pm)", "Overnight / Early morning (10pm – 6am)", "Flexible / Open availability"]}
          values={data.shiftsAvailable}
          onChange={(v) => setArr("shiftsAvailable", v)}
        />
      </div>

      <div>
        <FieldLabel required>Are you available for STAT (urgent, on-call) deliveries?</FieldLabel>
        <RadioGroup
          name="statAvailable"
          options={["Yes — available for STAT calls", "Sometimes — with advance notice preferred", "No"]}
          value={data.statAvailable}
          onChange={(v) => set("statAvailable", v)}
          required
        />
      </div>

      <div>
        <FieldLabel required>What is your earliest available start date?</FieldLabel>
        <TextInput value={data.startDate} onChange={(v) => set("startDate", v)} placeholder="e.g. April 14, 2026" required />
      </div>
    </div>
  );
}

function Section4({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-heading text-2xl font-bold text-slate-900">Background Check &amp; Drug Test Consent</h2>
      </div>

      <SectionNote>
        707 Medical Courier Services requires all driver candidates to complete a criminal background check,
        motor vehicle record (MVR) check, and pre-employment drug screening as a condition of employment.
        Please read and respond to the statements below.
      </SectionNote>

      <div>
        <FieldLabel required>Do you consent to a criminal background check as part of the application process?</FieldLabel>
        <p className="mb-3 text-xs text-slate-400">Note: Selecting &quot;No&quot; will disqualify this application from further review.</p>
        <RadioGroup name="backgroundConsent" options={["Yes, I consent", "No, I do not consent"]} value={data.backgroundConsent} onChange={(v) => set("backgroundConsent", v)} required />
      </div>

      <div>
        <FieldLabel required>Do you consent to a Motor Vehicle Record (MVR) check?</FieldLabel>
        <RadioGroup name="mvrConsent" options={["Yes, I consent", "No, I do not consent"]} value={data.mvrConsent} onChange={(v) => set("mvrConsent", v)} required />
      </div>

      <div>
        <FieldLabel required>Do you consent to a pre-employment drug screening?</FieldLabel>
        <RadioGroup name="drugConsent" options={["Yes, I consent", "No, I do not consent"]} value={data.drugConsent} onChange={(v) => set("drugConsent", v)} required />
      </div>

      <div>
        <FieldLabel required>Have you ever been convicted of a felony?</FieldLabel>
        <p className="mb-3 text-xs text-slate-400">A felony conviction does not automatically disqualify a candidate. Each case is reviewed individually in accordance with Illinois law.</p>
        <RadioGroup name="felony" options={["No", "Yes — I am willing to discuss the circumstances"]} value={data.felony} onChange={(v) => set("felony", v)} required />
      </div>

      <div>
        <FieldLabel required>Do you currently use any substances that would affect your ability to safely operate a vehicle or handle medical materials?</FieldLabel>
        <RadioGroup name="substance" options={["No", "Yes"]} value={data.substance} onChange={(v) => set("substance", v)} required />
      </div>
    </div>
  );
}

function Section5({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-heading text-2xl font-bold text-slate-900">HIPAA &amp; Confidentiality Acknowledgment</h2>
      </div>

      <SectionNote>
        As a medical courier, you may have access to protected health information (PHI), medical specimens,
        pharmaceutical items, and sensitive healthcare materials. All 707 Medical Courier drivers are required
        to comply with HIPAA confidentiality standards and the company&apos;s chain-of-custody procedures.
        Please read and acknowledge the statements below.
      </SectionNote>

      <div>
        <FieldLabel required>I understand that I may encounter protected health information (PHI) in the course of my duties and agree to handle all such information with strict confidentiarity.</FieldLabel>
        <RadioGroup name="phiAcknowledge" options={["Yes, I understand and agree", "No"]} value={data.phiAcknowledge} onChange={(v) => set("phiAcknowledge", v)} required />
      </div>

      <div>
        <FieldLabel required>I agree to complete HIPAA awareness training and OSHA bloodborne pathogen training before beginning any delivery assignments.</FieldLabel>
        <RadioGroup name="hipaaTraining" options={["Yes, I agree", "No"]} value={data.hipaaTraining} onChange={(v) => set("hipaaTraining", v)} required />
      </div>

      <div>
        <FieldLabel required>I understand that sharing, photographing, or disclosing any patient information or healthcare facility details encountered during deliveries is strictly prohibited.</FieldLabel>
        <RadioGroup name="noDisclosure" options={["Yes, I understand", "No"]} value={data.noDisclosure} onChange={(v) => set("noDisclosure", v)} required />
      </div>

      <div className="rounded-[1.25rem] border border-brand-green/30 bg-brand-soft p-6">
        <h3 className="font-heading text-lg font-bold text-slate-900">Electronic Signature</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          By entering your full legal name below, you confirm that all information provided in this application
          is accurate and complete, and that you agree to the consent and acknowledgment statements above.
        </p>
        <div className="mt-5">
          <FieldLabel required>Full Legal Name</FieldLabel>
          <TextInput value={data.signature} onChange={(v) => set("signature", v)} placeholder="Type your full legal name" required />
        </div>
        <div className="mt-5">
          <FieldLabel required>Today&apos;s Date</FieldLabel>
          <TextInput value={data.todayDate} onChange={(v) => set("todayDate", v)} placeholder="MM/DD/YYYY" required />
        </div>
      </div>
    </div>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-soft text-4xl text-brand-green">
        ✓
      </div>
      <h2 className="mt-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
        Application Submitted!
      </h2>
      <p className="mt-4 max-w-md text-lg leading-8 text-slate-600">
        Thank you for your interest in joining 707 Medical Courier Services.
        We have received your information and will review it carefully.
        Qualified candidates will be contacted within 5–7 business days.
      </p>
      <p className="mt-6 text-sm text-slate-400">We appreciate your interest in joining our team.</p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CareerApplicationForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function set(key: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function setArr(key: keyof FormData, value: string[]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleFinalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        setSubmitted(true);
        setSubmitting(false);
      };
    }
    e.currentTarget.submit();
  }

  const sharedProps = { data: formData, set, setArr };

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-card sm:p-10">
      {submitted ? (
        <SuccessMessage />
      ) : (
        <>
          <StepBar current={step} />

          <form
            action={FORM_ACTION}
            method="POST"
            target="career-iframe"
            onSubmit={handleFinalSubmit}
          >
            {/* ── Hidden inputs — always present so all values POST on submit ── */}
            <input type="hidden" name={ENTRY_FULL_NAME}            value={formData.fullName} />
            <input type="hidden" name={ENTRY_EMAIL}                value={formData.email} />
            <input type="hidden" name={ENTRY_PHONE}                value={formData.phone} />
            <input type="hidden" name={ENTRY_CITY_ZIP}             value={formData.cityZip} />
            <input type="hidden" name={ENTRY_WORK_AUTH}            value={formData.workAuth} />
            <input type="hidden" name={ENTRY_AGE_18}               value={formData.age18} />
            <input type="hidden" name={ENTRY_HOW_HEARD}            value={formData.howHeard} />
            <input type="hidden" name={ENTRY_HAS_LICENSE}          value={formData.hasLicense} />
            <input type="hidden" name={ENTRY_LICENSE_STATE}        value={formData.licenseState} />
            <input type="hidden" name={ENTRY_LICENSE_NUMBER}       value={formData.licenseNumber} />
            <input type="hidden" name={ENTRY_LICENSE_EXPIRY}       value={formData.licenseExpiry} />
            {formData.drivingHistory.map((v) => (
              <input key={v} type="hidden" name={ENTRY_DRIVING_HISTORY} value={v} />
            ))}
            <input type="hidden" name={ENTRY_YEARS_EXPERIENCE}     value={formData.yearsExperience} />
            <input type="hidden" name={ENTRY_MEDICAL_COURIER}      value={formData.medicalCourier} />
            <input type="hidden" name={ENTRY_COURIER_DETAIL}       value={formData.courierDetail} />
            <input type="hidden" name={ENTRY_CHICAGO_FAMILIARITY}  value={formData.chicagoFamiliarity} />
            <input type="hidden" name={ENTRY_POSITION_TYPE}        value={formData.positionType} />
            {formData.daysAvailable.map((v) => (
              <input key={v} type="hidden" name={ENTRY_DAYS_AVAILABLE} value={v} />
            ))}
            {formData.shiftsAvailable.map((v) => (
              <input key={v} type="hidden" name={ENTRY_SHIFTS_AVAILABLE} value={v} />
            ))}
            <input type="hidden" name={ENTRY_STAT_AVAILABLE}       value={formData.statAvailable} />
            <input type="hidden" name={ENTRY_START_DATE}           value={formData.startDate} />
            <input type="hidden" name={ENTRY_BACKGROUND_CONSENT}   value={formData.backgroundConsent} />
            <input type="hidden" name={ENTRY_MVR_CONSENT}          value={formData.mvrConsent} />
            <input type="hidden" name={ENTRY_DRUG_CONSENT}         value={formData.drugConsent} />
            <input type="hidden" name={ENTRY_FELONY}               value={formData.felony} />
            <input type="hidden" name={ENTRY_SUBSTANCE}            value={formData.substance} />
            <input type="hidden" name={ENTRY_PHI_ACKNOWLEDGE}      value={formData.phiAcknowledge} />
            <input type="hidden" name={ENTRY_HIPAA_TRAINING}       value={formData.hipaaTraining} />
            <input type="hidden" name={ENTRY_NO_DISCLOSURE}        value={formData.noDisclosure} />
            <input type="hidden" name={ENTRY_SIGNATURE}            value={formData.signature} />
            <input type="hidden" name={ENTRY_TODAY_DATE}           value={formData.todayDate} />

            {/* ── Visible section ── */}
            <div className="mb-10">
              {step === 0 && <Section1 {...sharedProps} />}
              {step === 1 && <Section2 {...sharedProps} />}
              {step === 2 && <Section3 {...sharedProps} />}
              {step === 3 && <Section4 {...sharedProps} />}
              {step === 4 && <Section5 {...sharedProps} />}
            </div>

            {/* ── Navigation ── */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-8">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-green hover:text-brand-green"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-3 text-base font-semibold text-white shadow-card transition hover:bg-brand-greenMedium"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-3 text-base font-semibold text-white shadow-card transition hover:bg-brand-greenMedium disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>
              )}
            </div>
          </form>
        </>
      )}

      {/* Hidden iframe absorbs Google's post-submit redirect */}
      <iframe
        ref={iframeRef}
        name="career-iframe"
        title="Application submission target"
        aria-hidden="true"
        className="hidden"
      />
    </div>
  );
}