# HTML & CSS Komponentforklaring (Norsk)

Denne filen viser hvordan du kan lage interaktive komponenter _uten JavaScript_, kun med HTML og CSS. Alle komponentene fungerer i moderne nettlesere.

## Oversikt

Prosjektet demonstrerer fem komponenter:

- **Accordion** - Sammenleggbare seksjoner
- **Tabs** - Faner for innhold
- **Modal** - Popup-vinduer
- **Carousel** - Bildegalleri med scroll
- **Range Input** - Slider med labels

React brukes kun for routing. All interaktivitet kommer fra nettleserens innebygde funksjoner + CSS.

## 1. Accordion

**Hva det er:** Sammenleggbare seksjoner hvor innhold kan skjules/vises.

**HTML:** `<details>` og `<summary>` elementene.

```html
<details>
  <summary>Klikk her</summary>
  <p>Dette innholdet kan skjules</p>
</details>
```

**Hvorfor det fungerer:** Nettleseren håndterer åpen/lukket automatisk - ingen JavaScript nødvendig!

**Med React/TypeScript ville du gjort:**

```tsx
// Mye mer kode for å håndtere tilstand og klikk
import { useState } from 'react';

interface AccordionProps {
  sections: { title: string; content: string }[];
}

export function Accordion({ sections }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="accordion-header"
          >
            {section.title}
          </button>
          {openIndex === index && <div className="accordion-content">{section.content}</div>}
        </div>
      ))}
    </div>
  );
}
```

## 2. Tabs

**Hva det er:** Faner hvor kun ett innholdspanel vises om gangen.

**HTML:** Skjulte radio inputs + labels som faner.

```html
<input type="radio" name="tabs" id="tab1" checked />
<label for="tab1">Fane 1</label>
<input type="radio" name="tabs" id="tab2" />
<label for="tab2">Fane 2</label>

<div class="panels">
  <div class="panel">Innhold 1</div>
  <div class="panel">Innhold 2</div>
</div>
```

**CSS:** `#tab1:checked ~ .panels .panel:nth-child(1) { display: block; }`

**Med React/TypeScript ville du gjort:**

```tsx
// Håndtere fane-klikk og tilstandsstyring
import { useState } from 'react';

interface TabsProps {
  tabs: { label: string; content: string }[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-controls">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-panels">
        <div className="panel">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}
```

## 3. Modal

**Hva det er:** Popup-vindu som overlapper hovedinnholdet.

**HTML:** Lenke til fragment + modal med ID.

```html
<a href="#modal">Åpne modal</a>
<div id="modal" class="modal">
  <div class="modal-content">
    <h2>Modal tittel</h2>
    <a href="#">Lukk</a>
  </div>
</div>
```

**CSS:** `:target` pseudo-klassen viser modalen når URL-fragmentet matcher.

**Med React/TypeScript ville du gjort:**

```tsx
// Event listeners for åpne/lukke, fokusfelle, ESC-knapp
import { useState, useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

export function Modal({ children, trigger }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={() => setIsOpen(false)}>Lukk</button>
          </div>
        </div>
      )}
    </>
  );
}
```

## 4. Carousel

**Hva det er:** Horisontalt bildegalleri med smooth scrolling.

**HTML:** Container med slides som kan scrolles.

```html
<div class="carousel">
  <div class="track">
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
  </div>
</div>
```

**CSS:** `scroll-snap-type: x mandatory` og `scroll-snap-align: center` på slides.

**Med React/TypeScript ville du gjort:**

```tsx
// Knapper for navigasjon, touch/swipe support, auto-play
import { useState, useRef } from 'react';

interface CarouselProps {
  slides: { id: string; content: React.ReactNode }[];
}

export function Carousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const updateCarousel = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>←</button>
      <div className="track" ref={trackRef}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            {slide.content}
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>→</button>
    </div>
  );
}
```

## 5. Range Input

**Hva det er:** Slider med labels under som tilpasser seg automatisk.

**HTML:** Range input med datalist for verdier.

```html
<input type="range" list="values" min="0" max="100" step="25" />
<datalist id="values">
  <option value="0" label="Min"></option>
  <option value="25" label="Lav"></option>
  <option value="50" label="Medium"></option>
  <option value="75" label="Høy"></option>
  <option value="100" label="Max"></option>
</datalist>
```

**CSS:** CSS Grid + `:has()` selector for å telle options og posisjonere labels.

**Med React/TypeScript ville du gjort:**

```tsx
// Dynamisk oppdatering av labels basert på slider-posisjon
import { useState, ChangeEvent } from 'react';

interface RangeInputProps {
  min: number;
  max: number;
  step: number;
  options: { value: number; label: string }[];
}

export function RangeInput({ min, max, step, options }: RangeInputProps) {
  const [value, setValue] = useState(min);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const getPercentage = () => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className="range-input">
      <input type="range" min={min} max={max} step={step} value={value} onChange={handleChange} />
      <div className="labels">
        {options.map((option) => (
          <span key={option.value} className="label">
            {option.label}
          </span>
        ))}
      </div>
      <div className="current-value" style={{ left: `${getPercentage()}%` }}>
        {value}
      </div>
    </div>
  );
}
```

## Hvorfor CSS i stedet for React/TypeScript?

| Komponent   | CSS Fordel                      | React/TypeScript Ulempe                |
| ----------- | ------------------------------- | -------------------------------------- |
| Accordion   | `<details>` fungerer automatisk | useState + event handlers + re-renders |
| Tabs        | Radio buttons = kun én aktiv    | Må administrere tilstand manuelt       |
| Modal       | `:target` følger URL            | useEffect + fokus + ESC-håndtering     |
| Carousel    | `scroll-snap` er innebygd       | useRef + state + kompleks logikk       |
| Range Input | Datalist + Grid = automatisk    | useState + beregninger + re-renders    |

**Hovedpoeng:** HTML og CSS har mange innebygde funksjoner som fungerer uten React/TypeScript!

## Nyttige ressurser

- [MDN: details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN: CSS :target](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)
- [MDN: CSS scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [MDN: CSS :has() selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
