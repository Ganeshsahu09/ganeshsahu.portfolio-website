import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award, TrendingUp } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Information Technology",
      institution: "KC College, Mumbai",
      period: "2024 – 2027",
      status: "Current",
      description: "Focusing on software development, web technologies, and database management",
      color: "from-blue-500/20 to-cyan-500/20",
      icon: TrendingUp,
    },
    {
      degree: "12th (Computer Science)",
      institution: "Kendriya Vidyalaya Sangathan",
      period: "2022 – 2024",
      status: "80.8%",
      description: "Specialized in Computer Science with strong performance in programming subjects",
      color: "from-purple-500/20 to-pink-500/20",
      icon: Award,
    },
    {
      degree: "10th Standard",
      institution: "Kendriya Vidyalaya Sangathan",
      period: "2013 – 2022",
      status: "88.6%",
      description: "Strong academic foundation with excellent grades across all subjects",
      color: "from-amber-500/20 to-orange-500/20",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous pursuit of knowledge
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block rounded-full"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative animate-fade-in ${
                  index % 2 === 0 ? "md:ml-0 md:pr-8" : "md:ml-auto md:pl-8"
                } md:w-[calc(50%-2rem)]`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Enhanced Timeline dot with pulse */}
                <div className={`absolute ${index % 2 === 0 ? "md:right-[-1.5rem]" : "md:left-[-1.5rem]"} left-8 md:left-auto top-8 hidden sm:block`}>
                  <div className="relative">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background z-10 shadow-lg"></div>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>

                <Card className={`bg-gradient-to-br ${edu.color} backdrop-blur-sm border-border hover-lift group overflow-hidden`}>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300"></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          <div className="p-2 bg-background/50 rounded-lg">
                            <edu.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                        
                        <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-3 py-1.5 rounded-full">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                          <span className={`px-4 py-1.5 rounded-full font-bold text-sm shadow-md ${
                            edu.status === "Current" 
                              ? "bg-primary text-primary-foreground animate-glow-pulse" 
                              : "bg-background/80 text-primary"
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">84.7%</div>
            <p className="text-sm text-muted-foreground">Average Score</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <p className="text-sm text-muted-foreground">Years in CS/IT</p>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center hover-lift animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">2027</div>
            <p className="text-sm text-muted-foreground">Graduation Year</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
