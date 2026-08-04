import { clientProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="space-y-16">
        {clientProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
