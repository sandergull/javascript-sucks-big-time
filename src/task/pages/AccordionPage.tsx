import '../styles/accordion-task.css';
export default function AccordionPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag en Accordion</h2>

      <div className="task-description">
        <h3>Hva skal du lage?</h3>
        <p>
          En accordion med tre seksjoner som brukeren kan åpne og lukke ved å klikke på
          overskriftene.
        </p>

        <h3>Krav</h3>
        <ul>
          <li>Tre seksjoner med klikkbare overskrifter</li>
          <li>Innhold som vises/skjules når man klikker</li>
          <li>Kun HTML og CSS - ingen JavaScript</li>
        </ul>

        <details className="hint-section">
          <summary>💡 Trenger du hint?</summary>
          <div className="hint-content">
            <p>
              <strong>HTML-struktur:</strong> Se på <code>&lt;details&gt;</code> og{' '}
              <code>&lt;summary&gt;</code> elementene.
            </p>
            <p>
              <strong>Søkeord:</strong> "HTML details summary accordion"
            </p>
          </div>
        </details>
      </div>

      <div className="sandbox" aria-label="Din accordion løsning her"></div>
    </main>
  );
}
