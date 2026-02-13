"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

interface MinimalProductCardProps {
  product: Product;
  index: number;
}

export function MinimalProductCard({ product, index }: MinimalProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
            {/* Left: Image */}
            <div className="relative bg-muted/30 aspect-video md:aspect-auto md:h-full min-h-[180px]">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm">
                  No preview
                </div>
              )}
              
            </div>

            {/* Right: Content */}
            <div className="p-6 flex flex-col h-full">
              {/* Header */}
              <div className="space-y-1 mb-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {product.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] px-2 py-0.5 font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {product.oneLiner}
                </p>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                {product.proof.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-base font-semibold text-primary tabular-nums">
                      {metric.value}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* View Details - Always visible at bottom right */}
              <div className="mt-auto flex justify-end">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
