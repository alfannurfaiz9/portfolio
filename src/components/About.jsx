import { PRINCIPLES } from "../utils";
import Marquee from "./Marquee";
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
            Results driven Fullstack Developer with a unique background
            transitioning from Digital Marketing.
          </p>
          <p>
            Experienced in building and scaling modern web applications from the
            ground up, combining sharp business acumen with strong technical
            execution. Adept at crafting intuitive user interfaces with React
            and architecting high-throughput backend services using Golang, Gin,
            and PostgreSQL.
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
      <Marquee />
    </section>
  );
};

export default About;
