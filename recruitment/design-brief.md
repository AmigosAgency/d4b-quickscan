# Design Brief — Werken bij Dynamics4Business (Vacatures)

**Doel van de pagina:** kandidaten activeren om te solliciteren — primair op een openstaande vacature, secundair via een open sollicitatie of een laagdrempelig contactmoment met HR. Conversie wordt gestuurd door één duidelijke primaire CTA boven de vouw, herhaalde micro-CTA's per sectie, sociale proof van het team, en directe contactopties (bellen, WhatsApp, mailen, kennismakingskoffie).

**Brongegevens:** vervangt de huidige pagina op `dynamics4business.nl/vacatures/`. Logo, fonts (Poppins/Lexend) en huisstijl-elementen blijven gelijk; het content- en interactie-ontwerp wordt uitgebreid.

**Doelgroep:** Microsoft-consultants en -developers (Business Central, Power Platform, Copilot), Managed Services / support consultants, en latente kandidaten die "rondkijken" en bekend willen worden met D4B als werkgever.

**Tone of voice:** persoonlijk, direct, vakkundig. Geen wervende holle frasen. Concrete cijfers, concrete mensen, concrete projecten.

---

## 1. Designsysteem

### Kleuren
| Token | Hex | Gebruik |
|---|---|---|
| `--ink` | `#0B0B0F` | Headerachtergrond, primaire tekst |
| `--ink-700` | `#1A1B22` | Donkere secties, cards |
| `--ink-500` | `#3A3D4A` | Secundaire tekst op licht |
| `--paper` | `#FFFFFF` | Body-achtergrond |
| `--paper-50` | `#F5F5F4` | Section-alt achtergrond |
| `--line` | `#E6E6E4` | Borders/dividers |
| `--accent` | `#C7F25C` | Lime — primaire CTA, highlights, accent-shapes |
| `--accent-ink` | `#0B0B0F` | Tekst op `--accent` |
| `--brand-blue` | `#2C6BED` | Microsoft-affiniteit, tags, links |
| `--success` | `#16A34A` | "Nieuw / vacature actief" badges |

### Typografie
- **Display / headings:** Lexend, gewichten 600/700. H1: `clamp(48px, 6vw, 88px)`, line-height 0.95, letterspacing -0.02em. H2: `clamp(32px, 4vw, 56px)`.
- **Body / UI:** Poppins, gewicht 400/500. Body 17/28, lead 20/32, micro 14/20.
- **Stijl-accent:** sleutelwoorden in headings krijgen lime-highlight (achtergrondbalk achter tekst) of cursief in Lexend italic.

### Spacing & layout
- 12-kolomsgrid, max-width content 1280px, padding-x 24/48/96 (mobile/tablet/desktop).
- Sectie-padding-y: 96–128px desktop, 64px mobile.
- Cards: `border-radius: 24px`, schaduw `0 2px 0 var(--line), 0 24px 60px -32px rgba(11,11,15,.18)`.
- Buttons: 14px radius, `min-height: 56px`, padding-x 28px, gewicht 500.

### Componenten (Figma library)
- `Button/Primary` (lime, donkere tekst, pijl-icoon)
- `Button/Secondary` (outline op donker, outline op licht varianten)
- `Button/Ghost` (link-style met onderstreep)
- `Tag` (lichte chip met klein punt-icoontje)
- `Card/Vacancy` (zie sectie 5)
- `Stat` (groot getal + label)
- `PersonCard` (foto + naam + rol + LinkedIn icoon)
- `Testimonial` (quote + persoon)
- `Step` (genummerde stap timeline)
- `FAQItem` (accordion)
- `StickyCTA` (footerbalk mobiel)

---

## 2. Paginastructuur (top → bottom)

```
[Header / nav]               ← bestaande navigatie, light variant
[1. Hero]                    ← duidelijke claim + dubbele CTA + stats
[2. Trust strip]             ← Microsoft-badges + cijfers
[3. Why D4B — pillars]       ← 3 waarden met icoon + uitleg
[4. Cultuur-mosaic]          ← foto-grid met overlay-quotes
[5. Open vacatures]          ← filterbare cards (locatie / vakgebied)
[6. Sollicitatieproces]      ← 5-stappen timeline + tijdsindicatie
[7. Arbeidsvoorwaarden]      ← perks-grid (icoon + claim)
[8. Stories / video]         ← collega vertelt (video + quote)
[9. Open sollicitatie]       ← split-block met HR-contact
[10. FAQ]                    ← accordion 6-8 vragen
[11. Final CTA-band]         ← donkere band, lime CTA
[Footer]                     ← bestaand
[Sticky mobile CTA]          ← onderaan: "Bekijk vacatures" + WhatsApp
```

---

## 3. Sectie 1 — Hero

**Conversiedoel:** binnen 3 seconden duidelijk maken (a) waar D4B voor staat als werkgever, (b) dat er nu vacatures zijn, (c) hoe je direct verder kan.

**Layout:** twee kolommen op desktop (60/40), gestapeld op mobiel. Linkerkolom tekst + CTA's, rechterkolom hero-image (team in kantoor — bestaand: `DY1A281-1.jpg` of `DY35901.jpg`) met lime accent-shape eronder.

**Boven de H1:** kleine eyebrow-label met punt-icoon:
> ● Wij zoeken **4 nieuwe collega's** in Vinkel ('s-Hertogenbosch)

**H1 (Lexend 700, met highlight op "stempel"):**
> Bouw mee aan de slimste Microsoft-oplossingen van Nederland — en zet er je eigen **stempel** op.

**Lead-paragraaf (Poppins 400, 20/32):**
> Bij Dynamics4Business werk je met collega's die hun vak écht leuk vinden. Geen ellenlange goedkeuringslagen, wel ruimte om mee te denken over klanten, techniek en hoe we het hier doen. Business Central, Power Platform, Copilot — en jij erbij.

**CTA-paar (in één rij, gap 12):**
1. **Primair:** `Bekijk de 4 vacatures →` (lime button, scrollt naar sectie 5)
2. **Secundair:** `Plan een kennismakingskoffie` (outline button, opent contactblok / Calendly)

**Onder de CTA's — micro trust-line (Poppins 14, ink-500):**
> ☕ Reactie binnen 1 werkdag · 🤝 Korte lijnen — gesprek met team & directie · 📍 Vinkel · Venlo · Deventer

**Hero-stats strip onder de fold (4 stats, op donkere ink-700 band met lime accent op cijfers):**
- `45+` collega's
- `1998` opgericht
- `4.7/5` medewerkertevredenheid
- `Microsoft Solutions Partner` (logo-badge)

> Cijfers zijn placeholders — door D4B in te vullen vóór go-live.

---

## 4. Sectie 2 — Trust strip

**Conversiedoel:** geloofwaardigheid op vakgebied. Voor IT-talent telt "voor wie werk je" zwaar.

**Layout:** smalle band, witte achtergrond, één regel logo's/badges in grijswaarde die kleuren bij hover.

**Inhoud:**
- "Microsoft Solutions Partner — Business Applications"
- "Microsoft Solutions Partner — Data & AI"
- "Microsoft Solutions Partner — Digital & App Innovation"
- "Great Place to Work" (placeholder)
- "Top ICT-werkgever" (placeholder)

**Bovenkop:**
> Microsoft-partner sinds 1998. Vier specialisaties. Eén team.

---

## 5. Sectie 3 — Why D4B (drie pillars)

**Conversiedoel:** beantwoorden van "what's in it for me" voorbij salaris.

**Layout:** drie kolommen op desktop (gelijke breedte), elk een card met groot icoon (60px), korte titel, 2-3 regels tekst, en een link "lees verder" naar de cultuurpagina.

**Pillar 1 — Vakmanschap dat groeit**
> Eigen academy, Microsoft-certificeringen op kosten van de zaak, en collega's die je écht meenemen in hun expertise. We meten geen uren — we meten of jij beter wordt.

**Pillar 2 — Mensen boven processen**
> Korte lijnen met klant én team. Je werkt aan projecten waar je iets te zeggen hebt. Vrijdagmiddag-borrel, jaarlijks teamweekend, en een directie die je gewoon belt.

**Pillar 3 — Impact op echte bedrijven**
> Onze klanten zijn middelgrote tot grote organisaties in service, productie, handel en installatie. Wat jij bouwt, gaat morgen mee de fabriek of de servicebus in.

**Onderaan de sectie:** subtiele CTA `Ontdek onze cultuur →` (ghost, gaat naar `/over-ons/team/`).

---

## 6. Sectie 4 — Cultuur-mosaic

**Conversiedoel:** "wie zijn die mensen" tonen. Geen stockfoto's.

**Layout:** asymmetrische foto-grid (5 cellen, verschillende hoogtes). Eén foto is groot en bevat een overlay-quote uit een testimonial. Overige foto's tonen kantoor, team, klanten, evenement.

**Overlay-quote (op grootste foto):**
> "Ik wilde niet 'gewoon nog een consultant' zijn. Hier mag ik bouwen aan onze eigen producten én klanten helpen. Dat is voor mij de mix."
>
> — Jerry Suiker, Business Central Developer · 4 jaar bij D4B

---

## 7. Sectie 5 — Open vacatures

**Conversiedoel:** dé hoofdconversie. Maximaliseren dat de juiste kandidaat de juiste vacature opent.

**Layout:**
- **Sectie-kop:** "4 vacatures open" + filterbar (chips, multi-select):
  `[Alle] [Business Applications] [Power Platform & Copilot] [Managed Services] [Development]`
  + locatiefilter: `[Alle locaties ▾]` (Vinkel / Venlo / Deventer / Hybride)
- **Card-grid:** 2 kolommen desktop, 1 kolom mobiel. Card hoogte fixed = 320px.
- **Card-anatomie (van boven naar beneden):**
  1. Tag-row: vakgebied · type (Fulltime/Parttime) · locatie · "Hybride mogelijk"
  2. Titel (Lexend 600, 26px)
  3. Korte pitch (2 regels max, ellipsis)
  4. Skill-chips (max 4): bv. `Power Apps` `Dataverse` `Copilot Studio`
  5. Onderrand: salarisindicatie (`€4.200 – €6.500`) + `Bekijk vacature →` (primair lime)
- **Hover:** card lift (translateY -4px) + lime accent-rand links 4px breed.

**Vacatures (huidige set, met uitbreidingen):**

### 5a. Microsoft Power Platform & Copilot Consultant
- Tags: `Power Platform` · `Fulltime` · `'s-Hertogenbosch` · `Hybride`
- Pitch: Bouw bedrijfsprocessen om met Power Apps, Power Automate, Power BI en Copilot Studio — voor klanten die écht willen versnellen.
- Skills: `Power Apps` `Power Automate` `Dataverse` `Copilot Studio`
- Salaris: `€4.500 – €7.000` (indicatief — door D4B aanpassen)

### 5b. Dynamics 365 Business Central Consultant
- Tags: `Business Applications` · `Fulltime` · `'s-Hertogenbosch` · `Hybride`
- Pitch: Adviseer klanten over BC-implementaties van blueprint tot go-live. Jij vertaalt proces naar werkende oplossing.
- Skills: `Business Central` `Implementatie` `Training` `Adoption`
- Salaris: `€4.200 – €6.800`

### 5c. Microsoft Managed Services Consultant
- Tags: `Managed Services` · `Fulltime` · `'s-Hertogenbosch` · `Hybride`
- Pitch: Eerste aanspreekpunt voor klanten. Jij maakt support strak, snel en first-time-right.
- Skills: `Support` `SLA` `Business Central` `Klantcontact`
- Salaris: `€3.600 – €5.400`

### 5d. Dynamics 365 Business Central Developer
- Tags: `Development` · `Fulltime` · `'s-Hertogenbosch` · `Hybride`
- Pitch: Combineer techniek en innovatie. Bouw maatwerk, integraties en denk mee over architectuur.
- Skills: `AL` `Business Central` `Azure` `API`
- Salaris: `€4.500 – €7.500`

**Onder de grid — "Geen passende vacature"-blok:**
Lichte off-white panel, twee kolommen:
- Links: kop *Niets gevonden dat past?*, tekst *We werven het hele jaar door op talent. Vertel ons waar jij goed in bent — we plannen graag een open kennismaking.*
- Rechts: knop `Open sollicitatie →` (primair) + `WhatsApp met Jacky` (ghost, met WA-icoon)

---

## 8. Sectie 6 — Sollicitatieproces

**Conversiedoel:** wegnemen van procedurele drempels ("hoe lang duurt dit, wat moet ik aanleveren").

**Layout:** horizontale timeline desktop (5 stappen, lijn met dots), verticale stack mobiel. Per stap een nummer in lime cirkel, titel, tijdsindicatie, korte beschrijving.

1. **Je solliciteert** · *5 min*
   CV is genoeg, motivatie mag in 3 zinnen via WhatsApp of mail.
2. **Belafspraak met Jacky** · *binnen 2 werkdagen, 20 min*
   Korte kennismaking, je verhaal, onze verwachting.
3. **Vakinhoudelijk gesprek** · *60 min, op kantoor of online*
   Met je toekomstige team-lead. Geen trucs, wel inhoud.
4. **Meeloopdag** · *4 uur*
   Zit naast een collega, doe mee aan een echte klantcase, lunch met het team.
5. **Aanbod** · *binnen 3 werkdagen*
   Helder, schriftelijk, met ruimte om vragen te stellen.

**Onderaan sectie:** badge "Gemiddelde doorlooptijd: 12 dagen".

---

## 9. Sectie 7 — Arbeidsvoorwaarden grid

**Conversiedoel:** concrete redenen om verder te lezen, en SEO/snippets voor recruitment-platforms.

**Layout:** 4×2 grid (8 perks) op desktop, 2 kolommen mobiel. Elke cel: icoon (32px lime), titel (16/24 bold), 1 regel uitleg.

1. **Marktconform salaris** — passend bij ervaring, jaarlijkse beoordeling
2. **30 vakantiedagen** — basis 25 + 5 D4B-dagen
3. **Hybride werken** — 2-3 dagen kantoor, rest waar je wil
4. **€2.500 opleidingsbudget** — per jaar, plus alle Microsoft-certs vergoed
5. **Laptop & telefoon** — naar keuze, ook privé
6. **Pensioen** — werkgever betaalt 2/3
7. **Mobiliteit** — auto, NS-Business Card of mobiliteitsbudget
8. **Bonusregeling** — winstdeling als het bedrijf groeit, groei jij mee

> Bedragen/dagen zijn voorstellen — door D4B te valideren.

---

## 10. Sectie 8 — Stories (video + quote)

**Conversiedoel:** emotionele aansluiting. Eén collega vertelt op video (60-90 sec) waarom ze bij D4B werken.

**Layout:** split 50/50. Links videospeler (poster-image = collega in kantoor, play-knop lime). Rechts pull-quote + naam + rol + LinkedIn-link.

**Voorbeeld-quote:**
> "Toen ik solliciteerde dacht ik: weer zo'n implementatiekantoor. Het verschil zit in hoe ze met elkaar omgaan — en met klanten. Niemand zit hier z'n contract uit."
>
> — *Naam Collega, Senior BC Consultant · 6 jaar bij D4B*

**CTA onder de quote:** `Meer verhalen op LinkedIn →`

---

## 11. Sectie 9 — Open sollicitatie + HR-contact

**Conversiedoel:** kandidaten die geen passende vacature zagen, alsnog converteren via een mens.

**Layout:** donkere band (ink-700), split 60/40.

**Linkerblok (60%):**
- H2: *Geen vacature die past? Bel mij gewoon.*
- Paragraaf: *Soms past het lijstje niet bij wat jij kan. Vertel mij in 5 minuten waar je goed in bent en waar je naartoe wil — dan kijken we samen of D4B voor jou werkt. Antwoord op je mail of WhatsApp binnen één werkdag.*
- CTA-rij:
  - `Stuur open sollicitatie` (primair lime)
  - `📞 Bel +31 6 127 107 91` (ghost light)
  - `💬 WhatsApp Jacky` (ghost light)

**Rechterblok (40%):**
- Ronde foto Jacky (180px), rand in lime
- Naam: **Jacky Das**
- Rol: HR Advisor
- E-mail: `jacky.das@d4b.nl`
- LinkedIn-icoon (lime)
- Klein label: *"Gemiddeld antwoord: 4 uur"*

---

## 12. Sectie 10 — FAQ

**Conversiedoel:** laatste twijfels wegnemen voor de Apply-klik.

**Layout:** twee kolommen accordion (4+4), of single column mobiel.

**Vragen (titels + antwoord-skeletten):**

1. **Werk ik op kantoor of thuis?**
   Hybride. Gemiddeld 2 dagen op kantoor in Vinkel (of Venlo/Deventer), de rest waar jij productief bent. Sommige rollen vragen meer klantbezoeken.

2. **Moet ik Microsoft-gecertificeerd zijn?**
   Niet om te starten. Wel om door te groeien — daar betalen wij voor. Alle relevante MS-examens en cursussen vergoeden we, inclusief studietijd.

3. **Hoe groot zijn jullie?**
   45+ collega's, drie locaties, opgericht in 1998. Klein genoeg om elkaar te kennen, groot genoeg voor serieuze projecten.

4. **Welke klanten doen jullie?**
   Middelgrote tot grote organisaties in service & projecten, productie, equipment, (groot)handel en installatie. Internationale klanten via onze multisite-aanpak.

5. **Hoe ziet een werkdag eruit?**
   Geen twee dagen hetzelfde. Klantsessie, ontwikkeling, sparren met collega's, soms een teamlunch. Vrijdagmiddag = borrel of demo-uurtje.

6. **Kan ik parttime werken?**
   Ja, vanaf 32 uur is in overleg vrijwel altijd mogelijk. Ouderschapsverlof en flexibele schooluren regelen we soepel.

7. **Wat als ik twijfel of ik past?**
   Bel Jacky. 20 minuten, vrijblijvend, eerlijk advies — ook als het 'nee' wordt.

8. **Hoe snel kan ik beginnen?**
   Zodra je opzegtermijn het toelaat. Gemiddelde sollicitatie tot tekenen: 12 dagen.

---

## 13. Sectie 11 — Final CTA-band

**Conversiedoel:** laatste touch voor scrollers die niet eerder klikten.

**Layout:** volledige breedte ink-band met grote lime-accent vorm rechts. H2 + één primaire CTA + één telefoonlink.

**Copy:**
> ## Klaar om kennis te maken?
> Bekijk de vacatures, of bel Jacky direct.
>
> `Bekijk de 4 vacatures →` (lime primary, groot)
> `Of bel +31 6 127 107 91` (link op donker)

---

## 14. Sticky mobile CTA-bar

**Conversiedoel:** mobiele scrollers altijd binnen één tik van conversie.

**Layout:** onderaan beeldscherm, blur-achtergrond, twee knoppen 50/50:
- `Vacatures` (lime, scrollt naar sectie 5)
- `WhatsApp` (outline wit, opent WA-chat)

Verschijnt na 600px scroll, verdwijnt boven de footer.

---

## 15. Accessibility & techniek

- Kleurcontrast: lime `#C7F25C` alléén op donker; nooit witte tekst op lime. Tekst op `--accent` is altijd `--ink`.
- Focus-state: lime outline 3px, offset 3px op alle interactieve elementen.
- Headings strikt H1 → H2 → H3, geen springen.
- Vacancy-cards in `<article>` met `aria-labelledby` naar de titel.
- Sticky CTA `role="region" aria-label="Snelle acties"`.
- Animaties respecteren `prefers-reduced-motion`.

---

## 16. Wat de Figma-designer kan toevoegen ("vrije ruimte")

- Microsite-stijl decoratie: subtiele lime "gevormde shapes" (cirkel, rounded-square, halve cirkel) achter foto's voor brand-recognition.
- Eigen iconenset (24px line + 32px filled) — bij voorkeur Lucide of Phosphor, lime-accent strokes.
- Dark-mode variant van de cards-sectie als optie.
- Twee hero-varianten: A) team-foto rechts, B) full-bleed team-foto met overlay-tekst — om A/B-testen mogelijk te maken.

---

## 17. Bestaande assets in MHTML-bestand

| Asset | Voorgestelde plek |
|---|---|
| `DY1A281-1.jpg` | Hero-image (variant A) |
| `DY35901.jpg` | Cultuur-mosaic grootste cel |
| `Jacky-Das-1.jpg` | Sectie 9 (HR-contact) |
| `Jerry-Suiker.jpg` | Cultuur-mosaic overlay-quote |
| `d4b-kleur-zwart-sw.svg` | Header logo (bestaand) |

---

## 18. Conversie-rationale (samenvatting voor stakeholder)

| Element | Waarom het converteert |
|---|---|
| Twee CTA's in hero | Vangt "klaar om te solliciteren" én "wil eerst praten" af |
| Stats-strip onder hero | Snelle geloofwaardigheid voor IT-talent |
| Filterbare vacature-cards | Reduceert cognitive load bij 4+ vacatures |
| Salarisindicatie op cards | #1 reden waarom kandidaten klikken — verhoogt CTR significant |
| 5-stappen proces met tijden | Wegnemen van "hoe lang duurt dit"-twijfel |
| HR-foto + WhatsApp + bellen | Verlaagt drempel; persoonlijke noot bij IT-mensen werkt |
| Sticky mobile CTA | 60%+ van werkenbij-verkeer is mobiel |
| FAQ | Vangt long-tail-twijfels, ook goed voor SEO |
| Final CTA-band | Tweede kans voor scrollers — typisch +8-15% conversie |
