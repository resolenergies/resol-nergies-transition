import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyReferent = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: Sparkles, titleKey: "whyReferent.benefit1Title", descKey: "whyReferent.benefit1Desc" },
    { icon: TrendingUp, titleKey: "whyReferent.benefit2Title", descKey: "whyReferent.benefit2Desc" },
    { icon: Shield, titleKey: "whyReferent.benefit3Title", descKey: "whyReferent.benefit3Desc" },
  ];

  return (
    <section id="approche" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t("whyReferent.sectionLabel")}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("whyReferent.title")}{" "}
              <span className="text-primary">{t("whyReferent.titleHighlight")}</span> ?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("whyReferent.paragraph1") }}
            />
            <p className="text-muted-foreground text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("whyReferent.paragraph2") }}
            />
          </div>

          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.titleKey}
                className="flex gap-4 bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(benefit.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t("whyReferent.ctaTitle")}
          </h3>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
            {t("whyReferent.ctaText")}
          </p>
          <Button variant="heroOutline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="#contact">
              {t("whyReferent.ctaButton")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyReferent;
