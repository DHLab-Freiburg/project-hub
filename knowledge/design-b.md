# AI Coding Literacy — Forschungsdaten im Museum

## Designdokument

Digital Humanities Craft OG | Stand Februar 2026

---

## 1. Ausgangspunkt und Konzept

Das Projekt „AI Coding Literacy — Forschungsdaten im Museum" vermittelt den Transformationsprozess von physischen Museumsobjekten zu maschinenlesbaren Forschungsdaten. Das Interface dient als Lehr- und Demonstrationswerkzeug, das zeigt, wie KI-gestützte Datenextraktion im kulturellen Erbe funktioniert.

Die zentrale Designidee ist die **visuelle Schichtung** dreier Wissensrepräsentationen, die im musealen Alltag aufeinandertreffen: das physische Objekt, die handschriftliche Archivkarte und der strukturierte Datensatz. Diese drei Schichten existieren nicht nacheinander, sondern überlagern sich — das Interface macht diese Gleichzeitigkeit sichtbar und navigierbar.

Das Projekt richtet sich an Forschende, Museumsmitarbeitende und Studierende, die ein intuitives Verständnis dafür entwickeln sollen, was bei der Digitalisierung analoger Sammlungsdaten geschieht und welche Entscheidungen dabei getroffen werden.


## 2. Designgenese

Das visuelle Konzept entstand in einem mehrstufigen *Promptotyping*-Prozess zwischen Text- und Bildmodellen.

### 2.1 Ausgangsprompt

Ein strukturierter *Image-Prompt* definierte die visuelle Identität über sechs Dimensionen:

- **Scene Composition.** Ein aufgeräumter Arbeitsplatz, leicht erhöhter Blickwinkel. Laptop mit lesbarem Code neben einem physischen Museumsobjekt. Die Spannung zwischen digitalem Bildschirm und materiellem Artefakt bildet das visuelle Zentrum.
- **Color Palette.** Vorwiegend helle, warme Töne. Weiches Cremeweiß bis warmes Grau als Grundton. Terrakotta und gedämpftes Stahlblau als Akzentfarben. Keine Neonfarben, keine elektrischen Töne, keine *Dark-Mode*-Ästhetik.
- **Typography Element.** Der Titel „AI Coding Literacy" als integrierter typografischer Bestandteil der Komposition, nicht als nachträgliche Beschriftung.
- **Lighting and Mood.** Natürliches Licht von links, weiche Schatten. Forschungsbibliothek, nicht Serverraum. Morgenliche Atmosphäre eines Restaurierungslabors.
- **Style Reference.** Editorial-Fotografie trifft Informationsdesign. Monocle, Airbnb Design Blog, ETH Zürich Research Communications. Hoher Produktionswert, aber zurückhaltend.
- **Ausschlüsse.** Keine dunklen Hintergründe, kein Neon-Glow, keine schwebenden UI-Mockups, keine holografischen Elemente.

### 2.2 Generiertes Ergebnis

Das resultierende Bild (Gemini) übersetzte den Prompt in eine Collage-Komposition, die über den ursprünglichen Entwurf hinausging. Statt der inszenierten Schreibtischszene entstand eine geschichtete Darstellung, die handschriftliche Archivkarten, gealterte Papiere, eine Bleistiftzeichnung einer Vase und eine strukturierte Datentabelle visuell verschränkt. Das Bild zeigte den Transformationsprozess selbst als ästhetisches Thema.

Entscheidende Qualitäten des Bildes, die als Designprinzipien übernommen wurden:

1. **Materialität als Informationsträger.** Papiertextur, Vergilbung, handschriftliche Tinte transportieren Bedeutung über ihren visuellen Charakter, nicht nur über den Textinhalt.
2. **Datenqualität als visuelles Signal.** Das Bild markierte „Uncertain attribution" mit einem blauen Highlight-Block — ein visuelles Muster, das direkt in das Interface übernommen wurde.
3. **Typografische Vielstimmigkeit.** Handschrift, Monospace, Serifenschrift und Drucktype koexistieren in einer Komposition und repräsentieren jeweils unterschiedliche Wissensordnungen.
4. **Collage statt Clean UI.** Die bewusste Überlagerung und Unordnung der Archivmaterialien steht im produktiven Kontrast zur Ordnung der Datentabelle.


## 3. Designsystem

### 3.1 Farbpalette

Die Palette leitet sich aus zwei Quelldomänen ab: dem warmen Spektrum gealterten Papiers und den kühlen Tönen digitaler Datenverarbeitung.

| Token | Hex | Verwendung |
|---|---|---|
| `--bg` | #F5F0EA | Seitenhintergrund |
| `--bg-warm` | #EDE5D8 | Karten, warme Flächen |
| `--aged` | #D4C4A8 | Archivkarten-Ästhetik, Alterungsgradient |
| `--aged-deep` | #B8A888 | Tiefere Papiertöne |
| `--terracotta` | #C4725A | Primärakzent, aktive Elemente, Keramikbezug |
| `--terracotta-light` | #D4927A | Sekundärakzent, Hover-Zustände |
| `--blue` | #7A9BB5 | Datenqualitätssignal, strukturierte Daten |
| `--blue-light` | #D4E4EE | Unsicherheitsmarkierung, *Highlight*-Flächen |
| `--dark` | #2C2418 | Primärtext |
| `--dark-mid` | #5A4E3E | Sekundärtext |
| `--muted` | #8B7E6E | Labels, Metainformation |
| `--white` | #FDFBF8 | Kartenflächen, nicht reinweiß |

Die Terrakotta-Farbe referenziert gleichzeitig Keramik als Sammlungsmaterial und die warme Tonalität des Editorialdesigns. Das gedämpfte Blau funktioniert ausschließlich als Datenqualitätssignal und ist dem Konzept „Unsicherheit" zugeordnet.

### 3.2 Typografie

Vier Schriftfamilien repräsentieren vier Wissensordnungen:

| Schriftart | Rolle | Referenz |
|---|---|---|
| Playfair Display | Titel, Überschriften | Editorialdesign, gedruckte Kataloge |
| Caveat | Archivkarten, handschriftliche Elemente | Handschriftliche Inventarisierung |
| JetBrains Mono | Metadaten, IDs, Labels | Maschinenlesbare Daten, Code |
| DM Sans | Fließtext, Beschreibungen | Zeitgenössische Lesbarkeit |

Diese typografische Schichtung bildet den Kern des visuellen Konzepts. Wo Caveat erscheint, befinden wir uns in der Welt der analogen Erfassung. Wo JetBrains Mono steht, sind die Daten bereits strukturiert. Die Koexistenz beider auf einer Karte zeigt den Transformationsprozess.

### 3.3 Räumliche Komposition

Das Layout folgt einer vertikal geschichteten Architektur:

1. **Hero.** Asymmetrisch, mit großem typografischen Gewicht links und viel negativem Raum rechts. Kein Hero-Image — die Typografie selbst ist das visuelle Ereignis.
2. **Prozesskette.** Horizontale Vierer-Reihe mit verbindender Linie, die einen Farbverlauf von Alterungston über Terrakotta zu Blau durchläuft. Die Linie repräsentiert den Transformationspfad.
3. **Explorer.** Wechselbare Ansicht zwischen Karten-Galerie und Datentabelle. Beide zeigen denselben Datensatz, aber in radikal unterschiedlicher visueller Sprache.
4. **Detailpanel.** Slide-in von rechts, das Archivkarte und strukturierte Daten vertikal gegenüberstellt, verbunden durch einen expliziten Transformationspfeil.

### 3.4 Textur und Atmosphäre

Ein subtiles *Grain-Overlay* (SVG-basierter Fraktal-Noise-Filter mit niedriger Opazität) liegt über der gesamten Seite. Dieser Effekt erzeugt die Anmutung einer gedruckten Publikation und vermeidet die sterile Glätte typischer Webanwendungen.

Die Karten im Galeriemodus verwenden einen diagonalen Gradient von Weiß über warmes Creme zu Alterungston, der die Papiertextur des generierten Bildes aufgreift. Eine gefaltete Ecke (CSS-Dreieck rechts oben) fügt einen haptischen Hinweis hinzu.


## 4. Interaktionsdesign

### 4.1 Zentrale Interaktion: Transformation als Hover

Die Karten in der Galerieansicht zeigen im Ruhezustand die handschriftlich anmutende Archivkarten-Ästhetik (Caveat-Schrift, warme Töne, beschreibende Labels). Beim *Hover* blendet ein Overlay ein, das dieselben Daten in strukturierter Form zeigt (JetBrains Mono, tabellarisches Layout, Farbkodierung). Dieser Wechsel ist die Kerninteraktion: der Übergang von analoger zu digitaler Repräsentation wird am einzelnen Datensatz erlebbar.

Die Transition dauert 350ms mit *ease*-Funktion. Der Wechsel ist schnell genug, um reaktiv zu wirken, aber langsam genug, um wahrgenommen zu werden.

### 4.2 Detailansicht

Ein Klick öffnet ein Seitenpanel (maximale Breite 720px), das drei Bereiche vertikal anordnet:

1. **Archivkarte.** Dargestellt in Caveat-Schrift auf gealtertem Hintergrund, mit gestrichelter Trennlinie zu handschriftlichen Anmerkungen.
2. **Transformationspfeil.** Ein horizontales Element mit Richtungspfeilen und der Beschriftung „Datenextraktion". Dieses Element ist nicht dekorativ, es repräsentiert den Arbeitsschritt, den die KI übernimmt.
3. **Strukturierte Daten.** Tabellarisches Key-Value-Layout auf weißem Grund. Felder mit Unsicherheit sind durch blaues Highlighting und ein Fragezeichen-Icon markiert.

Das Panel schließt per Escape-Taste, Klick auf das Schließen-Icon oder Klick auf den abgedunkelten Hintergrund.

### 4.3 Ansichtswechsel

Der Toggle zwischen Galerie- und Tabellenansicht zeigt denselben Datensatz in zwei Repräsentationsformen. Die Galerie betont die materielle, archivalische Seite der Daten. Die Tabelle zeigt die strukturierte, maschinenlesbare Form. Dieser Wechsel selbst ist ein didaktisches Element.

### 4.4 Suche

Die Volltextsuche filtert in Echtzeit über alle Felder eines Datensatzes (ID, Typ, Material, Herkunft, Datierung, Beschreibung). Die Galerie-Ansicht animiert die gefilterten Karten gestaffelt ein (*staggered animation* mit 50ms Verzögerung pro Karte).

### 4.5 Datenqualitätssignal

Datensätze mit unsicherer Zuschreibung sind durchgängig markiert:

- In der Galerie durch ein blaues Tag mit dem Text „Uncertain attribution"
- Im Hover-Overlay durch blaues Feld-Highlighting
- In der Tabelle durch eine eigene Spalte „Certainty"
- Im Detailpanel durch blau hinterlegte Felder und eine erklärende Anmerkung

Diese durchgängige Markierung vermittelt ein Kernkonzept der Forschungsdatenarbeit: nicht alle Daten haben dieselbe Verlässlichkeit, und ein gutes System macht das sichtbar.


## 5. Komponentenarchitektur

Das Interface besteht aus fünf Hauptkomponenten:

### Hero
Statische Kopfzeile mit Projektidentität, Untertitel und Einleitungstext. Scroll-getriggerte *Fade-in*-Animation.

### ProcessChain
Horizontale Visualisierung der vier Transformationsschritte (Physisches Objekt → Archivkarte → Datenextraktion → Forschungsdaten). Jeder Schritt hat ein farbkodiertes Icon. Eine verbindende Gradientenlinie repräsentiert den Übergang.

### ArchivalCard
Karte in der Galerieansicht. Zeigt Inventarnummer, Metadatenfelder und Beschreibung in Archivkarten-Ästhetik. Enthält ein absolut positioniertes Overlay für die strukturierte Datenansicht beim *Hover*. Gestaffelte Einblendanimation.

### DataTable
Tabellarische Ansicht aller Datensätze. Sortierbare Spalten, Hover-Zeilen-Highlighting, aktive Zeile bei Auswahl. Unsichere Zuschreibungen als farbig hinterlegte Zellen.

### DetailPanel
Seitliches Slide-in-Panel mit drei vertikalen Sektionen (Archivkarte, Transformationspfeil, strukturierte Daten). Backdrop-Overlay mit Klick-zum-Schließen. Escape-Taste als Tastaturinteraktion.


## 6. Datensatzstruktur

Jeder Datensatz enthält folgende Felder:

| Feld | Typ | Beschreibung |
|---|---|---|
| `id` | String | Inventarnummer im Format JJJJ.X.NN |
| `type` | String | Objekttyp (englisch, für strukturierte Daten) |
| `typeDe` | String | Objekttyp (deutsch, für Anzeige) |
| `date` | String | Datierung, einschließlich Präfix „c." für Schätzungen |
| `material` | String | Materialbezeichnung |
| `origin` | String | Herkunftsort |
| `certainty` | Enum | `high` oder `uncertain` |
| `uncertaintyNote` | String (optional) | Erläuterung der Unsicherheit |
| `description` | String | Kurzbeschreibung (englisch) |
| `archival` | String | Simulierter Archivkartentext mit Zeilenumbrüchen |
| `notes` | String | Handschriftliche Anmerkungen |

Der Beispieldatensatz umfasst neun Objekte aus unterschiedlichen Epochen (3000 v.Chr. bis 1923), Materialien und Herkunftsorten und bildet ein realistisches Spektrum musealer Sammlungsdaten ab.


## 7. Methodische Einordnung

### 7.1 Promptotyping-Workflow

Die Entwicklung folgte einer iterativen Kette zwischen Text- und Bildmodellen:

1. **Konzeptformulierung.** Strukturierter Bildprompt mit sechs definierten Dimensionen (Szene, Farbe, Typografie, Licht, Stil, Ausschlüsse).
2. **Bildgenerierung.** Übergabe an Bildmodell (Gemini), Erzeugung einer visuellen Referenz.
3. **Analyse und Rückführung.** Evaluation des generierten Bildes durch ein Sprachmodell, Extraktion übertragbarer Designprinzipien.
4. **Interface-Übersetzung.** Transformation der visuellen Prinzipien in funktionalen Code (React/CSS).
5. **Dokumentation.** Verschriftlichung der Designentscheidungen und ihrer Begründungen.

Dieser Workflow nutzt jedes Modell für seine Stärke: Bildmodelle für visuelle Materialisierung, Sprachmodelle für konzeptuelle Steuerung und kritische Evaluation. Die Iteration verfeinert das Ergebnis schrittweise, wobei jeder Schritt dokumentiert und nachvollziehbar ist.

### 7.2 Designentscheidungen und ihre Begründung

| Entscheidung | Begründung |
|---|---|
| Kein Hero-Image | Die Typografie selbst transportiert die Identität, ohne auf generierte Bilder angewiesen zu sein |
| Vier Schriftfamilien | Jede repräsentiert eine Wissensordnung, die Mischung erzählt die Geschichte der Transformation |
| Hover als Kerninteraktion | Der Übergang von analog zu digital wird am einzelnen Datensatz erlebbar, nicht nur beschrieben |
| Durchgängige Unsicherheitsmarkierung | Datenqualität ist ein Kernthema der Forschungsdatenarbeit und muss visuell konsistent behandelt werden |
| Grain-Overlay | Erzeugt Druckanmutung, positioniert das Interface bewusst im Editorialbereich statt im Tech-Bereich |
| Warme Farbpalette ohne Neon | Referenziert materielle Sammlungsobjekte (Keramik, Papier) statt digitale Bildschirmästhetik |


## 8. Weiterentwicklung

Offene Erweiterungsmöglichkeiten, die auf dem bestehenden Designsystem aufbauen:

**OCR-Visualisierung.** Die Detailansicht könnte eine animierte Darstellung der Datenextraktion zeigen: Felder auf der Archivkarte werden nacheinander hervorgehoben und ihre erkannten Werte erscheinen in der strukturierten Ansicht. Das würde den Transformationsschritt „Datenextraktion" nicht nur beschreiben, sondern visuell durchspielen.

**Verknüpfungsgraph.** Objekte, die gemeinsame Herkunft, Zeitperiode oder Materialien teilen, könnten in einer Netzwerkvisualisierung dargestellt werden. Das erweitert das Interface von einer Sammlungsdatenbank zu einem Forschungswerkzeug.

**Code-Panel.** Ein ausklappbarer Bereich könnte den Python- oder SPARQL-Code zeigen, der für die Datenextraktion oder -abfrage nötig wäre. Das schließt den Bogen zum „Coding Literacy"-Aspekt des Projektnamens.

**Mehrsprachige Metadaten.** Der Datensatz enthält bereits deutsche und englische Typbezeichnungen. Eine Erweiterung auf kontrollierte Vokabulare (etwa Getty AAT) würde den Übergang von natürlichsprachlichen zu normierten Beschreibungen sichtbar machen.

---

*Digital Humanities Craft OG, 2026*