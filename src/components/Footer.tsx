import { useTranslation } from "react-i18next";
import { Leaf } from "lucide-react";
import logoResol from "@/assets/logo-resol-energies.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logoResol} alt="RESOL Energies" className="h-12 w-auto brightness-0 invert" />
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
            © {currentYear} RESOL Energies. {t("footer.rights")}
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
