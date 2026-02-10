import { FileSearch, LineChart, HardHat, Scale, GraduationCap } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    color: "bg-emerald-500",
    colorLight: "bg-emerald-500/10",
    colorText: "text-emerald-600",
    dotColor: "🟢",
    title: "Stratégie, Études & Diagnostics",
    description: "Construire une stratégie énergétique adaptée à votre patrimoine pour disposer d'une vision claire et objective.",
    details: "Inventaire complet (bâtiments, éclairage public, parc de véhicules), analyse des consommations et hiérarchisation des actions.",
    example: "Plutôt que de rénover au hasard, nous identifions le bâtiment le plus énergivore de votre parc pour concentrer vos investissements là où le gain sera le plus rapide.",
  },
  {
    icon: LineChart,
    color: "bg-blue-500",
    colorLight: "bg-blue-500/10",
    colorText: "text-blue-600",
    dotColor: "🔵",
    title: "Pilotage & Suivi des Consommations",
    description: "Piloter les actions engagées et suivre l'évolution réelle de vos consommations.",
    details: "Mise en place d'indicateurs simples pour les élus et techniciens, suivi régulier et paramétrage d'outils de pilotage durables.",
    example: "L'analyse mensuelle de vos consommations permet de détecter immédiatement une dérive liée à un mauvais réglage de chauffage, évitant ainsi un surcoût inutile en fin d'année.",
  },
  {
    icon: HardHat,
    color: "bg-orange-500",
    colorLight: "bg-orange-500/10",
    colorText: "text-orange-600",
    dotColor: "🟠",
    title: "Assistance à la Maîtrise d'Ouvrage (AMO)",
    description: "Des actions concrètes vers la sobriété, de la stratégie à la mise en œuvre.",
    details: "Accompagnement lors de rénovations, études CVC (chauffage, ventilation, climatisation), solutions low-tech et optimisation des usages.",
    example: "Lors du remplacement d'une chaudière, nous vous aidons à valider le système mieux adapté à vos besoins, garantissant que les travaux livrés correspondent à vos objectifs d'économie.",
  },
  {
    icon: Scale,
    color: "bg-red-500",
    colorLight: "bg-red-500/10",
    colorText: "text-red-600",
    dotColor: "🔴",
    title: "Sécurisation Réglementaire",
    description: "Sécuriser votre structure face aux obligations légales croissantes.",
    details: "Identification du patrimoine assujetti et mise en conformité avec les décrets (Eco-énergie tertiaire/OPERAT, BACS, Directive Efficacité Énergétique).",
    example: "Nous prenons en charge la saisie annuelle de vos données sur la plateforme OPERAT pour le Décret Tertiaire, vous évitant ainsi les sanctions et le risque d'image lié au \"Name & Shame\".",
  },
  {
    icon: GraduationCap,
    color: "bg-yellow-500",
    colorLight: "bg-yellow-500/10",
    colorText: "text-yellow-600",
    dotColor: "🟡",
    title: "Formation & Sensibilisation",
    description: "Formez vos agents au pilotage énergétique pour devenir autonome.",
    details: "Sessions de sensibilisation à la maîtrise de l'énergie et à la transition écologique adaptées à votre contexte.",
    example: "Une formation sur site pour apprendre à vos services techniques comment optimiser le paramétrage de la Gestion Technique du Bâtiment (GTB) sans sacrifier le confort des usagers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos expertises
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une mission de Référent qui <span className="text-primary">articule nos expertises</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cette mission de Référent englobe et articule nos expertises que vous pouvez également solliciter de manière indépendante.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${service.colorLight} group-hover:${service.color} transition-all duration-300`}>
                <service.icon className={`w-6 h-6 ${service.colorText} transition-colors duration-300`} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* What we do */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-1">Ce que nous faisons :</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
              </div>

              {/* Example */}
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary mb-1">💡 Exemple concret :</p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {service.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
