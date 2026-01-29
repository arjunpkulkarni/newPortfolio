"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/data/products";

const BLUR_FADE_DELAY = 0.04;

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Centered container with consistent max-width */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="space-y-0.5 mb-8 mt-20">
            <h2 className="text-2xl font-medium tracking-tighter">Products</h2>
            <p className="text-sm text-muted-foreground">Products I&apos;ve built and shipped to production with real users.</p>
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
