import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Building2, Folder, Calendar, TrendingUp, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import siramaiLogo from "../../projects/pictures/logos/siramaiLogo.png";
import uiuc from "../../education/pictures/uiuc.png";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function BlogContent({ post }: { post: any }) {
  const companyLogos: Record<string, any> = {
    "Siramai": siramaiLogo,
    "Nick Holonyak Jr. Micro/Nano Lab": uiuc,
  };

  const companyLogo = post.metadata.company ? companyLogos[post.metadata.company] : null;

  return (
    <>

      <section id="blog" className="relative container mx-auto px-4 max-w-4xl">
        {/* Hero Header */}
        <div className="relative mt-28 mb-6 pb-6 border-b">
          {/* Title */}
          <h1 className="title font-medium text-3xl md:text-4xl tracking-tight">
            {post.metadata.title}
          </h1>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
          {/* Company Card with LOGO */}
          {post.metadata.company && (
            <div className="relative">
              <div className="flex items-center gap-4 p-5 rounded-lg border bg-card hover:border-primary/30 transition-colors duration-300">
                {companyLogo && (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={companyLogo}
                      alt={post.metadata.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1">
                    <Building2 className="h-3 w-3" />
                    Organization
                  </p>
                  <p className="text-sm font-medium">{post.metadata.company}</p>
                  {post.metadata.role && (
                    <p className="text-xs text-muted-foreground mt-1">{post.metadata.role}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Category Card */}
          <div className="relative">
            <div className="flex items-center gap-4 p-5 rounded-lg border bg-card hover:border-primary/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <Folder className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1.5">Category</p>
                <p className="text-sm font-medium">{post.metadata.category || "Technical"}</p>
                <Suspense fallback={<p className="h-4" />}>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                </Suspense>
              </div>
            </div>
          </div>

          {/* Impact Stat */}
          <div className="relative">
            <div className="flex items-center gap-4 p-5 rounded-lg border bg-card hover:border-primary/30 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1.5">Impact</p>
                <p className="text-sm font-medium">Production</p>
                <p className="text-xs text-muted-foreground mt-1">✓ Shipped</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        {post.metadata.technologies && post.metadata.technologies.length > 0 && (
          <div className="relative mb-8">
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium">Tech Stack</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.metadata.technologies.map((tech: string) => (
                  <Badge 
                    key={tech}
                    variant="secondary"
                    className="text-xs px-3 py-1.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Summary */}
        {post.metadata.summary && (
          <div className="relative mb-10">
            <div className="p-5 rounded-lg bg-muted/30 border-l-2 border-primary/50">
              <p className="text-sm leading-relaxed">
                {post.metadata.summary}
              </p>
            </div>
          </div>
        )}

        {/* Article Content */}
        <article
          className="prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-medium prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6
          prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-5
          prose-p:leading-relaxed prose-p:text-base prose-p:mb-6
          prose-ul:my-6 prose-ol:my-6 prose-li:my-2
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-pre:bg-muted prose-pre:border prose-pre:my-6 prose-pre:p-4
          prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-strong:text-foreground prose-strong:font-semibold
          prose-table:text-sm prose-table:border prose-table:border-border prose-table:my-6
          prose-blockquote:border-l-2 prose-blockquote:border-border prose-blockquote:bg-muted/30 prose-blockquote:py-2 prose-blockquote:my-6"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </section>
    </>
  );
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <BlogContent post={post} />
    </>
  );
}
