import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const OpenSource = () => {
  const projects = [
    {
      name: "ELSA",
      description: "Scalable linear shallow autoencoder for collaborative filtering with exceptional performance on large-scale datasets.",
      github: "https://github.com/recombee/ELSA",
    },
    {
      name: "Repsys",
      description: "Open-source framework for building and evaluating recommendation systems with comprehensive benchmarking tools.",
      github: "https://github.com/cowjen01/repsys",
      demo: "https://repsys.recombee.net/",
    },
    {
      name: "beeFormer",
      description: "Advanced transformer architecture optimized for recommendation tasks with state-of-the-art performance.",
      github: "https://github.com/recombee/beeformer",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Github className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Open Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Open Source <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe in democratizing AI technologies. Our open-source tools are used by researchers and developers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 pt-4">
                  <Button
                    variant="outline"
                    className="w-full justify-between group border-primary/20 hover:bg-primary/5"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        GitHub
                      </span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  {project.demo && (
                    <Button
                      variant="outline"
                      className="w-full justify-between group border-accent/20 hover:bg-accent/5"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;