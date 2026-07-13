"use client";

import { useEffect } from "react";

type NarrationProps = {
  active: boolean;
  play: (setCaption: (caption: string) => void) => Promise<void>;
  stop: () => void;
  onCaption: (caption: string) => void;
  onComplete: () => void;
};

export function Narration({ active, play, stop, onCaption, onComplete }: NarrationProps) {
  useEffect(() => {
    if (!active) return;
    let cancelled = false;

    void play(onCaption).then(() => {
      if (!cancelled) onComplete();
    });

    return () => {
      cancelled = true;
      stop();
    };
  }, [active, onCaption, onComplete, play, stop]);

  return null;
}
