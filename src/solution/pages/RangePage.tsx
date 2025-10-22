import '../styles/range-solution.css';

export default function RangePage() {
  return (
    <main className="page">
      <h2>Range Input (Solution)</h2>
      <div className="range-demo">
        <form>
          <label htmlFor="skill-level">JavaScript Skill Level</label>
          <input
            type="range"
            id="skill-level"
            name="skill"
            min="0"
            max="10"
            defaultValue="5"
            list="skill-levels"
          />
          <datalist id="skill-levels">
            <option value="0">Never used</option>
            <option value="2">Beginner</option>
            <option value="4">Learning</option>
            <option value="6">Decent</option>
            <option value="8">Good</option>
            <option value="10">Expert</option>
          </datalist>
        </form>
      </div>
    </main>
  );
}
