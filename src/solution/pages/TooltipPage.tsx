import '../styles/tooltip-solution.css';
export default function TooltipPage() {
  return (
    <main className="page">
      <h2>Tooltip (Solution)</h2>
      <div className="tooltip-demo">
        <button className="tooltip-target" data-tooltip="Extra context">
          Hover me
        </button>
        <a href="#" className="tooltip-target" data-tooltip="Link info">
          Link tooltip
        </a>
      </div>
    </main>
  );
}
