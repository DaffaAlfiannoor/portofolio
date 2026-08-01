"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/portfolio";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-border/35">
      <div className="section-container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="aL. Logo" width={50} height={30} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 text-white text-sm font-medium px-6 h-9 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="md:hidden"
              />
            }
          >
            <Menu className="h-6 w-6 text-navy" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-card border-border">
            <div className="flex flex-col gap-8 mt-8">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-navy hover:text-teal transition-colors"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 text-white text-base font-medium w-full py-3 rounded-lg transition-colors"
                  />
                }
              >
                Hire Me
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
