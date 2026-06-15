import type { Metadata } from "next";
import { LegalPageLayout } from "../components/legal-page-layout";

export const metadata: Metadata = {
  title: "Impressum | MyVeliora",
  description: "Impressum und Anbieterkennzeichnung von MyVeliora."
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      eyebrow="Impressum"
      intro="Angaben zum Betreiber der Website. Die Angaben sind Platzhalter und müssen vor Veröffentlichung rechtlich geprüft werden."
      title="Impressum"
    >
      <section>
        <h2 className="text-xl font-bold text-veliora-ink">MyVeliora</h2>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-semibold text-veliora-ink">Betreiber</dt>
            <dd>Danny Lorenzi CEO von MyVeliora</dd>
          </div>
          <div>
            <dt className="font-semibold text-veliora-ink">Adresse</dt>
            <dd>Allestrasse 11, 8590 Romanshorn</dd>
          </div>
          <div>
            <dt className="font-semibold text-veliora-ink">E-Mail</dt>
            <dd>info@myveliora.app</dd>
          </div>
          <div>
            <dt className="font-semibold text-veliora-ink">
              Verantwortlich für den Inhalt
            </dt>
            <dd>Danny Lorenzi</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-md border border-veliora-line bg-veliora-mist p-4">
        <h2 className="text-lg font-bold text-veliora-ink">Hinweis</h2>
        <p className="mt-2">
          Dies ist ein Platzhalter und muss vor Veröffentlichung rechtlich
          geprüft werden.
        </p>
      </section>
    </LegalPageLayout>
  );
}
