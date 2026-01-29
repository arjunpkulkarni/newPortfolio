"use client";

import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/data/products";

const BLUR_FADE_DELAY = 0.04;

export default function ProductsPage() {
  // Split into featured and other
  const featuredProducts = PRODUCTS.filter((p) => p.featured);
  const otherProducts = PRODUCTS.filter((p) => !p.featured);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Narrow centered column */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-12 mt-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-muted-foreground"
            >
              Products I&apos;ve built. All in production with real users.
            </motion.p>
          </div>
        </BlurFade>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <div className="mb-16">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Featured
                <span className="text-sm font-normal text-muted-foreground">
                  ({featuredProducts.length})
                </span>
              </h2>
            </BlurFade>

            {/* Single column stack */}
            <div className="space-y-6">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Products */}
        {otherProducts.length > 0 && (
          <div className="mb-16">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Other Projects
                <span className="text-sm font-normal text-muted-foreground">
                  ({otherProducts.length})
                </span>
              </h2>
            </BlurFade>

            {/* Single column stack */}
            <div className="space-y-6">
              {otherProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index + featuredProducts.length}
                />
              ))}
            </div>
          </div>
        )}

        {/* Stats Footer */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Products Shipped
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2.7K+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Total Users
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$2K</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Monthly Revenue
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  In Production
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>
      </div>
    </main>
  );
}
