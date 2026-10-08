import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 px-6 border-t border-surface-border"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionLabel>Experience</SectionLabel>
        <h2
          id="experience-heading"
          className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-12 leading-tight"
        >
          Where I&apos;ve worked
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-surface-border hidden md:block" />

          <div className="space-y-0">
            {experience.map((role, i) => (
              <article
                key={role.id}
                className={cn(
                  "relative md:pl-10 py-9",
                  i !== experience.length - 1 && "border-b border-surface-border"
                )}
              >
                <div
                  className={cn(
                    "absolute left-0 top-[2.8rem] w-3 h-3 rounded-full border-2 bg-white hidden md:block -translate-x-[5px]",
                    role.current ? "border-accent" : "border-ink-tertiary/30"
                  )}
                />

                <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10">
                  <div className="space-y-2">
                    {role.current && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest bg-accent/8 text-accent px-2 py-0.5 border border-accent/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Current
                      </span>
                    )}
                    <p className="text-[11px] font-mono text-ink-tertiary tracking-wider uppercase leading-relaxed">
                      {role.period}
                    </p>
                    <p className="text-xs text-ink-tertiary">{role.location}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-ink mb-0.5">{role.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <p className="text-sm font-semibold text-accent">{role.company}</p>
                      {role.companyDescription && (
                        <span className="text-xs text-ink-tertiary">
                          · {role.companyDescription}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2.5" aria-label={`Responsibilities at ${role.company}`}>
                      {role.highlights.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm text-ink-secondary leading-relaxed"
                        >
                          <span className="shrink-0 mt-[7px] w-1 h-1 rounded-full bg-ink/25" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {role.technologies && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {role.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-ink-secondary bg-surface-muted px-2 py-0.5 border border-surface-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
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
