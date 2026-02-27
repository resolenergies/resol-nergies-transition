import { useTranslation } from "react-i18next";
import { FileSearch, LineChart, HardHat, Scale, GraduationCap, MessageCircleQuestion, ArrowRight } from "lucide-react";

const serviceKeys = [
  { key: "service1", icon: FileSearch, color: "bg-emerald-500", colorLight: "bg-emerald-500/10", colorText: "text-emerald-600" },
  { key: "service2", icon: LineChart, color: "bg-blue-500", colorLight: "bg-blue-500/10", colorText: "text-blue-600" },
  { key: "service3", icon: HardHat, color: "bg-orange-500", colorLight: "bg-orange-500/10", colorText: "text-orange-600" },
  { key: "service4", icon: Scale, color: "bg-red-500", colorLight: "bg-red-500/10", colorText: "text-red-600" },
  { key: "service5", icon: GraduationCap, color: "bg-yellow-500", colorLight: "bg-yellow-500/10", colorText: "text-yellow-600" },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t("services.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("services.title")} <span className="text-primary">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {serviceKeys.map((service, index) => (
            <div
              key={service.key}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${service.colorLight}`}>
                <service.icon className={`w-6 h-6 ${service.colorText} transition-colors duration-300`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(`services.${service.key}.description`)}
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-1">{t("services.whatWeDo")}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`services.${service.key}.details`)}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary mb-1">{t("services.example")}</p>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {t(`services.${service.key}.example`)}
                </p>
              </div>
            </div>
          ))}

          <div className="group bg-gradient-hero rounded-xl p-6 lg:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center"
            style={{ animationDelay: `0.5s` }}
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-primary-foreground/20">
              <MessageCircleQuestion className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
              {t("services.custom.title")}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              {t("services.custom.description")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              {t("services.custom.cta")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
