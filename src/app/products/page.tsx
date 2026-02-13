"use client";

import { useState, useMemo } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProductCard } from "@/components/product-card";
import { ProofStrip } from "@/components/proof-strip";
import { PRODUCTS, PRODUCT_TYPES, PRODUCT_STATUSES, PRODUCT_DOMAINS, ProductType, ProductStatus, ProductDomain } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

type SortOption = "impact" | "recent";

export default function ProductsPage() {
  const [filterType, setFilterType] = useState<ProductType | "all">("all");
  const [filterStatus, setFilterStatus] = useState<ProductStatus | "all">("all");
  const [filterDomain, setFilterDomain] = useState<ProductDomain | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("impact");

  // Calculate aggregated proof stats
  const proofStats = useMemo(() => {
    return [
      { label: "Products Shipped", value: "7" },
      { label: "Total Users", value: "3K+" },
      { label: "Enterprise Customers", value: "8+" },
      { label: "Total GMV/MRR", value: "$5.5K+" },
      { label: "Avg Accuracy Gain", value: "+27%" },
      { label: "Funding Raised", value: "$1.0M" },
    ];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS.filter((product) => {
      const typeMatch = filterType === "all" || product.type === filterType;
      const statusMatch = filterStatus === "all" || product.status === filterStatus;
      const domainMatch = filterDomain === "all" || product.domain === filterDomain;
      return typeMatch && statusMatch && domainMatch;
    });

    // Sort
    if (sortBy === "impact") {
      filtered.sort((a, b) => b.impactScore - a.impactScore);
    } else if (sortBy === "recent") {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  }, [filterType, filterStatus, filterDomain, sortBy]);

  // Split into currently live and past projects
  const currentlyLiveProducts = useMemo(() => {
    return filteredProducts.filter((product) => product.isCurrentlyLive);
  }, [filteredProducts]);

  const pastProjects = useMemo(() => {
    return filteredProducts.filter((product) => !product.isCurrentlyLive);
  }, [filteredProducts]);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="space-y-1 mb-6 mt-20">
            <h2 className="text-2xl font-medium tracking-tight">Products</h2>
            <p className="text-sm text-muted-foreground">
              Systems I&apos;ve architected and shipped—real users, real metrics, real infra. End to end.
            </p>
          </div>
        </BlurFade>        



        {/* Currently Live Section */}
        {currentlyLiveProducts.length > 0 && (
          <section className="mb-16">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Live</p>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
              </div>
            </BlurFade>
            <div className="flex flex-col gap-6">
              {currentlyLiveProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Past Projects Section */}
        {pastProjects.length > 0 && (
          <section className="mb-16">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="mb-8 border-t border-border pt-8">
                <h3 className="text-lg font-normal text-muted-foreground tracking-wide uppercase">Past Projects</h3>
              </div>
            </BlurFade>
            <div className="flex flex-col gap-6">
              {pastProjects.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index + currentlyLiveProducts.length} />
              ))}
            </div>
          </section>
        )}

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No products match the selected filters.
          </div>
        )}
      </div>
    </main>
  );
}
