import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Conseil en transition énergétique
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Réduisez votre empreinte énergétique, 
            <span className="text-accent"> durablement</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Resol Énergies accompagne les collectivités, entreprises et particuliers 
            dans leur transition énergétique avec une vision globale et des études 
            personnalisées pour optimiser vos consommations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Découvrir nos services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Nous contacter
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">15+</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Années d'expertise</p>
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
