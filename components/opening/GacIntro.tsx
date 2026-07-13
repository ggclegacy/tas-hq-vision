"use client";

import { motion } from "motion/react";
import { copyLine, staggeredCopy } from "./animations";
import { GacHeroEmblem } from "./GacHeroEmblem";
import { DisplayText, Eyebrow } from "./Typography";
import { TransitionFrame } from "./TransitionFrame";

export function GacIntro({ showPresents, caption }: { showPresents: boolean; caption: string }) {
  return (
    <TransitionFrame className="gac-production-intro">
      <div className="access-atmosphere" aria-hidden="true" />
      <div className="production-architecture" aria-hidden="true" />
      <div className="grain access-grain" aria-hidden="true" />
      <div className="production-intro-content">
        <GacHeroEmblem variant="production" />

        <motion.div
          className="production-intro-copy"
          variants={staggeredCopy}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={copyLine}>
            <DisplayText as="h1" className="production-collective-name">
              Gent Ascend Collective
            </DisplayText>
          </motion.div>
          <motion.div variants={copyLine} className="production-credit">
            <p>Neil Stutes</p>
            <span>Founder</span>
            <span>Creative Systems Architect</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="production-presents"
          initial={{ opacity: 0, y: 6 }}
          animate={showPresents ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span aria-hidden="true" />
          <Eyebrow className="text-[#c0a368]">Presents</Eyebrow>
          <span aria-hidden="true" />
        </motion.div>

        <div className="production-caption-zone">
          <motion.p
            key={caption}
            role="status"
            aria-live="polite"
            className="production-caption"
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
