import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPageLayout({
  eyebrow,
  title,
  intro,
  children
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F7FBFA] text-veliora-ink">
      <section className="bg-white">
        <SiteHeader />
      </section>
      <section className="border-y border-veliora-line bg-[#F7FBFA] px-6 py-14 lg:px-8 lg:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-bold text-veliora-blue">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#48636B]">{intro}</p>

          <div className="mt-10 rounded-lg border border-veliora-line bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-8 text-base leading-7 text-[#48636B]">
              {children}
            </div>
          </div>

          <Link
            className="mt-8 inline-flex text-sm font-semibold text-veliora-blue transition hover:text-veliora-green"
            href="/"
          >
            Zurück zur Startseite
          </Link>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
