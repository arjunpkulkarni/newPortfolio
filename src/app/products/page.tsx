"use client";

import { PRODUCTS } from "@/data/products";
import { MinimalProductCard } from "@/components/minimal-product-card";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function ProductsPage() {
  // Separate live and archived products
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
              Production systems I've built and shipped. Focus on measurable impact.
            </p>
          </div>
        </BlurFade>

        {/* Live Products Section */}
        {liveProducts.length > 0 && (
          <div className="mb-16">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 border border-green-500/20">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">
                    Active
                  </span>
                </div>
              </div>
            </BlurFade>

            <div className="space-y-6">
              {liveProducts.map((product, index) => (
                <BlurFade
                  key={product.id}
                  delay={BLUR_FADE_DELAY * 3 + index * 0.05}
                >
                  <MinimalProductCard product={product} index={index} />
                </BlurFade>
              ))}
            </div>
          </div>
        )}

        {/* Past Products Section */}
        {archivedProducts.length > 0 && (
          <div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="mb-6">
                <h3 className="text-lg font-medium tracking-tight text-muted-foreground">Past Projects</h3>
                <p className="mt-1 text-sm text-muted-foreground/70">
                  Previous work and experiments
                </p>
              </div>
            </BlurFade>

            <div className="space-y-6">
              {archivedProducts.map((product, index) => (
                <BlurFade
                  key={product.id}
                  delay={BLUR_FADE_DELAY * 5 + index * 0.05}
                >
                  <MinimalProductCard product={product} index={index} />
                </BlurFade>
              ))}
            </div>
          </div>
        )}

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
