import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ARYANRATHORE01",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aryan-rathore-058a3132a",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:rathorearyan89827@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div 
            className="font-mono text-2xl font-bold gradient-text-primary mb-6 cursor-pointer"
            onClick={scrollToTop}
          >
            {"<AR />"}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {["Home", "About", "Skills", "Projects", "Resume", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Quote */}
          <div className="max-w-md mb-8">
            <p className="text-muted-foreground italic">
              "Building the future, one line of code at a time."
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Aryan Rathore. All Rights Reserved.</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and</span>
                <Code className="h-4 w-4 text-primary" />
                <span>in India</span>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Built with React, TypeScript, Tailwind CSS • Designed for modern browsers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;