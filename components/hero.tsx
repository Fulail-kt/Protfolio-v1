import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { getExperienceYears } from "@/lib/utils";
import { HeroAnimation } from "./hero-animation";

export default function Hero() {
  const years = getExperienceYears(profile.experienceStartDate);
  const projectCount = projects.length;

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-[0.85] pointer-events-none" />

      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />

      <div className="relative mx-auto w-full max-w-content">
        <div className="grid items-center lg:grid-cols-[1fr_360px] gap-10 xl:gap-16">

          {/* Left: content */}
          <div>
            {/* Status */}
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-mono text-ink-tertiary tracking-[0.15em] uppercase">
                Lead Full Stack Developer · Particle Execution
              </span>
            </div>

            {/* Name */}
            <h1
              id="hero-heading"
              className="text-[clamp(3rem,8vw,7rem)] font-bold tracking-[-0.03em] text-ink leading-[1] mb-7"
            >
              Muhamed
              <br />
              Fulail KT
            </h1>

            {/* Role + tagline */}
            <p className="text-lg sm:text-xl text-ink-secondary font-light max-w-xl mb-10 leading-relaxed">
              Lead Full Stack Developer - building scalable web products, AI agent systems, and GTM
              automation infrastructure.
            </p>

            {/* Stats strip */}
            <div className="flex items-stretch w-fit mb-10 border border-surface-border divide-x divide-surface-border bg-white/80 backdrop-blur-sm">
              <div className="px-5 py-3 flex flex-col justify-between gap-1.5">
                <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">
                  Years exp.
                </p>
                <p className="text-2xl font-bold text-ink tabular-nums leading-none">{years}+</p>
              </div>
              <div className="px-5 py-3 flex flex-col justify-between gap-1.5">
                <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">
                  Projects
                </p>
                <p className="text-2xl font-bold text-ink tabular-nums leading-none">{projectCount}+</p>
              </div>
              <div className="px-5 py-3 flex flex-col justify-between gap-1.5">
                <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">
                  Currently at
                </p>
                <p className="text-sm font-semibold text-ink leading-none">Particle Execution</p>
              </div>
              <div className="px-5 py-3 flex flex-col justify-between gap-1.5 hidden sm:flex">
                <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">
                  Location
                </p>
                <p className="text-sm font-semibold text-ink leading-none">Kerala, India</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-ink text-white text-sm px-6 py-2.5 font-medium hover:bg-ink/80 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                View my work
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-ink/20 text-ink text-sm px-6 py-2.5 font-medium hover:border-ink/50 hover:bg-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                Get in touch
              </a>
              <a
                href="/Fulail-KT-Resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-dashed border-ink/35 bg-surface-muted text-ink text-sm px-5 py-2.5 font-medium hover:bg-surface-border/40 hover:border-ink/60 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <Download size={13} />
                Resume
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink-tertiary hover:text-ink transition-colors"
                aria-label="GitHub"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <span className="text-ink-tertiary/30 text-xs">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink-tertiary hover:text-ink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <span className="text-ink-tertiary/30 text-xs">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-ink-tertiary hover:text-ink transition-colors"
                aria-label="Email"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">{profile.email}</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>

          {/* Right: interactive floating tech tags */}
          <div className="hidden lg:block h-[540px]">
            <HeroAnimation />
          </div>

        </div>
      </div>
    </section>
  );
}
