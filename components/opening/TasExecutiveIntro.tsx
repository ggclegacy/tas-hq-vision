"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { DisplayText, Eyebrow } from "./Typography";

type TasExecutiveIntroProps = {
  caption: string;
  copyVisible: boolean;
  complete: boolean;
  muted: boolean;
  onEnter: () => void;
  onContinueSilent: () => void;
  onReplay: () => void;
  onToggleMute: () => void;
};

export function TasExecutiveIntro({
  caption,
  copyVisible,
  complete,
  muted,
  onEnter,
  onContinueSilent,
  onReplay,
  onToggleMute,
}: TasExecutiveIntroProps) {
  return (
    <motion.section
      className="tas-executive-intro"
      aria-label="TAS HQ executive introduction"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="tas-intro-atmosphere" aria-hidden="true" />
      <div className="tas-intro-architecture" aria-hidden="true" />
      <div className="tas-intro-floor" aria-hidden="true" />
      <div className="grain access-grain" aria-hidden="true" />

      <div className="tas-intro-content">
        <motion.div
          className="tas-intro-emblem-field"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="tas-precision-ring tas-precision-ring-outer" aria-hidden="true" />
          <span className="tas-precision-ring tas-precision-ring-inner" aria-hidden="true" />
          <motion.div
            className="tas-intro-emblem"
            initial={{ filter: "brightness(0.12) saturate(0.35)", opacity: 0.2 }}
            animate={{ filter: "brightness(1) saturate(0.92)", opacity: 1 }}
            transition={{ duration: 3.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/tas-hq-icon.png"
              alt="TAS HQ emblem"
              fill
              priority
              sizes="(max-width: 640px) 76vw, (max-width: 1024px) 48vw, 440px"
              className="object-contain"
            />
            <span className="tas-intro-metal-sweep" aria-hidden="true" />
          </motion.div>
          <span className="tas-intro-reflection" aria-hidden="true" />
        </motion.div>

        <AnimatePresence>
          {copyVisible && (
            <motion.div
              className="tas-intro-copy"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow className="tas-intro-eyebrow">The Apothecary Shoppe</Eyebrow>
              <DisplayText as="h1" className="tas-intro-title">TAS HQ</DisplayText>
              <p className="tas-intro-category">AI-Powered Employee Operating System</p>
              <p className="tas-intro-supporting-copy">
                A vision designed to strengthen communication, knowledge, service, and culture across The Apothecary Shoppe.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="tas-intro-caption-zone">
          <AnimatePresence mode="wait">
            {caption && !complete && (
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

        <motion.div
          className="tas-intro-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: complete ? 0.2 : 1.4, duration: 0.8 }}
        >
          {complete ? (
            <>
              <button type="button" className="executive-button executive-button-primary" onClick={onEnter}>
                <span>Enter Experience</span><span aria-hidden="true">↗</span>
              </button>
              <button type="button" className="executive-button" onClick={onToggleMute} aria-pressed={muted}>
                <span>{muted ? "Unmute" : "Mute"}</span><span className="button-mark" aria-hidden="true" />
              </button>
              <button type="button" className="executive-button" onClick={onReplay}>
                <span>Replay Introduction</span><span aria-hidden="true">↺</span>
              </button>
            </>
          ) : (
            <div className="tas-intro-live-controls">
              <button type="button" onClick={onContinueSilent}>Continue Without Audio</button>
              <span aria-hidden="true" />
              <button type="button" onClick={onToggleMute} aria-pressed={muted}>{muted ? "Unmute" : "Mute"}</button>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
