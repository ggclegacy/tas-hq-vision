"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Narration } from "@/components/opening/Narration";
import { GATEWAY_NARRATION, type NarrationScript } from "@/components/opening/narration-script";
import { CompassPreview } from "./CompassPreview";
import { GatewayEnvironment } from "./GatewayEnvironment";
import { NarrationControls } from "./NarrationControls";
import { PlatformConnection } from "./PlatformConnection";
import { PlatformPortal } from "./PlatformPortal";
import { SectionProgress } from "./SectionProgress";
import { PLATFORMS, type PlatformId } from "./gateway-content";

type ExecutiveVisionGatewayProps = {
  muted: boolean;
  playNarration: (script: NarrationScript, setCaption: (caption: string) => void) => Promise<void>;
  stopNarration: () => void;
  onSetMuted: (muted: boolean) => void;
  onReturnIntroduction: () => void;
  onBeginTas: () => void;
  autoNarrate?: boolean;
};

export function ExecutiveVisionGateway({
  muted,
  playNarration,
  stopNarration,
  onSetMuted,
  onReturnIntroduction,
  onBeginTas,
  autoNarrate = true,
}: ExecutiveVisionGatewayProps) {
  const [activePlatform, setActivePlatform] = useState<PlatformId>("tas");
  const [playbackId, setPlaybackId] = useState<number | null>(null);
  const [caption, setCaption] = useState("");
  const [transcriptVisible, setTranscriptVisible] = useState(false);
  const [compassPreviewOpen, setCompassPreviewOpen] = useState(false);
  const priorFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!autoNarrate) return;
    const timer = window.setTimeout(() => setPlaybackId(1), 1350);
    return () => window.clearTimeout(timer);
  }, [autoNarrate]);

  const narrationComplete = useCallback(() => setPlaybackId(null), []);

  const replayNarration = useCallback(() => {
    stopNarration();
    setCaption("");
    setPlaybackId((current) => (current ?? 0) + 1);
  }, [stopNarration]);

  const toggleMute = useCallback(() => onSetMuted(!muted), [muted, onSetMuted]);

  const continueSilent = useCallback(() => {
    stopNarration();
    setPlaybackId(null);
    onSetMuted(true);
  }, [onSetMuted, stopNarration]);

  const returnToIntroduction = useCallback(() => {
    stopNarration();
    onReturnIntroduction();
  }, [onReturnIntroduction, stopNarration]);

  const openCompassPreview = useCallback(() => {
    stopNarration();
    setPlaybackId(null);
    priorFocusRef.current = document.activeElement as HTMLElement | null;
    setActivePlatform("compass");
    setCompassPreviewOpen(true);
  }, [stopNarration]);

  const closeCompassPreview = useCallback(() => {
    setCompassPreviewOpen(false);
    window.setTimeout(() => priorFocusRef.current?.focus(), 0);
  }, []);

  const beginTas = useCallback(() => {
    stopNarration();
    setPlaybackId(null);
    setActivePlatform("tas");
    onBeginTas();
  }, [onBeginTas, stopNarration]);

  return (
    <GatewayEnvironment>
      <motion.div
        className="gateway-shell"
        initial={{ opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="gateway-header">
          <SectionProgress />
          <NarrationControls
            muted={muted}
            transcriptVisible={transcriptVisible}
            onReplay={replayNarration}
            onToggleMute={toggleMute}
            onContinueSilent={continueSilent}
            onToggleTranscript={() => setTranscriptVisible((visible) => !visible)}
            onReturn={returnToIntroduction}
          />
        </header>

        <div className="gateway-heading">
          <p>One Apothecary <span aria-hidden="true">/</span> Two connected intelligence systems</p>
          <h1 className="sr-only">Executive Vision Gateway</h1>
        </div>

        <div className="platform-composition" onMouseLeave={() => setActivePlatform("tas")}>
          <PlatformConnection activePlatform={activePlatform} />
          <PlatformPortal
            platform={PLATFORMS.tas}
            active={activePlatform === "tas"}
            onActivate={() => setActivePlatform("tas")}
            onAction={beginTas}
          />
          <PlatformPortal
            platform={PLATFORMS.compass}
            active={activePlatform === "compass"}
            onActivate={() => setActivePlatform("compass")}
            onAction={openCompassPreview}
          />
        </div>

        <div className="gateway-caption-zone">
          <AnimatePresence mode="wait">
            {caption && (
              <motion.p
                key={caption}
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {caption}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {transcriptVisible && (
            <motion.aside
              className="gateway-transcript"
              aria-label="Onyx narration transcript"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
            >
              <p>Onyx / Ecosystem Introduction</p>
              <div>{GATEWAY_NARRATION.lines.join(" ")}</div>
            </motion.aside>
          )}
        </AnimatePresence>
      </motion.div>

      <Narration
        playbackId={playbackId}
        script={GATEWAY_NARRATION}
        play={playNarration}
        stop={stopNarration}
        onCaption={setCaption}
        onComplete={narrationComplete}
      />

      <AnimatePresence>
        {compassPreviewOpen && <CompassPreview key="compass-preview" onClose={closeCompassPreview} />}
      </AnimatePresence>
    </GatewayEnvironment>
  );
}
