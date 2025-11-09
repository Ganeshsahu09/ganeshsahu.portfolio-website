import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Briefcase } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "C++ (OOP)",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Linux",
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Leadership",
    "Discipline",
    "Problem Solving",
    "Time Management",
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border p-8 hover-lift animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-8 hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">NCC Cadet (Air Wing) - 2nd Year</span>
                <br />
                Enhanced leadership, discipline, and teamwork through rigorous training
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
