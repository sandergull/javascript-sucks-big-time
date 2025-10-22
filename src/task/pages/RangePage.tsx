import '../styles/range-task.css';

export default function RangePage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag Range Input</h2>

      <div className="task-description">
        <h3>Hva skal du lage?</h3>
        <p>
          En range slider med labels under som automatisk tilpasser seg til antall options i
          datalist.
        </p>

        <h3>Krav</h3>
        <ul>
          <li>Range input med min/max verdier</li>
          <li>Datalist med minst 3 options</li>
          <li>Labels posisjonert under slider</li>
          <li>Layout som tilpasser seg antall options</li>
          <li>Kun HTML og CSS - ingen JavaScript</li>
        </ul>

        <details className="hint-section">
          <summary>💡 Trenger du hint?</summary>
          <div className="hint-content">
            <p>
              <strong>HTML-struktur:</strong> <code>&lt;input type="range"&gt;</code> +{' '}
              <code>&lt;datalist&gt;</code>
            </p>
            <p>
              <strong>CSS-teknikker:</strong> <code>:has()</code> selector for å telle, CSS Grid for
              layout
            </p>
            <p>
              <strong>Søkeord:</strong> "CSS has selector count" og "CSS Grid repeat function"
            </p>
          </div>
        </details>
      </div>

      <div className="sandbox" aria-label="Din range input løsning her">
        {/* Students will add their form here */}
      </div>
    </main>
  );
}
