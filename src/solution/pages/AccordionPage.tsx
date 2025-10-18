import '../styles/accordion-solution.css';
export default function AccordionPage() {
  return (
    <main className="page">
      <h2>Accordion (Solution)</h2>
      <section className="accordion">
        <details open>
          <summary>Section One</summary>
          <div className="panel">
            <p>Content for the first accordion section.</p>
          </div>
        </details>
        <details>
          <summary>Section Two</summary>
          <div className="panel">
            <p>Second section content.</p>
          </div>
        </details>
        <details>
          <summary>Section Three</summary>
          <div className="panel">
            <p>Third section content.</p>
          </div>
        </details>
      </section>
    </main>
  );
}
