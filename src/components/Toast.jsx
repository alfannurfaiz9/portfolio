const Toast = ({ message }) => {
  if (!message) return null;
  return (
    <div className="fixed bottom-5 right-5 z-50 flex bg-surface border border-accent text-textBright px-4 py-3 rounded font-mono text-xs shadow-xl items-center gap-2">
      <span className="text-accent font-bold">✓</span>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
