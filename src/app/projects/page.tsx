"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function NotebookPage() {
  const getProjectSlug = (title: string) => 
    title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // Track which projects have been categorized to prevent duplicates
  const categorizedProjects = new Set<string>();

  // Helper to filter and track projects
  const filterProjects = (filterFn: (p: any) => boolean) => {
    return DATA.projects.filter(p => {
      if (categorizedProjects.has(p.title)) return false;
      if (filterFn(p)) {
        categorizedProjects.add(p.title);
        return true;
      }
      return false;
    });
  };

  // Categorize projects (in order of priority - first match wins)
  const categories = {
    "Research & Quantum": filterProjects(p => 
      p.title.includes("Quantum") || p.title.includes("GHZ") || p.title.includes("Rydberg") ||
      p.title.includes("Steel") || p.title.includes("DRAM") || 
      p.title.includes("Thermodynamics") || p.title.includes("Reliability Analysis")
    ),
    "ML & AI": filterProjects(p => 
      p.title.includes("ML") || p.title.includes("AI-Powered") || p.title.includes("Training") || 
      p.title.includes("NLP") || p.title.includes("CNN") || p.title.includes("RNNs") || 
      p.title.includes("Reinforcement Learning") || p.title.includes("Generating Music") ||
      p.title.includes("Chip Layout")
    ),
    "Full-Stack Apps": filterProjects(p => 
      p.title.includes("Scaling") || p.title.includes("Building Real-Time") || 
      p.title.includes("Automating") || p.title.includes("marketplace")
    ),
    "Search & Retrieval": filterProjects(p => 
      p.title.includes("Semantic Search") || p.title.includes("Image Search") || 
      p.title.includes("Vector Embeddings") || p.title.includes("CLIP")
    ),
    "Data & Visualization": filterProjects(p => 
      p.title.includes("Dashboard") || p.title.includes("Analyzing") || 
      p.title.includes("Visualizing")
    ),
    "Systems & Infrastructure": filterProjects(p => 
      p.title.includes("High-Performance") || p.title.includes("Crypto Trading")
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
          <div className="space-y-0.5 mb-8 mt-20">
            <h2 className="text-2xl font-medium tracking-tighter">Notebook</h2>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                          <article className="group rounded-lg border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 overflow-hidden flex">
                            {/* Thumbnail */}
                            {project.image && (
                              <div className="relative w-32 h-20 flex-shrink-0 overflow-hidden bg-muted">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}

                            {/* Content */}
                            <div className="p-3 space-y-1 flex-1 min-w-0">
                              {/* Title */}
                              <h3 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                                {project.title}
                              </h3>

                              {/* Description */}
                              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">
                                {project.description}
                              </p>

                              {/* Technologies */}
                              {project.technologies && project.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.slice(0, 4).map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-1.5 py-0.5 text-xs rounded border bg-muted/50"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                  {project.technologies.length > 4 && (
                                    <span className="px-1.5 py-0.5 text-xs text-muted-foreground">
                                      +{project.technologies.length - 4}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Arrow on the right */}
                            <div className="flex items-center pr-3">
                              <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-0.5 transition-transform" />
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
