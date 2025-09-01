import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Portfolio = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div className="fade-in">
          <Hero />
        </div>
        
        <div className="fade-in">
          <About />
        </div>
        
        <div className="fade-in">
          <Skills />
        </div>
        
        <div className="fade-in">
          <Projects />
        </div>
        
        <div className="fade-in">
          <Resume />
        </div>
        
        <div className="fade-in">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;