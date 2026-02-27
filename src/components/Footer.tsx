import { useTranslation } from "react-i18next";
import { Leaf } from "lucide-react";
import logoResol from "@/assets/logo-resol-energies.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src={logoResol} alt="RESOL Energies" className="h-10 w-auto brightness-0 invert" />
              <span className="font-display text-lg text-primary-foreground">
                {t("footer.title")}
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-xl leading-relaxed text-sm">
              <span dangerouslySetInnerHTML={{ __html: t("footer.bio") }} />
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-semibold text-primary-foreground">
              {t("footer.coordinationTitle")}
            </h4>
            <ul className="space-y-1 text-sm text-primary-foreground/70">
              <li>{t("footer.expertise1")}</li>
              <li>{t("footer.expertise2")}</li>
              <li>{t("footer.expertise3")}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} RESOL Energies. {t("footer.rights")}
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-primary-foreground/50 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-accent" />
              <span>{t("footer.planet")}</span>
            </div>
            <p className="md:border-l md:border-primary-foreground/20 md:pl-3">
              {t("footer.expertiseFooter")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
