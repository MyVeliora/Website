src="/veliora-icon.png"
src="/veliora-mark.png"
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
import { WaitlistForm } from "./waitlist-form";

const features = [
  {
    title: "Medikamentenerinnerungen",
    description:
      "Einnahmen, Dosierungen und Routinen werden für den Alltag der Familie sichtbar.",
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
      "HealthKit- und Wearable-Daten können perspektivisch in Veliora zusammenlaufen.",
    icon: Watch
  },
  {
    title: "Notfallsystem",
    description:
      "Notfallkontakte, Hinweise und Eskalationswege sind vorbereitet, wenn es darauf ankommt.",
    icon: ShieldAlert
  }
];

const timelineItems = [
  { time: "08:00", label: "Blutdruck messen", detail: "Maria bestätigt" },
  { time: "10:30", label: "Arzttermin", detail: "Praxis Bellevue" },
  { time: "13:00", label: "Medikamente", detail: "2 von 3 erledigt" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FBFA] text-veliora-ink">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            alt=""
            className="h-full w-full object-cover opacity-[0.06] saturate-150"
            fill
            priority
            sizes="100vw"
            src="/veliora-icon.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,251,250,0.96)_0%,rgba(255,255,255,0.88)_48%,rgba(240,248,246,0.92)_100%)]" />
        </div>

        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a className="flex items-center gap-3" href="#top" aria-label="Veliora Start">
            <span className="flex h-10 w-10 items-center justify-center rounded-md brand-gradient">
              <Image
                alt=""
                className="h-6 w-6"
                height={24}
                src="/veliora-mark.png"
                width={24}
              />
            </span>
            <span className="text-lg font-bold">Veliora</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#48636B] md:flex">
            <a className="transition hover:text-veliora-ink" href="#funktionen">
              Funktionen
            </a>
            <a className="transition hover:text-veliora-ink" href="#ueber">
              Über Veliora
            </a>
            <a className="transition hover:text-veliora-ink" href="#warteliste">
              Warteliste
            </a>
          </nav>
          <a
            className="hidden h-10 items-center justify-center rounded-md bg-veliora-ink px-4 text-sm font-semibold text-white transition hover:bg-[#17323d] sm:inline-flex"
            href="#warteliste"
          >
            Zur Warteliste
          </a>
        </header>

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
              einem Ort.
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
            <p className="text-sm font-bold text-veliora-green">Über Veliora</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Gebaut für die Menschen, die Verantwortung mittragen.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#48636B]">
            <p>
              Veliora entsteht als Schweizer Gesundheitsplattform für Familien,
              Seniorinnen und Senioren. Die App bringt medizinische Routinen,
              Termine, Dokumente und Notfallinformationen in eine ruhige,
              verlässliche Zentrale.
            </p>
            <p>
              Der Fokus liegt auf Orientierung statt Überforderung: klare
              Aufgaben, sensible Datenhaltung und ein Design, das auch in
              stressigen Momenten leicht lesbar bleibt.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              <ValuePoint label="Schweiz" value="Startpunkt" />
              <ValuePoint label="Familien" value="Im Zentrum" />
              <ValuePoint label="Gesundheit" value="Mit Verantwortung" />
            </div>
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

      <footer className="border-t border-veliora-line bg-veliora-ink px-6 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
              <Image
                alt=""
                className="h-5 w-5"
                height={20}
                src="/veliora-mark.png"
                width={20}
              />
            </span>
            <div>
              <p className="font-bold">Veliora</p>
              <p className="text-sm text-white/64">
                Für die Menschen, die uns wichtig sind.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/64">
            <span>© 2026 Veliora</span>
            <a className="transition hover:text-white" href="#warteliste">
              Kontakt
            </a>
            <span>Dies ersetzt keine medizinische Beratung.</span>
          </div>
        </div>
      </footer>
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
