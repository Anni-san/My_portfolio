import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe 
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      color: "bg-blue-500",
    },
    {
      icon: Server,
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "Java (Spring Boot - learning)"],
      color: "bg-green-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native (learning phase)"],
      color: "bg-purple-500",
    },
    {
      icon: Database,
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Docker (beginner)"],
      color: "bg-orange-500",
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: ["Git/GitHub", "VS Code", "Figma", "Webpack", "Postman"],
      color: "bg-pink-500",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["REST API", "JWT", "OAuth (learning)", "API Integration"],
      color: "bg-cyan-500",
    },
  ];

  const proficiencyLevels = [
    { name: "React", level: 80 },
    { name: "Node.js", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Design", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "Mobile Development", level: 70 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 card-glow hover:shadow-glow transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-2 bg-muted"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



