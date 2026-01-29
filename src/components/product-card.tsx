"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Product } from "@/data/products";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

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
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-xl">
        {/* Production Badge */}
        <div className="absolute top-3 right-3 z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            <Badge
              variant="default"
              className="bg-green-500/90 hover:bg-green-500 text-white border-0 shadow-lg flex items-center gap-1"
            >
              <CheckCircle2 className="h-3 w-3" />
              Production
            </Badge>
          </motion.div>
        </div>

        {/* Image or Gradient Placeholder */}
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-6xl font-bold text-primary/30"
              >
                {initials}
              </motion.div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-5 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {product.name}
            </h3>            
          </div>

          {/* Primary Metric - Big and Bold */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border-2 border-primary/20"
          >
            <div className="text-xs font-medium text-muted-foreground mb-1">
              {product.primaryMetric.label}
            </div>
            <div className="text-3xl font-bold text-primary">
              {product.primaryMetric.value}
            </div>
          </motion.div>

          {/* Tagline */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.tagline}
          </p>

          {/* Secondary Metrics */}
          {product.secondaryMetrics && product.secondaryMetrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {product.secondaryMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 + idx * 0.1 }}
                  className="bg-muted/50 rounded-md p-2 text-center"
                >
                  <div className="text-xs text-muted-foreground truncate">
                    {metric.label}
                  </div>
                  <div className="text-sm font-semibold">{metric.value}</div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {product.stack.slice(0, 4).map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.6 + idx * 0.05,
                  type: "spring",
                }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.span>
            ))}
            {product.stack.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{product.stack.length - 4}
              </Badge>
            )}
          </div>

          {/* CTA */}
          <div className="pt-2 mt-auto">
            {product.ctas.primary && (
              <Link
                href={product.ctas.primary.href}
                target="_blank"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  {product.ctas.primary.label}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
