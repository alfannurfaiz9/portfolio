import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EMAIL } from "../utils/index";
import { SiGmail } from "react-icons/si";

const Hero = ({ onCopyEmail }) => {
  return (
    <section
      id="hero"
      className="pt-6 sm:pt-12 min-h-[70vh] flex flex-col justify-center items-start"
    >
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
        Fullstack Developer
      </p>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-textBright tracking-tight leading-[1.1] mb-6">
        Building reliable, high-performance web systems with{" "}
        <span className="text-textBright underline decoration-accent/60 underline-offset-8">
          Go
        </span>{" "}
        &amp;{" "}
        <span className="text-textBright underline decoration-accent/60 underline-offset-8">
          React
        </span>
        .
      </h1>

      <p className="text-base sm:text-lg text-subtext max-w-2xl leading-relaxed mb-8">
        I'm{" "}
        <strong className="text-textBright font-semibold">Alfan Nurfaiz</strong>
        . I specialize in designing clean RESTful APIs, scalable microservice
        architectures, and reactive web frontend interfaces focused on
        performance and simplicity.
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-12 font-mono text-xs">
        <a
          href="#projects"
          className="px-5 py-3 rounded bg-textBright text-surface font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="px-5 py-3 rounded bg-surface border border-borderColor text-textBright hover:border-gray-500 transition-colors"
        >
          Get In Touch
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full border-t border-borderColor pt-6 text-xs font-mono">
        <a
          href="https://github.com/alfannurfaiz9"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded bg-surface border border-borderColor flex items-center gap-2 hover:border-gray-500 transition-colors group"
        >
          <FaGithub size={14} />
          <span className="text-subtext group-hover:text-textBright">
            github.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/alfan-nurfaiz/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded bg-surface border border-borderColor flex items-center gap-2 hover:border-gray-500 transition-colors group"
        >
          <FaLinkedin size={14} />
          <span className="text-subtext group-hover:text-textBright">
            linkedin.com
          </span>
        </a>

        <button
          onClick={onCopyEmail}
          className="p-3 rounded bg-surface border border-borderColor flex items-center gap-2 hover:border-gray-500 transition-colors group text-left"
        >
          <SiGmail />
          <span className="text-subtext group-hover:text-textBright">
            {EMAIL}
          </span>
          Copy
        </button>
      </div>
    </section>
  );
};

export default Hero;
