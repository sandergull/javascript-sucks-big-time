import '../styles/modal-task.css';
export default function ModalPage() {
  return (
    <main className="page">
      <h2>Oppgave: Lag en Modal</h2>
      <p>
        Mål: En modal som åpnes via lenke/knapp og lukkes via en annen lenke. Bruk fragment og
        <code>:target</code> eller utforsk <code>&lt;dialog&gt;</code>. Ingen JavaScript.
      </p>
      <p>
        Hint: Start med <code>display:none</code> og vis med <code>:target</code>. Husk overlay og
        sentrering.
      </p>
      <div className="sandbox" aria-label="Din modal løsning her"></div>
    </main>
  );
}
