# HTML & CSS Components Showcase (React Shell)

This project demonstrates five UI patterns often implemented with JavaScript – rebuilt using only **HTML & CSS** inside a modern React + Vite + TypeScript setup. The React layer provides routing and application framing; each page's interactive behavior relies purely on browser-native features and CSS selectors.

## Components

1. Accordion – Uses `<details>` / `<summary>` for accessible disclosure.
2. Tabs – Radio inputs + labels + sibling selectors to reveal panels.
3. Modal – `:target` pseudo-class displays a modal overlay (note accessibility caveats).
4. Carousel – Horizontal flex track with CSS scroll snapping.
5. Tooltip – Attribute-driven tooltips via `data-tooltip` and `::after` pseudo-element.

## Student Tasks

Visit the Tasks page to attempt building each component yourself first:

1. Accordion – single-open or multi-open variant using semantic elements.
2. Tabs – radio inputs + labels pattern.
3. Modal – fragment identifier (`:target`) or `<dialog>` (no JS).
4. Carousel – scroll-snap showcase.
5. Tooltip – attribute + pseudo-elements.

A sandbox div is provided; create temporary markup there and add your own CSS file before comparing with the reference implementations.

## Goals

- Illustrate progressively-enhanced, zero-JS interaction techniques.
- Keep markup semantic & accessible (ARIA where needed).
- Provide a clean React architecture (routing, testing, linting) without JS-driven component logic.

## Tech Stack

- Vite + React 18 + TypeScript
- React Router v6
- Vitest + Testing Library
- ESLint + Prettier

## Getting Started

### Install

```powershell
npm install
```

### Run Dev Server

```powershell
npm run dev
```

Then open the printed local URL (typically http://localhost:5173/).

### Run Tests

```powershell
npm test
```

### Lint & Format

```powershell
npm run lint
npm run format
```

### Build Production Bundle

```powershell
npm run build
npm run preview
```

## Accessibility Notes

- Tabs: Radio-group pattern approximates tab behavior; focus management is limited compared to a scripted solution.
- Modal: `:target` approach lacks focus trapping and restore; consider `<dialog>` or scripted enhancements for production use.
- Carousel: Scroll snapping relies on user scroll; adding skip links or previous/next buttons improves usability.
- Tooltip: Pure CSS tooltips may not be announced by screen readers; for production use `aria-live` regions or `role="tooltip"` constructs with focus management.

## Future Enhancements

- Add optional JS progressive enhancement layer.
- Expand test coverage (axe accessibility checks).
- Provide alternative `<dialog>` modal example.

## License

MIT
