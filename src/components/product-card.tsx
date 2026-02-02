"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images || (product.image ? [product.image] : []);
  const hasMultipleImages = images.length > 1;

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
        {product.id === "hanger" && images.length > 0 ? (
          /* Special iPhone Display for Hanger */
          <div className="relative w-full max-w-[350px] h-[400px]">
            {/* iPhone Mockup - Centered */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200px] z-10">
              <div className="relative bg-zinc-900 rounded-[2.5rem] p-2 shadow-2xl border-4 border-zinc-800">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-b-2xl z-20"></div>
                <div className="relative aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-black">
                  <Image
                    src={images[0]}
                    alt={product.name}
                    fill
                    className="object-cover object-top"
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Default Display for Other Products */
          <div className="relative w-full max-w-[300px] space-y-3">
            <div className="relative bg-zinc-900/50 rounded-lg p-1.5 shadow-lg">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-black">
                {images.length > 0 && (
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${product.name} ${currentImageIndex + 1}`}
                    fill
                    className="object-cover object-top transition-opacity duration-300"
                    priority={index < 2}
                  />
                )}
              </div>
            </div>
            
            {/* Image Navigation Dots - Only for non-Hanger products with multiple images */}
            {hasMultipleImages && (
              <div className="flex gap-2 justify-center">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

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
