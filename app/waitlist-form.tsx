"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success";

export function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const entry = {
      firstName,
      email,
      joinedAt: new Date().toISOString()
    };

    window.localStorage.setItem("veliora-waitlist", JSON.stringify(entry));

    window.setTimeout(() => {
      setStatus("success");
      setFirstName("");
      setEmail("");
    }, 500);
  }

  return (
    <form
      className="rounded-lg border border-white/70 bg-white p-5 shadow-premium sm:p-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-4">
        <div>
          <label
            className="mb-2 block text-sm font-semibold text-veliora-ink"
            htmlFor="firstName"
          >
            Vorname
          </label>
          <input
            required
            autoComplete="given-name"
            className="h-12 w-full rounded-md border border-veliora-line bg-white px-4 text-base text-veliora-ink outline-none transition focus:border-veliora-blue focus:ring-4 focus:ring-veliora-blue/10"
            id="firstName"
            name="firstName"
            placeholder="Anna"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-semibold text-veliora-ink"
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            required
            autoComplete="email"
            className="h-12 w-full rounded-md border border-veliora-line bg-white px-4 text-base text-veliora-ink outline-none transition focus:border-veliora-blue focus:ring-4 focus:ring-veliora-blue/10"
            id="email"
            name="email"
            placeholder="anna@beispiel.ch"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>

      <button
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-veliora-ink px-5 text-sm font-semibold text-white transition hover:bg-[#17323d] focus:outline-none focus:ring-4 focus:ring-veliora-blue/20 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "success" ? (
          <>
            Eingetragen
            <Check aria-hidden="true" className="h-4 w-4" />
          </>
        ) : (
          <>
            Zur Warteliste
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-4 min-h-5 text-sm text-[#48636B]" role="status">
        {status === "success"
          ? "Danke. Wir melden uns, sobald Veliora früh verfügbar ist."
          : "Früher Zugang für Familien, Seniorinnen und Senioren in der Schweiz."}
      </p>
    </form>
  );
}
