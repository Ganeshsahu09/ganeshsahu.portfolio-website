import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card border-border p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <link.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-semibold">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="bg-card border-border p-8">
              <h3 className="text-xl font-bold mb-4">Open to Opportunities</h3>
              <p className="text-muted-foreground">
                I'm currently seeking internship opportunities to gain hands-on industry experience 
                and apply my skills in real-world projects. Let's connect and discuss how I can contribute 
                to your team!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
