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
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="gateway-iris gateway-iris-outer"
        aria-hidden="true"
        initial={{ scale: 0.55, opacity: 0 }}
        animate={{ scale: 3.5, opacity: [0, 0.5, 0] }}
        transition={{ duration: 2.1, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="gateway-iris gateway-iris-inner"
        aria-hidden="true"
        initial={{ scale: 0.45, opacity: 0.2 }}
        animate={{ scale: 5, opacity: [0.2, 0.75, 0] }}
        transition={{ duration: 2.2, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="gateway-transition-emblem"
        initial={{ scale: 0.88, opacity: 0.94, filter: "brightness(.8)" }}
        animate={{ scale: 5.4, opacity: [0.94, 1, 0], filter: ["brightness(.8)", "brightness(1.3)", "brightness(1.8)"] }}
        transition={{ duration: 2.15, times: [0, 0.55, 1], ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src="/tas-hq-icon.png" alt="" fill sizes="320px" className="object-contain" />
      </motion.div>
      <motion.div
        className="gateway-expansion-line"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1.8, opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.section>
  );
}
