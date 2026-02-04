import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
    const experiences = [
        {
            type: "work",
            title: "Intern",
            company: "Infosys SpringBoard",
            location: "Virtual / Industry Training",
            duration: "3 Months (2025)",
            description: [
                "Completed structured industry-oriented training and hands-on technical modules",
                "Gained practical exposure to software development concepts and best practices",
            ],
        },
    ];

    const education = [
        {
            type: "education",
            degree: "Bachelor of Technology",
            major: "Computer Science Engineering",
            institution: "PSIT",
            duration: "2023 – 2027",
            score: "CGPA: 7.8",
        },
        {
            type: "education",
            degree: "Class XII (Senior Secondary)",
            institution: "GreenFields School, Lucknow",
            duration: "2022",
            score: "Percentage: 85.5%",
        },
        {
            type: "education",
            degree: "Class X (Secondary)",
            institution: "GreenFields School, Lucknow",
            duration: "2020",
            score: "Percentage: 81.25%",
        },
    ];

    return (
        <section id="experience" className="section-bg-alt">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        Experience & Education
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and academic background
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Work Experience */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <h3 className="text-2xl font-bold">Professional Experience</h3>
                        </div>

                        <div className="relative pl-8 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                    <Card className="card-glow overflow-hidden">
                                        <CardContent className="p-6">
                                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                                <div>
                                                    <h4 className="text-xl font-bold text-foreground">
                                                        {exp.title}
                                                    </h4>
                                                    <p className="text-primary font-medium">{exp.company}</p>
                                                </div>
                                                <Badge variant="outline" className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {exp.duration}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                                                <MapPin className="h-3 w-3" />
                                                {exp.location}
                                            </div>
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <GraduationCap className="h-5 w-5" />
                            </div>
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        <div className="relative pl-8 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                    <Card className="card-glow overflow-hidden">
                                        <CardContent className="p-6">
                                            <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                                                <div>
                                                    <h4 className="text-xl font-bold text-foreground">
                                                        {edu.degree}
                                                    </h4>
                                                    {edu.major && (
                                                        <p className="text-muted-foreground font-medium">
                                                            {edu.major}
                                                        </p>
                                                    )}
                                                    <p className="text-primary font-medium">{edu.institution}</p>
                                                </div>
                                                <Badge variant="outline" className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {edu.duration}
                                                </Badge>
                                            </div>
                                            <div className="mt-2 inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-semibold border border-primary/10">
                                                {edu.score}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
