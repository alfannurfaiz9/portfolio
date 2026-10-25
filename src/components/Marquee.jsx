import { useEffect, useRef } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaGolang, FaLinux } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { LiaDocker } from "react-icons/lia";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNginx, SiRedis, SiRedux, SiSwagger } from "react-icons/si";

const Marquee = () => {
  const trackRef = useRef(null);

  const items = [
    { name: "Javascript", icon: IoLogoJavascript },
    { name: "React", icon: GrReactjs },
    { name: "Redux", icon: SiRedux },
    { name: "Tailwind", icon: RiTailwindCssFill },
    { name: "Golang", icon: FaGolang },
    { name: "Redis", icon: SiRedis },
    { name: "PostgreSql", icon: BiLogoPostgresql },
    { name: "Swagger", icon: SiSwagger },
    { name: "Docker", icon: LiaDocker },
    { name: "Nginx", icon: SiNginx },
    { name: "Linux", icon: FaLinux },
    { name: "Git", icon: FaGitAlt },
  ];

  useEffect(() => {
    const track = trackRef.current;
    const speed = 60;
    let x = -track.scrollWidth / 2;
    let last = performance.now();
    let id;

    const tick = (now) => {
      const half = track.scrollWidth / 2;
      x += (speed * (now - last)) / 1000;
      last = now;
      if (x >= 0) x -= half;
      track.style.transform = `translateX(${x}px)`;
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative mt-12 h-8 w-full max-w-full overflow-hidden">
      <ul ref={trackRef} className="absolute left-0 top-0 flex h-full w-max items-center">
        {[...items, ...items].map(({ name, icon: Icon }, i) => (
          <li
            key={i}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap px-6 text-slate-800 dark:text-slate-100"
          >
            <Icon size={18} />
            <p className="text-xs">{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
