import { useEffect, useState } from "react";
import { ArrowRight, Mail, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Full-Stack Developer",
  "Backend-Focused Software Engineer",
  "Problem Solver · DSA & System Design",
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
      className="min-h-screen flex items-center relative overflow-hidden bg-[#020617]"
    >
      {/* PREMIUM BACKGROUND - Multi-layered mesh gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_100%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for New Projects
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-black text-gradient-premium tracking-tighter leading-tight pb-1">
                Animesh Verma
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-medium tracking-tight max-w-lg">
                Engineering <span className="text-cyan-400">scalable systems</span> with strong CS fundamentals and a passion for full-stack excellence.
              </p>
            </div>

            {/* TYPING ANIMATION - Clean & Minimal */}
            <div className="h-12 flex items-center">
              <h2 className="text-lg md:text-xl text-gray-400 font-mono">
                <span className="text-cyan-500 mr-2 font-bold">$</span>
                {text}
                <span className="ml-1 text-cyan-500 animate-pulse">_</span>
              </h2>
            </div>

            <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed font-light">
              Final-year Computer Science student with <span className="text-gray-300 font-medium whitespace-nowrap">400+ DSA problems</span> solved. IBM-certified <span className="text-gray-300 font-medium">Full-Stack Developer</span> building robust backend systems and AI-driven workflows.
            </p>

            {/* STATS - Subtle Glassmorphism */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { label: "Projects", value: "5+" },
                { label: "Years", value: "2+" },
                { label: "Dedication", value: "100%" },
              ].map((stat, i) => (
                <div key={i} className="glass-card px-5 py-3 rounded-xl min-w-[120px] group border-white/5 hover:border-cyan-500/20 transition-all">
                  <p className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{stat.value}</p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center gap-2 overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 group-hover:text-white transition-colors">View Projects</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </button>

              <a
                href="/src/assets/Animesh_verma_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all hover:border-white/20"
                aria-label="View Resume"
              >
                <Download className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <span>Resume</span>
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all hover:border-white/20"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - REFINED PORTRAIT */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[280px] h-[350px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[540px] animate-fade-in group">

              {/* BACKGLOW - Subtle */}
              <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* IMAGE FRAME - Techy look */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/5 p-2 bg-white/[0.01] backdrop-blur-sm shadow-2xl">
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Animesh Verma"
                    className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

                  {/* SCANLINE EFFECT ON HOVER */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 h-1 top-0 group-hover:animate-scan pointer-events-none" />
                </div>
              </div>

              {/* FLOATING BADGE - Minimalist */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass-card p-3 md:p-4 rounded-2xl border-white/10 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <span className="text-white font-black text-lg md:text-xl">AV</span>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-white font-bold text-xs md:text-sm">Animesh Verma</p>
                    <p className="text-cyan-500 text-[10px] md:text-xs font-medium uppercase tracking-tighter">Full Stack Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .group-hover\:animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;