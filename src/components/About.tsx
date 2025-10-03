import { Target, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const features = [
    {
      icon: Target,
      title: t.realWorld.title,
      description: t.realWorld.description,
    },
    {
      icon: Users,
      title: t.industry.title,
      description: t.industry.description,
    },
    {
      icon: Lightbulb,
      title: t.excellence.title,
      description: t.excellence.description,
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-sm font-medium text-accent">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.subtitle}
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
