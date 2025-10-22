import '../styles/modal-solution.css';
export default function ModalPage() {
  return (
    <main className="page">
      <h2>Modal (Solution)</h2>

      <div className="modal-demos">
        <div className="demo-section">
          <h3>Method 1: :target pseudo-class</h3>
          <p>
            <a href="#target-modal" className="open-modal-btn">
              Open :target Modal
            </a>
          </p>
        </div>

        <div className="demo-section">
          <h3>Method 2: Dialog with [open] + :target</h3>
          <p>
            <a href="#open-dialog" className="open-modal-btn">
              Open Dialog Modal
            </a>
          </p>
        </div>
      </div>

      {/* Target Modal */}
      <div id="target-modal" className="modal">
        <div className="modal-content">
          <h3>:target Modal</h3>
          <p>This modal opens using the :target pseudo-class. Pure CSS solution!</p>
          <a href="#" className="close-modal">
            ×
          </a>
        </div>
      </div>

      {/* Dialog Modal - using [open] + :target */}
      <dialog id="open-dialog" className="dialog-modal" open>
        <div className="dialog-content">
          <h3>Dialog with [open] + :target</h3>
          <p>This modal uses [open] attribute + :target. Pure CSS!</p>
          <a href="#" className="close-dialog-btn">
            Close
          </a>
        </div>
      </dialog>
    </main>
  );
}
