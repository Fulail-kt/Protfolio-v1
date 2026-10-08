import { profile } from "@/content/profile";
import { getExperienceYears } from "@/lib/utils";
import { MapPin } from "lucide-react";

export default function About() {
  const years = getExperienceYears(profile.experienceStartDate);

  const quickFacts = [
    { label: "Current role", value: "Lead Full Stack & Automation Developer" },
    { label: "Company", value: "Particle Execution" },
    { label: "Location", value: "Kerala, India" },
    { label: "Experience", value: `${years}+ years in production engineering` },
    { label: "Focus", value: "Full-stack · AI integrations · GTM automation" },
  ];

  return (
    <section
      id="about"
      className="py-12 px-6 border-t border-surface-border"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-content">
        <div className="grid md:grid-cols-[1fr_300px] gap-14 items-start">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-ink tracking-tight mb-6 leading-tight"
            >
              Engineer, problem-solver,
              <br />
              AI product builder.
            </h2>
            <div className="space-y-4">
              {profile.about.map((paragraph, i) => (
                <p key={i} className="text-base text-ink-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest mb-4">
              Quick facts
            </p>
            <dl className="space-y-0">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-0.5 py-3 border-b border-surface-border first:border-t"
                >
                  <dt className="text-[10px] font-mono text-ink-tertiary uppercase tracking-widest">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-ink font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex items-center gap-2 text-xs text-ink-tertiary">
              <MapPin size={11} className="text-accent shrink-0" />
              <span>{profile.location}</span>
            </div>
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
