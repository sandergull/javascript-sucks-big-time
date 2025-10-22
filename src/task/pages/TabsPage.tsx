import '../styles/tabs-task.css';
export default function TabsPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag Tabs</h2>

      <div className="task-description">
        <h3>Hva skal du lage?</h3>
        <p>Et tab-system med tre faner hvor kun ett innholdspanel vises om gangen.</p>

        <h3>Krav</h3>
        <ul>
          <li>Tre klikkbare faner (tabs)</li>
          <li>Tre tilhørende innholdspaneler</li>
          <li>Kun ett panel synlig om gangen</li>
          <li>Kun HTML og CSS - ingen JavaScript</li>
        </ul>

        <details className="hint-section">
          <summary>💡 Trenger du hint?</summary>
          <div className="hint-content">
            <p>
              <strong>HTML-struktur:</strong> Radio inputs (samme name) + labels + sibling
              selektorer.
            </p>
            <p>
              <strong>CSS-teknikk:</strong> <code>:checked</code> + <code>~</code> kombinatoren
            </p>
            <p>
              <strong>Søkeord:</strong> "CSS radio button tabs sibling combinator"
            </p>
          </div>
        </details>
      </div>

      <div className="sandbox" aria-label="Din tabs løsning her"></div>
    </main>
  );
}
