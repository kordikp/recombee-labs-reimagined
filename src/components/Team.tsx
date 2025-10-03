import { Card } from "@/components/ui/card";
import { Building2, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import facultyBuilding from "@/assets/faculty-building.jpg";
import labInterior from "@/assets/lab-interior.jpg";
import rodrigoImg from "@/assets/rodrigo.png";
import vojtaImg from "@/assets/vojta.png";

const Team = () => {
  const { language } = useLanguage();
  const t = translations[language].team;

  const teamMembers = [
    {
      name: "Rodrigo Alves, Ph.D.",
      role: "Head of Laboratory",
      image: rodrigoImg,
    },
    {
      name: "Pavel Kordik, Ph.D.",
      role: "CEO, Co-Founder",
    },
    {
      name: "Vojtech Vancura, Ph.D.",
      role: "Machine Learning Researcher",
      image: vojtaImg,
    },
    {
      name: "Petr Kasalicky",
      role: "Machine Learning Researcher",
    },
    {
      name: "Dan Bohunek",
      role: "Applied Scientist",
    },
    {
      name: "Martin Spisak",
      role: "Applied Scientist",
    },
    {
      name: "Veronika Vilimovska",
      role: "Applied Scientist",
    },
    {
      name: "Jaroslav Hradil",
      role: "Applied Scientist",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
        </div>

        {/* Faculty Images */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={facultyBuilding} 
                alt="CTU Prague Faculty of Information Technology building" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Building2 className="w-5 h-5" />
                    <h3 className="text-xl font-semibold">FIT CTU Prague</h3>
                  </div>
                  <p className="text-sm text-primary-foreground/90 mt-1">Faculty of Information Technology</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-64 overflow-hidden">
              <img 
                src={labInterior} 
                alt="RecombeeLab research laboratory interior" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Users className="w-5 h-5" />
                    <h3 className="text-xl font-semibold">Research Lab</h3>
                  </div>
                  <p className="text-sm text-primary-foreground/90 mt-1">State-of-the-art facilities & equipment</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {member.image ? (
                <div className="mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ')[0].charAt(0)}{member.name.split(' ')[1].charAt(0)}
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
