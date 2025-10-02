import { Target, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Real-World Impact",
      description: "Access to production datasets from hundreds of integrations serving millions of users worldwide, enabling A/B testing in real environments.",
    },
    {
      icon: Users,
      title: "Industry Partnership",
      description: "Joint research laboratory with Recombee and Faculty of Information Technology at Czech Technical University in Prague.",
    },
    {
      icon: Lightbulb,
      title: "Research Excellence",
      description: "Focus on ethical personalization and recommendation algorithms that bring genuine value to users, not just advertising.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research That <span className="bg-gradient-primary bg-clip-text text-transparent">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At RecombeeLab, we bridge the gap between academic research and real-world applications. 
            Our unique advantage lies in combining cutting-edge algorithms with practical insights from 
            production systems used by companies in 27+ countries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;