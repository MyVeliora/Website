import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Über MyVeliora | MyVeliora",
  description:
    "Warum MyVeliora entsteht, für wen es gedacht ist und welche Alltagsprobleme das Schweizer HealthTech Projekt lösen soll."
};

const focusAreas = [
  "Mehr Übersicht bei Terminen, Aufgaben und wichtigen Informationen",
  "Bessere Koordination zwischen Angehörigen und Betreuungspersonen",
  "Ruhige, verständliche Struktur für sensible Alltagssituationen",
  "Schrittweise Entwicklung mit Feedback von Interessierten"
];

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFA] text-veliora-ink">
      <section className="bg-white">
        <SiteHeader />
      </section>

      <section className="border-y border-veliora-line bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold text-veliora-green">
              Über MyVeliora
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              MyVeliora entsteht für Familien, die Verantwortung tragen.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#48636B]">
              MyVeliora entsteht, um Familien mehr Übersicht, Sicherheit und
              Entlastung im Alltag zu geben.
            </p>
          </div>

          <div className="rounded-lg border border-veliora-line bg-[#FBFEFD] p-6 shadow-sm sm:p-8">
            <p className="text-lg leading-8 text-[#48636B]">
              Das Schweizer HealthTech Projekt richtet sich an Seniorinnen und
              Senioren, Angehörige und Betreuungspersonen. Es soll helfen,
              Gesundheitsorganisation im Alltag einfacher zu strukturieren:
              Termine, Aufgaben, Dokumente, Notfallkontakte und wichtige
              Hinweise sollen an einem verständlichen Ort zusammenkommen.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#48636B]">
              MyVeliora ersetzt keine medizinische Beratung und stellt keine
              Diagnosen. Der Fokus liegt auf Organisation, Orientierung und
              besserer Abstimmung zwischen Menschen, die Verantwortung teilen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold text-veliora-blue">
              Warum MyVeliora entsteht
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Weil Betreuung im Alltag oft aus vielen kleinen Teilen besteht.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#48636B]">
              Angehörige koordinieren Termine, prüfen Informationen, sprechen
              mit Betreuungspersonen und behalten wichtige Kontakte im Blick.
              MyVeliora soll diese Aufgaben nicht ersetzen, sondern
              verständlicher und besser auffindbar machen.
            </p>
          </div>

          <div className="space-y-3">
            {focusAreas.map((item) => (
              <div
                className="flex gap-3 rounded-lg border border-veliora-line bg-white p-4 text-sm leading-6 text-[#48636B]"
                key={item}
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-veliora-mist text-veliora-green">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-veliora-line bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold text-veliora-green">
              Gründer
            </p>
            <h2 className="mt-2 text-3xl font-bold">Danny Lorenzi</h2>
            <p className="mt-3 text-lg leading-8 text-[#48636B]">
              CEO & Gründer von MyVeliora.
            </p>
          </div>
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-veliora-ink px-5 text-sm font-semibold text-white transition hover:bg-[#17323d]"
            href="/#warteliste"
          >
            Zur Warteliste
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
