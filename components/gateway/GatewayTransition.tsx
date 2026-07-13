"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function GatewayTransition() {
  return (
    <motion.section
      className="gateway-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <motion.div
        className="gateway-transition-emblem"
        initial={{ scale: 1, opacity: 0.94 }}
        animate={{ scale: 0.58, opacity: 0.34 }}
        transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src="/tas-hq-icon.png" alt="" fill sizes="320px" className="object-contain" />
      </motion.div>
      <motion.div
        className="gateway-expansion-line"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 0.55, 0.2] }}
        transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.section>
  );
}
