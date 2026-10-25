import { useState } from "react";
import { PROJECTS } from "../utils";
import ProjectCard from "./ProjectCard";

const Projects = ({ onOpen }) => {
  const [filter, setFilter] = useState("all");
  const visible = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter,
  );

  return (
    <section
      id="projects"
      className="space-y-6 pt-6 border-t border-borderColor"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-accent">03.</span>
          <h2 className="text-textBright font-bold uppercase tracking-wider">
            Featured Projects
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {visible.map((p) => (
          <ProjectCard key={p.key} project={p} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
