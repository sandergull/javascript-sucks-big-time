import '../styles/tabs-task.css';
export default function TabsPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag Tabs</h2>
      <p>
        Mål: Tre faner (tabs) hvor kun én panel er synlig. Bruk radio inputs + labels + CSS
        selektorer. Ingen JavaScript.
      </p>
      <p>
        Hint: Skjul radio med <code>opacity:0</code>. Bruk{' '}
        <code>#id:checked ~ container #panel</code> for å vise korrekt panel.
      </p>
      <div className="sandbox" aria-label="Din tabs løsning her"></div>
    </main>
  );
}
