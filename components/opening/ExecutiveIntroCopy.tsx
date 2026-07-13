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
        <p>Thoughtfully created for</p>
        <DisplayText as="p" className="access-blair">Blair Vidrine</DisplayText>
        <p className="access-company">The Apothecary Shoppe</p>
      </motion.div>

      <motion.div variants={copyLine} className="access-purpose">
        <p>A vision created to support your team, your people, and the standard you&apos;ve built.</p>
      </motion.div>

      <motion.div variants={copyLine} className="access-production-credit">
        <span>Neil Stutes</span>
        <i aria-hidden="true" />
        <span>Founder</span>
        <i aria-hidden="true" />
        <span>Creative Systems Architect</span>
      </motion.div>
    </motion.div>
  );
}
