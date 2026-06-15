import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-H454L2BYCE";
const isProduction = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  title: "MyVeliora | Gesundheitszentrale für Angehörige und Senioren",
  description:
    "MyVeliora unterstützt Familien und Senioren dabei, Medikamente, Arzttermine, Gesundheitsdaten und Notfallkontakte an einem Ort zu strukturieren.",
  icons: {
    icon: "/veliora-logo.svg",
    apple: "/veliora-logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
        {isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}

                gtag('consent', 'default', {
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  analytics_storage: 'denied',
                  functionality_storage: 'granted',
                  security_storage: 'granted',
                  wait_for_update: 500
                });

                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  anonymize_ip: true,
                  send_page_view: true
                });

                window.myVelioraAnalyticsConsent = function(granted) {
                  gtag('consent', 'update', {
                    analytics_storage: granted ? 'granted' : 'denied',
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied'
                  });
                };
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
