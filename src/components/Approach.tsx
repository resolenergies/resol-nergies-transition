import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnostic complet",
    description: "Nous analysons l'ensemble de votre patrimoine : bâtiments, équipements, contrats énergétiques et habitudes de consommation.",
  },
  {
    number: "02",
    title: "Vision globale",
    description: "Nous élaborons une cartographie claire de vos flux énergétiques et identifions les leviers d'optimisation prioritaires.",
  },
  {
    number: "03",
    title: "Plan d'action personnalisé",
    description: "Nous construisons ensemble une stratégie adaptée à vos objectifs, votre budget et votre calendrier.",
  },
  {
    number: "04",
    title: "Accompagnement continu",
    description: "Nous suivons la mise en œuvre et mesurons les résultats pour garantir l'atteinte de vos objectifs.",
  },
];

const benefits = [
  "Réduction des coûts énergétiques",
  "Conformité réglementaire",
  "Valorisation du patrimoine",
  "Impact environnemental positif",
  "Amélioration du confort",
  "Indépendance énergétique",
];

const Approach = () => {
  return (
    <section id="approche" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Steps */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Notre approche
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Une méthodologie éprouvée pour des 
              <span className="text-primary"> résultats concrets</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Notre démarche structurée garantit une compréhension approfondie 
              de votre situation et des recommandations actionnables.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <span className="font-display font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Les bénéfices de notre accompagnement
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Au-delà des économies d'énergie, notre approche vous apporte 
              des avantages durables pour votre organisation.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-primary-foreground font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
