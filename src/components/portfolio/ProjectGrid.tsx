import { featuredProjects } from "../../content/projects/helpers";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProjects.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
