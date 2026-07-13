"use client";

type NarrationControlsProps = {
  muted: boolean;
  transcriptVisible: boolean;
  onReplay: () => void;
  onToggleMute: () => void;
  onContinueSilent: () => void;
  onToggleTranscript: () => void;
  onReturn: () => void;
};

export function NarrationControls({
  muted,
  transcriptVisible,
  onReplay,
  onToggleMute,
  onContinueSilent,
  onToggleTranscript,
  onReturn,
}: NarrationControlsProps) {
  return (
    <div className="narration-controls" aria-label="Narration and experience controls">
      <button type="button" onClick={onReplay}>Replay Narration</button>
      <span aria-hidden="true" />
      <button type="button" onClick={onToggleMute} aria-pressed={muted}>{muted ? "Unmute" : "Mute"}</button>
      <button type="button" onClick={onContinueSilent}>Continue Without Audio</button>
      <button type="button" onClick={onToggleTranscript} aria-expanded={transcriptVisible}>Transcript</button>
      <button type="button" onClick={onReturn}>Return to Introduction</button>
    </div>
  );
}
