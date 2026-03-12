import { useState } from "react";
import { prototypeConfig } from "../../content/projects/prototypeConfig";
import { getProjectById } from "../../content/projects/helpers";
import { ArrowIcon } from "../icons/ArrowIcon";
import { openProject } from "../../content/projects/helpers";
import { PatchGraph } from "../origami/PatchGraph";

export function PrototypePanel() {
  const { carouselProjectIds } = prototypeConfig;
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselProjects = carouselProjectIds
    .map((id) => getProjectById(id))
    .filter((p) => p !== undefined);

  const currentProject = carouselProjects[currentIndex];

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < carouselProjects.length - 1;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleCardClick = () => {
    if (currentProject) {
      openProject(currentProject);
    }
  };

  return (
    <div className="relative w-full h-full bg-[#2d2d2d] min-h-[600px]">
      {/* Full-width Origami Prototype Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <PatchGraph />
      </div>

      {/* Absolutely Positioned Browser Window */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[360px] z-10">
        {currentProject && (
          <div className="w-full">
            {/* Browser Window Chrome */}
            <div className="bg-bg-primary rounded-xl border border-stroke-primary overflow-hidden shadow-2xl">
              {/* Browser Header */}
              <div className="bg-bg-tertiary border-b border-stroke-primary px-3 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DE96FF]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3773DA]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#60BB8E]" />
                </div>
              </div>

              {/* Browser Content - Project Card */}
              <div className="bg-bg-secondary p-4">
                <div
                  onClick={handleCardClick}
                  className="bg-bg-primary rounded-lg border border-stroke-primary overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                >
                  {/* Project Image */}
                  <div className="aspect-video border-b border-stroke-primary">
                    <img
                      src={currentProject.card.image.src}
                      alt={currentProject.card.image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <p
                      className="text-xs font-bold uppercase leading-[1.5] mb-1"
                      style={{ color: currentProject.company.brandColor }}
                    >
                      {currentProject.company.name}
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      <h3 className="text-base font-semibold leading-[1.5] text-content-primary">
                        {currentProject.card.title}
                      </h3>
                      <ArrowIcon className="w-4 h-4 text-content-primary flex-shrink-0" />
                    </div>
                    <p className="text-xs leading-[1.5] text-content-primary">
                      {currentProject.card.description}
                    </p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={handlePrev}
                    disabled={!canGoPrev}
                    className="w-8 h-8 rounded flex items-center justify-center border border-stroke-primary bg-bg-primary hover:bg-bg-tertiary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous project"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <span className="text-sm text-content-secondary">
                    {currentIndex + 1} of {carouselProjects.length}
                  </span>

                  <button
                    onClick={handleNext}
                    disabled={!canGoNext}
                    className="w-8 h-8 rounded flex items-center justify-center border border-stroke-primary bg-bg-primary hover:bg-bg-tertiary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next project"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
