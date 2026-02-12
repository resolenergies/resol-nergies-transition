import { useTranslation } from "react-i18next";
import { Leaf } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">R</span>
              </div>
              <span className="font-display font-semibold text-xl text-primary-foreground">
                Resol Énergies
              </span>
            </div>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              {t("footer.servicesTitle")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {t("footer.service1")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {t("footer.service2")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {t("footer.service3")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/60">
                marc@resolenergies.com
              </li>
              <li className="text-primary-foreground/60">
                Perpignan, France
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Resol Énergies. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
            <Leaf className="w-4 h-4 text-accent" />
            <span>{t("footer.planet")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
