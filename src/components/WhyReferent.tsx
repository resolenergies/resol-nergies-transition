import { Check, ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Sparkles,
    title: "Expertise sur mesure",
    description: "Vous profitez d'un expert dédié qui connaît votre patrimoine, vos équipements et vos contraintes sur le bout des doigts.",
  },
  {
    icon: TrendingUp,
    title: "Continuité",
    description: "Fini les dossiers qui stagnent. Votre transition énergétique avance chaque mois de manière fluide, sans interruption, même lorsque vos équipes sont sollicitées ailleurs.",
  },
  {
    icon: Shield,
    title: "Budget maîtrisé",
    description: "Une dépense de conseil lissée sur l'année pour une meilleure visibilité financière, accompagnée d'une assistance prioritaire pour toutes vos urgences.",
  },
];

const WhyReferent = () => {
  return (
    <section id="approche" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Why choose section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Pourquoi ce format ?
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pourquoi choisir le format{" "}
              <span className="text-primary">"Référent Délégué"</span> ?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Chacune de ces missions peut être réalisée ponctuellement. Cependant, en choisissant RESOL Énergies comme Référent Énergie Délégué, vous bénéficiez d'une <strong className="text-foreground">cohérence globale</strong> : vos diagnostics alimentent votre suivi, vos travaux respectent la réglementation et vos agents sont formés en continu.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              C'est l'assurance d'une transition énergétique qui avance chaque mois, <strong className="text-foreground">sans peser sur votre masse salariale</strong>.
            </p>
          </div>

          {/* Benefits cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-4 bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Faites de l'énergie un levier de performance, pas une contrainte.
          </h3>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
            Dans un contexte de volatilité des prix et de durcissement réglementaire, l'énergie ne doit plus être une fatalité budgétaire. 
            En choisissant RESOL Énergies comme votre Référent Énergie Délégué, vous transformez une gestion complexe en une trajectoire maîtrisée. 
            Nous ne nous contentons pas de vous remettre des rapports : nous agissons à vos côtés pour optimiser vos consommations, capter les aides disponibles (subventions, CEE) et sécuriser votre avenir énergétique.
          </p>
          <Button variant="heroOutline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="#contact">
              Rencontrons-nous
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyReferent;
