"use client";

import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/data/products";

const BLUR_FADE_DELAY = 0.04;

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Centered container with consistent max-width */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Header Section */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-12 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            >
              Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Products I&apos;ve built and shipped to production with real users.
            </motion.p>
          </div>
        </BlurFade>

        {/* Single Column Layout */}
        <section className="mb-16">
          <div className="flex flex-col gap-4">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
