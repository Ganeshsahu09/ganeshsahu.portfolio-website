import { Card } from "@/components/ui/card";
import { Code2, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <Card className="bg-card border-border p-8 md:p-12 hover-lift animate-fade-in">
          <p className="text-lg leading-relaxed text-foreground/90 mb-8">
            Hi, I'm <span className="text-primary font-semibold">Ganeshji Sahu</span>, 19 years old and currently pursuing{" "}
            <span className="font-semibold">B.Sc. IT at KC College, Mumbai</span>. I have a good grasp of programming 
            and web technologies like <span className="text-primary">C++, Python, SQL, HTML, CSS, JavaScript, PHP, and Linux</span>. 
            I've worked on projects such as a Python-based Workout Planner App and a Prelims Exam Website featuring 
            time-bound MCQ assessment.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/90 mb-8">
            Beyond tech, I am a <span className="font-semibold text-primary">Second-Year Air Wing NCC cadet</span>, which has 
            strengthened my discipline, teamwork, and leadership abilities. I'm currently seeking my first internship to 
            gain real industry exposure and apply my skills in practical environments.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg hover:scale-105 transition-transform">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">Tech Skills</h3>
              <p className="text-muted-foreground">Strong fundamentals in programming & web dev</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg hover:scale-105 transition-transform">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">Teamwork</h3>
              <p className="text-muted-foreground">Collaborative mindset from NCC training</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg hover:scale-105 transition-transform">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-xl mb-2">Disciplined</h3>
              <p className="text-muted-foreground">Motivated learner ready for challenges</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
