"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { DisplayText, Eyebrow } from "@/components/opening/Typography";
import { COMPASS_FEATURES } from "./gateway-content";
import { CompassEmblem } from "./CompassEmblem";

export function CompassPreview({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="gateway-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="compass-preview-title"
        className="compass-preview"
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 32 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="preview-emblem"><CompassEmblem active /></div>
        <Eyebrow className="text-[#b27d58]">Future Patient Experience Concept</Eyebrow>
        <DisplayText as="h2" id="compass-preview-title" className="mt-4 text-3xl text-stone-100 sm:text-4xl">
          Apothecary Compass
        </DisplayText>
        <div className="preview-rule" aria-hidden="true" />
        <ul>
          {COMPASS_FEATURES.map((feature, index) => (
            <li key={feature}><span>0{index + 1}</span>{feature}</li>
          ))}
        </ul>
        <button ref={closeRef} type="button" className="preview-close" onClick={onClose}>Close Preview</button>
      </motion.div>
    </motion.div>
  );
}
