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
      initial={{ opacity: 0, x: from === "left" ? -46 : 46, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.82,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
