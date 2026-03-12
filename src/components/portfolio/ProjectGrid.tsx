import { useState } from "react";
import { featuredProjects } from "../../content/projects/helpers";
import type { Project } from "../../content/projects/schema";
import { ProjectCard } from "./ProjectCard";
import { PasswordModal } from "./PasswordModal";

export function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProjects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onCardClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <PasswordModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
