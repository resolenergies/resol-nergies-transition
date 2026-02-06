import { FileSearch, LineChart, HardHat, Scale, GraduationCap, MessageCircle } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Études et diagnostics",
    description: "Construire une stratégie énergétique adaptée à votre patrimoine grâce à un diagnostic global.",
    details: [
      "Inventaire complet du patrimoine (bâtiments, éclairage public, parc de véhicules)",
      "Analyse des consommations d'énergie par site et à l'échelle globale",
      "Classer et prioriser le patrimoine (bâti, éclairage public, parc automobile)",
      "Construire un plan d'actions réaliste et progressif",
    ],
  },
  {
    icon: LineChart,
    title: "Pilotage et suivi",
    description: "Piloter les actions et suivre l'évolution des consommations énergétiques.",
    details: [
      "Mise en place d'indicateurs de suivi simples et adaptés",
      "Suivi régulier des consommations énergétiques",
      "Paramétrage d'outils de suivi pour un pilotage dans la durée",
      "Pilotage ou aide au pilotage des actions engagées",
    ],
  },
  {
    icon: HardHat,
    title: "Assistance à maîtrise d'ouvrage",
    description: "Des actions concrètes vers la sobriété énergétique, de la stratégie à l'action.",
    details: [
      "Assistance à la maîtrise d'ouvrage lors d'une rénovation",
      "Accompagnement à la préparation d'audits et d'études",
      "Études énergétiques de bâtiments et études CVC",
      "Conseils de sobriété énergétique et solutions low-tech",
    ],
  },
  {
    icon: Scale,
    title: "Réglementation",
    description: "Sécurisez votre commune face aux obligations réglementaires en vigueur.",
    details: [
      "Décret Éco-énergie tertiaire : déclaration OPERAT et mise en conformité",
      "Décret BACS : identification et accompagnement",
      "Directive Efficacité énergétique : mise en conformité",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Formez vos agents au pilotage énergétique et devenez autonome.",
    details: [
      "Formation et sensibilisation dans les domaines de l'énergie",
      "Efficacité énergétique et transition écologique",
    ],
  },
  {
    icon: MessageCircle,
    title: "Besoin d'autre chose ?",
    description: "Vous ne trouvez pas ce dont vous avez besoin ? Contactez-nous pour des solutions personnalisées et adaptées à vos besoins.",
    details: [],
    isContact: true,
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
            Conseil en <span className="text-primary">efficacité énergétique</span> et transition
          </h2>
          <p className="text-muted-foreground text-lg">
            Conseil stratégique, technique et opérationnel en matière d'efficacité énergétique, 
            de maîtrise des consommations d'énergie, de transition énergétique et d'énergies renouvelables.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 ${
                service.isContact ? "border-2 border-dashed border-primary/30 flex flex-col justify-center items-center text-center" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 ${
                service.isContact ? "bg-accent/20 group-hover:bg-accent" : "bg-primary/10 group-hover:bg-primary"
              }`}>
                <service.icon className={`w-6 h-6 transition-colors duration-300 ${
                  service.isContact 
                    ? "text-accent group-hover:text-accent-foreground" 
                    : "text-primary group-hover:text-primary-foreground"
                }`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              {service.details.length > 0 && (
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              {service.isContact && (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
                >
                  Nous contacter →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
