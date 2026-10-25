import { TECH_STACK } from "../utils";
import SectionTitle from "./SectionTitle";

function TechStack() {
  return (
    <section
      id="techstack"
      className="space-y-6 pt-6 border-t border-borderColor"
    >
      <SectionTitle num="02.">Tech Stack</SectionTitle>

      <div className="grid md:grid-cols-3 gap-4 font-mono text-xs">
        {TECH_STACK.map((col) => (
          <div
            key={col.title}
            className="bg-surface p-5 rounded border border-borderColor space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-borderColor">
              <span className="text-textBright font-semibold">{col.title}</span>
              <span className="text-subtext text-[10px]">{col.sub}</span>
            </div>
            <ul className="space-y-2 text-subtext">
              {col.items.map((it) => (
                <li key={it.name} className="flex items-center justify-between">
                  <span className="text-textBright">{it.name}</span>
                  {it.badge && (
                    <span className="text-[10px] text-accent">{it.badge}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TechStack;
