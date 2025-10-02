import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "The Future is Sparse: Embedding Compression for Scalable Retrieval in Recommender Systems",
      conference: "RecSys 2025",
      year: "2025",
      description: "Novel approach to embedding compression enabling scalable retrieval in large-scale recommendation systems.",
      badge: "RecSys 2025",
    },
    {
      title: "Probabilistic Modeling, Learnability and Uncertainty Estimation for Interaction Prediction in Movie Rating Datasets",
      conference: "RecSys 2025",
      year: "2025",
      description: "Advanced probabilistic framework for modeling user-item interactions with uncertainty quantification in movie recommendations.",
      badge: "RecSys 2025",
    },
    {
      title: "Recurrent Autoregressive Linear Model for Next-Basket Recommendation",
      conference: "RecSys 2025",
      year: "2025",
      description: "Innovative autoregressive approach for predicting sequential shopping behaviors in e-commerce platforms.",
      badge: "RecSys 2025",
    },
    {
      title: "SAGEA: Sparse Autoencoder-based Group Embeddings Aggregation for Fairness-Preserving Group Recommendations",
      conference: "RecSys 2025",
      year: "2025",
      description: "Fairness-aware group recommendation system using sparse autoencoders to balance individual and group preferences.",
      badge: "RecSys 2025",
    },
    {
      title: "beeFormer: Transformer for Recommender Systems",
      conference: "RecSys 2024",
      year: "2024",
      description: "Advanced transformer architecture optimized for cold-start item recommendations through interaction-based training.",
      badge: "RecSys 2024",
      link: "https://doi.org/10.1145/3640457.3691707",
    },
    {
      title: "Advanced Popularity Models for Curiosity Detection",
      conference: "WWW 2024",
      year: "2024",
      description: "Novel methods for detecting and measuring popularity patterns among different audience segments for online content.",
      badge: "WWW 2024",
      link: "https://doi.org/10.1145/3589334.3645473",
    },
  ];

  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Latest Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="bg-gradient-primary bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our cutting-edge research published at top-tier conferences in AI and recommender systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {pub.badge}
                  </Badge>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pub.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border/50">
                  <span className="font-medium">{pub.conference}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;