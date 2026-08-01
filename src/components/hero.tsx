"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { heroData } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="bg-bg py-28 md:py-36 lg:py-44 text-center">
      <div className="section-container">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.15]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {heroData.name.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl font-bold text-teal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {heroData.role}
        </motion.p>

        <motion.p
          className="mt-5 text-base md:text-lg text-text max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {heroData.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={heroData.cta.href}
            className="inline-flex items-center bg-navy hover:bg-navy/90 text-white px-8 py-3.5 text-base font-semibold rounded-lg transition-colors group"
          >
            {heroData.cta.label}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/CV_Muhammad_Daffa_Alfiannoor.pdf"
            download
            className="inline-flex items-center border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-3.5 text-base font-semibold rounded-lg transition-all group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
