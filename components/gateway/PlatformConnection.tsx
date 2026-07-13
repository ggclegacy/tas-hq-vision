"use client";

import { motion } from "motion/react";
import type { PlatformId } from "./gateway-content";

export function PlatformConnection({ activePlatform }: { activePlatform: PlatformId }) {
  return (
    <div className={`platform-connection platform-connection-${activePlatform}`} aria-hidden="true">
      <svg className="hidden h-full w-full lg:block" viewBox="0 0 1000 520" preserveAspectRatio="none">
        <path className="connection-rail" d="M165 365 C355 365 408 258 500 258 S665 330 850 330" />
        <motion.path
          className="connection-signal"
          d="M165 365 C355 365 408 258 500 258 S665 330 850 330"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: activePlatform === "tas" ? 0.64 : 0.86 }}
          transition={{ pathLength: { duration: 2.4, delay: 0.8 }, opacity: { duration: 0.7 } }}
        />
        <circle className="connection-node" cx="500" cy="258" r="5" />
        <circle className="connection-node-halo" cx="500" cy="258" r="13" />
      </svg>
      <div className="connection-mobile lg:hidden">
        <span />
        <i />
        <span />
      </div>
    </div>
  );
}
