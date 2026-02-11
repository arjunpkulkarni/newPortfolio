"use client";

import { motion } from "framer-motion";

interface ProofStat {
  label: string;
  value: string;
}

interface ProofStripProps {
  stats: ProofStat[];
}

export function ProofStrip({ stats }: ProofStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mb-8 p-6 rounded-lg border border-border/50 bg-muted/30"
    >
      <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <span className="text-2xl font-semibold tabular-nums">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
