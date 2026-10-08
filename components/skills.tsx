import { skillGroups, interests, automationWork, automationHasMore } from "@/content/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 px-6 border-t border-surface-border"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionLabel>Skills</SectionLabel>
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-12 leading-tight"
        >
          Technical capabilities
        </h2>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border mb-px">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-white p-5 flex flex-col gap-3">
              <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.primary.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-ink bg-surface-muted border border-surface-border px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Automation work */}
        <div className="mt-14">
          <SectionLabel>Automation & GTM work</SectionLabel>
          <h3 className="text-2xl font-bold text-ink tracking-tight mb-8">
            Systems built for clients and in-house
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationWork.map((item) => (
              <div key={item.title} className="group">
                <div className="w-5 h-px bg-accent mb-3.5 group-hover:w-10 transition-all duration-300" />
                <h4 className="text-sm font-semibold text-ink mb-1.5">{item.title}</h4>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
            {automationHasMore && (
              <div>
                <div className="w-5 h-px bg-ink-tertiary/25 mb-3.5" />
                <h4 className="text-sm font-semibold text-ink-tertiary mb-1.5">& more</h4>
                <p className="text-sm text-ink-tertiary leading-relaxed">
                  Additional client automation work across sales, reporting, data pipelines, content
                  workflows, and internal tooling.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Focus areas */}
        <div className="mt-14">
          <SectionLabel>Current focus</SectionLabel>
          <h3 className="text-2xl font-bold text-ink tracking-tight mb-8">
            Where I&apos;m directing attention
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((item) => (
              <div key={item.title} className="group">
                <div className="w-5 h-px bg-ink-tertiary/25 mb-3.5 group-hover:w-10 transition-all duration-300" />
                <h4 className="text-sm font-semibold text-ink mb-1.5">{item.title}</h4>
                <p className="text-sm text-ink-secondary leading-relaxed">{item.description}</p>
              </div>
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
