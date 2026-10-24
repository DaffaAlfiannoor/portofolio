"use client";

import { Reveal } from "@/components/reveal";
import { skillCategoriesData } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="bg-bg py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-14">
          <Reveal>
            <h2 className="section-title">Technical Expertise</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">
              A specialized toolkit for extracting insights and building
              intelligent models.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border/25 bg-card shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/25 bg-teal/5">
                  <th className="px-6 py-4 text-left text-sm font-bold text-navy w-1/3">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-navy">
                    Skills
                  </th>
                </tr>
              </thead>
              <tbody>
                {skillCategoriesData.map((row, index) => (
                  <tr
                    key={row.category}
                    className={`transition-colors hover:bg-teal/5 ${
                      index < skillCategoriesData.length - 1
                        ? "border-b border-border/15"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-navy align-top">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-text leading-relaxed">
                      {row.skills}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
