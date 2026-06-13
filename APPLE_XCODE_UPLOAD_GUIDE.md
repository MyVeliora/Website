# Veliora Xcode Upload Guide

Diese Datei beschreibt den letzten Apple-Schritt für TestFlight und App Store Connect.

## Wichtig

Ein echter App-Store-Upload kann nur auf macOS mit Xcode erstellt werden. Apple verlangt ein signiertes Archiv mit gültigem Apple Developer Team, Bundle Identifier, Signing-Zertifikat und App Store Connect Zugriff.

Diese ZIP ist ein Xcode-startbereites Projektpaket. Die finale `.xcarchive` oder `.ipa` muss anschließend in Xcode gebaut werden.

## Schritte in Xcode

1. `Veliora.xcodeproj` in Xcode öffnen.
2. Target `Veliora` auswählen.
3. Unter `Signing & Capabilities` das Apple Developer Team setzen.
4. Bundle Identifier final prüfen.
5. HealthKit Capability prüfen.
6. StoreKit Produkt-IDs in App Store Connect mit den Platzhaltern abgleichen:
   - `veliora.plus.monthly`
   - `veliora.pro.monthly`
   - `veliora.organization`
7. Menü `Product > Archive` ausführen.
8. Im Organizer `Distribute App` wählen.
9. Für TestFlight `App Store Connect` auswählen und hochladen.

## Vor dem Upload prüfen

- Datenschutzseite final rechtlich prüfen.
- Medizinischen Disclaimer final fachlich und rechtlich prüfen.
- App Privacy Details in App Store Connect ausfüllen.
- Screenshots, Beschreibung, Support-URL und Review Notes ergänzen.
- StoreKit Produkte in App Store Connect aktivieren.

## Status dieses Pakets

- SwiftUI iOS 17+ Projektstruktur vorhanden.
- MVVM-Struktur vorhanden.
- Firebase, StoreKit, HealthKit und KI als Placeholder vorbereitet.
- Paywall, Datenschutz, medizinischer Disclaimer, AGB Placeholder, App Store Checklist und TestFlight Checklist vorhanden.
- Keine automatische Ambulanz-Anwahl.
- Keine Diagnose.
- Keine Therapieempfehlung.
