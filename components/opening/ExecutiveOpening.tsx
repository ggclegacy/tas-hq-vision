"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "motion/react";
import { ExecutiveAccessPortal } from "./ExecutiveAccessPortal";
import { GacIntro } from "./GacIntro";
import { Narration } from "./Narration";
import { OPENING_NARRATION } from "./narration-script";
import { TasReveal } from "./TasReveal";
import { WelcomeScreen } from "./WelcomeScreen";
import { useExecutiveAudio } from "./useExecutiveAudio";
import { ExecutiveVisionGateway } from "@/components/gateway/ExecutiveVisionGateway";
import { GatewayTransition } from "@/components/gateway/GatewayTransition";

type OpeningStage = "access" | "identity" | "power" | "welcome" | "gateway-transition" | "gateway";

export function ExecutiveOpening() {
  const [stage, setStage] = useState<OpeningStage>("access");
  const [accessConfirmed, setAccessConfirmed] = useState(false);
  const [showPresents, setShowPresents] = useState(false);
  const [narrationActive, setNarrationActive] = useState(false);
  const [caption, setCaption] = useState("");
  const [muted, setMutedState] = useState(false);
  const [entered, setEntered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { startAmbient, playNarration, stopNarration, setMuted } = useExecutiveAudio();

  const begin = useCallback((silent = muted) => {
    void startAmbient();
    setMuted(silent);
    setMutedState(silent);
    setShowPresents(false);
    setNarrationActive(false);
    setCaption("");
    setAccessConfirmed(true);
  }, [muted, setMuted, startAmbient]);

  useEffect(() => {
    if (stage !== "access" || !accessConfirmed) return;
    const timer = window.setTimeout(() => setStage("identity"), prefersReducedMotion ? 260 : 850);
    return () => window.clearTimeout(timer);
  }, [accessConfirmed, prefersReducedMotion, stage]);

  useEffect(() => {
    if (stage !== "identity") return;
    const presentsTimer = window.setTimeout(() => setShowPresents(true), prefersReducedMotion ? 500 : 2500);
    const narrationTimer = window.setTimeout(() => setNarrationActive(true), prefersReducedMotion ? 1100 : 4100);
    return () => {
      window.clearTimeout(presentsTimer);
      window.clearTimeout(narrationTimer);
    };
  }, [prefersReducedMotion, stage]);

  useEffect(() => {
    if (stage !== "power") return;
    const timer = window.setTimeout(() => setStage("welcome"), prefersReducedMotion ? 1200 : 5000);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, stage]);

  useEffect(() => {
    if (stage !== "gateway-transition") return;
    const timer = window.setTimeout(() => setStage("gateway"), prefersReducedMotion ? 500 : 1900);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, stage]);

  const completeNarration = useCallback(() => {
    setNarrationActive(false);
    setCaption("");
    setStage("power");
  }, []);

  const replay = useCallback(() => {
    stopNarration();
    void startAmbient();
    setMuted(false);
    setMutedState(false);
    setEntered(false);
    setShowPresents(false);
    setNarrationActive(false);
    setCaption("");
    setAccessConfirmed(false);
    setStage("identity");
  }, [setMuted, startAmbient, stopNarration]);

  const beginSilent = useCallback(() => begin(true), [begin]);

  const continueSilent = useCallback(() => {
    setMuted(true);
    setMutedState(true);
  }, [setMuted]);

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
    setEntered(true);
    setStage("gateway-transition");
    window.dispatchEvent(new CustomEvent("tas:enter-experience"));
  }, []);

  const returnToIntroduction = useCallback(() => {
    setEntered(false);
    setStage("welcome");
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-[100svh] overflow-hidden bg-black text-stone-100" aria-label="TAS HQ executive vision experience">
        <AnimatePresence mode="wait">
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
          {stage === "identity" && <GacIntro key="identity" showPresents={showPresents} caption={caption} />}
          {stage === "power" && <TasReveal key="power" />}
          {stage === "welcome" && (
            <WelcomeScreen
              key="welcome"
              muted={muted}
              entered={entered}
              onEnter={enterExperience}
              onContinueSilent={continueSilent}
              onReplay={replay}
            />
          )}
          {stage === "gateway-transition" && <GatewayTransition key="gateway-transition" />}
          {stage === "gateway" && (
            <ExecutiveVisionGateway
              key="gateway"
              muted={muted}
              playNarration={playNarration}
              stopNarration={stopNarration}
              onSetMuted={setAudioMuted}
              onReturnIntroduction={returnToIntroduction}
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
