import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Ganeshji Sahu
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
