import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return DATA.projects.map((project) => ({ 
    slug: project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const project = DATA.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug
  );

  if (!project) {
    return;
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `${DATA.url}/projects/${params.slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const project = DATA.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="relative container mx-auto px-4 max-w-7xl">
      {/* Hero Header */}
      <div className="relative mt-28 mb-6 pb-6 border-b">
        <h1 className="title font-medium text-3xl md:text-4xl tracking-tight">
          {project.title}
        </h1>
      </div>

      {/* Featured Image */}
      {project.image && (
        <div className="relative w-full h-96 mb-8 overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Date Card */}
        {project.dates && (
          <div className="flex items-center gap-4 p-5 rounded-lg border bg-card hover:border-primary/30 transition-colors duration-300">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1.5">Timeline</p>
              <p className="text-sm font-medium">{project.dates}</p>
            </div>
          </div>
        )}

        {/* Status */}
        <div className="flex items-center gap-4 p-5 rounded-lg border bg-card hover:border-primary/30 transition-colors duration-300">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
            <Code2 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1.5">Status</p>
            <p className="text-sm font-medium">{project.active ? "Active" : "Completed"}</p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="relative mb-8">
          <div className="p-5 rounded-lg border bg-card">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-medium">Tech Stack</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
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

      {/* Description */}
      <div className="relative mb-10">
        <div className="p-5 rounded-lg bg-muted/30 border-l-2 border-primary/50">
          <p className="text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* External Links */}
      {project.links && project.links.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-3">
          {project.links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-card hover:bg-muted transition-colors"
            >
              {link.icon}
              <span className="text-sm font-medium">{link.type}</span>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </Link>
          ))}
        </div>
      )}

      {/* Article Content - Placeholder for future detailed write-ups */}
      <article className="prose prose-neutral dark:prose-invert max-w-none mb-20">
        <h2>Overview</h2>
        <p>{project.description}</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Built with modern tech stack</li>
          <li>Focus on user experience and performance</li>
          <li>Scalable architecture</li>
        </ul>

        <h2>Technical Implementation</h2>
        <p>
          This project leverages {project.technologies?.[0]} and {project.technologies?.[1]} to create a robust solution.
          More detailed write-up coming soon.
        </p>
      </article>
    </section>
  );
}

