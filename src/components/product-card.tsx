"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Product } from "@/data/products";
import { ExternalLink, Github, FileText, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [hasVideo, setHasVideo] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if video exists
    fetch(`/demos/${product.slug}.mp4`, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setHasVideo(true);
        } else {
          // Check for image
          return fetch(`/demos/${product.slug}.png`, { method: "HEAD" });
        }
      })
      .then((res) => {
        if (res && res.ok) {
          setHasImage(true);
        }
      })
      .catch(() => {
        // Silently fail - no demo media available
      });
  }, [product.slug]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative border border-border/50 hover:border-border transition-all duration-200 rounded-lg overflow-hidden bg-card"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0">
        {/* Left: Demo Media */}
        <div className="relative bg-muted/30 aspect-video lg:aspect-auto lg:h-full min-h-[200px]">
          {hasVideo ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={`/demos/${product.slug}.mp4`} type="video/mp4" />
            </video>
          ) : hasImage ? (
            <div className="absolute inset-0">
              <Image
                src={`/demos/${product.slug}.png`}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          ) : product.image ? (
            <div className="absolute inset-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm">
              No preview
            </div>
          )}
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <Badge 
              variant="secondary" 
              className="text-[10px] font-medium bg-background/90 backdrop-blur-sm"
            >
              {product.status}
            </Badge>
          </div>
        </div>

        {/* Right: Content */}
        <div className="p-6 space-y-4">
          {/* Header Row */}
          <div className="space-y-1.5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium tracking-tight">{product.name}</h3>
              {/* Tags */}
              <div className="flex gap-1.5 flex-shrink-0">
                {product.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] px-2 py-0.5 font-normal border-border/60"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.oneLiner}
            </p>
          </div>

          {/* Proof Row */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {product.proof.map((metric, idx) => (
              <div key={idx} className="flex items-baseline gap-1.5">
                <span className="text-lg font-semibold tabular-nums">{metric.value}</span>
                <span className="text-xs text-muted-foreground">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <ArchitectureDiagram system={product.system} productName={product.name} />

          {/* 3 Bullets */}
          <ul className="space-y-1.5 text-xs text-muted-foreground/80 leading-relaxed">
            {product.bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-muted-foreground/40 mt-0.5 flex-shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Links Row */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-border/50">
            {product.links.live && (
              <Link
                href={product.links.live}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs text-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                Live
              </Link>
            )}
            {product.links.demo && (
              <Link
                href={product.links.demo}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Play className="h-3 w-3" />
                Demo
              </Link>
            )}
            {product.links.github && (
              <Link
                href={product.links.github}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-3 w-3" />
                GitHub
              </Link>
            )}
            {product.links.caseStudy && (
              <Link
                href={product.links.caseStudy}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="h-3 w-3" />
                Case Study
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
