"use client";

import { siteConfig } from "@/lib/data";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Our Projects
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Exploring the intersection of sports and data science
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
