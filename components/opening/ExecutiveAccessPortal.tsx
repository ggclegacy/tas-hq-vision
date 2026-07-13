"use client";

import { motion } from "motion/react";
import { AudioChoiceControls } from "./AudioChoiceControls";
import { ExecutiveIntroCopy } from "./ExecutiveIntroCopy";
import { GacHeroEmblem } from "./GacHeroEmblem";
import { PrimaryExperienceButton } from "./PrimaryExperienceButton";

type ExecutiveAccessPortalProps = {
  muted: boolean;
  confirmed: boolean;
  onBegin: () => void;
  onToggleSound: () => void;
  onContinueSilent: () => void;
  onReplay: () => void;
};

export function ExecutiveAccessPortal({
  muted,
  confirmed,
  onBegin,
  onToggleSound,
  onContinueSilent,
  onReplay,
}: ExecutiveAccessPortalProps) {
  return (
    <motion.section
      className={`executive-access-portal ${confirmed ? "is-confirmed" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      aria-label="Private executive access portal"
    >
      <div className="access-atmosphere" aria-hidden="true" />
      <div className="access-architecture" aria-hidden="true" />
      <div className="access-intelligence-lines" aria-hidden="true" />
      <div className="grain access-grain" aria-hidden="true" />

      <div className="access-portal-content">
        <GacHeroEmblem variant="portal" confirmed={confirmed} />
        <ExecutiveIntroCopy confirmed={confirmed} />

        <motion.div
          className="access-actions"
          animate={confirmed ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PrimaryExperienceButton confirmed={confirmed} onClick={onBegin} />
          <AudioChoiceControls
            muted={muted}
            disabled={confirmed}
            onToggleSound={onToggleSound}
            onContinueSilent={onContinueSilent}
            onReplay={onReplay}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
