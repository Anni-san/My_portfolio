import { Card } from "@/components/ui/card";
import { Code2, Coffee, Palette, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Problem Solving",
      description: "Breaking down complex problems into structured solutions using code.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and excellent user experience",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, intuitive interfaces that users love",
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional results",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging frontend creativity with backend logic to build complete solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m a Computer Science Engineering student and an aspiring full-stack developer, Who is passionate about creating modern web applications. My journey started with curiosity about how websites work, which evolved into a deep interest in building scalable, user-friendly solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React, Node.js, and modern web technologies, and I’m currently exploring Java Spring Boot, databases, and AI-powered projects. I enjoy solving real-world problems through code and continuously improving my skills.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium">What I'm passionate about:</h4>
              <div className="flex flex-wrap gap-2">


              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 card-glow hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



