"use client";

import { useState } from "react";
import { ArrowRight, Award, ExternalLink, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { journeyData } from "@/data/portfolio";
import type { Certificate } from "@/data/portfolio";

export function Journey() {
  const [openDialog, setOpenDialog] = useState(false);
  const [activeCertificates, setActiveCertificates] = useState<Certificate[]>(
    []
  );
  const [activeTitle, setActiveTitle] = useState("");

  const handleOpenCertificates = (
    certificates: Certificate[],
    title: string
  ) => {
    setActiveCertificates(certificates);
    setActiveTitle(title);
    setOpenDialog(true);
  };

  return (
    <section id="experience" className="bg-bg py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-14">
          <Reveal>
            <h2 className="section-title">{journeyData.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">{journeyData.subtitle}</p>
          </Reveal>
        </div>

        <div className="max-w-[768px] mx-auto flex flex-col gap-10">
          <Reveal>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">
                Education
              </h3>
              <Separator className="bg-border" />
              <Card className="mt-6 border border-border/25 bg-card shadow-sm">
                <CardContent className="p-7 md:p-8">
                  <span className="text-sm font-bold text-teal tracking-wide">
                    {journeyData.education.period}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-navy mt-1">
                    {journeyData.education.title}
                  </h4>
                  <p className="text-sm md:text-base text-text mt-1">
                    {journeyData.education.organization}
                  </p>
                </CardContent>
              </Card>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">
                Professional Experience
              </h3>
              <Separator className="bg-border" />
              <RevealStagger className="mt-6 flex flex-col gap-6">
                {journeyData.experience.map((exp) => (
                  <RevealItem key={exp.period}>
                    <Card className="border border-border/25 bg-card shadow-sm">
                      <CardContent className="p-7 md:p-8">
                        <span className="text-sm font-bold text-teal tracking-wide">
                          {exp.period}
                        </span>
                        <h4 className="text-lg md:text-xl font-bold text-navy mt-1">
                          {exp.title}
                        </h4>
                        <p className="text-sm md:text-base text-text mt-1">
                          {exp.organization}
                        </p>
                        {exp.description && (
                          <p className="text-sm md:text-base text-text mt-4 leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                        {exp.certificates && exp.certificates.length > 0 && (
                          <button
                            onClick={() =>
                              handleOpenCertificates(
                                exp.certificates!,
                                exp.title
                              )
                            }
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:gap-3 transition-all group cursor-pointer"
                          >
                            <Award className="h-4 w-4" />
                            Certificate
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </CardContent>
                    </Card>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Certificate Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-navy flex items-center gap-2">
              <Award className="h-5 w-5 text-teal" />
              Certificates
            </DialogTitle>
            <DialogDescription>
              Certificates earned from{" "}
              <span className="font-semibold text-navy">{activeTitle}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 mt-2">
            {activeCertificates.map((cert, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-bg hover:border-teal/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-teal" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-navy truncate">
                    {cert.name}
                  </p>
                  <p className="text-xs text-muted mt-0.5">PDF Document</p>
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-text hover:text-teal hover:bg-teal/10 transition-colors"
                    title="View Certificate"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={cert.url}
                    download
                    className="p-2 rounded-lg text-text hover:text-teal hover:bg-teal/10 transition-colors"
                    title="Download Certificate"
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
