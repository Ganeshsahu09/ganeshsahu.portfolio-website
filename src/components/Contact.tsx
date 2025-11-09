import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ganeshjisahu2006@gmail.com",
      href: "mailto:ganeshjisahu2006@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7506433226",
      href: "tel:+917506433226",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ganeshji-sahu-a420a6319",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View My Code",
      href: "https://github.com/Ganeshsahu09",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether it's for an internship opportunity, collaboration, or just a chat about tech
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            {/* Quick Info Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-electric-blue/5 border-primary/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Quick Info</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-foreground/80">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>
            </Card>

            {/* Contact Methods */}
            <Card className="bg-card/80 backdrop-blur-sm border-border p-6">
              <h3 className="text-xl font-bold mb-6">Contact Methods</h3>
              <div className="space-y-3">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
                  >
                    <div className="p-2.5 bg-background/80 backdrop-blur-sm rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all shadow-md">
                      <link.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">{link.label}</p>
                      <p className="font-semibold text-sm">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Card */}
            <Card className="bg-gradient-to-br from-card to-card/50 border-border p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open to Opportunities
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm currently seeking internship opportunities to gain hands-on industry experience 
                and apply my skills in real-world projects. Let's connect and discuss how I can contribute 
                to your team!
              </p>
            </Card>
          </div>

          {/* Contact Form - Right Side */}
          <Card className="lg:col-span-3 bg-gradient-to-br from-card to-card/50 border-border p-8 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Name</label>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Your Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Your Message</label>
                <Textarea
                  placeholder="Tell me about your project, opportunity, or just say hi!"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-secondary/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base rounded-xl shadow-lg hover:shadow-primary/50 transition-all hover:scale-[1.02]"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your information is safe and will only be used to respond to your message
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
