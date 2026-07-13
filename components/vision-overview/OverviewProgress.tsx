export function OverviewProgress() {
  return (
    <nav className="overview-progress" aria-label="Experience progress">
      <span><b>01</b> Introduction <i>Complete</i></span>
      <em aria-hidden="true" />
      <span><b>02</b> Vision Gateway <i>Complete</i></span>
      <em aria-hidden="true" />
      <span aria-current="step"><b>03</b> Vision Overview <i>Current</i></span>
    </nav>
  );
}
