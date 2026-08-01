"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { skillsData } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="bg-bg py-24 md:py-32">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="section-title">Technical Expertise</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle">
            A specialized toolkit for extracting insights and building intelligent models.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <RevealItem key={skill.title}>
                <Card className="border border-border/25 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-7 flex flex-col items-start text-left">
                    <div className="w-13 h-13 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-teal" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-text leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
