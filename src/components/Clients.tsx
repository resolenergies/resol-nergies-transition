import { Building, Factory, Home } from "lucide-react";

const clientTypes = [
  {
    icon: Building,
    title: "Collectivités",
    description: "Communes, intercommunalités, départements et régions souhaitant optimiser leur patrimoine public et réduire leurs dépenses énergétiques.",
    features: ["Stratégie énergétique du patrimoine", "Plan pluriannuel d'investissement", "Accompagnement aux financements"],
  },
  {
    icon: Factory,
    title: "Entreprises",
    description: "PME, ETI et grands groupes cherchant à maîtriser leurs coûts énergétiques et améliorer leur performance environnementale.",
    features: ["Pilotage des consommations", "Conformité réglementaire", "Optimisation des usages"],
  },
  {
    icon: Home,
    title: "Particuliers",
    description: "Propriétaires et copropriétés désireux d'améliorer le confort de leur habitat tout en réduisant leurs factures.",
    features: ["Conseil en rénovation énergétique", "Indépendance énergétique", "Optimisation du confort"],
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nos clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Une expertise adaptée à 
            <span className="text-primary"> chaque profil</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Que vous soyez une collectivité, une entreprise ou un particulier, 
            nous adaptons notre approche à vos enjeux spécifiques.
          </p>
        </div>

        {/* Client Types */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {clientTypes.map((client, index) => (
            <div
              key={client.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Icon Header */}
              <div className="bg-gradient-hero p-8 flex justify-center">
                <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <client.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {client.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {client.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {client.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
