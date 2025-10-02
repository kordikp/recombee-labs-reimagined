import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
              RecombeeLab
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Joint research laboratory advancing AI and recommendation systems through collaboration between 
              Recombee and CTU Prague.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Research</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#publications" className="hover:text-primary transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#opensource" className="hover:text-primary transition-colors">
                  Open Source
                </a>
              </li>
              <li>
                <a 
                  href="https://www.recombee.com/research-publications" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  All Publications
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://www.recombee.com/research" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Recombee Research
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
                  CTU FIT
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
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RecombeeLab. Advancing AI through research and collaboration.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;