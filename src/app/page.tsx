import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certificates } from "@/components/certificates";
import { Journey } from "@/components/journey";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Journey />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
