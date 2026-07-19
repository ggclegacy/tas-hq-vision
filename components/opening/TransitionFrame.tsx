import type { ReactNode } from "react";
import { motion } from "motion/react";

export function TransitionFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      className={`absolute inset-0 flex min-h-[100svh] items-center justify-center overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.section>
  );
}
