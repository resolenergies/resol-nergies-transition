import { FileSearch, LineChart, UserCheck, HardHat, Scale, GraduationCap, MessageCircle } from "lucide-react";

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
    icon: UserCheck,
    title: "Référent Énergie Délégué",
    subtitle: "Pour les collectivités — ou « Direction Énergie Externalisée » pour les PMI/PME",
    description: "Bénéficiez d'un référent énergie dédié pour piloter votre transition sans embaucher. Un crédit-temps mensuel (heures ou jours) pour déléguer tout ou partie de votre gestion énergétique.",
    sections: [
      {
        heading: "Les Missions",
        intro: "Ce forfait 360° s'adapte à vos priorités et pioche dans l'ensemble de nos expertises :",
        items: [
          "Veille & Conseil : Assistance technique et réglementaire permanente (Décret Tertiaire, BACS, etc.).",
          "Pilotage Continu : Suivi des consommations, analyse des indicateurs et ajustement du plan d'actions.",
          "AMO & Travaux : Suivi de vos chantiers de rénovation et optimisation des installations CVC.",
          "Accompagnement : Réunions de suivi avec vos élus ou techniciens et sensibilisation des agents.",
        ],
      },
      {
        heading: "Vos Bénéfices",
        items: [
          "Expertise sur mesure : Un expert qui connaît votre patrimoine sur le bout des doigts.",
          "Continuité : Vos dossiers avancent chaque mois, sans interruption.",
          "Budget maîtrisé : Une dépense lissée et une assistance prioritaire.",
        ],
      },
    ],
    details: [],
    isHighlighted: true,
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
              } ${service.isHighlighted ? "md:col-span-2 lg:col-span-3 border-2 border-primary/20 bg-primary/5" : ""}`}
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
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-sm text-primary font-medium mb-3">{service.subtitle}</p>
              )}
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              {service.sections && (
                <div className={`grid gap-6 ${service.isHighlighted ? "md:grid-cols-2" : ""}`}>
                  {service.sections.map((section) => (
                    <div key={section.heading}>
                      <h4 className="font-display font-semibold text-foreground mb-2">{section.heading}</h4>
                      {section.intro && <p className="text-sm text-muted-foreground mb-3">{section.intro}</p>}
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {service.details.length > 0 && !service.sections && (
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
