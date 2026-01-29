"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Product } from "@/data/products";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const initials = product.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="w-full"
    >
      <Card className="group relative overflow-hidden border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="flex flex-col md:flex-row gap-0 p-0">
          {/* Left Side - Image (Full Height) */}
          <div className="flex-shrink-0 w-full md:w-40 lg:w-48">
            <div className="relative w-full h-full min-h-[200px] md:min-h-0 overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={index < 2}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground/20">
                    {initials}
                  </div>
                </div>
              )}
              {/* Production Badge */}
              <div className="absolute top-2 right-2 z-10">
                <Badge
                  variant="default"
                  className="bg-green-600/90 hover:bg-green-600 text-white border-0 shadow-sm flex items-center gap-1 px-2 py-0.5"
                >
                  <CheckCircle2 className="h-2.5 w-2.5" />
                  <span className="text-[10px] font-medium">Live</span>
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col space-y-3 p-4">
            {/* Header */}
            <div className="space-y-1.5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {product.role}
                  </p>
                </div>
                {/* Metrics Summary - Inline */}
                <div className="flex flex-col items-end gap-0.5 text-right">
                  <div className="text-lg md:text-xl font-bold text-foreground">
                    {product.primaryMetric.value}
                  </div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-wide">
                    {product.primaryMetric.label}
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Key Highlights with Bullets */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="space-y-1">
                <ul className="space-y-1.5">
                  {product.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="text-xs flex gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span className="text-foreground/90 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Row: Metrics, Stack, and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
              <div className="flex flex-col gap-2 flex-1">
                {/* Secondary Metrics Row */}
                {product.secondaryMetrics && product.secondaryMetrics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {product.secondaryMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-1.5 text-[10px]"
                      >
                        <span className="text-muted-foreground">{metric.label}:</span>
                        <span className="font-semibold text-foreground">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1">
                  {product.stack.slice(0, 6).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[9px] px-1.5 py-0 font-medium rounded-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {product.stack.length > 6 && (
                    <Badge
                      variant="secondary"
                      className="text-[9px] px-1.5 py-0 font-medium rounded-sm"
                    >
                      +{product.stack.length - 6}
                    </Badge>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-2 flex-shrink-0">
                {product.ctas.primary && (
                  <Link
                    href={product.ctas.primary.href}
                    target="_blank"
                  >
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1.5 text-[10px] font-medium transition-colors flex items-center gap-1.5 group/btn">
                      {product.ctas.primary.label}
                      <ExternalLink className="h-2.5 w-2.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </Link>
                )}
                {product.ctas.secondary && (
                  <Link
                    href={product.ctas.secondary.href}
                    target="_blank"
                  >
                    <button className="border border-border hover:bg-muted/50 rounded-md px-3 py-1.5 text-[10px] font-medium transition-colors flex items-center gap-1.5">
                      {product.ctas.secondary.label}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
