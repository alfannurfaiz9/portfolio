const ProjectCard = ({ project, onOpen }) => {
  return (
    <div className="project-card bg-surface rounded border border-borderColor flex flex-col justify-between p-5 hover:border-gray-500 transition-colors group">
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-accent">{project.index}</span>
          <span className="text-[10px] text-subtext uppercase border border-borderColor px-1.5 py-0.5 rounded">
            {project.label}
          </span>
        </div>
        <h3 className="text-lg font-bold text-textBright group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-xs text-subtext leading-relaxed">
          {project.summary}
        </p>
      </div>

      <div className="pt-4 space-y-4">
        <div className="flex flex-wrap gap-1 font-mono text-[10px]">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded bg-bgDark border border-borderColor text-subtext"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between font-mono text-xs border-t border-borderColor pt-3">
          <button
            onClick={() => onOpen(project.key)}
            className="text-textBright hover:text-accent transition-colors flex items-center gap-1"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
