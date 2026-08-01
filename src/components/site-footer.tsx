"use client";

import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="bg-bg border-t border-border/35 py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="aL. Logo" width={40} height={24} />
          <span className="text-sm text-muted">
            {footerData.copyright}
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerData.links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-text hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
