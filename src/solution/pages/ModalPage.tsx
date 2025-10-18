import '../styles/modal-solution.css';
export default function ModalPage() {
  return (
    <main className="page">
      <h2>Modal (Solution)</h2>
      <p>
        <a href="#modal" className="open-modal-btn">
          Open Modal
        </a>
      </p>
      <div
        id="modal"
        className="modal"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-content">
          <h3 id="modal-title">Solution Modal</h3>
          <p>Modal content displayed via :target pseudo-class. Close with the link below.</p>
          <a href="#close" className="close-modal" aria-label="Close">
            ×
          </a>
        </div>
      </div>
      <a id="close" href="#" hidden aria-hidden="true">
        Close
      </a>
    </main>
  );
}
