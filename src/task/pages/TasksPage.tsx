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
      <ol className="task-list">
        <li>
          <h3>Oppgave 1: Accordion</h3>
          <p>
            Lag en accordion med tre seksjoner. Kun én skal være åpen samtidig. Hint:{' '}
            <code>&lt;details&gt;</code> /<code>&lt;summary&gt;</code> eller radio-gruppe pattern.
          </p>
        </li>
        <li>
          <h3>Oppgave 2: Tabs</h3>
          <p>
            Tre faner hvor aktivt innhold vises. Hint: Skjulte radio inputs + labels + sibling
            selektorer.
          </p>
        </li>
        <li>
          <h3>Oppgave 3: Modal</h3>
          <p>
            Åpnes fra lenke/knapp og lukkes fra en annen. Hint: <code>:target</code> + overlay eller{' '}
            <code>&lt;dialog&gt;</code>.
          </p>
        </li>
        <li>
          <h3>Oppgave 4: Carousel</h3>
          <p>
            Horisontalt galleri med minst tre slides som snapper ved scroll. Hint:{' '}
            <code>scroll-snap</code>.
          </p>
        </li>
        <li>
          <h3>Oppgave 5: Tooltip</h3>
          <p>
            Tooltip på knapp og lenke ved hover og fokus. Hint: <code>data-tooltip</code> +{' '}
            <code>::after</code>.
          </p>
        </li>
      </ol>
      <section>
        <h3>Sandbox</h3>
        <p>
          Under er et tomt område du kan bruke mens du eksperimenterer. Legg inn markup og koble til
          egen midlertidig CSS i filene i <code>src/task/styles</code>.
        </p>
        <div className="sandbox" aria-label="Sandbox"></div>
      </section>
    </main>
  );
}
