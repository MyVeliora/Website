import Link from "next/link";
import { VelioraLogo } from "./veliora-logo";

const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/haftung", label: "Haftungsausschluss" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/#warteliste", label: "Warteliste" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-veliora-line bg-veliora-ink px-6 py-8 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center">
            <VelioraLogo className="h-9 w-9" decorative />
          </span>
          <div>
            <p className="font-bold">MyVeliora</p>
            <p className="text-sm text-white/64">
              Für die Menschen, die uns wichtig sind.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/64 lg:items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link
                className="transition hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© 2026 MyVeliora</span>
            <span>Ersetzt keine medizinische Beratung.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
