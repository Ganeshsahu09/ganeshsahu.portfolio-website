import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder, Clock, CheckCircle2 } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "Workout Planner App",
    description: "A desktop application built with Python GUI to create, customize, and track workout routines. Features include exercise database, routine builder, progress tracking, and user-friendly interface.",
    tech: ["Python", "Tkinter", "GUI Development", "Data Management"],
    type: "Academic Project",
    gradient: "from-blue-500/20 to-cyan-500/20",
    features: ["Exercise Database", "Progress Tracking", "Custom Routines"],
    status: "Completed",
    liveUrl: null
  }, {
    title: "Prelims Exam Website",
    description: "A comprehensive MCQ test platform where teachers can upload questions, set timers, and students can take timed exams. Includes automatic scoring, negative marking system, and results dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    type: "Learning Project",
    gradient: "from-purple-500/20 to-pink-500/20",
    features: ["Timed Tests", "Auto Scoring", "Negative Marking"],
    status: "Completed",
    liveUrl: null
  }, {
    title: "E-commerce Website (Frontend)",
    description: "Built a responsive digital storefront interface using modern frontend technologies. Designed product layouts, navigation flow, and ensured cross-device compatibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "Frontend Project",
    gradient: "from-green-500/20 to-emerald-500/20",
    features: ["Product Layouts", "Navigation Flow", "Cross-device Compatibility", "Responsive Design"],
    status: "Completed",
    liveUrl: "https://eclectic-blancmange-46abc2.netlify.app/"
  }, {
    title: "Animated Login/Signup Page",
    description: "Created an interactive authentication interface using CSS animations and transitions. Improved user engagement through smooth and visually appealing UI interactions.",
    tech: ["HTML5", "CSS3", "JavaScript", "CSS Animations"],
    type: "Frontend Project",
    gradient: "from-orange-500/20 to-red-500/20",
    features: ["CSS Animations", "Interactive UI", "Smooth Transitions", "User Engagement"],
    status: "Completed",
    liveUrl: "https://animated-login-signup-page.netlify.app/"
  }, {
    title: "Tic-Tac-Toe Game",
    description: "Developed a browser-based game using JavaScript logic and state management. Implemented win-condition algorithms and dynamic UI updates.",
    tech: ["HTML5", "CSS3", "JavaScript", "Game Logic"],
    type: "Web Game",
    gradient: "from-yellow-500/20 to-amber-500/20",
    features: ["Win-condition Algorithms", "State Management", "Dynamic UI Updates", "Browser-based"],
    status: "Completed",
    liveUrl: "https://tic-tac-toe-drama.netlify.app/"
  }, {
    title: "Web Calculator",
    description: "Built a functional calculator using JavaScript and DOM manipulation. Designed a clean and user-friendly interface for better usability.",
    tech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    type: "Utility Tool",
    gradient: "from-indigo-500/20 to-blue-500/20",
    features: ["Functional Calculator", "Clean Interface", "DOM Manipulation", "User-friendly"],
    status: "Completed",
    liveUrl: "https://web-calculator-basic.netlify.app/"
  }];
  return <section id="projects" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic and learning projects showcasing practical application of skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => <Card key={index} className={`bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-border hover-lift animate-fade-in group relative overflow-hidden`} style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300"></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-xs text-green-400 font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary bg-background/50">
                    {project.type}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => <Badge key={featureIndex} className="bg-background/80 text-foreground border border-border hover:border-primary transition-colors">
                        {feature}
                      </Badge>)}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

                {/* Actions */}
                {project.liveUrl && (
                  <div className="flex gap-3 mb-4">
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                )}

                {!project.liveUrl && (
                  <p className="text-xs text-muted-foreground mt-4 italic flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                    Academic/Learning project - not currently deployed
                  </p>
                )}
              </div>
            </Card>)}
        </div>

        {/* Future Projects Teaser */}
        <Card className="bg-gradient-to-r from-primary/10 to-electric-blue/10 border-primary/30 p-8 text-center animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <h3 className="text-2xl font-bold mb-3">More Projects Coming Soon</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Currently working on new projects as I continue learning and expanding my skill set. 
            Stay tuned for updates on full-stack web applications and more!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-primary/30 px-4 py-2">
              React Projects
            </Badge>
            <Badge variant="outline" className="border-primary/30 px-4 py-2">
              API Integration
            </Badge>
            <Badge variant="outline" className="border-primary/30 px-4 py-2">
              Database Management
            </Badge>
          </div>
        </Card>
      </div>
    </section>;
};
export default Projects;