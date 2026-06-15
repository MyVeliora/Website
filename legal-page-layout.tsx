"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const WAITLIST_FORM_ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT;
const RECIPIENT_EMAIL = "info@myveliora.ch";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!WAITLIST_FORM_ENDPOINT) {
      setStatus("error");
      setErrorMessage(
        "Das Formular ist noch nicht konfiguriert. Bitte NEXT_PUBLIC_WAITLIST_FORM_ENDPOINT in Vercel oder .env.local setzen."
      );
      return;
    }

    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.append("_subject", "Neue MyVeliora Wartelistenanfrage");
    formData.append("Empfänger-Hinweis", RECIPIENT_EMAIL);

    try {
      const response = await fetch(WAITLIST_FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("submission_failed");
      }

      setStatus("success");
      setFirstName("");
      setEmail("");
      setRole("");
      setMessage("");
      setPrivacyAccepted(false);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Die Anfrage konnte gerade nicht gesendet werden. Bitte später erneut versuchen oder direkt an info@myveliora.ch schreiben."
      );
    }
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
            name="Vorname"
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
            name="E-Mail"
            placeholder="anna@beispiel.ch"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-semibold text-veliora-ink"
            htmlFor="role"
          >
            Ich bin
          </label>
          <select
            className="h-12 w-full rounded-md border border-veliora-line bg-white px-4 text-base text-veliora-ink outline-none transition focus:border-veliora-blue focus:ring-4 focus:ring-veliora-blue/10"
            id="role"
            name="Rolle"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="">Bitte auswählen</option>
            <option value="Angehöriger">Angehöriger</option>
            <option value="Senior">Senior</option>
            <option value="Pflegeperson">Pflegeperson</option>
            <option value="Fitnessstudio">Fitnessstudio</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-semibold text-veliora-ink"
            htmlFor="message"
          >
            Nachricht optional
          </label>
          <textarea
            className="min-h-28 w-full resize-y rounded-md border border-veliora-line bg-white px-4 py-3 text-base text-veliora-ink outline-none transition focus:border-veliora-blue focus:ring-4 focus:ring-veliora-blue/10"
            id="message"
            name="Nachricht"
            placeholder="Was interessiert dich an MyVeliora?"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        <label className="flex gap-3 rounded-md border border-veliora-line bg-[#F7FBFA] p-3 text-sm leading-6 text-[#48636B]">
          <input
            required
            checked={privacyAccepted}
            className="mt-1 h-4 w-4 rounded border-veliora-line text-veliora-blue focus:ring-veliora-blue"
            name="Datenschutz akzeptiert"
            type="checkbox"
            value="Ja"
            onChange={(event) => setPrivacyAccepted(event.target.checked)}
          />
          <span>
            Ich habe die{" "}
            <Link
              className="font-semibold text-veliora-blue underline-offset-4 hover:underline"
              href="/datenschutz"
            >
              Datenschutzhinweise
            </Link>{" "}
            gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung
            der Wartelistenanfrage einverstanden.
          </span>
        </label>
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

      <p
        className={`mt-4 min-h-5 text-sm ${
          status === "error" ? "text-[#A33A2F]" : "text-[#48636B]"
        }`}
        role="status"
      >
        {status === "success" &&
          "Danke. Deine Anfrage wurde gesendet. Wir melden uns, sobald MyVeliora früh verfügbar ist."}
        {status === "error" && errorMessage}
        {(status === "idle" || status === "submitting") &&
          "Früher Zugang für Familien, Seniorinnen und Senioren in der Schweiz."}
      </p>
    </form>
  );
}
