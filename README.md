# Veliora

Veliora ist ein SwiftUI-iOS-Projekt als stabiles technisches Fundament fuer eine medizinische Begleit-App.

Zusätzlich enthält das Repository eine moderne Next.js-Landingpage für Veliora, die direkt auf Vercel deploybar ist.

## Stack

- SwiftUI
- iOS 17+
- MVVM
- Firebase vorbereitet
- StoreKit vorbereitet
- HealthKit vorbereitet

## Web Landingpage

Die Landingpage liegt auf Root-Ebene und nutzt:

- Next.js App Router
- React
- Tailwind CSS
- Lucide Icons
- Veliora-Branding mit Verlauf von `#1E8CB0` zu `#349569`

Lokale Entwicklung:

```bash
npm install
npm run dev
```

Produktionsbuild:

```bash
npm run build
npm run start
```

Vercel erkennt das Projekt über `package.json` automatisch als Next.js-App. Für ein Deployment muss dieses Repository nur mit Vercel verbunden werden.

## Struktur

```text
Veliora/
  App/
    Navigation/
  DesignSystem/
  Models/
  Services/
    AI/
    Firebase/
    HealthKit/
    StoreKit/
    Storage/
  ViewModels/
  Views/
    AI/
    Auth/
    Calendar/
    Documents/
    Health/
    Medications/
    More/
    Overview/
    Profile/
    SeniorProfile/
    CareCircle/
    Emergency/
    Legal/
    Release/
    Store/
    Tasks/
    Visits/
    Shared/
```

## App Shell

Die App startet in `VelioraApp` und zeigt eine `TabView` mit sechs Tabs:

- Übersicht
- Medikamente
- Kalender
- Gesundheit
- Dokumente
- Mehr

Jeder Tab laeuft in einem eigenen `NavigationStack`. Die Navigation ist ueber `RouterPath`, `TabRouter`, `AppRoute` und `AppSheet` vorbereitet.

## Branding

Veliora nutzt ein blaugruenes Branding mit Verlauf von `#1E8CB0` zu `#349569`.

Vorbereitet sind:

- App Icon mit Veliora-Bildmarke
- nativer `LaunchScreen.storyboard`
- SwiftUI Splash Screen
- Wortmarke `VELIORA`
- Slogan: "Für die Menschen, die uns wichtig sind."

## Integrationen

Firebase ist ueber `FirebaseServicing` und `FirebaseBootstrapService` vorbereitet. Das Firebase SDK ist noch nicht eingebunden, damit das Fundament ohne externe Abhaengigkeiten kompiliert.

Firebase Auth ist ueber `FirebaseAuthServicing` und `FirebaseAuthService` vorbereitet. Bis Firebase verbunden ist, arbeitet der Service als Mock-Login und liefert ein lokales `UserProfile`.

StoreKit ist ueber `PurchaseServicing` und `StoreKitPurchaseService` vorbereitet. Die Paywall nutzt lokale Abo-Plaene und StoreKit-2-Placeholder fuer Kaufen und Wiederherstellen.

HealthKit ist ueber `HealthKitService`, HealthKit Entitlements und HealthKit Privacy Strings vorbereitet.

KI-Funktionen sind ueber `AIServicing` und `MockAIService` modular vorbereitet. Der Service liefert aktuell nur lokale Mockantworten und ist fuer eine spaetere sichere Anbieter-Anbindung austauschbar.

## Build

1. `Veliora.xcodeproj` in Xcode oeffnen.
2. Scheme `Veliora` auswaehlen.
3. Signing Team im Target setzen.
4. Auf einem iOS-17+-Simulator oder Geraet starten.

## Aktueller Scope

Dieses Fundament enthaelt bewusst noch keine komplexen Features, keine echte Persistenz und keine produktiven Auth-, Kauf- oder HealthKit-Flows.

Die Auth-Oberflaeche enthaelt Login, Registrierung, Passwort vergessen, Rollenwahl und Nutzerprofil als kompilierbare Platzhalter fuer den spaeteren Firebase-Flow.

Care-Circle-Grundlagen sind als Mock-Schicht vorbereitet:

- Senior-Profil erstellen
- Care Circle erstellen
- Angehörige anzeigen
- Rollen und Rechte anzeigen
- Einladung per E-Mail als Platzhalter
- Notfallkontakte lokal speichern

Mockdaten liegen in `VelioraMockData` und ersetzen noch keine Persistenz.

Aufgaben und Besuchsprotokolle sind als Mock-Schicht vorbereitet:

- Aufgaben erstellen
- Aufgaben Personen aus dem Care Circle zuweisen
- Status offen, erledigt und ueberfaellig anzeigen
- Besuchsprotokoll mit Stimmung, Essen/Trinken, Schmerzlevel, Mobilitaet, Medikamentenstatus, Notizen, Datum und Ersteller speichern
- Verlauf der Besuchsprotokolle anzeigen

Kalender und Dokumente sind als Mock-Schicht vorbereitet:

- Kalenderansicht mit Terminliste
- Termine erstellen
- Terminarten Arzt, Therapie, Fitness/SeniorCircle, Medikamentenkontrolle und Sonstiges
- Verantwortliche Person aus dem Care Circle zuweisen
- Dokumentenbereich mit Upload-Platzhalter
- Dokumentarten Arztbericht, Laborbericht, Medikamentenplan, Versicherung, Patientenverfuegung und Sonstiges
- Dokument-Tags
- Suchfunktion als lokaler Platzhalter

Notfall-System ist als sicherer MVP-Flow vorbereitet:

- Großer Notfallbutton
- Countdown Screen
- Angehörige benachrichtigen als Platzhalter
- Notfallkontakte anzeigen
- Lauter Signalton als Platzhalter
- Standort als Platzhalter
- Manuelle Anrufoption nach gemeldeter fehlender Reaktion

Im MVP erfolgt keine automatische Ambulanz-Anwahl und kein automatischer Notruf.

HealthKit-Struktur ist als sichere Dashboard-Schicht vorbereitet:

- HealthKit Permission Screen
- Puls lesen
- Ruhepuls lesen
- Schritte lesen
- Schlafdauer als Placeholder
- Gesundheitsdashboard
- Pulswarnungen mit hohem und niedrigem Grenzwert
- Warnverlauf

Pulswarnungen verwenden den sicheren Hinweis: "Ungewöhnlicher Puls erkannt. Bitte prüfen. Bei akuter Gefahr Notruf kontaktieren." Es erfolgt keine Diagnose und keine automatische Ambulanz-Anwahl.

KI-Features sind als sichere Mock-Schicht vorbereitet:

- AIService mit Mockantworten
- Blutwertanalyse Placeholder fuer Vitamin D, Ferritin, CRP, HbA1c, Cholesterin, HDL, LDL, Triglyceride, Leberwerte, Nierenwerte, Hämoglobin und TSH
- Arztbericht-Zusammenfassung
- Dokumentenanalyse
- Medikamenten-Wechselwirkungscheck
- Gesundheitsassistent Chat

Alle KI-Ergebnisse zeigen den Hinweis: "Dies ersetzt keine medizinische Beratung." Die KI-Schicht liefert keine Diagnose, keine Therapieempfehlung und keine automatischen medizinischen Entscheidungen.

TestFlight- und App-Store-Vorbereitung ist als kompilierbare Struktur vorbereitet:

- StoreKit 2 Placeholder
- Paywall mit Free, Plus, Pro und Organisation
- Datenschutzseite
- Medizinischer Disclaimer
- AGB Placeholder
- App Store Checklist
- TestFlight Checklist

Abo-Plaene:

- Free: 0 CHF
- Plus: 9.90 CHF/Monat
- Pro: 19.90 CHF/Monat
- Organisation: Preis auf Anfrage

Plus enthaelt unbegrenzte Angehoerige, Termine, Dokumente, Besuchsprotokolle, Medikamentenerinnerungen und Basic Health Dashboard.

Pro enthaelt KI-Zusammenfassungen, Blutwertanalyse, Medikamentencheck, Smartwatch-Warnungen und PDF-Reports.

Organisation enthaelt Trainer/Pflegekraft Dashboard, mehrere Senioren, Fortschrittsprotokolle und Teamrollen.

Vorbereitete Rollen:

- Angehöriger
- Senior
- Trainer
- Pflegekraft
- Admin
