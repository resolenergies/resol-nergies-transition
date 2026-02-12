import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ville durable avec panneaux solaires"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t("hero.title")}{" "}
            <span className="text-accent">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed animate-fade-up font-display italic" style={{ animationDelay: "0.15s" }}>
            {t("hero.subtitle")}
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#services">
                {t("hero.ctaPrimary")}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">{t("hero.ctaSecondary")}</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">{t("hero.stat1Value")}</p>
              <p className="text-sm text-primary-foreground/70 mt-1">{t("hero.stat1Label")}</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">{t("hero.stat2Value")}</p>
              <p className="text-sm text-primary-foreground/70 mt-1">{t("hero.stat2Label")}</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">{t("hero.stat3Value")}</p>
              <p className="text-sm text-primary-foreground/70 mt-1">{t("hero.stat3Label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
