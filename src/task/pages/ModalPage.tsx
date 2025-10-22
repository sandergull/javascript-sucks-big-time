import '../styles/modal-task.css';
export default function ModalPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag en Modal</h2>

      <div className="task-description">
        <h3>Hva skal du lage?</h3>
        <p>En modal dialog som åpnes fra en lenke/knapp og kan lukkes igjen.</p>

        <h3>Krav</h3>
        <ul>
          <li>Knapp eller lenke som åpner modal</li>
          <li>Modal med innhold og lukkeknapp</li>
          <li>Mørk overlay bak modal</li>
          <li>Kun HTML og CSS - ingen JavaScript</li>
        </ul>

        <details className="hint-section">
          <summary>💡 Trenger du hint?</summary>
          <div className="hint-content">
            <p>
              <strong>Metode 1:</strong> <code>:target</code> pseudo-klassen med URL-fragmenter
            </p>
            <p>
              <strong>Metode 2:</strong> <code>&lt;dialog&gt;</code> element med <code>[open]</code>{' '}
              attributt
            </p>
            <p>
              <strong>Søkeord:</strong> "CSS target modal" eller "dialog element CSS"
            </p>
          </div>
        </details>
      </div>

      <div className="sandbox" aria-label="Din modal løsning her"></div>
    </main>
  );
}
