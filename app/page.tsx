import {
  Activity,
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  HeartPulse,
  LockKeyhole,
  Pill,
  ShieldAlert,
  UsersRound,
  Watch
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { VelioraLogo } from "./components/veliora-logo";
import { WaitlistForm } from "./waitlist-form";

const features = [
  {
    title: "Medikamentenerinnerungen",
    description:
      "Erinnerungen können helfen, Einnahmen, Dosierungen und Routinen im Alltag sichtbar zu halten.",
    icon: Pill
  },
  {
    title: "Angehörigenkoordination",
    description:
      "Aufgaben, Termine und Verantwortlichkeiten bleiben für alle Beteiligten klar.",
    icon: UsersRound
  },
  {
    title: "Gesundheitsübersicht",
    description:
      "Wichtige Gesundheitsdaten, Dokumente und Verlaufspunkte sind schnell greifbar.",
    icon: HeartPulse
  },
  {
    title: "Smartwatch Integration",
    description:
      "HealthKit- und Wearable-Daten können perspektivisch zur Orientierung zusammenlaufen.",
    icon: Watch
  },
  {
    title: "Notfallsystem",
    description:
      "Wichtige Kontakte und Hinweise sind vorbereitet, wenn schnelle Orientierung gebraucht wird.",
    icon: ShieldAlert
  }
];

const timelineItems = [
  { time: "08:00", label: "Blutdruck messen", detail: "Maria bestätigt" },
  { time: "10:30", label: "Arzttermin", detail: "Praxis Bellevue" },
  { time: "13:00", label: "Medikamente", detail: "2 von 3 erledigt" }
];

const aboutPillars = [
  {
    label: "Senioren",
    value: "Alltag übersichtlich halten"
  },
  {
    label: "Angehörige",
    value: "Aufgaben besser koordinieren"
  },
  {
    label: "Betreuungspersonen",
    value: "Informationen schneller finden"
  }
];

const roadmapSections = [
  {
    title: "Aktuell",
    status: "Live",
    description: "Die Grundlage ist online und die erste Feedbackphase läuft.",
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
      "Die ersten Produktbereiche werden priorisiert und für Tests vorbereitet.",
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
      "Weitere Integrationen und Auswertungen sind als mögliche Ausbaustufen vorgesehen.",
    items: [
      "Smartwatch-Integration",
      "KI-Zusammenfassungen für Dokumente",
      "KI-Zusammenfassungen für Blutwerte"
    ]
  }
];

const faqs = [
  {
    question: "Was ist MyVeliora?",
    answer:
      "MyVeliora ist ein Schweizer HealthTech Projekt, das Familien helfen soll, Gesundheitsorganisation, Termine, Dokumente und Kontakte an einem Ort zu strukturieren."
  },
  {
    question: "Für wen ist MyVeliora gedacht?",
    answer:
      "MyVeliora richtet sich an Seniorinnen und Senioren, Angehörige sowie Betreuungspersonen, die im Alltag mehr Übersicht und Abstimmung brauchen."
  },
  {
    question: "Wann erscheint die App?",
    answer:
      "Die App befindet sich in Vorbereitung. Über die Warteliste informieren wir Interessierte, sobald erste Testmöglichkeiten verfügbar sind."
  },
  {
    question: "Was kostet MyVeliora?",
    answer:
      "Die Preisstruktur ist noch in Planung. Ziel ist ein verständliches Modell, das zu Familien und Betreuungssituationen passt."
  },
  {
    question: "Welche Daten werden gespeichert?",
    answer:
      "Auf der Website werden aktuell vor allem Wartelisten- und technische Daten verarbeitet. Details stehen in der Datenschutzerklärung."
  },
  {
    question: "Ersetzt MyVeliora medizinische Beratung?",
    answer:
      "Nein. MyVeliora dient zur Organisation und Orientierung und ersetzt keine Beratung durch Ärztinnen, Ärzte, Apotheken oder Notfalldienste."
  },
  {
    question: "Kann ich Angehörige einladen?",
    answer:
      "Angehörigen-Koordination ist geplant. Ziel ist, Aufgaben und wichtige Informationen später einfacher mit berechtigten Personen teilen zu können."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FBFA] text-veliora-ink">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <VelioraLogo
            className="absolute -right-24 top-16 h-[520px] w-[520px] opacity-[0.045] sm:-right-10 lg:right-20"
            decorative
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,251,250,0.96)_0%,rgba(255,255,255,0.88)_48%,rgba(240,248,246,0.92)_100%)]" />
        </div>

        <SiteHeader />

        <div
          className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-14 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-16 lg:pt-12"
          id="top"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-veliora-line bg-white/78 px-3 py-2 text-sm font-semibold text-[#2B6D66] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-veliora-green" />
              Schweizer HealthTech Startup
            </div>

            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] text-veliora-ink sm:text-5xl lg:text-6xl">
              Die Gesundheitszentrale für Angehörige und Senioren
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#48636B] sm:text-xl">
              Medikamente, Arzttermine, Gesundheitsdaten und Notfallkontakte an
              einem Ort. Zur Orientierung, ohne medizinische Beratung zu
              ersetzen.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md brand-gradient px-6 text-sm font-semibold text-white shadow-lg shadow-veliora-blue/20 transition hover:brightness-95"
                href="#warteliste"
              >
                Zur Warteliste
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md border border-veliora-line bg-white px-6 text-sm font-semibold text-veliora-ink transition hover:border-veliora-blue/40"
                href="#funktionen"
              >
                Funktionen ansehen
              </a>
            </div>

            <div className="mt-10 grid gap-4 border-t border-veliora-line pt-6 sm:grid-cols-3">
              <TrustItem icon={LockKeyhole} label="Datenschutz bewusst" />
              <TrustItem icon={UsersRound} label="Familien koordiniert" />
              <TrustItem icon={Activity} label="Gesundheit im Blick" />
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroConsole />
          </div>
        </div>
      </section>

      <section
        className="border-y border-veliora-line bg-white py-16 sm:py-20"
        id="funktionen"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-veliora-blue">Funktionen</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Alles, was Angehörige im Pflegealltag entlastet.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="rounded-lg border border-veliora-line bg-[#FBFEFD] p-5 transition hover:-translate-y-1 hover:border-veliora-blue/40 hover:shadow-lg"
                  key={feature.title}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-veliora-mist text-veliora-blue">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5D747B]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBFA] py-16 sm:py-20" id="ueber">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold text-veliora-green">
              Über MyVeliora
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              MyVeliora entsteht für Familien, die Verantwortung teilen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#48636B]">
              MyVeliora entsteht, um Familien mehr Übersicht, Sicherheit und
              Entlastung im Alltag zu geben.
            </p>
            <Link
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md border border-veliora-line bg-white px-5 text-sm font-semibold text-veliora-ink transition hover:border-veliora-blue/40"
              href="/ueber-uns"
            >
              Mehr über MyVeliora
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#48636B]">
            <p>
              MyVeliora ist als Schweizer HealthTech Projekt für Seniorinnen
              und Senioren, Angehörige und Betreuungspersonen gedacht. Es soll
              helfen, Termine, Aufgaben, Dokumente und wichtige Kontakte
              verständlich zu ordnen.
            </p>
            <p>
              Der Fokus liegt auf Alltagstauglichkeit: weniger Suchen, klarere
              Zuständigkeiten und eine ruhige Übersicht, ohne medizinische
              Beratung zu ersetzen.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {aboutPillars.map((pillar) => (
                <ValuePoint
                  key={pillar.label}
                  label={pillar.label}
                  value={pillar.value}
                />
              ))}
            </div>

            <div className="rounded-lg border border-veliora-line bg-white p-5 text-base leading-7 text-[#48636B]">
              <p className="font-semibold text-veliora-ink">
                Gründer: Danny Lorenzi, CEO & Gründer
              </p>
              <p className="mt-2">
                MyVeliora verbindet Startup-Denken mit einem verantwortungsvollen
                Blick auf Gesundheit, Familie und Betreuung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-veliora-line bg-white py-16 sm:py-20"
        id="roadmap"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-veliora-blue">Roadmap</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Was schon steht und was als Nächstes geplant ist.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#48636B]">
                Die Roadmap zeigt den aktuellen Stand und geplante Ausbaustufen.
                Funktionen werden schrittweise geprüft, priorisiert und
                weiterentwickelt.
              </p>
            </div>
            <Link
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-veliora-ink px-5 text-sm font-semibold text-white transition hover:bg-[#17323d]"
              href="/roadmap"
            >
              Roadmap ansehen
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {roadmapSections.map((section) => (
              <RoadmapColumn key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7FBFA] py-16 sm:py-20" id="faq">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-veliora-green">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Häufige Fragen zu MyVeliora.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <FAQItem
                answer={faq.answer}
                key={faq.question}
                question={faq.question}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-white py-16 sm:py-20"
        id="warteliste"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-veliora-line" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div>
            <p className="text-sm font-bold text-veliora-blue">Warteliste</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Frühen Zugang sichern und Veliora mitprägen.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#48636B]">
              Trag dich ein, wenn du Veliora für deine Familie, eine betreute
              Person oder dein Gesundheitsnetzwerk testen möchtest.
            </p>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-veliora-ink sm:grid-cols-2">
              <ChecklistItem text="Einladung zur Beta" />
              <ChecklistItem text="Produktupdates aus erster Hand" />
              <ChecklistItem text="Kein Spam" />
              <ChecklistItem text="Jederzeit abmeldbar" />
            </div>
          </div>

          <WaitlistForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function HeroConsole() {
  return (
    <div className="relative">
      <div className="rounded-lg border border-white/80 bg-white shadow-premium">
        <div className="flex items-center justify-between border-b border-veliora-line px-5 py-4">
          <div>
            <p className="text-sm font-bold">Gesundheitsübersicht</p>
            <p className="text-xs text-[#6A7F86]">Seniorenprofil: Erika M.</p>
          </div>
          <span className="rounded-md bg-veliora-mist px-3 py-1 text-xs font-bold text-veliora-green">
            Stabil
          </span>
        </div>

        <div className="grid md:grid-cols-[0.86fr_1.14fr]">
          <div className="border-b border-veliora-line p-5 md:border-b-0 md:border-r">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md brand-gradient text-white">
                <HeartPulse aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm text-[#6A7F86]">Heute erledigt</p>
                <p className="text-3xl font-bold">86%</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <MetricRow label="Medikamente" value="2/3" />
              <MetricRow label="Termine" value="1" />
              <MetricRow label="Kontakte" value="4 aktiv" />
            </div>
          </div>

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold">Nächste Punkte</p>
              <CalendarDays aria-hidden="true" className="h-4 w-4 text-veliora-blue" />
            </div>
            <div className="space-y-0 divide-y divide-veliora-line">
              {timelineItems.map((item) => (
                <div className="grid grid-cols-[56px_1fr] gap-3 py-3" key={item.label}>
                  <span className="text-sm font-bold text-veliora-blue">{item.time}</span>
                  <span>
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className="block text-xs text-[#6A7F86]">{item.detail}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-veliora-line px-5 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#FFF7E8] text-[#A56411]">
            <Bell aria-hidden="true" className="h-4 w-4" />
          </span>
          <p className="text-sm text-[#48636B]">
            Notfallkontakte und Aufgaben sind für den Tag synchronisiert.
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-veliora-line pb-3 last:border-b-0">
      <span className="text-sm text-[#5D747B]">{label}</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
}

function TrustItem({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-semibold text-[#48636B]">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-veliora-blue shadow-sm">
        <Icon aria-hidden="true" className="h-4 w-4" />
      </span>
      <span>{label}</span>
    </div>
  );
}

function ValuePoint({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-veliora-green pl-4">
      <p className="text-sm font-semibold text-[#6A7F86]">{label}</p>
      <p className="mt-1 text-base font-bold text-veliora-ink">{value}</p>
    </div>
  );
}

function RoadmapColumn({
  section
}: {
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
    <article className="rounded-lg border border-veliora-line bg-[#FBFEFD] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{section.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#48636B]">
            {section.description}
          </p>
        </div>
        <span
          className={`shrink-0 rounded-md px-3 py-1 text-xs font-bold ${badgeClass}`}
        >
          {section.status}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {section.items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-[#48636B]" key={item}>
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-veliora-mist text-veliora-green">
              <Check aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="rounded-lg border border-veliora-line bg-white p-5">
      <h3 className="text-base font-bold text-veliora-ink">{question}</h3>
      <p className="mt-3 text-sm leading-6 text-[#48636B]">{answer}</p>
    </article>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-veliora-mist text-veliora-green">
        <Check aria-hidden="true" className="h-4 w-4" />
      </span>
      <span>{text}</span>
    </div>
  );
}
