import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t.about.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.research.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#publications" className="hover:text-primary transition-colors">
                  {t.research.publications}
                </a>
              </li>
              <li>
                <a href="#opensource" className="hover:text-primary transition-colors">
                  {t.research.openSource}
                </a>
              </li>
              <li>
                <a 
                  href="https://www.recombee.com/research-publications" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {t.research.allPublications}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.links.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://www.recombee.com/research" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {t.research.recombeeResearch}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://fit.cvut.cz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {t.research.ctuFit}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/recombee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <Github className="w-3 h-3" />
                  {t.links.github}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
