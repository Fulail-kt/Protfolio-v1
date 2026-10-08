import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-surface-border px-6 py-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-content flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.displayName}</p>
          <p className="text-xs text-ink-tertiary mt-0.5">
            © {year} · All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-tertiary hover:text-ink transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-tertiary hover:text-ink transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-tertiary hover:text-ink transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
