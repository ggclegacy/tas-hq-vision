"use client";

import { motion } from "motion/react";
import { copyLine, staggeredCopy } from "./animations";
import { DisplayText } from "./Typography";

export function ExecutiveIntroCopy({ confirmed = false }: { confirmed?: boolean }) {
  return (
    <motion.div
      className="executive-intro-copy"
      variants={staggeredCopy}
      initial="hidden"
      animate={confirmed ? "hidden" : "visible"}
    >
      <motion.div variants={copyLine}>
        <DisplayText as="h1" className="access-collective-name">Gent Ascend Collective</DisplayText>
        <p className="access-experience-label">Executive Vision Experience</p>
      </motion.div>

      <motion.div variants={copyLine} className="access-recipient">
        <p>Presented for</p>
        <DisplayText as="p" className="access-blair">Blair</DisplayText>
      </motion.div>

      <motion.div variants={copyLine} className="access-purpose">
        <p>A private preview of the future of The Apothecary Shoppe.</p>
        <p>Built for your people. Elevated by intelligence.</p>
      </motion.div>
    </motion.div>
  );
}
