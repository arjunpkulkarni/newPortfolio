"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function NotebookPage() {
  const getProjectSlug = (title: string) => 
    title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // Categorize projects
  const categories = {
    "ML & AI": DATA.projects.filter(p => 
      p.title.includes("ML") || p.title.includes("AI-Powered") || p.title.includes("Training") || 
      p.title.includes("NLP") || p.title.includes("CNN") || p.title.includes("RNNs") || 
      p.title.includes("Reinforcement Learning")
    ),
    "Full-Stack Apps": DATA.projects.filter(p => 
      p.title.includes("Scaling") || p.title.includes("Building Real-Time") || 
      p.title.includes("Automating") || p.title.includes("marketplace")
    ),
    "Search & Retrieval": DATA.projects.filter(p => 
      p.title.includes("Semantic Search") || p.title.includes("Image Search") || 
      p.title.includes("Vector Embeddings")
    ),
    "Data & Visualization": DATA.projects.filter(p => 
      p.title.includes("Dashboard") || p.title.includes("Analyzing") || 
      p.title.includes("Visualizing")
    ),
    "Research & Quantum": DATA.projects.filter(p => 
      p.title.includes("Quantum") || p.title.includes("GHZ") || 
      p.title.includes("Chip Layout")
    ),
  };

  // Get latest project
  const allProjects = [...DATA.projects].sort((a, b) => {
    const dateA = a.dates || '0';
    const dateB = b.dates || '0';
    return dateB.localeCompare(dateA);
  });
  const latestProject = allProjects[0];

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <section id="notebook" className="w-full">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-8 mt-20">
            <h1 className="text-3xl font-medium mb-2">Notebook</h1>
            <p className="text-sm text-muted-foreground">
              Technical deep-dives into systems I&apos;ve built. Each project solves a specific problem.
            </p>
          </div>
        </BlurFade>        
        
        {/* Categorized Projects */}
        {Object.entries(categories).map(([category, projects], catIndex) => {
          if (projects.length === 0) return null;
          
          return (
            <div key={category} className="mb-10">
              <BlurFade delay={BLUR_FADE_DELAY * (3 + catIndex)}>
                <h2 className="text-lg font-bold mb-4 pb-2 border-b">{category}</h2>
              </BlurFade>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, id) => {
                  const slug = getProjectSlug(project.title);
                  return (
                    <BlurFade
                      key={project.title}
                      delay={BLUR_FADE_DELAY * (4 + catIndex) + id * 0.02}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: id * 0.05 }}
                      >
                        <Link href={`/projects/${slug}`}>
                          <article className="group h-full rounded-lg border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 overflow-hidden">
                            {/* Thumbnail */}
                            {project.image && (
                              <div className="relative w-full h-32 overflow-hidden bg-muted">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}

                            {/* Content */}
                            <div className="p-3 space-y-2">
                              {/* Date */}
                              {project.dates && (
                                <time className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {project.dates}
                                </time>
                              )}

                              {/* Title */}
                              <h3 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                                {project.title}
                              </h3>

                              {/* Description */}
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                {project.description}
                              </p>

                              {/* Technologies */}
                              {project.technologies && project.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.slice(0, 3).map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-1.5 py-0.5 text-xs rounded border bg-muted/50"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                  {project.technologies.length > 3 && (
                                    <span className="px-1.5 py-0.5 text-xs text-muted-foreground">
                                      +{project.technologies.length - 3}
                                    </span>
                                  )}
                                </div>
                              )}

                              {/* Arrow */}
                              <div className="flex items-center gap-0.5 text-xs text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                                <span>View</span>
                                <ChevronRight className="h-3 w-3" />
                              </div>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    </BlurFade>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
