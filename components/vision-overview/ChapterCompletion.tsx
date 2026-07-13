"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { DisplayText, Eyebrow } from "@/components/opening/Typography";

export function ChapterCompletion({ onBack, onReturnGateway }: { onBack: () => void; onReturnGateway: () => void }) {
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    backRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onBack();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  return (
    <motion.div className="overview-completion-overlay" role="dialog" aria-modal="true" aria-labelledby="chapter-complete-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="overview-completion" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <div className="overview-completion-emblem"><Image src="/tas-hq-icon.png" alt="" width={112} height={112} className="h-full w-full object-contain" /></div>
        <Eyebrow className="text-[#b69a66]">Chapter 03 Complete</Eyebrow>
        <DisplayText id="chapter-complete-title" className="mt-4 text-4xl text-stone-100 sm:text-5xl">The Vision Is Connected</DisplayText>
        <p>Daily Headquarters is ready for the next approved build chapter.</p>
        <div className="overview-completion-actions">
          <button ref={backRef} type="button" onClick={onBack}>Return to Vision Overview</button>
          <button type="button" onClick={onReturnGateway}>Return to Vision Gateway</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
