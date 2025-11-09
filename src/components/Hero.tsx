import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePic from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8 inline-block">
          <img
            src={profilePic}
            alt="Ganeshji Sahu"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-2xl glow-effect mx-auto object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Ganeshji Sahu
        </h1>
        
        <p className="text-2xl md:text-3xl gradient-text font-semibold mb-6">
          Aspiring IT Developer | Python, C++, Web Technologies
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          A passionate tech enthusiast with strong programming fundamentals, driven by continuous learning 
          and the discipline instilled through NCC training. Ready to transform ideas into innovative solutions.
        </p>
        
        <Button 
          onClick={scrollToPortfolio}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
        >
          View Portfolio
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
