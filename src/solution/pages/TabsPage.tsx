import '../styles/tabs-solution.css';
export default function TabsPage() {
  return (
    <main className="page">
      <h2>Tabs (Solution)</h2>
      <section className="tabs" aria-label="Tabs Example">
        <div className="tab-controls">
          <input type="radio" name="tabs" id="tab-1" defaultChecked />
          <label htmlFor="tab-1">First</label>
          <input type="radio" name="tabs" id="tab-2" />
          <label htmlFor="tab-2">Second</label>
          <input type="radio" name="tabs" id="tab-3" />
          <label htmlFor="tab-3">Third</label>
        </div>
        <div className="tab-panels">
          <div id="panel-1">
            <p>First tab panel content.</p>
          </div>
          <div id="panel-2">
            <p>Second tab panel content.</p>
          </div>
          <div id="panel-3">
            <p>Third tab panel content.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
