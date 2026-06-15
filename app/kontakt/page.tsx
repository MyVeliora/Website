import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { LegalPageLayout } from "../components/legal-page-layout";

export const metadata: Metadata = {
  title: "Kontakt | MyVeliora",
  description: "Kontakt zu MyVeliora."
};

export default function KontaktPage() {
  return (
    <LegalPageLayout
      eyebrow="Kontakt"
      intro="Du erreichst MyVeliora per E-Mail oder über die Warteliste."
      title="Kontakt"
    >
      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          MyVeliora kontaktieren
        </h2>
        <p className="mt-3">
          Für Fragen, Partnerschaften oder Hinweise zur Warteliste kannst du uns
          direkt schreiben.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md brand-gradient px-5 text-sm font-semibold text-white transition hover:brightness-95"
            href="mailto:info@myveliora.ch"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            info@myveliora.ch
          </a>
          <Link
            className="inline-flex h-11 items-center justify-center rounded-md border border-veliora-line bg-white px-5 text-sm font-semibold text-veliora-ink transition hover:border-veliora-blue/40"
            href="/#warteliste"
          >
            Zur Warteliste
          </Link>
        </div>
      </section>
    </LegalPageLayout>
  );
}
