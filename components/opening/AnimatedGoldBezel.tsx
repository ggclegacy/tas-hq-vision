"use client";

import { motion } from "motion/react";

export function AnimatedGoldBezel({ confirmed = false }: { confirmed?: boolean }) {
  return (
    <motion.div
      className={`gac-motion-bezel ${confirmed ? "is-confirmed" : ""}`}
      aria-hidden="true"
      animate={confirmed ? { scale: 0.97 } : { scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="bezel-ring bezel-ring-outer" />
      <span className="bezel-ring bezel-ring-middle" />
      <span className="bezel-ring bezel-ring-inner" />
      <span className="bezel-axis bezel-axis-horizontal" />
      <span className="bezel-axis bezel-axis-vertical" />
      <span className="bezel-node bezel-node-one" />
      <span className="bezel-node bezel-node-two" />
      <span className="bezel-node bezel-node-three" />
      <span className="bezel-node bezel-node-four" />
    </motion.div>
  );
}
