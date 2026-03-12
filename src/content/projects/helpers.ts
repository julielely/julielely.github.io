import type { Project, ProjectId } from "./schema";
import { projects } from "./projects";

export const projectsById = new Map<ProjectId, Project>(
  projects.map((p) => [p.id, p])
);

export function getProjectById(id: ProjectId): Project | undefined {
  return projectsById.get(id);
}

export const featuredProjects = projects.filter(
  (p) => p.status === "featured"
);

export const chatProjects = projects.filter(
  (p) => p.chat?.includeInChat !== false
);

export const prototypeProjects = projects.filter(
  (p) => p.prototype?.includeInPrototype !== false
);

export function openProject(project: Project): void {
  window.open(project.primaryLink.url, "_blank", "noopener,noreferrer");
}
