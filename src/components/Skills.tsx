import { Code, Database, GitBranch, Brain, Server, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: "Advanced", color: "text-orange-500" },
        { name: "C++", level: "Intermediate", color: "text-blue-500" },
        { name: "C", level: "Intermediate", color: "text-green-500" },
        { name: "Python", level: "Learning", color: "text-yellow-500" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Server,
      skills: [
        { name: "Spring Boot", level: "Advanced", color: "text-green-600" },
        { name: "Spring Security", level: "Intermediate", color: "text-red-500" },
        { name: "Git & GitHub", level: "Intermediate", color: "text-gray-400" },
        { name: "Maven", level: "Intermediate", color: "text-purple-500" }
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      skills: [
        { name: "MySQL", level: "Intermediate", color: "text-blue-600" },
        { name: "REST APIs", level: "Advanced", color: "text-indigo-500" },
        { name: "Microservices", level: "Learning", color: "text-teal-500" },
        { name: "JWT & OAuth2", level: "Intermediate", color: "text-red-400" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: "Learning", color: "text-pink-500" },
        { name: "Docker", level: "Learning", color: "text-blue-400" },
        { name: "Kafka", level: "Learning", color: "text-yellow-600" },
        { name: "WebSockets", level: "Learning", color: "text-green-400" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "text-primary";
      case "Intermediate": return "text-secondary";
      case "Learning": return "text-muted-foreground";
      default: return "text-foreground";
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Advanced": return "w-5/6";
      case "Intermediate": return "w-2/3";
      case "Learning": return "w-1/3";
      default: return "w-1/4";
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in development and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift bg-card/50 border-border group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-sm ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out ${getLevelWidth(skill.level)}`}
                          style={{ 
                            animationDelay: `${skillIndex * 200}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Spring Cloud", "JUnit", "Mockito", "Hibernate", "Thymeleaf", 
              "Bootstrap", "HTML5", "CSS3", "JavaScript", "Linux", "IntelliJ IDEA"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-muted hover:bg-accent rounded-full text-sm font-medium transition-colors duration-200 hover:text-primary cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;