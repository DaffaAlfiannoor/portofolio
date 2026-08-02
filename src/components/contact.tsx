"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { contactData, contactInfo } from "@/data/portfolio";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.598 0 4.261 2.366 4.261 5.455v6.288zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const iconMap = {
  mail: Mail,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "395dcf89-42ba-4129-b6c7-a9bc5a4c9007",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="bg-bg py-24 md:py-32">
      <div className="section-container">
        <div className="text-center mb-14">
          <Reveal>
            <h2 className="section-title">{contactData.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle">{contactData.subtitle}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-[1200px] mx-auto">
          <RevealStagger className="flex flex-col gap-5">
            {contactInfo.map((info) => {
              const IconComponent = iconMap[info.iconName];
              const isExternal = info.href.startsWith("http");
              return (
                <RevealItem key={info.label}>
                  <Link
                    href={info.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <Card className="border border-border/25 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                      <CardContent className="p-5 flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-navy" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-navy">
                              {info.label}
                            </h4>
                            {isExternal && (
                              <ExternalLink className="h-3.5 w-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </div>
                          <p className="text-sm text-text truncate">
                            {info.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealStagger>

          <Reveal delay={0.2}>
            <Card className="border border-border/25 bg-card shadow-lg">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-navy font-semibold">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="bg-bg border-border focus-visible:ring-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-navy font-semibold">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="bg-bg border-border focus-visible:ring-teal"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-navy font-semibold">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="bg-bg border-border focus-visible:ring-teal"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-navy font-semibold">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can I help you?"
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="bg-bg border-border focus-visible:ring-teal resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-6 text-white transition-colors ${
                      status === "success"
                        ? "bg-green-600 hover:bg-green-600"
                        : status === "error"
                          ? "bg-red-600 hover:bg-red-600"
                          : "bg-navy hover:bg-navy/90"
                    }`}
                  >
                    {status === "loading" && (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {status === "idle" && "Send Message"}
                    {status === "loading" && "Sending..."}
                    {status === "success" && "✓ Message Sent!"}
                    {status === "error" && "✕ Failed to Send"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
