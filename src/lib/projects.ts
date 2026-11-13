import { projects } from "@/data/editorial";

export const projectFilters = [
  "Selected",
  "AI & ML",
  "Computer vision",
  "Backend",
  "Systems & networking",
  "All",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function projectsForFilter(filter: ProjectFilter, expanded = false) {
  if (filter === "All" || (filter === "Selected" && expanded)) return projects;
  if (filter === "Selected")
    return projects.filter((project) => project.featured);
  return projects.filter((project) => project.focus.includes(filter));
}
