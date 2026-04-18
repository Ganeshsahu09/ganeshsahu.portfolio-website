import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Briefcase, Star, Zap } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", category: "Programming" },
    { name: "Java", category: "Programming" },
    { name: "C++", category: "Programming" },
    { name: "JavaScript (ES6+)", category: "Programming" },
    { name: "SQL", category: "Database" },
    { name: "HTML5", category: "Web" },
    { name: "CSS3", category: "Web" },
    { name: "Responsive Design", category: "Web" },
    { name: "Flexbox", category: "Web" },
    { name: "CSS Grid", category: "Web" },
    { name: "MySQL (CRUD Operations)", category: "Database" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Netlify", category: "Tools" },
    { name: "Visual Studio Code", category: "Tools" },
    { name: "Data Structures & Algorithms", category: "Core Concepts" },
    { name: "Object-Oriented Programming", category: "Core Concepts" },
  ];

  const softSkills = [
    { name: "Communication", icon: "💬" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Leadership", icon: "👑" },
    { name: "Discipline", icon: "🎯" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Time Management", icon: "⏱️" },
  ];

  const categories = ["Programming", "Web", "Database", "Tools", "Core Concepts"];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills with Progress */}
          <Card className="bg-gradient-to-br from-card to-card/50 border-border p-8 hover-lift animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl shadow-lg">
                <Code2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
                <p className="text-sm text-muted-foreground">Technologies I work with</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{skill.name}</span>
                      <Badge variant="outline" className="text-xs border-primary/30">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-semibold text-sm">Currently Learning</span>
              </div>
              <p className="text-sm text-muted-foreground">
                React.js, Node.js, and expanding backend development skills
              </p>
            </div>
          </Card>

          {/* Soft Skills */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-card to-card/50 border-border p-8 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl shadow-lg">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Soft Skills</h3>
                  <p className="text-sm text-muted-foreground">Professional qualities</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary hover:scale-105 transition-all group cursor-default"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-electric-blue/5 border-primary/30 p-6 hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg">NCC Training Impact</h4>
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                <span className="font-semibold text-primary">NCC Cadet (Air Wing) - 3rd Year</span>
                <br />
                Enhanced leadership, discipline, and teamwork through rigorous military training and drills
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
                  Discipline
                </Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
                  Leadership
                </Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
                  Teamwork
                </Badge>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border p-6 hover-lift animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Quick Stats
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages Known</span>
                  <span className="font-bold">4+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Years Coding</span>
                  <span className="font-bold">3+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold">2</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
