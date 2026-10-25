import { useState, useEffect, useCallback } from "react";
import { PROJECTS, EMAIL } from "../utils/index";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import Toast from "../components/Toast";
import Education from "../components/Education";

function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [toast, setToast] = useState("");

  const showToast = useCallback((msg) => setToast(msg), []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    showToast(`Email ${EMAIL} copied.`);
  };

  const project = PROJECTS.find((p) => p.key === activeProject) || null;

  return (
    <main className="bg-bgDark text-gray-300 min-h-screen flex flex-col justify-between antialiased selection:bg-gray-800 selection:text-white">
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 space-y-24 sm:space-y-32">
        <Hero onCopyEmail={copyEmail} />
        <About />
        <TechStack />
        <Projects onOpen={setActiveProject} />
        <Experience />
        <Education />
        <Contact onSent={showToast} />
      </div>

      <Footer />
      <ProjectModal project={project} onClose={() => setActiveProject(null)} />
      <Toast message={toast} />
    </main>
  );
}

export default Home;
