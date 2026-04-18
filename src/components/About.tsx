import { Card } from "@/components/ui/card";
import { Code2, Users, Trophy, Target, Rocket, Shield } from "lucide-react";
const About = () => {
  const highlights = [{
    icon: Code2,
    title: "Tech Skills",
    description: "Strong fundamentals in programming & web dev",
    gradient: "from-blue-500/20 to-cyan-500/20"
  }, {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative mindset from NCC training",
    gradient: "from-purple-500/20 to-pink-500/20"
  }, {
    icon: Trophy,
    title: "Disciplined",
    description: "Motivated learner ready for challenges",
    gradient: "from-amber-500/20 to-orange-500/20"
  }];
  const qualities = [{
    icon: Target,
    label: "Goal-Oriented",
    color: "text-blue-400"
  }, {
    icon: Rocket,
    label: "Fast Learner",
    color: "text-purple-400"
  }, {
    icon: Shield,
    label: "NCC Trained",
    color: "text-amber-400"
  }];
  return <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my journey, skills, and aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Bio Card */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-card to-card/50 border-border p-8 md:p-10 hover-lift animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                <h3 className="text-2xl font-bold">My Story</h3>
              </div>
              
              <p className="text-base leading-relaxed text-foreground/90 mb-6">
                Hi, I'm <span className="text-primary font-semibold">Ganeshji Sahu</span>, 19 years old and currently pursuing{" "}
                <span className="font-semibold">B.Sc. IT at KC College, Mumbai</span>. I have a good grasp of programming 
                and web technologies like <span className="text-primary">C++, Python, SQL, HTML, CSS, JavaScript, Java, and Linux</span>. 
                I've worked on projects such as a Python-based Workout Planner App and a Prelims Exam Website featuring 
                time-bound MCQ assessment.
              </p>
              
              <p className="text-base leading-relaxed text-foreground/90 mb-6">
                Beyond tech, I am a <span className="font-semibold text-primary">Second-year Air Wing NCC cadet</span>, which has 
                strengthened my discipline, teamwork, and leadership abilities. I'm currently seeking my first internship to 
                gain real industry exposure and apply my skills in practical environments.
              </p>

              {/* Quick Qualities */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {qualities.map((quality, index) => <div key={index} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full hover:bg-secondary transition-colors">
                    <quality.icon className={`w-4 h-4 ${quality.color}`} />
                    <span className="text-sm font-medium">{quality.label}</span>
                  </div>)}
              </div>
            </div>
          </Card>

          {/* Side Stats */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30 p-6 hover-lift animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Current Status
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-semibold">B.Sc IT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-semibold">3rd Year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-semibold">Mumbai</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="font-semibold text-green-400">Open</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6 hover-lift animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <h4 className="font-bold text-lg mb-3">Fun Fact</h4>
              <p className="text-sm text-muted-foreground">
                As an NCC Air Wing cadet, I've learned that precision in code is just as important as precision in flight!
              </p>
            </Card>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => <Card key={index} className={`relative overflow-hidden bg-gradient-to-br ${item.gradient} border-border p-6 hover-lift animate-fade-in group`} style={{
          animationDelay: `${0.3 + index * 0.1}s`
        }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="p-3 bg-background/50 backdrop-blur-sm rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default About;