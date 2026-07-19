"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function OpeningHandoff() {
  return (
    <motion.section
      className="opening-handoff"
      aria-label="Transitioning into TAS HQ"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="handoff-emblem"
        aria-hidden="true"
        initial={{ opacity: 0.9, scale: 0.82, filter: "brightness(.7)" }}
        animate={{ opacity: [0.9, 1, 0], scale: [0.82, 1.08, 1.55], filter: ["brightness(.7)", "brightness(1.3)", "brightness(1.8)"] }}
        transition={{ duration: 1.25, times: [0, 0.62, 1], ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src="/gac-icon.png" alt="" fill sizes="240px" className="object-contain" />
      </motion.div>
      <motion.span
        className="handoff-aperture"
        aria-hidden="true"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 2.8, opacity: [0, 0.65, 0] }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="handoff-gold-sweep"
        aria-hidden="true"
        initial={{ x: "-130%", opacity: 0 }}
        animate={{ x: "130%", opacity: [0, 0.75, 0] }}
        transition={{ duration: 1.05, ease: [0.4, 0, 0.2, 1] }}
      />
      <span className="sr-only">Entering TAS HQ.</span>
    </motion.section>
  );
}
