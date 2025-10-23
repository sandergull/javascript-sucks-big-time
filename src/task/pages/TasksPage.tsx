import '../styles/tasks-task.css';

export default function TasksPage() {
  return (
    <main className="page">
      <h2>Student Tasks: Bygg komponenter med kun HTML & CSS</h2>
      <p>
        Under finner du fem oppgaver. Målet er å lage interaktive komponenter uten JavaScript. Bruk
        semantisk HTML, attributter og moderne CSS selektorer/pseudo-klasser. Når du er ferdig kan
        du sammenligne med løsningene i komponent-seksjonen.
      </p>

      <div className="task-instructions">
        <h3>Instruksjoner</h3>
        <ul>
          <li>Prøv først å løse oppgaven på egen hånd</li>
          <li>Åpne hint-seksjonen kun hvis du står fast</li>
        </ul>
      </div>

      <ol className="task-list">
        <li>
          <h3>Oppgave 1: Accordion</h3>
          <p>
            Lag en accordion med tre seksjoner som kan åpnes/lukkes. Bruk semantisk HTML uten
            JavaScript.
          </p>
          <details className="hint-section">
            <summary>💡 Vis hint</summary>
            <p>
              Se på <code>&lt;details&gt;</code> og <code>&lt;summary&gt;</code> elementene.
            </p>
          </details>
        </li>

        <li>
          <h3>Oppgave 2: Tabs</h3>
          <p>Lag tre faner hvor kun ett panel er synlig om gangen. Bruk ren CSS uten JavaScript.</p>
          <details className="hint-section">
            <summary>💡 Vis hint</summary>
            <p>
              Bruk skjulte radio inputs + labels + sibling selektorer (<code>~</code>).
            </p>
          </details>
        </li>

        <li>
          <h3>Oppgave 3: Modal</h3>
          <p>Lag en modal som åpnes fra en lenke og lukkes fra en annen. Ren CSS-løsning.</p>
          <details className="hint-section">
            <summary>💡 Vis hint</summary>
            <p>
              Utforsk <code>:target</code> pseudo-klassen eller <code>&lt;dialog&gt;</code>{' '}
              elementet.
            </p>
          </details>
        </li>

        <li>
          <h3>Oppgave 4: Carousel</h3>
          <p>Lag et horisontalt bildegalleri som "snapper" til hver slide ved scrolling.</p>
          <details className="hint-section">
            <summary>💡 Vis hint</summary>
            <p>
              Se på CSS <code>scroll-snap</code> egenskaper og flexbox med <code>overflow-x</code>.
            </p>
          </details>
        </li>

        <li>
          <h3>Oppgave 5: Range Input</h3>
          <p>Lag en range slider med labels under som automatisk tilpasser seg antall options.</p>
          <details className="hint-section">
            <summary>💡 Vis hint</summary>
            <p>
              Kombiner <code>:has()</code> selector, CSS Grid og <code>&lt;datalist&gt;</code>.
            </p>
          </details>
        </li>
      </ol>
    </main>
  );
}
