"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { PillarGlyph } from "./PillarGlyph";
import { PILLARS, PILLAR_MAP, type PillarId } from "./overview-content";

export function PillarSystem({ active, onSelect }: { active: PillarId; onSelect: (pillar: PillarId) => void }) {
  const activePillar = PILLAR_MAP[active];

  return (
    <section className={`pillar-system pillar-active-${active}`} aria-label="Four pillars of TAS HQ">
      <div className="pillar-system-stage">
        <svg className="pillar-connections" viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true">
          <path className="pillar-connection pillar-connection-service" d="M500 220 C390 220 340 112 190 112" />
          <path className="pillar-connection pillar-connection-standard" d="M500 220 C610 220 660 112 810 112" />
          <path className="pillar-connection pillar-connection-collective" d="M500 220 C390 220 340 328 190 328" />
          <path className="pillar-connection pillar-connection-growth" d="M500 220 C610 220 660 328 810 328" />
          <circle cx="500" cy="220" r="118" className="pillar-orbit" />
        </svg>

        <motion.div
          className="overview-core"
          initial={{ opacity: 0, scale: 0.88, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="overview-core-ring" aria-hidden="true" />
          <div className="overview-core-emblem">
            <Image src="/tas-hq-icon.png" alt="TAS HQ intelligence core" width={200} height={200} className="h-full w-full object-contain" />
          </div>
          <p>TAS HQ</p>
          <span>Intelligence Core</span>
        </motion.div>

        {PILLARS.map((pillar) => (
          <motion.button
            key={pillar.id}
            type="button"
            className={`pillar-node pillar-node-${pillar.id}`}
            aria-label={`${pillar.name}, ${pillar.signal}`}
            aria-pressed={active === pillar.id}
            onClick={() => onSelect(pillar.id)}
            onMouseEnter={() => onSelect(pillar.id)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: active === pillar.id ? 1.025 : 1 }}
            transition={{ duration: 0.65, delay: Number(pillar.index) * 0.1 }}
          >
            <span className="pillar-node-index">{pillar.index}</span>
            <span className="pillar-node-glyph"><PillarGlyph pillar={pillar.id} /></span>
            <span className="pillar-node-copy"><strong>{pillar.name}</strong><small>{pillar.signal}</small></span>
            <i aria-hidden="true" />
          </motion.button>
        ))}
      </div>

      <div className="pillar-detail-frame" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            className="pillar-detail"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.5 }}
          >
            <div><span>{activePillar.index}</span><strong>{activePillar.name}</strong></div>
            <p>{activePillar.description}</p>
            <em>{activePillar.outcome}</em>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
