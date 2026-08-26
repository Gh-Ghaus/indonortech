import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects(4);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between md:gap-6">
        <div className="max-w-2xl min-w-0">
          <p className="mb-2 font-semibold tracking-wide text-primary">
            SELECTED WORK
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Client Projects
          </h2>
          <p className="mt-3 text-muted-foreground">
            A snapshot of platforms and workflows we have delivered — with live
            URLs and demo recordings on the projects page.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : null}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {project.client}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {project.summary}
              </p>

              <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
                >
                  Live URL
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
