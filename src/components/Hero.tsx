import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Mail, Github, Linkedin, Code2, Trophy, GraduationCap } from "lucide-react";
import profilePic from "@/assets/ganeshji-profile.png";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Code2, label: "Technologies", value: "8+", delay: "0s" },
    { icon: GraduationCap, label: "Education", value: "B.Sc IT", delay: "0.1s" },
    { icon: Trophy, label: "NCC Cadet", value: "2nd Year", delay: "0.2s" },

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8 relative inline-block">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-primary/50 animate-glow-pulse"></div>
              
              <img
                src={profilePic}
                alt="Portrait of Ganeshji Sahu"
                width={512}
                height={512}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-2xl glow-effect mx-auto lg:mx-0 object-cover"
              />
              
              {/* Status Badge */}
              <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open to Work
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Ganeshji <span className="gradient-text">Sahu</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
              Aspiring IT Developer
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Python • C++ • Web Technologies
            </p>
            
            <p className="text-base text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              A passionate tech enthusiast with strong programming fundamentals, driven by continuous learning 
              and the discipline instilled through <span className="text-primary font-semibold">NCC training</span>. 
              Ready to transform ideas into innovative solutions.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Ganeshsahu09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ganeshji-sahu-a420a6319"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ganeshjisahu2006@gmail.com"
                className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Floating Cards */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Main Feature Card */}
            <Card className="absolute top-0 right-0 w-80 bg-card/80 backdrop-blur-sm border-border p-6 hover-lift animate-fade-in shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Quick Learner</h3>
                  <p className="text-sm text-muted-foreground">
                    Rapidly adapting to new technologies and frameworks with strong fundamentals
                  </p>
                </div>
              </div>
            </Card>

            {/* Stats Cards */}
            <div className="absolute top-32 left-0 space-y-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="w-48 bg-card/80 backdrop-blur-sm border-border p-4 hover-lift animate-fade-in shadow-lg"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="font-bold text-lg">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Seeking Card */}
            <Card className="absolute bottom-0 right-12 w-72 bg-gradient-to-br from-primary/20 to-electric-blue/10 backdrop-blur-sm border-primary/30 p-6 hover-lift animate-fade-in shadow-xl" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Actively Seeking
              </h3>
              <p className="text-sm text-foreground/80 mb-3">
                First internship opportunity to gain real-world industry experience
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                  Internship
                </span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                  Entry Level
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden grid grid-cols-3 gap-4 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border p-4 text-center hover-lift">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
