"use client";

import { motion } from "motion/react";

export function PrimaryExperienceButton({ confirmed, onClick }: { confirmed: boolean; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      className="primary-experience-button"
      onClick={onClick}
      disabled={confirmed}
      aria-label="Begin Executive Preview with sound"
      animate={confirmed ? { scale: 0.985 } : { scale: 1 }}
      whileTap={{ scale: 0.985 }}
    >
      <span className="primary-button-edge" aria-hidden="true" />
      <span>{confirmed ? "Preparing Experience" : "Begin Executive Preview"}</span>
      <span className="primary-button-arrow" aria-hidden="true">→</span>
    </motion.button>
  );
}
