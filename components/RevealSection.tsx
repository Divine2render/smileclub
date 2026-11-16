"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export default function RevealSection({
  children,
  delay = 0,
  from = "left",
}: {
  children: ReactNode;
  delay?: number;
  from?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -18 : 18, y: 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.62,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
