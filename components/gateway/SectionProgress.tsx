export function SectionProgress() {
  return (
    <nav className="section-progress" aria-label="Experience progress">
      <div className="progress-item progress-complete">
        <span>01</span>
        <span>Introduction</span>
        <span aria-label="Complete">Complete</span>
      </div>
      <div className="progress-rule" aria-hidden="true"><i /></div>
      <div className="progress-item progress-current" aria-current="step">
        <span>02</span>
        <span>Vision Gateway</span>
        <span>Current</span>
      </div>
    </nav>
  );
}
