const SectionTitle = ({ num, children }) => {
  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <span className="text-accent">{num}</span>
      <h2 className="text-textBright font-bold uppercase tracking-wider">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
