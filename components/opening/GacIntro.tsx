"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { copyLine, softFade, staggeredCopy } from "./animations";
import { DisplayText, Eyebrow } from "./Typography";
import { TransitionFrame } from "./TransitionFrame";

export function GacIntro({ showPresents, caption }: { showPresents: boolean; caption: string }) {
  return (
    <TransitionFrame className="opening-vignette px-6 py-8 sm:px-10">
      <div className="grain" aria-hidden="true" />
      <div className="relative z-10 flex h-full w-full max-w-4xl flex-col items-center justify-center">
        <motion.div
          className="gac-art relative h-[38svh] min-h-60 w-full max-w-[22rem] sm:h-[44svh] sm:max-w-[26rem]"
          variants={softFade}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Image
            src="/gac-logo.png"
            alt="Gent Ascend Collective"
            fill
            priority
            sizes="(max-width: 640px) 82vw, 416px"
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="mt-4 text-center sm:mt-6"
          variants={staggeredCopy}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={copyLine}>
            <DisplayText as="h1" className="text-[clamp(1.1rem,3vw,1.55rem)] text-stone-100">
              Gent Ascend Collective
            </DisplayText>
          </motion.div>
          <motion.div variants={copyLine} className="mt-3 space-y-1 text-stone-400">
            <p className="text-[0.7rem] uppercase tracking-[0.3em]">Neil Stutes</p>
            <p className="text-[0.6rem] uppercase tracking-[0.25em]">Founder</p>
            <p className="text-[0.6rem] uppercase tracking-[0.25em]">Creative Systems Architect</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 h-7 sm:mt-8"
          initial={{ opacity: 0, y: 6 }}
          animate={showPresents ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow className="text-[#b69a67]">Presents</Eyebrow>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-1 flex min-h-10 items-end justify-center sm:bottom-3">
          <motion.p
            key={caption}
            role="status"
            aria-live="polite"
            className="max-w-2xl text-center font-display text-sm tracking-[0.06em] text-stone-300 sm:text-base"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: caption ? 1 : 0, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {caption}
          </motion.p>
        </div>
      </div>
    </TransitionFrame>
  );
}
