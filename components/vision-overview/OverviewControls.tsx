"use client";

type OverviewControlsProps = {
  muted: boolean;
  narrationRunning: boolean;
  transcriptVisible: boolean;
  onReplay: () => void;
  onToggleMute: () => void;
  onSkip: () => void;
  onToggleTranscript: () => void;
  onReturn: () => void;
};

export function OverviewControls({
  muted,
  narrationRunning,
  transcriptVisible,
  onReplay,
  onToggleMute,
  onSkip,
  onToggleTranscript,
  onReturn,
}: OverviewControlsProps) {
  return (
    <div className="overview-controls" aria-label="Vision overview controls">
      <button type="button" onClick={onReplay}>Replay Narration</button>
      <span aria-hidden="true" />
      <button type="button" onClick={onToggleMute} aria-pressed={muted}>{muted ? "Unmute" : "Mute"}</button>
      {narrationRunning && <button type="button" onClick={onSkip}>Continue Without Audio</button>}
      <button type="button" onClick={onToggleTranscript} aria-expanded={transcriptVisible}>Transcript</button>
      <button type="button" onClick={onReturn}>Return to TAS HQ Introduction</button>
    </div>
  );
}
