import Link from "next/link";
import { VelioraLogo } from "./veliora-logo";

export function SiteHeader() {
  return (
    <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
      <Link className="flex items-center gap-3" href="/" aria-label="MyVeliora Start">
        <span className="flex h-10 w-10 items-center justify-center">
          <VelioraLogo className="h-10 w-10" decorative />
        </span>
        <span className="text-lg font-bold">MyVeliora</span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium text-[#48636B] md:flex">
        <Link className="transition hover:text-veliora-ink" href="/#funktionen">
          Funktionen
        </Link>
        <Link className="transition hover:text-veliora-ink" href="/#ueber">
          Über Veliora
        </Link>
        <Link className="transition hover:text-veliora-ink" href="/#warteliste">
          Warteliste
        </Link>
        <Link className="transition hover:text-veliora-ink" href="/kontakt">
          Kontakt
        </Link>
      </nav>
      <Link
        className="hidden h-10 items-center justify-center rounded-md bg-veliora-ink px-4 text-sm font-semibold text-white transition hover:bg-[#17323d] sm:inline-flex"
        href="/#warteliste"
      >
        Zur Warteliste
      </Link>
    </header>
  );
}
