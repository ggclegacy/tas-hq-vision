"use client";

import { useEffect } from "react";
import type { NarrationScript } from "./narration-script";

type NarrationProps = {
  playbackId: number | null;
  script: NarrationScript;
  play: (script: NarrationScript, setCaption: (caption: string) => void) => Promise<void>;
  stop: () => void;
  onCaption: (caption: string) => void;
  onComplete: () => void;
};

export function Narration({ playbackId, script, play, stop, onCaption, onComplete }: NarrationProps) {
  useEffect(() => {
    if (playbackId === null) return;
    let cancelled = false;

    void play(script, onCaption).then(() => {
      if (!cancelled) onComplete();
    });

    return () => {
      cancelled = true;
      stop();
    };
  }, [onCaption, onComplete, play, playbackId, script, stop]);

  return null;
}
