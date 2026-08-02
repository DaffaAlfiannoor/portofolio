"use client";

import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { certificatesData } from "@/data/portfolio";

export function Certificates() {
  return (
    <section id="certificates" className="bg-bg py-24 md:py-32">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="section-title">{certificatesData.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle">{certificatesData.subtitle}</p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14">
          {certificatesData.certificates.map((cert) => (
            <RevealItem key={cert.name}>
              <Link
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <Card className="overflow-hidden border border-border/25 bg-card hover:shadow-xl hover:-translate-y-1.5 hover:border-teal/30 transition-all duration-300 h-full flex flex-col cursor-pointer">
                  {/* Certificate Visual Header */}
                  <div className="relative bg-gradient-to-br from-navy/5 via-teal/5 to-navy/10 px-5 pt-6 pb-5">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                      <div className="absolute top-3 left-3 w-16 h-16 border-2 border-navy rounded-full" />
                      <div className="absolute bottom-3 right-3 w-12 h-12 border-2 border-teal rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-navy/50 rotate-45" />
                    </div>

                    {/* Icon */}
                    <div className="relative mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/15 to-teal/5 border border-teal/20 flex items-center justify-center group-hover:scale-110 group-hover:from-teal/25 group-hover:to-teal/10 transition-all duration-300">
                      <Award className="h-7 w-7 text-teal group-hover:text-teal transition-colors" />
                    </div>

                    {/* Badge */}
                    <div className="relative mt-3 flex justify-center">
                      <Badge
                        variant="secondary"
                        className="bg-tag/80 text-navy-dark hover:bg-tag font-semibold text-[10px] rounded-full px-3 py-0.5 uppercase tracking-wider"
                      >
                        {cert.issuer}
                      </Badge>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <CardContent className="p-5 pt-4 flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-navy leading-snug mb-3 line-clamp-2 group-hover:text-teal transition-colors duration-300">
                      {cert.name}
                    </h3>

                    <div className="mt-auto flex items-center justify-center gap-1.5 text-xs font-semibold text-teal opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Certificate
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
