# HTML & CSS Komponentforklaring (Norsk)

Denne filen beskriver hvordan hver av de fem komponentene i prosjektet fungerer _uten JavaScript_, kun ved hjelp av HTML og CSS. I tillegg finner du studentoppgaver og tilgjengelighetsnotater.

## Oversikt

Prosjektet demonstrerer:

- Accordion
- Tabs
- Modal
- Carousel
- Tooltip
- Tasks-side med studentoppgaver

React brukes kun som rammeverk for routing og struktur; all interaktivitet i komponentene styres av nettleserens innebygde funksjoner + CSS selektorer.

## 1. Accordion

**HTML-struktur:** `<details>` / `<summary>`

**Hvorfor fungerer det:** Nettleseren håndterer åpen/lukket tilstand, fokus og tastatur (Enter/Space) automatisk.

**CSS-nøkler:**

```css
.accordion details {
  /* panel styling */
}
.accordion summary {
  cursor: pointer;
}
.accordion details[open] summary {
  background: var(--surface-alt);
}
.accordion .panel {
  animation: fade 0.35s ease;
}
```

`details[open]` brukes for visuell indikasjon. `summary::-webkit-details-marker` kan skjules for et renere uttrykk.

## 2. Tabs

**HTML-struktur:** Skjulte radio inputs + tilhørende `<label>` elementer. Panelene ligger i en container etter input-gruppen.

**Hvorfor fungerer det:** Kun én radio kan være valgt, og den representerer aktiv tab. Selektorer kobler valgt radio til riktig panel.

**CSS-nøkler:**

```css
.tabs input {
  opacity: 0;
  position: absolute;
}
.tabs input:checked + label {
  background: var(--accent);
}
#tab-1:checked ~ .tab-panels #panel-1 {
  display: block;
}
#tab-2:checked ~ .tab-panels #panel-2 {
  display: block;
}
#tab-3:checked ~ .tab-panels #panel-3 {
  display: block;
}
```

`~` (general sibling) gjør at vi kan hoppe fra valgt radio til panel-container.

## 3. Modal

**HTML-struktur:** En lenke som peker til `#modal` + `<div id="modal" class="modal">`.

**Hvorfor fungerer det:** Når URL-fragmentet matcher `#modal`, blir elementet `:target`. CSS viser modalen.

**CSS-nøkler:**

```css
.modal {
  display: none;
}
:target.modal {
  display: grid;
}
```

Overlay og sentrering via `position: fixed; inset:0; place-items:center`. Lukk ved å navigere til annen fragment (# eller #close).

## 4. Carousel

**HTML-struktur:** Wrapper `.carousel` med en horisontal `.track` (flex) og flere `.slide` (figure eller div).

**Hvorfor fungerer det:** CSS `scroll-snap` sørger for at hvert slide “snapper” inn i posisjon ved scroll uten ekstra JS.

**CSS-nøkler:**

```css
.carousel .track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.carousel .slide {
  scroll-snap-align: center;
}
```

Bruker naturlig scroll + snapping for interaktivitet.

## 5. Tooltip

**HTML-struktur:** Et element med `class="tooltip-target"` og et `data-tooltip` attributt.

**Hvorfor fungerer det:** Pseudo-elementer genereres når elementet er i hover/fokus. Tekst hentes via `attr(data-tooltip)`.

**CSS-nøkler:**

```css
.tooltip-target[data-tooltip]:hover::after {
  content: attr(data-tooltip);
}
.tooltip-target[data-tooltip]:focus-visible::after {
  /* samme */
}
```

`::before` kan brukes til pil. Ingen ekstra markup kreves.

## Oppsummeringstabell

| Komponent | Tilstand uten JS | Hoved-teknikk               |
| --------- | ---------------- | --------------------------- |
| Accordion | `open` attributt | `details[open]` selektor    |
| Tabs      | `:checked` radio | Generelle søsken + ID-kjede |
| Modal     | URL-fragment     | `:target` pseudo-klasse     |
| Carousel  | Scroll-posisjon  | `scroll-snap-type/align`    |
| Tooltip   | Hover/fokus      | Pseudo-element + `attr()`   |

## Tilgjengelighet

- **Accordion:** `<details>`/`<summary>` gir OK grunnleggende støtte.
- **Tabs:** Legg til `role="tablist"`, `role="tab"`, `aria-controls` og `aria-selected` for bedre semantikk.
- **Modal:** `:target` mangler fokusfelle. For produksjon bruk `<dialog>` + JS for fokusstyring.
- **Carousel:** Legg til synlige / skjulte navigasjonsknapper eller skip-lenker.
- **Tooltip:** Pseudo-element tekst kan ikke leses av skjermlesere; vurder en skjult `<span role="tooltip" id="...">` + `aria-describedby`.

## Studentoppgaver (Tasks)

1. Accordion – Tre seksjoner; kun én åpen; semantisk og tastaturnavigerbar.
2. Tabs – Tre faner; radio-pattern; tydelig aktiv stil.
3. Modal – Fragment eller `<dialog>`; åpne/lukke; ingen JS.
4. Carousel – Tre slides; horisontal scroll-snap; valgfri indikator.
5. Tooltip – To elementer med tooltip på hover/fokus; pseudo-elementer.

Sandbox-div i TasksPage lar studenten eksperimentere uten å påvirke referansekomponentene.

## Eksempel-snutter (startskjeletter)

```html
<!-- Accordion -->
<details open>
  <summary>Seksjon 1</summary>
  <p>Innhold…</p>
</details>
<details>
  <summary>Seksjon 2</summary>
  <p>Innhold…</p>
</details>

<!-- Tabs -->
<div class="tabs">
  <div class="tab-controls">
    <input type="radio" name="t" id="t1" checked />
    <label for="t1">Tab 1</label>
    <input type="radio" name="t" id="t2" />
    <label for="t2">Tab 2</label>
  </div>
  <div class="tab-panels">
    <div id="p1">Panel 1</div>
    <div id="p2">Panel 2</div>
  </div>
</div>

<!-- Modal -->
<a href="#demoModal">Åpne modal</a>
<div id="demoModal" class="modal">
  <div class="modal-content">
    <h2>Tittel</h2>
    <p>Innhold…</p>
    <a href="#">Lukk</a>
  </div>
</div>

<!-- Carousel -->
<div class="carousel">
  <div class="track">
    <figure class="slide">
      <img src="..." alt="" />
      <figcaption>Slide 1</figcaption>
    </figure>
    <figure class="slide">
      <img src="..." alt="" />
      <figcaption>Slide 2</figcaption>
    </figure>
  </div>
</div>

<!-- Tooltip -->
<button class="tooltip-target" data-tooltip="Ekstra info">Knapp</button>
<a href="#" class="tooltip-target" data-tooltip="Mer info">Lenke</a>
```

## Forslag til videre arbeid

- ARIA-forbedringer for Tabs/Tooltip.
- Fokusfelle og retur for Modal.
- Navigasjonsknapper for Carousel.
- Progressiv forbedring med minimal JS for tilgjengelighet (uten å endre HTML/CSS-læringsdelen).

## Lisens

MIT (som resten av prosjektet).

---

Oppdater filen fritt etter behov. Si fra hvis du ønsker en engelsk variant eller ekstra seksjon for beste praksis.
