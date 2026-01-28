import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import taskappImage from "@/assets/project-taskapp.jpg";
import weatherImage from "@/assets/project-weather.jpg";

export function ProjectsSection() {
  const projects = [
    {
      title: "FarmXChain",
      description:
        "FarmXChain is a blockchain-inspired agricultural traceability platform connecting farmers, distributors, retailers, and consumers with transparency and efficiency",
      // Avoid broken external image request (was causing 404): use local project image instead
      image: ecommerceImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://greenfarmxchain.netlify.app/dashboard",
      githubUrl: "https://github.com/Anni-san/FarmXChain_Finaldraft",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      featured: true,
    },
    {
      title: "Task Management",
      description:
        "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
      image: taskappImage,
      technologies: ["React", "TypeScript", "Supabase", "React Query"],
      liveUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/alexjohnson/task-management",
      featured: true,
    },
    {
      title: "NASA Space App 2025 : Meteor Madness",
      description:
        "Advanced Asteroid Impact Simulation & Risk Assessment Platform Harness NASA datasets and cutting-edge visualization to model asteroid threats, predict consequences, and develop life-saving mitigation strategies.",
      image: weatherImage,
      technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
      liveUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my work and skills with modern animations and smooth user experience.",
      image: ecommerceImage, // Reusing image for demo
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://alexjohnson.dev",
      githubUrl: "https://github.com/alexjohnson/portfolio",
      featured: false,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with private messaging, group chats, file sharing, and emoji support.",
      image: taskappImage, // Reusing image for demo
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://demo-chat.com",
      githubUrl: "https://github.com/alexjohnson/chat-app",
      featured: false,
    },
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard for tracking website performance, user behavior, and business metrics.",
      image: weatherImage, // Reusing image for demo
      technologies: ["Next.js", "D3.js", "Redis", "PostgreSQL"],
      liveUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/alexjohnson/analytics-dashboard",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
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


