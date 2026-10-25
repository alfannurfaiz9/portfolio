import { ABOUT_STACK, PRINCIPLES } from "../utils";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className="space-y-6 pt-6 border-t border-borderColor">
      <SectionTitle num="01.">About Me</SectionTitle>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
        <img
          className="lg:h-48 w-full lg:w-fit rounded-2xl"
          src="/alfan.jpg"
          alt="photo-profile"
        />
        <div className="md:col-span-2 space-y-4 lg:w-6/12 text-sm text-subtext leading-relaxed">
          <p className="text-textBright text-base font-medium">
            Focused on writing maintainable code and building efficient web
            products.
          </p>
          <p>
            With over 1 years of hands-on experience in fullstack web
            development, I bridge backend database performance with accessible,
            intuitive frontend interactions. I prefer simple, testable solutions
            over over-engineered complexity.
          </p>
          <p>
            {ABOUT_STACK.map((s, i) => (
              <span key={s}>
                <span className="text-textBright font-mono text-xs bg-surface px-1.5 py-0.5 rounded border border-borderColor">
                  {s}
                </span>
                {i < ABOUT_STACK.length - 2
                  ? ", "
                  : i === ABOUT_STACK.length - 2
                    ? ", and "
                    : "."}
              </span>
            ))}
          </p>
        </div>

        <div className="bg-surface p-5 rounded border border-borderColor space-y-4 font-mono text-xs">
          <p className="text-textBright font-semibold uppercase tracking-wider border-b border-borderColor pb-2">
            Core Principles
          </p>
          <ul className="space-y-2.5 text-subtext">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="text-accent font-bold">/</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
