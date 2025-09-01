import { Download, FileText, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  const downloadCV = () => {
    // In a real implementation, this would download the actual CV
    console.log("Downloading Aryan's CV...");
    // You could implement this with a direct link to a PDF stored in public folder
    // window.open('/aryan-rathore-cv.pdf', '_blank');
  };

  const highlights = [
    {
      icon: Award,
      title: "Academic Excellence",
      value: "8.0 CGPA",
      description: "First Year BCA"
    },
    {
      icon: FileText,
      title: "Technical Projects",
      value: "10+",
      description: "Java & Spring Boot"
    },
    {
      icon: Clock,
      title: "Experience",
      value: "1+ Year",
      description: "Active Development"
    }
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download My <span className="gradient-text-primary">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a comprehensive overview of my education, skills, projects, and achievements
          </p>
        </div>

        {/* Resume Preview Card */}
        <Card className="bg-card/50 border-border mb-12 hover-lift">
          <CardContent className="p-12">
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <div className="w-24 h-32 bg-gradient-card rounded-lg flex items-center justify-center mb-4 mx-auto border border-border">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Aryan Rathore</h3>
                <p className="text-muted-foreground">Full-Stack Developer Resume</p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-2xl">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-accent/30">
                    <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text-primary mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm font-medium mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <Button 
                onClick={downloadCV}
                size="lg"
                className="bg-gradient-primary hover:shadow-neon-blue hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg"
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume (PDF)
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Updated regularly • Professional format • ATS-friendly
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Resume Sections Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Contact Information",
            "Professional Summary", 
            "Technical Skills",
            "Education & Projects"
          ].map((section, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="text-sm font-medium text-muted-foreground">
                Includes {section}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;