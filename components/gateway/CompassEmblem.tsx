"use client";

import { motion } from "motion/react";

/**
 * Temporary presentation mark. Replace this component with the final approved
 * Apothecary Compass asset when it is supplied; no other gateway code must change.
 */
export function CompassEmblem({ active = false }: { active?: boolean }) {
  return (
    <motion.div
      className="compass-emblem"
      aria-hidden="true"
      animate={active ? { opacity: 1, scale: 1.025 } : { opacity: 0.74, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg viewBox="0 0 160 160" fill="none" role="presentation">
        <circle cx="80" cy="80" r="69" stroke="currentColor" strokeWidth="1" opacity=".34" />
        <circle cx="80" cy="80" r="54" stroke="currentColor" strokeWidth="1" opacity=".18" />
        <path d="M80 19v12M80 129v12M19 80h12M129 80h12" stroke="currentColor" opacity=".65" />
        <path d="m80 43 13 31-13 43-13-43 13-31Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="m80 43 13 31-13 6V43Z" fill="currentColor" opacity=".5" />
        <circle cx="80" cy="80" r="4" fill="currentColor" />
        <path d="m45 45 8 8m54 54 8 8m0-70-8 8m-54 54-8 8" stroke="currentColor" opacity=".3" />
      </svg>
    </motion.div>
  );
}
