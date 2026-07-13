"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Narration } from "@/components/opening/Narration";
import { OVERVIEW_NARRATION, type NarrationScript } from "@/components/opening/narration-script";
import { ChapterCompletion } from "./ChapterCompletion";
import { OverviewControls } from "./OverviewControls";
import { OverviewProgress } from "./OverviewProgress";
import { PillarSystem } from "./PillarSystem";
import type { PillarId } from "./overview-content";

type ExecutiveVisionOverviewProps = {
  muted: boolean;
  playNarration: (script: NarrationScript, setCaption: (caption: string) => void) => Promise<void>;
  stopNarration: () => void;
  onSetMuted: (muted: boolean) => void;
  onReturnGateway: () => void;
};

const PILLAR_BY_LINE: Array<[string, PillarId]> = [
  ["Service", "service"],
  ["Standard", "standard"],
  ["Collective", "collective"],
  ["Growth", "growth"],
];

export function ExecutiveVisionOverview({
  muted,
  playNarration,
  stopNarration,
  onSetMuted,
  onReturnGateway,
}: ExecutiveVisionOverviewProps) {
  const [activePillar, setActivePillar] = useState<PillarId>("service");
  const [caption, setCaption] = useState("");
  const [playbackId, setPlaybackId] = useState<number | null>(null);
  const [narrationComplete, setNarrationComplete] = useState(false);
  const [transcriptVisible, setTranscriptVisible] = useState(false);
  const [completionOpen, setCompletionOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setPlaybackId(1), reducedMotion ? 180 : 900);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  const handleCaption = useCallback((nextCaption: string) => {
    setCaption(nextCaption);
    const matchedPillar = PILLAR_BY_LINE.find(([name]) => nextCaption.startsWith(name));
    if (matchedPillar) setActivePillar(matchedPillar[1]);
  }, []);

  const completeNarration = useCallback(() => {
    setPlaybackId(null);
    setNarrationComplete(true);
  }, []);

  const replayNarration = useCallback(() => {
    stopNarration();
    onSetMuted(false);
    setCaption("");
    setNarrationComplete(false);
    setPlaybackId((current) => (current ?? 1) + 1);
  }, [onSetMuted, stopNarration]);

  const skipNarration = useCallback(() => {
    stopNarration();
    setPlaybackId(null);
    setCaption("");
    setNarrationComplete(true);
    onSetMuted(true);
  }, [onSetMuted, stopNarration]);

  const returnToGateway = useCallback(() => {
    stopNarration();
    onReturnGateway();
  }, [onReturnGateway, stopNarration]);

  return (
    <motion.section
      className="vision-overview-environment"
      aria-label="TAS HQ vision overview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="overview-architecture" aria-hidden="true" />
      <div className="overview-shell">
        <header className="overview-header">
          <OverviewProgress />
          <OverviewControls
            muted={muted}
            narrationRunning={playbackId !== null}
            transcriptVisible={transcriptVisible}
            onReplay={replayNarration}
            onToggleMute={() => onSetMuted(!muted)}
            onSkip={skipNarration}
            onToggleTranscript={() => setTranscriptVisible((visible) => !visible)}
            onReturn={returnToGateway}
          />
        </header>

        <div className="overview-heading">
          <span>Chapter 03 · TAS HQ Vision Overview</span>
          <h1>More Than an Employee App</h1>
          <p>
            An AI-powered employee operating system—connecting the people, knowledge,
            and standards behind The Apothecary Shoppe.
          </p>
        </div>

        <PillarSystem active={activePillar} onSelect={setActivePillar} />

        <div className="overview-narration-zone" aria-live="polite">
          <span>Onyx</span>
          <p>{caption || (narrationComplete ? "Four pillars. One connected headquarters." : "Establishing the TAS HQ framework…")}</p>
        </div>

        <AnimatePresence>
          {transcriptVisible && (
            <motion.aside
              className="overview-transcript"
              aria-label="Onyx narration transcript"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
            >
              <strong>Onyx · Vision Overview</strong>
              <p>{OVERVIEW_NARRATION.lines.join(" ")}</p>
            </motion.aside>
          )}
        </AnimatePresence>

        <div className="overview-explore">
          <span>The framework is established</span>
          <button type="button" onClick={() => setCompletionOpen(true)}>
            <b>Explore TAS HQ</b><i aria-hidden="true">→</i>
          </button>
        </div>
      </div>

      <Narration
        playbackId={playbackId}
        script={OVERVIEW_NARRATION}
        play={playNarration}
        stop={stopNarration}
        onCaption={handleCaption}
        onComplete={completeNarration}
      />

      <AnimatePresence>
        {completionOpen && (
          <ChapterCompletion
            onBack={() => setCompletionOpen(false)}
            onReturnGateway={returnToGateway}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
