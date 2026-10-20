"use client";

import { PRODUCTS } from "@/data/products";
import { MinimalProductCard } from "@/components/minimal-product-card";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ProductsPage() {
  const shippedProducts = PRODUCTS
    .filter((p) => p.status === "Live" || p.status === "Pilot")
    .sort((a, b) => b.impactScore - a.impactScore);
  
  const archivedProducts = PRODUCTS
    .filter(p => p.status === "Archived")
    .sort((a, b) => b.impactScore - a.impactScore);

  return (
    <main className="px-5 py-8 sm:px-8">
      <section id="products" className="w-full">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-8 space-y-0.5">
            <h2 className="section-label">Products</h2>
            <div className="section-rule !mb-0" />
            <p className="pt-4 text-sm text-muted-foreground">
              Production systems I&apos;ve built and shipped end-to-end with complete ownership. Focus on measurable impact.
            </p>
          </div>
        </BlurFade>

        {/* All Products  -  single list, no section headers */}
        <div className="space-y-6">
          {shippedProducts.map((product, index) => (
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
