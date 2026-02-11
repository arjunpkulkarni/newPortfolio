"use client";

import { motion } from "framer-motion";

interface ArchitectureDiagramProps {
  system: string[];
  productName: string;
}

export function ArchitectureDiagram({ system, productName }: ArchitectureDiagramProps) {
  return (
    <div className="space-y-2">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-medium">
        Architecture
      </div>
      <div className="relative p-4 rounded-lg border border-border/50 bg-muted/20">
        {/* Architecture Flow */}
        <div className="flex flex-wrap items-center gap-2">
          {system.map((component, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {/* Component Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="px-3 py-1.5 rounded border border-border/60 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <span className="text-xs font-medium text-foreground/90 whitespace-nowrap">
                    {component}
                  </span>
                </div>
              </motion.div>

              {/* Arrow */}
              {idx < system.length - 1 && (
                <motion.svg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 + 0.1 }}
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  className="flex-shrink-0 text-muted-foreground/40"
                >
                  <path
                    d="M0 6H18M18 6L13 1M18 6L13 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
