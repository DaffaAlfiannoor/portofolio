"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { projectsData } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="work" className="bg-card py-24 md:py-32">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="section-title">{projectsData.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle">{projectsData.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {projectsData.projects.map((project) => (
            <RevealItem key={project.title}>
              <Card className="overflow-hidden border border-border/25 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {project.comingSoon ? (
                  <div className="relative aspect-[387/218] bg-bg flex flex-col items-center justify-center gap-4">
                    <span className="text-sm font-semibold text-navy uppercase tracking-wide">
                      Coming Soon
                    </span>
                    <span className="bg-navy text-white text-xs font-semibold px-5 py-2 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                ) : (
                  <div className="relative aspect-[387/218] bg-[#E5E2E1] group overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-navy/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={project.href || "#contact"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy/90 transition-colors"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </div>
                )}

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-navy leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-tag text-navy-dark hover:bg-tag/90 font-semibold text-xs rounded-xl px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {!project.comingSoon && (
                    <Link
                      href={project.href || "#contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal hover:gap-3 transition-all group"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
