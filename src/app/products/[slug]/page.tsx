import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, FileText, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return;
  }

  return {
    title: `${product.name} - Products`,
    description: product.oneLiner,
    openGraph: {
      title: product.name,
      description: product.oneLiner,
      type: "article",
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Video or Image */}
        {(product.slug === "congruence" || product.slug === "openfield") ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={`/demos/${product.slug}.mp4`} type="video/mp4" />
          </video>
        ) : product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-muted" />
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        
        {/* Content */}
        <div className="container relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <Link
            href="/products"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white">
              {product.name}
            </h1>

            {product.links.live ? (
              <Link
                href={product.links.live}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                View Live
              </Link>
            ) : product.links.demo ? (
              <Link
                href={product.links.demo}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Play className="h-4 w-4" />
                View Demo
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Header Info */}
        <div className="mb-16">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="text-sm">{product.status}</Badge>
            <Badge variant="outline" className="text-sm">{product.type}</Badge>
          </div>

          <p className="mb-8 text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {product.oneLiner}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8 mb-8">
            {product.proof.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold text-primary tabular-nums">
                  {metric.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Links */}
          {product.links.github && (
            <div className="flex flex-wrap gap-3">
              <Link
                href={product.links.github}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          )}
        </div>

        {/* Problem, Solution, Impact */}
        {(product.problem || product.solution || product.impact) && (
          <div className="mb-16 grid gap-8 lg:grid-cols-3">
            {product.problem && (
              <div className="rounded-xl border bg-card p-8">
                <h2 className="mb-4 text-lg font-medium">Problem</h2>
                <div className="leading-relaxed text-muted-foreground whitespace-pre-line">
                  {product.problem}
                </div>
              </div>
            )}
            {product.solution && (
              <div className="rounded-xl border bg-card p-8">
                <h2 className="mb-4 text-lg font-medium">Solution</h2>
                <div className="leading-relaxed text-muted-foreground whitespace-pre-line">
                  {product.solution}
                </div>
              </div>
            )}
            {product.impact && (
              <div className="rounded-xl border bg-card p-8">
                <h2 className="mb-4 text-lg font-medium">Impact</h2>
                <div className="leading-relaxed text-muted-foreground whitespace-pre-line">
                  {product.impact}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Why Built */}
        {product.whyBuilt && (
          <div className="mb-16">
            <div className="rounded-xl border-l-4 border-primary bg-muted/30 p-8">
              <h2 className="mb-4 text-lg font-medium">Why I Built This</h2>
              <p className="leading-relaxed text-muted-foreground">
                {product.whyBuilt}
              </p>
            </div>
          </div>
        )}

        {/* Architecture */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-medium">Architecture</h2>
          <ArchitectureDiagram system={product.system} productName={product.name} />
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-medium">Technical Highlights</h2>
          <div className="space-y-4">
            {product.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-xl border bg-card p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {idx + 1}
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        {product.screenshots && product.screenshots.length > 0 && (
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-medium">Product Screenshots</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              {product.screenshots.map((screenshot, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg w-64"
                >
                  <Image
                    src={screenshot}
                    alt={`${product.name} screenshot ${idx + 1}`}
                    width={256}
                    height={512}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-medium">Technologies & Tags</h2>
          <div className="flex flex-wrap gap-3">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-4 py-2 text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
