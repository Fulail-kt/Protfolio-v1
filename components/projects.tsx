import { featuredProjects, personalProjects } from "@/content/projects";
import { cn } from "@/lib/utils";

const categoryLabel: Record<string, string> = {
  ai: "AI / Platform",
  saas: "SaaS",
  platform: "Platform",
  marketplace: "Marketplace",
  gtm: "GTM / Intelligence",
  lms: "LMS",
  web: "Web",
};

export default function Projects() {
  const heroProjects = featuredProjects.slice(0, 2);
  const gridProjects = featuredProjects.slice(2);

  const gridCols = (n: number) => {
    if (n === 1) return "md:grid-cols-1";
    if (n === 2) return "md:grid-cols-2";
    if (n % 3 === 0) return "md:grid-cols-3";
    if (n === 4) return "md:grid-cols-2";
    return "md:grid-cols-3";
  };

  return (
    <section
      id="projects"
      className="py-12 px-6 border-t border-surface-border"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionLabel>Projects</SectionLabel>
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-12 leading-tight"
        >
          Selected work
        </h2>

        {/* Hero cards - top 2 */}
        <div className="grid md:grid-cols-2 gap-px bg-surface-border mb-px">
          {heroProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} size="large" />
          ))}
        </div>

        {/* Remaining featured */}
        {gridProjects.length > 0 && (
          <div className={cn("grid gap-px bg-surface-border mb-px", gridCols(gridProjects.length))}>
            {gridProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 2} size="medium" />
            ))}
          </div>
        )}

        {/* Personal projects */}
        {personalProjects.length > 0 && (
          <CompactList
            title="Personal projects"
            items={personalProjects}
            startIndex={featuredProjects.length}
          />
        )}
      </div>
    </section>
  );
}

interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  contribution: string;
  technologies: string[];
  category: string;
  status: string;
  featured: boolean;
  isPersonal?: boolean;
  builtAt?: string;
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectCard({
  project,
  index,
  size,
}: {
  project: ProjectItem;
  index: number;
  size: "large" | "medium";
}) {
  const isLarge = size === "large";
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="bg-white p-6 md:p-8 flex flex-col gap-5 group hover:bg-[#FAFAF9] transition-colors duration-200">
      {/* Number + context row */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono text-ink-tertiary/35 tracking-widest">{num}</span>
        <div className="flex items-center gap-2">
          {project.builtAt && (
            <span className="text-[10px] font-mono text-ink-tertiary/60 uppercase tracking-widest">
              {project.builtAt}
            </span>
          )}
        </div>
      </div>

      {/* Category + name */}
      <div>
        <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest block mb-1">
          {categoryLabel[project.category]}
        </span>
        <h3
          className={cn(
            "font-bold text-ink group-hover:text-accent transition-colors duration-200",
            isLarge ? "text-2xl" : "text-xl"
          )}
        >
          {project.name}
        </h3>
        <p className="text-sm text-ink-secondary mt-1 font-medium">{project.tagline}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-ink-secondary leading-relaxed">{project.description}</p>

      {/* Contribution - large only */}
      {isLarge && (
        <div className="pl-3 border-l-2 border-accent/20">
          <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest mb-1.5">
            My contribution
          </p>
          <p className="text-sm text-ink-secondary leading-relaxed">{project.contribution}</p>
        </div>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.technologies.slice(0, isLarge ? 10 : 6).map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono text-ink-secondary bg-surface-muted px-2 py-0.5 border border-surface-border"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > (isLarge ? 10 : 6) && (
          <span className="text-[11px] font-mono text-ink-tertiary">
            +{project.technologies.length - (isLarge ? 10 : 6)} more
          </span>
        )}
      </div>
    </article>
  );
}

function CompactList({
  title,
  items,
  startIndex,
}: {
  title: string;
  items: ProjectItem[];
  startIndex: number;
}) {
  return (
    <div className="mt-10">
      <p className="text-[10px] font-mono text-ink-tertiary tracking-widest uppercase mb-3">
        {title}
      </p>
      <div className="space-y-0">
        {items.map((project, i) => {
          const num = String(startIndex + i + 1).padStart(2, "0");
          return (
            <article
              key={project.id}
              className="flex items-start gap-5 py-5 border-t border-surface-border last:border-b group"
            >
              <span className="text-[11px] font-mono text-ink-tertiary/35 pt-0.5 shrink-0 w-5">
                {num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">
                    {categoryLabel[project.category]}
                  </span>
                </div>
                <p className="text-sm font-medium text-ink-secondary mb-1.5">{project.tagline}</p>
                <p className="text-sm text-ink-tertiary leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-ink-tertiary">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="text-[10px] font-mono text-ink-tertiary">
                      +{project.technologies.length - 6}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
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
