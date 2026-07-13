"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from "motion/react";
import { GacIntro } from "./GacIntro";
import { Narration } from "./Narration";
import { TasReveal } from "./TasReveal";
import { WelcomeScreen } from "./WelcomeScreen";
import { useExecutiveAudio } from "./useExecutiveAudio";

type OpeningStage = "consent" | "black" | "identity" | "power" | "welcome";

function BlackFrame({ consent, onBegin }: { consent: boolean; onBegin: () => void }) {
  return (
    <motion.section
      className="absolute inset-0 flex min-h-[100svh] items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {consent ? (
        <motion.button
          type="button"
          onClick={onBegin}
          className="audio-gate group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 1.2 }}
        >
          <span className="audio-gate-line" aria-hidden="true" />
          <span>Begin Executive Preview</span>
          <span className="text-[0.52rem] tracking-[0.26em] text-stone-600 group-hover:text-stone-400">
            Sound enabled
          </span>
        </motion.button>
      ) : (
        <span className="sr-only">Executive preview loading</span>
      )}
    </motion.section>
  );
}

export function ExecutiveOpening() {
  const [stage, setStage] = useState<OpeningStage>("consent");
  const [showPresents, setShowPresents] = useState(false);
  const [narrationActive, setNarrationActive] = useState(false);
  const [caption, setCaption] = useState("");
  const [muted, setMutedState] = useState(false);
  const [entered, setEntered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { startAmbient, playNarration, stopNarration, setMuted } = useExecutiveAudio();

  const begin = useCallback(() => {
    void startAmbient();
    setMuted(false);
    setMutedState(false);
    setShowPresents(false);
    setNarrationActive(false);
    setCaption("");
    setStage("black");
  }, [setMuted, startAmbient]);

  useEffect(() => {
    if (stage !== "black") return;
    const timer = window.setTimeout(() => setStage("identity"), prefersReducedMotion ? 350 : 1100);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, stage]);

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
    setStage("black");
  }, [setMuted, startAmbient, stopNarration]);

  const continueSilent = useCallback(() => {
    setMuted(true);
    setMutedState(true);
  }, [setMuted]);

  const enterExperience = useCallback(() => {
    setEntered(true);
    window.dispatchEvent(new CustomEvent("tas:enter-experience"));
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-[100svh] overflow-hidden bg-black text-stone-100" aria-label="TAS HQ executive opening">
        <AnimatePresence mode="wait">
          {stage === "consent" && <BlackFrame key="consent" consent onBegin={begin} />}
          {stage === "black" && <BlackFrame key="black" consent={false} onBegin={begin} />}
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
        </AnimatePresence>

        <Narration
          active={narrationActive}
          play={playNarration}
          stop={stopNarration}
          onCaption={setCaption}
          onComplete={completeNarration}
        />
      </main>
    </MotionConfig>
  );
}
