import React from "react";
import type { Project } from "../../content/projects/schema";
import { ArrowIcon } from "../icons/ArrowIcon";

interface ProjectCardProps {
  project: Project;
  className?: string;
  onCardClick?: (project: Project) => void;
}

export function ProjectCard({ project, className = "", onCardClick }: ProjectCardProps) {
  const { card, company } = project;

  const handleClick = () => {
    onCardClick?.(project);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick?.(project);
    }
  };

  return (
    <article
      className={`group cursor-pointer bg-bg-primary border border-stroke-primary rounded-xl p-6 transition-all hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${card.title} case study in new tab`}
    >
      <div className="flex flex-col gap-6">
        {/* Image Wrapper */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="aspect-video border border-stroke-primary rounded-lg overflow-hidden">
            <img
              src={card.image.src}
              alt={card.image.alt}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          {/* Company Logo Overlay */}
          {company.logoSrc && (
            <div className="absolute bottom-4 left-4 w-8 h-8 rounded overflow-hidden border border-stroke-primary">
              <img
                src={company.logoSrc}
                alt={`${company.name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col gap-3">
          {/* Heading */}
          <div className="flex flex-col">
            <p
              className="text-sm font-bold uppercase leading-[1.5]"
              style={{ color: company.brandColor }}
            >
              {company.name}
            </p>
            <div className="flex items-center gap-1">
              <h3 className="text-xl font-semibold leading-[1.5] text-content-primary tracking-tight-sm">
                {card.title}
              </h3>
              <ArrowIcon className="w-6 h-6 text-content-primary" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-[1.5] text-content-primary">
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}
