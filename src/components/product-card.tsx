"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="w-full py-8 border-b-[3px] border-border last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start relative">
        {/* Live Platform Button - Top Right */}
        {product.ctas.primary && (
          <div className="absolute top-0 right-0 z-10">
            <Link
              href={product.ctas.primary.href}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-xs transition-colors font-normal"
            >
              {product.ctas.primary.label}
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        )}

        {/* Left Side - Device Mockup */}
        <div className="relative w-full max-w-[300px]">
          <div className="relative bg-zinc-900/50 rounded-lg p-1.5 shadow-lg">
            <div className="relative aspect-[4/3] rounded overflow-hidden bg-black">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top"
                  priority={index < 2}
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-5 pr-32">
          {/* Title & Description */}
          <div className="space-y-2">
            <h3 className="text-xl font-normal tracking-tight">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">
              {product.tagline}
            </p>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <div>
              <span className="text-muted-foreground/60 text-xs">{product.primaryMetric.label}: </span>
              <span className="text-foreground/90 font-normal">{product.primaryMetric.value}</span>
            </div>
            {product.secondaryMetrics?.map((metric) => (
              <div key={metric.label}>
                <span className="text-muted-foreground/60 text-xs">{metric.label}: </span>
                <span className="text-foreground/90 font-normal">{metric.value}</span>
              </div>
            ))}
          </div>

          {/* Highlights - How it was built */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="space-y-2">
              <ul className="space-y-2">
                {product.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground/70 flex gap-2 leading-relaxed font-light">
                    <span className="text-muted-foreground/40 mt-0.5 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="px-3 py-1 text-xs rounded-full font-normal">
              Research
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs rounded-full font-normal">
              Strategy
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs rounded-full font-normal">
              Design
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs rounded-full font-normal">
              Development
            </Badge>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {product.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-[10px] px-2 py-0.5 font-normal"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Secondary CTA Link */}
          {product.ctas.secondary && (
            <div className="pt-2">
              <Link
                href={product.ctas.secondary.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70 hover:text-foreground transition-colors font-normal"
              >
                {product.ctas.secondary.label}
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
