import { Card } from "@/components/ui/card";
import { Building2, Cpu, GraduationCap, Zap } from "lucide-react";

const Partnership = () => {
  const benefits = [
    {
      icon: Building2,
      title: "World-Class Facilities",
      description: "Access to high-performance computing infrastructure with GPU servers and enterprise-grade hardware.",
    },
    {
      icon: Cpu,
      title: "Production Data",
      description: "Real-world datasets from hundreds of production integrations across 27+ countries worldwide.",
    },
    {
      icon: GraduationCap,
      title: "PhD Support",
      description: "Financial support and mentorship for PhD students working on cutting-edge research projects.",
    },
    {
      icon: Zap,
      title: "A/B Testing",
      description: "Unique ability to test research prototypes in real production environments with live users.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partnership with <span className="bg-gradient-primary bg-clip-text text-transparent">CTU Prague</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            RecombeeLab is a joint research laboratory with the Faculty of Information Technology at Czech Technical University in Prague. 
            This unique partnership combines academic excellence with industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border/50 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto p-8 bg-gradient-card border-primary/20 shadow-elegant animate-fade-in-up">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Location</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">RecombeeLab Research Laboratory</p>
              <p>Department of Applied Mathematics</p>
              <p>Faculty of Information Technology</p>
              <p>Czech Technical University in Prague</p>
              <p className="pt-2">
                <span className="font-medium">Room:</span> TH:A-1354 (Building A, 13th floor)
              </p>
              <p>Thákurova 7, Praha 6 – Dejvice, 160 00</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Partnership;