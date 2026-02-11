
# PageSpeed-Optimierung

## Zusammenfassung der Probleme und Loesungen

Basierend auf dem Lighthouse-Bericht gibt es vier Hauptprobleme, die wir direkt beheben koennen:

---

## 1. Logo-Bild optimieren (groesste Einsparung: ~543 KiB)

**Problem:** Das Logo `biohack-logo.png` ist 1024x1024 Pixel gross (543 KiB), wird aber nur als 40x40px angezeigt.

**Loesung:** Das Bild mit `width` und `height` Attributen versehen und die Datei durch eine kleinere Version ersetzen. Da wir die Originaldatei nicht direkt komprimieren koennen, setzen wir zumindest explizite Dimensionen und fuegen `loading="eager"` hinzu.

---

## 2. Hero-Bild LCP optimieren (verbessert LCP um mehrere Sekunden)

**Problem:** Dem Hero-Bild fehlt `fetchpriority="high"` und explizite Dimensionen. Es ist das LCP-Element.

**Loesung:**
- `fetchpriority="high"` zum Hero-Bild hinzufuegen
- `width` und `height` Attribute setzen
- `<link rel="preload">` fuer das Hero-Bild in `index.html` hinzufuegen

---

## 3. Google Fonts render-blocking entfernen (spart ~750ms)

**Problem:** Google Fonts CSS wird ueber `@import` in `index.css` geladen und blockiert das Rendering.

**Loesung:**
- `@import` aus `index.css` entfernen
- Stattdessen `<link rel="preconnect">` und `<link rel="stylesheet">` mit `display=swap` in `index.html` verwenden
- Font-Display Swap ist bereits aktiv, aber der Import blockiert trotzdem

---

## 4. Quentn-Script lazy laden (spart ~370 KiB ungenutztes JS + 450ms TBT)

**Problem:** Das Quentn-Formular-Script (611 KiB) wird auf jeder Seite geladen, obwohl es nur auf den Ergebnis-Seiten benoetigt wird. Es verursacht 449ms Blocking Time.

**Loesung:**
- Das `<script>` Tag aus `index.html` entfernen
- Das Script nur dann dynamisch laden, wenn es tatsaechlich gebraucht wird (auf den Result-Seiten)
- Dafuer einen kleinen Helper erstellen

---

## 5. Preconnect fuer Drittanbieter hinzufuegen

**Problem:** Keine Vorverbindungen zu externen Domaenen.

**Loesung:** `<link rel="preconnect">` fuer `fonts.googleapis.com`, `fonts.gstatic.com` und `googletagmanager.com` in `index.html` hinzufuegen.

---

## Technische Details

### Datei-Aenderungen:

**`index.html`:**
- Preconnect-Links fuer Google Fonts und GTM hinzufuegen
- Google Fonts `<link>` Tags direkt im `<head>` statt via CSS-Import
- Quentn-Script `<script defer>` entfernen
- Preload fuer Hero-Bild hinzufuegen

**`src/index.css`:**
- `@import url('https://fonts.googleapis.com/css2?...')` Zeile entfernen (wird ueber HTML geladen)

**`src/components/landing/HeroSection.tsx`:**
- `fetchpriority="high"`, `width`, `height` zum Hero-Bild hinzufuegen

**`src/components/Header.tsx`:**
- `width`, `height`, `loading="eager"` zum Logo hinzufuegen

**`src/hooks/useLoadQuentnScript.ts`** (neue Datei):
- Helper-Hook, der das Quentn-Script nur bei Bedarf dynamisch laedt

**`src/components/quiz/QuentnEmailForm.tsx`:**
- Den neuen Hook `useLoadQuentnScript()` aufrufen, damit das Script nur geladen wird, wenn das Formular tatsaechlich angezeigt wird

### Erwartete Verbesserungen:
- **LCP:** von 7,3s auf ca. 3-4s (durch Font-Fix + Hero-Preload + Quentn-Entfernung)
- **TBT:** von 440ms auf ca. 50-80ms (durch Quentn lazy loading)
- **FCP:** von 2,6s auf ca. 1,5-2s (durch Font render-blocking Fix)
- **Gesamtscore:** von 61 auf geschaetzt 80-90+
