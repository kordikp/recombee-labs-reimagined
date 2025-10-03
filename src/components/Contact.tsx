import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">{t.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <Card className="p-8 bg-gradient-card border-primary/20 shadow-elegant max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t.cardTitle}</h3>
                <p className="text-muted-foreground">
                  {t.cardDescription}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-primary hover:opacity-90 transition-all shadow-elegant group"
                  asChild
                >
                  <a href="mailto:research@recombee.com">
                    <Mail className="mr-2 w-5 h-5" />
                    {t.emailButton}
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary/20 hover:bg-primary/5 group"
                  asChild
                >
                  <a 
                    href="https://experts.ai/widgets/organizations/193179?opportunity=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.opportunitiesButton}
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>{t.labHead}: <span className="font-medium text-foreground">Rodrigo Alves, Ph.D.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;