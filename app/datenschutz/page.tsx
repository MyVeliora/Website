import type { Metadata } from "next";
import { LegalPageLayout } from "../components/legal-page-layout";

export const metadata: Metadata = {
  title: "Datenschutz | MyVeliora",
  description:
    "Datenschutzhinweise von MyVeliora mit Schweizer und EU-orientierter Struktur."
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      eyebrow="Datenschutz"
      intro="Diese Datenschutzhinweise beschreiben, welche Daten auf der Website verarbeitet werden können. Die Angaben sind Platzhalter und sollten vor der finalen Veröffentlichung rechtlich geprüft werden."
      title="Datenschutzerklärung"
    >
      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Verantwortliche Stelle
        </h2>
        <p className="mt-3">
          Verantwortliche Stelle: [MyVeliora, Danny Lorenzi, Allestrasse 11,
          8590 Romanshorn, Schweiz]. Kontakt-E-Mail:
          [info@myveliora.app].
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Welche Daten gesammelt werden
        </h2>
        <p className="mt-3">
          Je nach Nutzung können Wartelisten-Daten, Kontaktformular-Daten und
          technische Daten verarbeitet werden. Dazu gehören insbesondere
          Vorname, E-Mail-Adresse, gewählte Rolle, freiwillige Nachrichten sowie
          technische Zugriffsdaten wie IP-Adresse, Zeitpunkt des Zugriffs,
          Browsertyp, Geräteinformationen und ähnliche Protokolldaten.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Wartelisten-Daten
        </h2>
        <p className="mt-3">
          Wenn Nutzerinnen und Nutzer das Wartelistenformular absenden,
          verarbeiten wir die angegebenen Daten, um die Anfrage zu bearbeiten
          und über relevante MyVeliora-Updates, Testmöglichkeiten oder
          Rückfragen zu informieren.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Kontaktformular-Daten
        </h2>
        <p className="mt-3">
          Freiwillige Nachrichten werden ausschliesslich zur Bearbeitung der
          jeweiligen Kontaktaufnahme genutzt. Inhalte sollten keine sensiblen
          medizinischen Details enthalten, sofern sie für die Anfrage nicht
          erforderlich sind.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">Technische Daten</h2>
        <p className="mt-3">
          Beim Besuch der Website können technische Daten zur sicheren und
          stabilen Bereitstellung, Fehleranalyse und Missbrauchsprävention
          verarbeitet werden. Diese Daten helfen, die Website zuverlässig
          auszuliefern und technische Probleme zu erkennen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Hosting über Vercel
        </h2>
        <p className="mt-3">
          Die Website kann über Vercel gehostet werden. Dabei können technische
          Zugriffsdaten auf Servern oder Diensten von Vercel verarbeitet
          werden. Es gelten zusätzlich die Datenschutzinformationen und
          technischen Schutzmassnahmen von Vercel.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Formularverarbeitung über Formspree
        </h2>
        <p className="mt-3">
          Formularübermittlungen können über Formspree verarbeitet und per
          E-Mail an [info@myveliora.app] weitergeleitet werden. Formspree
          verarbeitet dabei die im Formular eingegebenen Angaben sowie
          technische Informationen, die für die sichere Formularübermittlung
          erforderlich sind.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Rechte der Nutzerinnen und Nutzer
        </h2>
        <p className="mt-3">
          Nutzerinnen und Nutzer können im Rahmen der anwendbaren Schweizer und
          EU-Datenschutzvorschriften Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung oder Widerspruch verlangen. Diese
          Rechte können je nach Rechtsgrundlage und gesetzlicher Pflicht
          eingeschränkt sein.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-veliora-ink">
          Löschung, Auskunft und Berichtigung
        </h2>
        <p className="mt-3">
          Anfragen zur Löschung, Auskunft oder Berichtigung können an
          [info@myveliora.app] gerichtet werden. Wir bearbeiten entsprechende
          Anfragen nach Massgabe der anwendbaren gesetzlichen Vorschriften.
        </p>
      </section>

      <section className="rounded-md border border-veliora-line bg-veliora-mist p-4">
        <h2 className="text-lg font-bold text-veliora-ink">
          Rechtlicher Hinweis
        </h2>
        <p className="mt-2">
          Diese Seite ist ein strukturierter Platzhalter und sollte vor der
          finalen Veröffentlichung rechtlich geprüft und an die tatsächlichen
          Prozesse von MyVeliora angepasst werden.
        </p>
      </section>
    </LegalPageLayout>
  );
}
