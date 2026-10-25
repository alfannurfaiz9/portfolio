const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const data = project.modal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-xs">
      <div className="bg-surface w-full max-w-xl rounded border border-borderColor p-6 relative space-y-5 font-mono text-xs shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded text-subtext hover:text-textBright hover:bg-bgDark transition-colors"
        >
          X
        </button>

        <div className="space-y-1">
          <span className="text-accent text-[10px] uppercase">
            {data.category}
          </span>
          <h3 className="text-lg font-bold text-textBright">{data.title}</h3>
        </div>

        <p className="text-subtext leading-relaxed font-sans text-xs">
          {data.description}
        </p>

        <img
          className="lg:h-50 w-full lg:w-fit mx-auto rounded-lg shadow-2xl"
          src={data.imgUrl}
          alt="project-img"
        />

        <div className="space-y-2 border-t border-borderColor pt-3">
          <p className="text-textBright font-semibold">Technical Highlights:</p>
          <ul className="space-y-1 text-subtext font-sans text-xs">
            {data.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="text-accent font-mono font-bold">&gt;</span>{" "}
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-borderColor font-mono">
          <a
            href={data.demo}
            target="_blank"
            rel="noopener"
            className="px-3 py-1.5 rounded bg-textBright text-surface font-semibold hover:bg-gray-200 transition-colors flex items-center gap-1"
          >
            Live Demo
          </a>
          <a
            href={data.repo}
            target="_blank"
            rel="noopener"
            className="px-3 py-1.5 rounded bg-bgDark border border-borderColor text-textBright hover:border-gray-500 transition-colors flex items-center gap-1"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
