import { useState, useEffect } from "react";
import { Github, ExternalLink, Filter, Calendar, Code, Shield, Database, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  const upcomingProjects = [
    {
      title: "RESTful Web Service",
      description: "Complete CRUD application using Spring Boot with MySQL integration and comprehensive API documentation.",
      status: "Planned",
      skills: ["Spring Boot", "MySQL", "REST API", "JPA"],
      category: "Spring",
      icon: Database
    },
    {
      title: "Secure Banking Application",
      description: "Full-featured banking system with Spring Security, JWT authentication, and OAuth2 integration.",
      status: "In Progress",
      skills: ["Spring Security", "JWT", "OAuth2", "MySQL"],
      category: "Security",
      icon: Shield
    },
    {
      title: "Microservices Online Store",
      description: "Scalable e-commerce platform built with Spring Cloud architecture and Docker containerization.",
      status: "Planned",
      skills: ["Spring Cloud", "Docker", "Microservices", "API Gateway"],
      category: "Microservices",
      icon: Code
    },
    {
      title: "Real-time Data Streaming",
      description: "Event-driven application using Apache Kafka with Spring Boot for real-time data processing.",
      status: "Planned",
      skills: ["Kafka", "Spring Boot", "Event Streaming", "Real-time"],
      category: "Real-Time",
      icon: Zap
    },
    {
      title: "Batch Processing System",
      description: "Enterprise-grade batch processing application using Spring Batch for large-scale data operations.",
      status: "Planned",
      skills: ["Spring Batch", "Job Scheduling", "Data Processing"],
      category: "Spring",
      icon: Database
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with WebSocket integration and real-time messaging capabilities.",
      status: "Planned",
      skills: ["WebSockets", "Spring Boot", "Real-time Communication"],
      category: "Real-Time",
      icon: Zap
    }
  ];

  const filters = ["All", "Java", "Spring", "Security", "Real-Time", "Microservices"];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/ARYANRATHORE01/repos?sort=updated&per_page=10");
        if (response.ok) {
          const data = await response.json();
          // Filter out forks and sort by stars
          const filteredRepos = data
            .filter((repo: GitHubRepo) => !repo.name.includes("fork"))
            .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count);
          setRepos(filteredRepos);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planned": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const filteredProjects = upcomingProjects.filter(project => 
    filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey, featuring both live GitHub repositories and upcoming projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterName) => (
            <Button
              key={filterName}
              variant={filter === filterName ? "default" : "outline"}
              onClick={() => setFilter(filterName)}
              className="transition-all duration-200"
            >
              <Filter className="mr-2 h-4 w-4" />
              {filterName}
            </Button>
          ))}
        </div>

        {/* GitHub Repositories */}
        {repos.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Live GitHub <span className="gradient-text-secondary">Repositories</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <Card key={repo.id} className="hover-lift bg-card/50 border-border group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="truncate">{repo.name}</span>
                      <div className="flex space-x-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.language && (
                        <Badge variant="secondary" className="text-xs">
                          {repo.language}
                        </Badge>
                      )}
                      {repo.topics.slice(0, 2).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </div>
                      <div>⭐ {repo.stargazers_count}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Upcoming <span className="gradient-text-primary">Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover-lift bg-card/50 border-border group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="flex-1">{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading GitHub repositories...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;