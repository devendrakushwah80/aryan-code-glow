import { GraduationCap, Target, Code, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BCA Student at Shri Vaishnav Institute of Management, Indore with 8.0 CGPA in 1st Year"
    },
    {
      icon: Code,
      title: "Development Focus",
      description: "Specializing in Java & Spring Boot framework for robust enterprise applications"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Exploring AI/ML concepts and their practical applications in modern software"
    },
    {
      icon: Target,
      title: "Career Goal",
      description: "Aspiring Full-Stack Developer with expertise in both web development and AI/ML"
    }
  ];

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer on a journey to master full-stack development and artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Aryan Rathore, a dedicated BCA student at Shri Vaishnav Institute of Management, Indore, 
              currently maintaining an impressive 8.0 CGPA in my first year. My journey in technology 
              is driven by a deep fascination with creating robust, scalable applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              My primary focus lies in <span className="text-primary font-semibold">Java and Spring Boot</span> development, 
              where I'm building enterprise-grade applications. Simultaneously, I'm exploring the exciting 
              world of <span className="text-secondary font-semibold">Machine Learning</span> and its applications 
              in solving real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed">
              My goal is to become a versatile Full-Stack Developer who bridges the gap between 
              traditional web development and cutting-edge AI/ML technologies, creating intelligent 
              applications that make a meaningful impact.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-card rounded-2xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text-primary mb-2">8.0</div>
                <div className="text-sm text-muted-foreground mb-4">Current CGPA</div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary">1st</div>
                    <div className="text-sm text-muted-foreground">Year BCA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="hover-lift bg-card/50 border-border group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <item.icon className="h-12 w-12 mx-auto text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;