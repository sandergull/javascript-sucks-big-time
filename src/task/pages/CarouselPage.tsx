import '../styles/carousel-task.css';
export default function CarouselPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag et Carousel</h2>
      <p>
        Mål: Horisontal liste med minst tre slides som snapper ved scroll. Bruk CSS
        <code>scroll-snap</code>. Ingen JavaScript.
      </p>
      <p>
        Hint: <code>scroll-snap-type: x mandatory;</code> på container og{' '}
        <code>scroll-snap-align</code> på hver slide.
      </p>
      <div className="sandbox" aria-label="Din carousel løsning her"></div>
    </main>
  );
}
