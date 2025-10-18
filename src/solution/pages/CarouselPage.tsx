import '../styles/carousel-solution.css';
export default function CarouselPage() {
  return (
    <main className="page">
      <h2>Carousel (Solution)</h2>
      <div className="carousel" aria-label="Solution Carousel">
        <div className="track">
          <figure className="slide">
            <img src="https://picsum.photos/seed/a/800/400" alt="Random A" />
            <figcaption>Slide A</figcaption>
          </figure>
          <figure className="slide">
            <img src="https://picsum.photos/seed/b/800/400" alt="Random B" />
            <figcaption>Slide B</figcaption>
          </figure>
          <figure className="slide">
            <img src="https://picsum.photos/seed/c/800/400" alt="Random C" />
            <figcaption>Slide C</figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}
