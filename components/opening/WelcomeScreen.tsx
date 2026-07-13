"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { copyLine, staggeredCopy } from "./animations";
import { DisplayText, Eyebrow } from "./Typography";
import { TransitionFrame } from "./TransitionFrame";

type WelcomeScreenProps = {
  muted: boolean;
  entered: boolean;
  onEnter: () => void;
  onContinueSilent: () => void;
  onReplay: () => void;
};

export function WelcomeScreen({ muted, entered, onEnter, onContinueSilent, onReplay }: WelcomeScreenProps) {
  return (
    <TransitionFrame className="welcome-field px-6 py-8 sm:px-10">
      <div className="grain" aria-hidden="true" />
      <div className="architectural-lines" aria-hidden="true" />
      <motion.div
        className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
        variants={staggeredCopy}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={copyLine} className="relative mb-5 size-20 sm:mb-7 sm:size-24">
          <Image src="/tas-hq-icon.png" alt="" fill sizes="96px" className="object-contain opacity-90" />
        </motion.div>

        <motion.div variants={copyLine}>
          <Eyebrow className="mb-4 text-[#bda778]">Private executive access</Eyebrow>
          <DisplayText className="welcome-title text-[clamp(2.2rem,8vw,5.8rem)] leading-[0.92] text-[#f0ede6]">
            Welcome Blair
          </DisplayText>
          <p className="mt-4 text-[0.67rem] uppercase tracking-[0.32em] text-stone-400 sm:text-xs">
            Executive Vision Experience
          </p>
        </motion.div>

        <motion.div variants={copyLine} className="my-8 flex w-full max-w-sm items-center gap-4 sm:my-10">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#806a43]/70" />
          <span className="size-1 rotate-45 border border-[#b39762]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#806a43]/70" />
        </motion.div>

        <motion.div variants={copyLine}>
          <DisplayText as="h2" className="text-2xl text-stone-100 sm:text-3xl">TAS HQ</DisplayText>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-stone-400 sm:text-xs">
            AI Employee Operating System
          </p>
          <p className="mt-6 font-display text-sm italic tracking-[0.12em] text-[#a99673]">Powered by Onyx</p>
        </motion.div>

        <motion.div variants={copyLine} className="mt-10 flex w-full max-w-xs flex-col gap-2 sm:mt-12">
          <button type="button" className="executive-button executive-button-primary" onClick={onEnter}>
            <span>{entered ? "Experience Ready" : "Enter Experience"}</span>
            <span aria-hidden="true">↗</span>
          </button>
          <button type="button" className="executive-button" onClick={onContinueSilent} aria-pressed={muted}>
            <span>{muted ? "Audio Disabled" : "Continue Without Audio"}</span>
            <span className="button-mark" aria-hidden="true" />
          </button>
          <button type="button" className="executive-button" onClick={onReplay}>
            <span>Replay Introduction</span>
            <span aria-hidden="true">↺</span>
          </button>
        </motion.div>
      </motion.div>
    </TransitionFrame>
  );
}
