import '../styles/tooltip-task.css';
export default function TooltipPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag Tooltips</h2>
      <p>
        Mål: Legg til tooltip på en knapp og en lenke. Teksten skal vises på hover og fokus. Bruk{' '}
        <code>data-*</code>-attributt + pseudo-elementer.
      </p>
      <p>
        Hint: <code>content: attr(data-tooltip)</code> i <code>::after</code>. Husk posisjonering og
        liten pil.
      </p>
      <div className="sandbox" aria-label="Din tooltip løsning her"></div>
    </main>
  );
}
