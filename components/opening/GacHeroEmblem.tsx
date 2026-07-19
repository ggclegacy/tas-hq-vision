"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedGoldBezel } from "./AnimatedGoldBezel";

type GacHeroEmblemProps = {
  variant: "portal" | "production";
  confirmed?: boolean;
};

export function GacHeroEmblem({ variant, confirmed = false }: GacHeroEmblemProps) {
  return (
    <motion.div
      layoutId="gac-hero-emblem"
      className={`gac-hero-emblem gac-hero-emblem-${variant}`}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: confirmed ? 1.025 : 1 }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="gac-reflection" aria-hidden="true" />
      <AnimatedGoldBezel confirmed={confirmed} />
      <div className="gac-icon-wrap">
        <Image
          src="/gac-icon.png"
          alt="Gent Ascend Collective emblem"
          fill
          priority
          sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 390px"
          className="gac-icon-image object-contain"
        />
        <span className="gac-emblem-sweep" aria-hidden="true" />
      </div>
    </motion.div>
  );
}
