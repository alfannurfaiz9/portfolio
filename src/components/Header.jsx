import { useState } from "react";
import { NAV_LINKS } from "../utils/index";
import { TbMenuDeep } from "react-icons/tb";
import { TfiLayoutMenu } from "react-icons/tfi";
import { CiMenuKebab } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-borderColor transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-mono font-bold text-base tracking-tight text-textBright group-hover:text-accent transition-colors">
              AN<span className="text-accent">.</span>
            </span>
            <span className="text-xs text-subtext hidden sm:inline-block font-mono border-l border-borderColor pl-2 ml-1">
              alfan nurfaiz
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-tight text-subtext">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-textBright transition-colors"
              >
                <span className="text-accent mr-1">{l.num}</span>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-surface border border-borderColor text-subtext text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-textBright">Available</span>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-1.5 rounded text-subtext hover:text-textBright hover:bg-surface border border-borderColor focus:outline-none"
            >
              {open ? <IoClose /> : <BiMenuAltRight />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-b bg-surface border-borderColor px-4 py-4 space-y-3 font-mono text-xs text-subtext">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block hover:text-textBright py-1"
            >
              <span className="text-accent mr-2">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
