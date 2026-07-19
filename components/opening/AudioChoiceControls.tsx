"use client";

type AudioChoiceControlsProps = {
  muted: boolean;
  disabled: boolean;
  onToggleSound: () => void;
  onContinueSilent: () => void;
  onReplay: () => void;
};

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 8v4h3l4 3V5L6 8H3Z" />
      {muted ? <path d="m13 8 4 4m0-4-4 4" /> : <path d="M13 7.2c1.7 1.5 1.7 4.1 0 5.6" />}
    </svg>
  );
}

export function AudioChoiceControls({
  muted,
  disabled,
  onToggleSound,
  onContinueSilent,
  onReplay,
}: AudioChoiceControlsProps) {
  return (
    <div className="audio-choice-controls" aria-label="Opening audio controls">
      <button type="button" onClick={onToggleSound} disabled={disabled} aria-pressed={muted} aria-label={muted ? "Turn sound on" : "Mute sound"}>
        <SoundIcon muted={muted} />
        <span>{muted ? "Sound Muted" : "Sound On"}</span>
      </button>
      <button type="button" onClick={onContinueSilent} disabled={disabled}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M10 4v12" /></svg>
        <span>Continue Without Audio</span>
      </button>
      <button type="button" onClick={onReplay} disabled={disabled}>
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.5 7A6 6 0 1 0 16 12M15.5 7V3m0 4h-4" /></svg>
        <span>Replay Introduction</span>
      </button>
    </div>
  );
}
