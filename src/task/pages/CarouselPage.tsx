import '../styles/carousel-task.css';
export default function CarouselPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag et Carousel</h2>

      <div className="task-description">
        <h3>Hva skal du lage?</h3>
        <p>
          Et horisontalt bildegalleri hvor brukeren kan scrolle mellom slides som "snapper" på
          plass.
        </p>

        <h3>Krav</h3>
        <ul>
          <li>Minst tre slides/bilder</li>
          <li>Horisontal scrolling</li>
          <li>Slides som "snapper" til posisjon</li>
          <li>Kun HTML og CSS - ingen JavaScript</li>
        </ul>

        <details className="hint-section">
          <summary>💡 Trenger du hint?</summary>
          <div className="hint-content">
            <p>
              <strong>CSS-egenskaper:</strong> <code>scroll-snap-type</code> og{' '}
              <code>scroll-snap-align</code>
            </p>
            <p>
              <strong>Layout:</strong> Flexbox med <code>overflow-x: auto</code>
            </p>
            <p>
              <strong>Søkeord:</strong> "CSS scroll-snap carousel"
            </p>
          </div>
        </details>
      </div>

      <div className="sandbox" aria-label="Din carousel løsning her"></div>
    </main>
  );
}
