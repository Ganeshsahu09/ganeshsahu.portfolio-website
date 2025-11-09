import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Workout Planner App",
      description: "A desktop application built with Python GUI to create, customize, and track workout routines. Features include exercise database, routine builder, progress tracking, and user-friendly interface.",
      tech: ["Python", "Tkinter", "GUI Development", "Data Management"],
      type: "Academic Project",
    },
    {
      title: "Prelims Exam Website",
      description: "A comprehensive MCQ test platform where teachers can upload questions, set timers, and students can take timed exams. Includes automatic scoring, negative marking system, and results dashboard.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
      type: "Learning Project",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border p-8 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Badge variant="outline" className="border-primary text-primary">
                  {project.type}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Details</span>
                </button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 italic">
                * Academic/Learning project - not currently deployed
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            More projects coming soon as I continue learning and building...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
