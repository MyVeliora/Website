import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veliora | Gesundheitszentrale für Angehörige und Senioren",
  description:
    "Veliora bündelt Medikamente, Arzttermine, Gesundheitsdaten und Notfallkontakte für Familien und Senioren an einem Ort.",
  icons: {
    icon: "/veliora-mark.png",
    apple: "/veliora-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
