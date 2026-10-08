import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 px-6 border-t border-surface-border"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-content">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-5 leading-tight"
            >
              Have an interesting
              <br />
              problem to solve?
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed mb-7 max-w-sm">
              Open to full-time roles, freelance projects, and technical collaborations. If you have
              something worth building, let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-ink text-white text-sm px-6 py-2.5 font-medium hover:bg-ink/80 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                Send me an email
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/Fulail-KT-Resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-ink/20 text-ink text-sm px-5 py-2.5 font-medium hover:border-ink/50 hover:bg-surface-muted transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <Download size={13} />
                Resume
              </a>
            </div>
          </div>

          <div>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between py-5 border-t border-surface-border group hover:pl-1.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-ink-tertiary" />
                <div>
                  <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest mb-0.5">
                    Email
                  </p>
                  <p className="text-sm text-ink">{profile.email}</p>
                </div>
              </div>
              <ArrowUpRight
                size={15}
                className="text-ink-tertiary group-hover:text-ink transition-colors"
              />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 border-t border-surface-border group hover:pl-1.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={15} className="text-ink-tertiary" />
                <div>
                  <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-sm text-ink">linkedin.com/in/{profile.linkedinHandle}</p>
                </div>
              </div>
              <ArrowUpRight
                size={15}
                className="text-ink-tertiary group-hover:text-ink transition-colors"
              />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 border-t border-b border-surface-border group hover:pl-1.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Github size={15} className="text-ink-tertiary" />
                <div>
                  <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest mb-0.5">
                    GitHub
                  </p>
                  <p className="text-sm text-ink">github.com/{profile.githubHandle}</p>
                </div>
              </div>
              <ArrowUpRight
                size={15}
                className="text-ink-tertiary group-hover:text-ink transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="w-4 h-px bg-accent" />
      <p className="text-[10px] font-mono text-ink-tertiary tracking-widest uppercase">{children}</p>
    </div>
  );
}
