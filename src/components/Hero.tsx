import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ville durable avec panneaux solaires"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Votre Référent Énergie Délégué
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            RESOL Énergies :{" "}
            <span className="text-accent">Votre Référent Énergie Délégué</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed animate-fade-up font-display italic" style={{ animationDelay: "0.15s" }}>
            "Parce que la transition énergétique ne s'arrête pas à un rapport d'audit, nous pilotons votre stratégie de l'intérieur."
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            À travers un forfait de temps régulier, nous devenons votre interlocuteur unique 
            pour coordonner l'ensemble de vos enjeux énergétiques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#services">
                Découvrir nos expertises
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Nous rencontrer</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">14+</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Collectivités accompagnées</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Projets réalisés</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">30%</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Économies moyennes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
