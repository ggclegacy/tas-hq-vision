"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { DisplayText, Eyebrow } from "@/components/opening/Typography";
import { CompassEmblem } from "./CompassEmblem";
import type { PlatformDefinition } from "./gateway-content";

type PlatformPortalProps = {
  platform: PlatformDefinition;
  active: boolean;
  onActivate: () => void;
  onAction: () => void;
};

export function PlatformPortal({ platform, active, onActivate, onAction }: PlatformPortalProps) {
  const primary = platform.id === "tas";

  return (
    <motion.article
      className={`platform-portal platform-portal-${platform.id} ${active ? "is-active" : ""}`}
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
      onPointerDown={onActivate}
      animate={{ scale: active ? 1 : primary ? 0.985 : 0.975, opacity: active || primary ? 1 : 0.76 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby={`${platform.id}-title`}
    >
      <div className="portal-architecture" aria-hidden="true" />
      <div className="portal-index" aria-hidden="true">{primary ? "01" : "02"}</div>

      <div className="portal-content">
        <motion.div
          className={primary ? "portal-emblem portal-emblem-tas" : "portal-emblem portal-emblem-compass"}
          animate={active ? { y: -5, filter: "brightness(1.08) saturate(.95)" } : { y: 0, filter: "brightness(.72) saturate(.75)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {primary ? (
            <Image src="/tas-hq-icon.png" alt="TAS HQ emblem" fill sizes="(max-width: 768px) 180px, 260px" className="object-contain" />
          ) : (
            <CompassEmblem active={active} />
          )}
        </motion.div>

        <div className="portal-copy">
          <div className="portal-status-row">
            <Eyebrow className={primary ? "text-[#bca16e]" : "text-[#aa7957]"}>{platform.status}</Eyebrow>
            <span className="portal-status-line" aria-hidden="true" />
          </div>
          <DisplayText
            as="h2"
            id={`${platform.id}-title`}
            className={`portal-title ${primary ? "text-[clamp(2.3rem,5vw,4.9rem)]" : "text-[clamp(1.75rem,3vw,3rem)]"}`}
          >
            {platform.name}
          </DisplayText>
          <p className="portal-category">{platform.category}</p>
          <p className="portal-statement">{platform.statement}</p>

          <div className="portal-value-space">
            <AnimatePresence initial={false}>
              {active && (
                <motion.p
                  className="portal-value"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.5 }}
                >
                  {platform.value}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button type="button" className="portal-action" onClick={onAction} aria-label={platform.action}>
            <span>{platform.action}</span>
            <span className="portal-action-mark" aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
