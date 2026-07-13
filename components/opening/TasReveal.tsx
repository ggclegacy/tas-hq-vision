"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TransitionFrame } from "./TransitionFrame";
import { Eyebrow } from "./Typography";

export function TasReveal() {
  return (
    <TransitionFrame className="opening-vignette">
      <div className="grain" aria-hidden="true" />
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="icon-power-ring" aria-hidden="true" />
        <motion.div
          className="tas-emblem relative size-[min(72vw,32rem)]"
          initial={{ filter: "brightness(0.12) saturate(0.45)", opacity: 0.2 }}
          animate={{ filter: "brightness(0.9) saturate(0.86)", opacity: 1 }}
          transition={{ duration: 3.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/tas-hq-icon.png"
            alt="TAS HQ emblem"
            fill
            priority
            sizes="(max-width: 768px) 72vw, 512px"
            className="object-contain"
          />
          <motion.div
            className="metal-sweep"
            aria-hidden="true"
            initial={{ x: "-180%", opacity: 0 }}
            animate={{ x: "180%", opacity: [0, 0.24, 0] }}
            transition={{ duration: 2.7, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1.3 }}>
          <Eyebrow className="mt-8 text-[#93846a]">System awakening</Eyebrow>
        </motion.div>
      </motion.div>
    </TransitionFrame>
  );
}
