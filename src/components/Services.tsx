import { Building2, LineChart, Lightbulb, FileSearch, Zap, Target } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Audit énergétique",
    description: "Analyse complète de votre patrimoine pour identifier les sources de consommation et les potentiels d'optimisation.",
  },
  {
    icon: LineChart,
    title: "Vision globale",
    description: "Cartographie détaillée de vos actifs énergétiques pour une compréhension claire de votre situation actuelle.",
  },
  {
    icon: Target,
    title: "Études personnalisées",
    description: "Recommandations sur mesure adaptées à vos objectifs, votre budget et vos contraintes opérationnelles.",
  },
  {
    icon: Building2,
    title: "Rénovation énergétique",
    description: "Accompagnement dans vos projets de rénovation pour améliorer la performance de vos bâtiments.",
  },
  {
    icon: Lightbulb,
    title: "Conseil stratégique",
    description: "Définition d'une feuille de route claire pour atteindre vos objectifs de transition énergétique.",
  },
  {
    icon: Zap,
    title: "Suivi et optimisation",
    description: "Mesure continue des performances et ajustements pour maximiser vos économies d'énergie.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une expertise complète pour votre 
            <span className="text-primary"> transition énergétique</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De l'audit initial au suivi des performances, nous vous accompagnons 
            à chaque étape de votre démarche d'efficacité énergétique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
