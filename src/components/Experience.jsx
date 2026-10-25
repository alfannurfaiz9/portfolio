import { EXPERIENCE } from "../utils";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section
      id="experience"
      className="space-y-6 pt-6 border-t border-borderColor"
    >
      <SectionTitle num="04.">Experience</SectionTitle>

      <div className="relative pl-4 border-l border-borderColor space-y-8 font-sans">
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="relative space-y-1 group">
            <div
              className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-bgDark border ${e.dot}`}
            ></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs">
              <span className="text-textBright font-semibold">{e.role}</span>
              <span className="text-subtext">{e.period}</span>
            </div>
            <p className="text-xs text-subtext leading-relaxed pt-1">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
