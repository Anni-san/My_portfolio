import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import fashionSenseImg from "../assets/fashion-sense.png";
import detectifyImg from "../assets/Detectify.png";
import auth_spring from "../assets/auth_spring.png";
import farmXChainImg from "../assets/FarmXChain.png";
import portfolio from "../assets/portfolio.png";
import focus from "../assets/focus.png";
import nasa2025 from "../assets/nasa2025.png";



export function ProjectsSection() {
  const projects = [
    {
      title: "FarmXChain",
      description:
        "FarmXChain is a blockchain-inspired agricultural traceability platform connecting farmers, distributors, retailers, and consumers with transparency and efficiency",
      image: farmXChainImg,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://greenfarmxchain.netlify.app/dashboard",
      githubUrl: "https://github.com/Anni-san/FarmXChain_Finaldraft",
      featured: true,
    },
    {
    title: "Detectify",
    description:
      "An AI-powered verification and fact-checking platform that helps users identify fake news, fraudulent reviews, and suspicious digital content. Built to enhance trust and authenticity in the digital ecosystem.",
    image: detectifyImg,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI / NLP",
      "Tailwind CSS",
    ],
    liveUrl: "https://github.com/Anni-san/Detectify",
    githubUrl: "https://github.com/Anni-san/Detectify",
    featured: true,
  },
    {
      title: "FashionSense",
      description:
        "A modern fashion discovery and styling platform that helps users explore trending outfits, discover fashion inspiration, and make smarter style choices. Built with a clean UI and scalable backend architecture.",
      image: fashionSenseImg,
      technologies: ["React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",],
      liveUrl: "https://github.com/Anni-san/Fashion_sense",
      githubUrl: "https://github.com/Anni-san/Fashion_sense",
      featured: true,
    },
    {
  title: "Full Stack Authentication System",
  description:
    "A production-ready authentication system built with Spring Boot and React.js. Implements secure login and signup using JWT access and refresh tokens, role-based authorization, protected APIs, and HttpOnly cookies. Includes token rotation, CSRF protection, CORS configuration, and seamless frontend-backend integration following real-world security best practices.",
  image: auth_spring, // agar auth-specific image ho to replace kar dena
  technologies: [
    "Spring Boot",
    "Spring Security",
    "React.js",
    "JWT",
    "REST API",
    "Tailwind CSS",
  ],
  liveUrl: "https://demo-auth-app.com", // optional, warna GitHub hi rehne de
  githubUrl: "https://github.com/Anni-san/spring_auth",
  featured: true,
}
,
   {
  title: "NASA Space App 2025 : Meteor Madness",
  description:
    "An advanced asteroid impact simulation and risk assessment platform developed for NASA Space Apps Challenge 2025. The project leverages real NASA datasets and interactive visualizations to analyze asteroid trajectories, predict potential impacts, and evaluate mitigation strategies for planetary defense.",
  image: nasa2025,
  technologies: [
    "JavaScript",
    "Data Visualization",
    "NASA Open APIs",
    "Chart.js",
    "Web Mapping",
  ],
  liveUrl: "https://demo-weather.com",
  githubUrl: "https://github.com/Anni-san/NASA_Space_2025",
  featured: false,
},
    {
  title: "Personal Portfolio Website",
  description:
    "A fully responsive and modern portfolio website showcasing my projects, skills, and experience. Designed with smooth animations, clean UI, and optimized performance to create a strong personal brand and professional online presence.",
  image: portfolio,
  technologies: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "TypeScript",
  ],
  liveUrl: "https://alexjohnson.dev",
  githubUrl: "https://github.com/Anni-san/My_portfolio",
  featured: false,
},
    {
  title: "Focus Clock & To-Do List",
  description:
    "A productivity-focused web application combining a personalized focus clock with a task management system. Designed to help users stay organized, manage daily tasks, and improve focus using a clean, distraction-free interface.",
  image: focus,
  technologies: [
    "React",
    "JavaScript",
    "CSS",
    "Local Storage",
  ],
  liveUrl: "https://personalized-clock.vercel.app/",
  githubUrl: "https://github.com/Anni-san/Personalized_clock",
  featured: false,
},
  ];

  return (
    <section id="projects" className="section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden card-glow hover:shadow-glow transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden card-glow hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="flex-1 text-xs"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Live
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="flex-1 text-xs"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}


