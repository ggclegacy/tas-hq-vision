"use client";

import { motion } from "motion/react";

export function OpeningHandoff() {
  return (
    <motion.section
      className="opening-handoff"
      aria-label="Transitioning into TAS HQ"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <motion.span
        className="handoff-gold-sweep"
        aria-hidden="true"
        initial={{ x: "-130%", opacity: 0 }}
        animate={{ x: "130%", opacity: [0, 0.75, 0] }}
        transition={{ duration: 1.05, ease: [0.4, 0, 0.2, 1] }}
      />
      <span className="sr-only">Gent Ascend Collective introduction complete.</span>
    </motion.section>
  );
}
