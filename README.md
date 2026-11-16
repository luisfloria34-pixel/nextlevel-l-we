# NextLevel · Website v3

React-Website aus dem Claude-Design-Handoff, mit den anschließend gewünschten Anpassungen.

## Starten und bauen

Node.js 22.12+ oder 24+.

```sh
npm ci
npm run dev
npm run build
```

`dist/` enthält die statische Website. Netlify: Build `npm run build`, Publish `dist`; `netlify.toml` ist vorhanden. Bisher nur lokal, nicht öffentlich veröffentlicht.

## Inhalt und Funktionen

- Animiertes Löwen-Intro: NEXT / LEVEL zunächst groß hinter dem Löwen, dann über dem Kopf. Bereitgestelltes Bild mit Bewegung, kein echtes 3D-Modell.
- Branchenoffenes Angebot für Unternehmen, Vereine und Marken. Fußball, Hotels und Restaurants sind aktuelle Beispiele.
- Neun Fotos in der Galerie, eigene Fotos in den Leistungskarten und Branchenmotiven.
- Vier Videos (Porsche 911 Text Tracking, FC Royal Five, Energie-Erklärvideo, Gastro-Edit), H.264/AAC, optimiert für Web, mit Poster und Wiedergabe auf Klick. Es spielt jeweils nur ein Video gleichzeitig.
- App-Beispiele: fuelradar und meister.; Screenshots lassen sich vollständig öffnen.
- Kontakt: Name und Projekt ausfüllen, Nachricht vorbereiten, dann WhatsApp oder E-Mail öffnen. Kein automatischer Versand. E-Mail-Eingabe optional.
- WhatsApp: +49 172 6918954; E-Mail: floria.luis@icloud.com. Konfiguration in `src/contact.js`.
- DE/EN, mobiles Menü, Escape zum Schließen, Tastaturfokus, reduzierte Bewegung, Europe/Berlin-Uhr.
- Lokale Schriften, WebP-Bilder; keine externe Design-Runtime.

## Inhalte bearbeiten

- `src/content.js`: DE/EN-Texte und Konzept-/Referenzfelder.
- `src/photos.js`: Galeriebilder, Überschriften, Ausschnitte.
- `src/Showcases.js`: Video- und App-Beispiele.
- `src/contact.js`, `src/ContactForm.js`: Kontaktziele, Nachrichtentext, Kontaktablauf.
- `src/App.js`: Animation, Zustände und Branchenbild-Zuordnung.
- `src/View.js`, `src/styles.css`: Layout und Darstellung.

## Noch vor Veröffentlichung ergänzen

Freigegebene Rechtsseiten, bestätigte Referenztexte, reale Kundenstimmen und Ergebnisse statt `[ ]`. Das Hotelmotiv mit Person ist KI-generiert und sichtbar als Konzeptbild gekennzeichnet. Die übrigen Branchenbeschreibungen bleiben ausdrücklich Platzhalter, bis tatsächliche Projektdaten vorliegen. Die echte Hotelzimmeraufnahme ist separat in der Galerie.

Impressum/Datenschutz/AGB sind derzeit Platzhalter. `noindex,nofollow` erst für die vollständig vorbereitete öffentliche Version entfernen.

## Vorschau

`/?part=intro`, `/?part=main`, `/?motion=off`; `/?part=intro&t=3.8` zeigt den anfänglichen Schriftzug, `t=6` die Endposition.
