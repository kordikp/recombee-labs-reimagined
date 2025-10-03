import { Card } from "@/components/ui/card";
import { Building2, Cpu, GraduationCap, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Partnership = () => {
  const { language } = useLanguage();
  const t = translations[language].partnership;

  const benefits = [
    {
      icon: Building2,
      title: t.facilities.title,
      description: t.facilities.description,
    },
    {
      icon: Cpu,
      title: t.location.title,
      description: `${t.location.building} - ${t.location.room}`,
    },
    {
      icon: GraduationCap,
      title: t.supervision.title,
      description: t.supervision.description,
    },
    {
      icon: Zap,
      title: t.collaboration.title,
      description: t.collaboration.description,
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
            <h3 className="text-2xl font-bold">{t.location.title}</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-semibold text-foreground">RecombeeLab Research Laboratory</p>
              <p>{t.location.building}</p>
              <p>{t.location.address}</p>
              <p className="pt-2">
                <span className="font-medium">{t.location.room}</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Partnership;
