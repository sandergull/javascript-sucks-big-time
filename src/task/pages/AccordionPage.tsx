import '../styles/accordion-task.css';
export default function AccordionPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag en Accordion</h2>
      <p>
        Mål: Tre seksjoner hvor brukeren kan åpne/lukke. Bruk enten <code>&lt;details&gt;</code> /
        <code>&lt;summary&gt;</code> eller et radio-pattern. Ingen JavaScript.
      </p>
      <p>
        Tips: <code>details[open]</code> kan styles. Hvis du velger radio-pattern må du sørge for at
        kun én seksjon er synlig om gangen.
      </p>
      <div className="sandbox" aria-label="Din accordion løsning her"></div>
    </main>
  );
}
