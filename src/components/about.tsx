"use client";

import { Reveal } from "@/components/reveal";
import { aboutData } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="bg-card py-24 md:py-32">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="section-title">{aboutData.title}</h2>
        </Reveal>
        {aboutData.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={0.1 + i * 0.1}>
            <p className="section-subtitle mt-6 max-w-3xl leading-relaxed">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
