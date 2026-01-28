import { useEffect, useState } from "react";
import { ArrowRight, Mail, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Full-Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
];

export function HeroSection() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setText((p) => p + currentRole[charIndex]);
        setCharIndex((p) => p + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setText((p) => p.slice(0, -1));
        setCharIndex((p) => p - 1);
      }, speed);
      return () => clearTimeout(t);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
  }, [charIndex, roleIndex, isDeleting]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0f1a 100%)",
      }}
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl bg-cyan-500/40" />
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full opacity-15 blur-3xl bg-blue-500/40" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8">
            <p className="text-gray-400 text-lg">👋 Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400">
              Animesh Verma
            </h1>

            <div className="h-12 flex items-center">
              <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
                {text}
                <span className="ml-1 text-cyan-400 animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Final-year Computer Science Engineering student passionate about
              building scalable, high-performance web applications. Specialized
              in the MERN stack with a focus on clean code, modern architecture,
              and exceptional user experiences.
            </p>

            {/* STATS */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-cyan-400">15+</p>
                <p className="text-gray-500 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">2+</p>
                <p className="text-gray-500 text-sm">Years Coding</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-gray-500 text-sm">Dedication</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-semibold flex items-center gap-2 transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border border-cyan-500/40 text-white rounded-lg hover:bg-cyan-500/10 transition flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>

              <button className="px-6 py-4 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/40 transition flex items-center gap-2">
                <Download className="w-5 h-5" />
                Resume
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE — FIXED */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* SIZE CONTROLLER */}
<div className="relative">
              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 bg-cyan-500/40" />

              {/* IMAGE */}
              <img
  src={profileImg}
  alt="Animesh Verma"
  className="relative w-[240px] h-[320px] md:w-[280px] md:h-[360px] object-cover rounded-2xl shadow-2xl"
/>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
