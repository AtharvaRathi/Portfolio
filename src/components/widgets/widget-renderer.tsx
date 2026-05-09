import { MeWidget } from "./me";
import { ProjectsWidget } from "./projects";
import { SkillsWidget } from "./skills";
import { FunWidget } from "./fun";
import { ContactWidget } from "./contact";
import { ResumeWidget } from "./resume";

export function WidgetRenderer({ type }: { type: string }) {
  switch (type) {
    case "me": return <MeWidget />;
    case "projects": return <ProjectsWidget />;
    case "skills": return <SkillsWidget />;
    case "fun": return <FunWidget />;
    case "contact": return <ContactWidget />;
    case "resume": return <ResumeWidget />;
    default: return null;
  }
}
