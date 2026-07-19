"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "motion/react";
import { ExecutiveAccessPortal } from "./ExecutiveAccessPortal";
import { Narration } from "./Narration";
import { OPENING_NARRATION } from "./narration-script";
import { OpeningHandoff } from "./OpeningHandoff";
import { TasExecutiveIntro } from "./TasExecutiveIntro";
import { useExecutiveAudio } from "./useExecutiveAudio";
import { GatewayTransition } from "@/components/gateway/GatewayTransition";
import { ExecutiveVisionOverview } from "@/components/vision-overview/ExecutiveVisionOverview";

type OpeningStage = "access" | "handoff" | "tas-intro" | "gateway-transition" | "vision-overview";

export function ExecutiveOpening() {
  const [stage, setStage] = useState<OpeningStage>("access");
  const [accessConfirmed, setAccessConfirmed] = useState(false);
  const [narrationActive, setNarrationActive] = useState(false);
  const [narrationFinished, setNarrationFinished] = useState(false);
  const [tasCopyVisible, setTasCopyVisible] = useState(false);
  const [caption, setCaption] = useState("");
  const [muted, setMutedState] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { startAmbient, playNarration, stopNarration, setMuted } = useExecutiveAudio();

  const begin = useCallback((silent = muted) => {
    void startAmbient();
    setMuted(silent);
    setMutedState(silent);
    setNarrationActive(false);
    setNarrationFinished(false);
    setTasCopyVisible(false);
    setCaption("");
    setAccessConfirmed(true);
  }, [muted, setMuted, startAmbient]);

  useEffect(() => {
    if (stage !== "access" || !accessConfirmed) return;
    const timer = window.setTimeout(() => setStage("handoff"), prefersReducedMotion ? 220 : 760);
    return () => window.clearTimeout(timer);
  }, [accessConfirmed, prefersReducedMotion, stage]);

  useEffect(() => {
    if (stage !== "handoff") return;
    const timer = window.setTimeout(() => setStage("tas-intro"), prefersReducedMotion ? 320 : 1150);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, stage]);

  useEffect(() => {
    if (stage !== "tas-intro" || narrationFinished) return;
    const narrationTimer = window.setTimeout(() => setNarrationActive(true), prefersReducedMotion ? 180 : 420);
    return () => window.clearTimeout(narrationTimer);
  }, [narrationFinished, prefersReducedMotion, stage]);

  useEffect(() => {
    if (stage !== "tas-intro" || tasCopyVisible) return;
    const copyTimer = window.setTimeout(() => setTasCopyVisible(true), prefersReducedMotion ? 520 : 3400);
    return () => window.clearTimeout(copyTimer);
  }, [prefersReducedMotion, stage, tasCopyVisible]);

  useEffect(() => {
    if (stage !== "gateway-transition") return;
    const timer = window.setTimeout(() => setStage("vision-overview"), prefersReducedMotion ? 500 : 2200);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, stage]);

  const completeNarration = useCallback(() => {
    setNarrationActive(false);
    setNarrationFinished(true);
  }, []);

  const replay = useCallback(() => {
    stopNarration();
    void startAmbient();
    setMuted(false);
    setMutedState(false);
    setNarrationActive(false);
    setNarrationFinished(false);
    setTasCopyVisible(false);
    setCaption("");
    setAccessConfirmed(false);
    setStage("handoff");
  }, [setMuted, startAmbient, stopNarration]);

  const beginSilent = useCallback(() => begin(true), [begin]);

  const continueSilent = useCallback(() => {
    stopNarration();
    setMuted(true);
    setMutedState(true);
    setNarrationActive(false);
    setNarrationFinished(true);
    setCaption("");
  }, [setMuted, stopNarration]);

  const toggleAccessSound = useCallback(() => {
    const nextMuted = !muted;
    if (!nextMuted) void startAmbient();
    setMuted(nextMuted);
    setMutedState(nextMuted);
  }, [muted, setMuted, startAmbient]);

  const setAudioMuted = useCallback((nextMuted: boolean) => {
    setMuted(nextMuted);
    setMutedState(nextMuted);
  }, [setMuted]);

  const enterExperience = useCallback(() => {
    setStage("gateway-transition");
    window.dispatchEvent(new CustomEvent("tas:enter-experience"));
  }, []);

  const returnToIntroduction = useCallback(() => {
    setNarrationActive(false);
    setNarrationFinished(true);
    setTasCopyVisible(true);
    setCaption("");
    setStage("tas-intro");
  }, []);

  const tasIntroComplete = narrationFinished && tasCopyVisible;

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-[100svh] overflow-hidden bg-black text-stone-100" aria-label="TAS HQ executive vision experience">
        <AnimatePresence mode="sync">
          {stage === "access" && (
            <ExecutiveAccessPortal
              key="access"
              muted={muted}
              confirmed={accessConfirmed}
              onBegin={() => begin()}
              onToggleSound={toggleAccessSound}
              onContinueSilent={beginSilent}
              onReplay={() => begin()}
            />
          )}
          {stage === "handoff" && <OpeningHandoff key="handoff" />}
          {stage === "tas-intro" && (
            <TasExecutiveIntro
              key="tas-intro"
              caption={caption}
              copyVisible={tasCopyVisible}
              complete={tasIntroComplete}
              muted={muted}
              onEnter={enterExperience}
              onContinueSilent={continueSilent}
              onReplay={replay}
              onToggleMute={() => setAudioMuted(!muted)}
            />
          )}
          {stage === "gateway-transition" && <GatewayTransition key="gateway-transition" />}
          {stage === "vision-overview" && (
            <ExecutiveVisionOverview
              key="vision-overview"
              muted={muted}
              playNarration={playNarration}
              stopNarration={stopNarration}
              onSetMuted={setAudioMuted}
              onReturnGateway={returnToIntroduction}
            />
          )}
        </AnimatePresence>

        <Narration
          playbackId={narrationActive ? 1 : null}
          script={OPENING_NARRATION}
          play={playNarration}
          stop={stopNarration}
          onCaption={setCaption}
          onComplete={completeNarration}
        />
      </main>
    </MotionConfig>
  );
}
