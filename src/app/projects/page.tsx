import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <section id="projects" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="space-y-0.5 mb-6 mt-20">
            <h2 className="text-2xl font-medium tracking-tighter">
              Projects
            </h2>
            <p className="text-sm text-muted-foreground">
              AI infrastructure, full-stack development, and research work.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-3">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            >
              <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:shadow-lg transition-all duration-200 overflow-hidden">
                <div className="grid md:grid-cols-[200px_1fr] gap-5 p-5">
                  {/* Image on Left - Standardized */}
                  <Link 
                    href={project.href || "#"} 
                    className="relative w-full h-40 overflow-hidden rounded-lg bg-muted block"
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </Link>

                  {/* Content on Right */}
                  <div className="flex flex-col">
                    <div className="space-y-2">
                      {/* Title */}
                      <Link href={project.href || "#"}>
                        <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                      </Link>

                      {/* Description */}
                      <p className="text-sm text-white/70 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Tags - Premium Pills */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs rounded-full bg-white/[0.06] border border-white/[0.08] text-white/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons - Bottom Right Aligned */}
                    {project.links && project.links.length > 0 && (
                      <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/[0.06]">
                        {project.links.map((link, idx) => (
                          <Link 
                            key={idx}
                            href={link.href} 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="text-xs px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] transition flex items-center gap-1.5">
                              <span className="opacity-70">{link.icon}</span>
                              <span>{link.type}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
} 