import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "BCA Student",
    "Full-Stack Developer", 
    "Java & Spring Boot",
    "Machine Learning Enthusiast"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // This would trigger CV download in real implementation
    console.log("Downloading CV...");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-secondary/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text-primary">Aryan</span>{" "}
            <span className="text-foreground">Rathore</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Web Developer passionate about Java & Spring Boot, exploring Machine Learning, 
            and building innovative solutions as a BCA student at Shri Vaishnav Institute of Management, Indore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProjects}
              variant="hero"
              size="lg"
              className="group"
            >
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              onClick={downloadCV}
              variant="secondary-hero"
              size="lg"
              className="group"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/ARYANRATHORE01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-glow group"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="https://linkedin.com/in/aryan-rathore-058a3132a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-glow group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="mailto:rathorearyan89827@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-glow group"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;