const Footer = () => {
  return (
    <footer className="border-t border-borderColor bg-bgDark py-6 font-mono text-xs text-subtext">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>&copy; 2026 Alfan Nurfaiz. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="#hero" className="hover:text-textBright transition-colors">
            Top ↑
          </a>
          <a
            href="https://github.com/alfannurfaiz9"
            target="_blank"
            rel="noopener"
            className="hover:text-textBright transition-colors"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/alfan-nurfaiz/"
            target="_blank"
            rel="noopener"
            className="hover:text-textBright transition-colors"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
