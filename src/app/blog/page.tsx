import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Technical Blog",
  description: "Deep dives into systems engineering, AI infrastructure, and materials science.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="container mx-auto px-4 py-8 max-w-7xl">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 mt-20 tracking-tighter">Technical Blog</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Deep dives into systems engineering, AI infrastructure, and materials science
        </p>
      </BlurFade>
      <div className="space-y-6">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="block group"
                href={`/blog/${post.slug}`}
              >
                <div className="rounded-lg border bg-card p-4 hover:shadow-md transition-all duration-200">
                  <h2 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.metadata.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    {post.metadata.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <time dateTime={post.metadata.publishedAt}>
                      {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="text-primary font-medium">Read more →</span>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
