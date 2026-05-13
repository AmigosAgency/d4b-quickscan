# Werken-bij pagina — concept voor Claude Design / Figma

Bron: bestaande pagina `https://dynamics4business.nl/vacatures/` (MHTML-export).
Doel: pagina herschrijven en uitbreiden zodat hij gericht stuurt op kandidaat-conversie (apply, open sollicitatie, kennismakingsgesprek), en daarna automatisch laten omzetten in een Figma-ontwerp.

## Wat zit hier

| Bestand | Wat | Voor wie |
|---|---|---|
| `design-brief.md` | Complete brief: sectiestructuur, copy in NL, designsysteem (tokens, fonts, kleuren), componenten, conversie-rationale | **Primaire upload** naar Claude Design / Figma Make |
| `preview.html` | Zelfstandige HTML-mockup van de complete pagina | Visuele referentie · screenshot maken · live previewen |
| `README.md` | Dit bestand | Jou |

## Hoe gebruik je dit in Claude Design / Figma Make

**Methode A — Claude Design (claude.ai → Design / Imagine):**
1. Open een nieuw Design-gesprek.
2. Upload `design-brief.md` als basis.
3. Upload `preview.html` als visuele referentie (Claude kan HTML interpreteren).
4. Prompt-suggestie:
   > "Genereer op basis van deze brief en de bijgevoegde HTML-referentie een Figma-ontwerp van een werkenbij-pagina. Houd het designsysteem aan zoals gespecificeerd. Lever desktop (1440px) én mobiel (390px) frames. Componenten als auto-layout, met varianten waar zinvol (button, vacancy-card, perk, FAQ-item)."

**Methode B — Figma Make (figma.com/make):**
1. Nieuw project → upload `preview.html` (Figma Make kan HTML → Figma converteren).
2. Voeg `design-brief.md` toe als bron-tekst voor copy/structuur-iteraties.

**Methode C — Screenshot-route:**
1. Open `preview.html` lokaal (`open preview.html` of dubbelklik).
2. Maak screenshots van desktop (1440px) en mobiel (390px).
3. Upload screenshots + `design-brief.md` aan Claude met dezelfde prompt.

## Belangrijkste verbeteringen t.o.v. huidige pagina

| Huidig | Concept |
|---|---|
| 1 hero + 1 CTA ("Ontdek onze cultuur") | Hero met 2 CTA's (apply + koffie), stats-strip, micro-trust line |
| 4 vacatures als platte lijst | Filterbare cards met salaris-indicatie, skill-chips, hover-state |
| Geen sollicitatieproces zichtbaar | 5-stappen timeline incl. doorlooptijd (12 dagen) |
| Open sollicitatie staat als footnote | Volledige sectie + HR-foto + WhatsApp + bellen direct |
| Geen FAQ | 8 FAQ's die typische sollicitatie-twijfels beantwoorden |
| Geen perks/voorwaarden | 8-tile perks-grid (placeholders) |
| Geen sociale proof | Trust-strip + testimonial overlay + video-quote + stats |
| Geen mobile-CTA | Sticky bottom-bar (vacatures + WhatsApp) |
| Een eind-CTA ontbreekt | Donker final-band met lime-accent shape |

## Placeholders die D4B nog moet invullen

- Concrete cijfers in stats-strip (collega's, tevredenheidsscore)
- Salarisindicaties per vacature
- Bedragen/dagen in arbeidsvoorwaarden (opleidingsbudget, vakantiedagen, pensioenpercentage)
- Video-quote (60-90 sec) + naam/rol van geïnterviewde collega
- Eventuele awards/certificeringen in trust-strip

Deze staan in `design-brief.md` consequent gemarkeerd met *"placeholder"* of in cursief.
