"use client";

import { PRODUCTS } from "@/data/products";
import { MinimalProductCard } from "@/components/minimal-product-card";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ProductsPage() {
  const liveProducts = PRODUCTS
    .filter(p => p.status === "Live")
    .sort((a, b) => b.impactScore - a.impactScore);
  
  const archivedProducts = PRODUCTS
    .filter(p => p.status === "Archived")
    .sort((a, b) => b.impactScore - a.impactScore);

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <section id="products" className="w-full">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="space-y-0.5 mb-8 mt-20">
            <h2 className="text-2xl font-medium tracking-tighter">Products</h2>
            <p className="text-sm text-muted-foreground">
              Production systems I&apos;ve built and shipped. Focus on measurable impact.
            </p>
          </div>
        </BlurFade>

        {/* All Products — single list, no section headers */}
        <div className="space-y-6">
          {liveProducts.map((product, index) => (
            <BlurFade
              key={product.id}
              delay={BLUR_FADE_DELAY * 2 + index * 0.05}
            >
              <MinimalProductCard product={product} index={index} />
            </BlurFade>
          ))}
          {archivedProducts.map((product, index) => (
            <BlurFade
              key={product.id}
              delay={BLUR_FADE_DELAY * 3 + index * 0.05}
            >
              <MinimalProductCard product={product} index={index} />
            </BlurFade>
          ))}
        </div>

        {/* Empty State */}
        {PRODUCTS.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg text-muted-foreground">
              Product showcase coming soon...
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
