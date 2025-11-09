import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Information Technology",
      institution: "KC College, Mumbai",
      period: "2024 – 2027",
      status: "Current",
    },
    {
      degree: "12th (Computer Science)",
      institution: "Kendriya Vidyalaya Sangathan",
      period: "2022 – 2024",
      status: "80.8%",
    },
    {
      degree: "10th Standard",
      institution: "Kendriya Vidyalaya Sangathan",
      period: "2013 – 2022",
      status: "88.6%",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden sm:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative animate-fade-in ${
                  index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                } md:w-[calc(50%-2rem)]`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-auto md:right-[-2.3rem] top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden sm:block"></div>

                <Card className="bg-card border-border p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-semibold">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
