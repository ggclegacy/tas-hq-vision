"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { DisplayText, Eyebrow } from "@/components/opening/Typography";

export function TasPlaceholder({ onBack }: { onBack: () => void }) {
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    backRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onBack();
      if (event.key === "Tab") {
        event.preventDefault();
        backRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  return (
    <motion.div
      className="gateway-overlay gateway-overlay-centered"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tas-placeholder-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="tas-placeholder"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative mx-auto mb-7 size-28 sm:size-36">
          <Image src="/tas-hq-icon.png" alt="TAS HQ emblem" fill sizes="144px" className="object-contain" />
        </div>
        <Eyebrow className="text-[#bca16e]">Primary Vision</Eyebrow>
        <DisplayText id="tas-placeholder-title" className="mt-4 text-3xl leading-tight text-stone-100 sm:text-5xl">
          TAS HQ Introduction
        </DisplayText>
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-stone-500">Coming in the next build section</p>
        <button ref={backRef} type="button" className="preview-close mt-10" onClick={onBack}>Back to Vision Gateway</button>
      </motion.div>
    </motion.div>
  );
}
