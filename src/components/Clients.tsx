import { useTranslation } from "react-i18next";
import { Building, Factory, Home } from "lucide-react";

const Clients = () => {
  const { t } = useTranslation();

  const clientTypes = [
    {
      icon: Building,
      titleKey: "clients.collectivites.title",
      descKey: "clients.collectivites.description",
      featuresKey: "clients.collectivites.features",
    },
    {
      icon: Factory,
      titleKey: "clients.entreprises.title",
      descKey: "clients.entreprises.description",
      featuresKey: "clients.entreprises.features",
    },
    {
      icon: Home,
      titleKey: "clients.particuliers.title",
      descKey: "clients.particuliers.description",
      featuresKey: "clients.particuliers.features",
    },
  ];

  return (
    <section id="clients" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t("clients.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("clients.title")}{" "}
            <span className="text-primary">{t("clients.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("clients.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {clientTypes.map((client) => {
            const features = t(client.featuresKey, { returnObjects: true }) as string[];
            return (
              <div
                key={client.titleKey}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="bg-gradient-hero p-8 flex justify-center">
                  <div className="w-20 h-20 bg-primary-foreground/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <client.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {t(client.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(client.descKey)}
                  </p>
                  <ul className="space-y-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
