import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Roadmap | MyVeliora",
  description:
    "Aktueller Stand und geplante Entwicklungsschritte von MyVeliora."
};

const roadmapSections = [
  {
    title: "Aktuell",
    status: "Live",
    description:
      "Die öffentliche Website ist online, die Warteliste ist gestartet und die Feedbackphase läuft.",
    items: [
      "Website online",
      "Warteliste gestartet",
      "Erste Gespräche mit Interessenten",
      "Feedbackphase läuft"
    ]
  },
  {
    title: "Geplant",
    status: "In Planung",
    description:
      "Die ersten Produktbereiche werden für eine Testversion priorisiert und schrittweise vorbereitet.",
    items: [
      "Erste Testversion",
      "Angehörigen-Koordination",
      "Medikamentenübersicht",
      "Arzttermine",
      "Notfallkontakte",
      "Gesundheitsübersicht"
    ]
  },
  {
    title: "Perspektivisch",
    status: "Später",
    description:
      "Weitere Funktionen sind als mögliche Ausbaustufen vorgesehen und werden mit Nutzerfeedback geprüft.",
    items: [
      "Smartwatch-Integration",
      "KI-Zusammenfassungen für Dokumente und Blutwerte"
    ]
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFA] text-veliora-ink">
      <section className="bg-white">
        <SiteHeader />
      </section>

      <section className="border-y border-veliora-line bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold text-veliora-blue">Roadmap</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            MyVeliora wird Schritt für Schritt mit echtem Feedback entwickelt.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#48636B]">
            Die Roadmap zeigt, was bereits live ist und welche Bereiche geplant
            oder perspektivisch vorgesehen sind. Zeitpunkte und Umfang können
            sich ändern, weil MyVeliora bewusst mit Nutzerfeedback aufgebaut
            wird.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-5">
            {roadmapSections.map((section, index) => (
              <RoadmapStep index={index + 1} key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-veliora-line bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold text-veliora-green">
              Feedback willkommen
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Interessen und Bedürfnisse helfen bei der Priorisierung.
            </h2>
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

function RoadmapStep({
  index,
  section
}: {
  index: number;
  section: {
    title: string;
    status: string;
    description: string;
    items: string[];
  };
}) {
  const badgeClass =
    section.status === "Live"
      ? "bg-veliora-mist text-veliora-green"
      : section.status === "In Planung"
        ? "bg-[#EAF6FA] text-veliora-blue"
        : "bg-[#F1F5F4] text-[#48636B]";

  return (
    <article className="grid gap-4 rounded-lg border border-veliora-line bg-white p-5 sm:grid-cols-[72px_1fr] sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-md brand-gradient text-sm font-bold text-white">
        {index}
      </div>
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p className="mt-3 text-base leading-7 text-[#48636B]">
              {section.description}
            </p>
          </div>
          <span
            className={`w-fit rounded-md px-3 py-1 text-xs font-bold ${badgeClass}`}
          >
            {section.status}
          </span>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.items.map((item) => (
            <li className="flex gap-3 text-sm leading-6 text-[#48636B]" key={item}>
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-veliora-mist text-veliora-green">
                <Check aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
