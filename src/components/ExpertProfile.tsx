import { useTranslation } from "react-i18next";
import { GraduationCap, Atom, Landmark, Handshake } from "lucide-react";

const ExpertProfile = () => {
  const { t } = useTranslation();

  const pillars = [
    { icon: Atom, key: "scientificPillar" },
    { icon: GraduationCap, key: "technicalPillar" },
    { icon: Landmark, key: "institutionalPillar" },
    { icon: Handshake, key: "partnerPillar" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t("expertProfile.sectionLabel")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("expertProfile.title")}
            </h2>
            <p 
              className="text-muted-foreground text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("expertProfile.description") }}
            />
          </div>

          <div className="space-y-4">
            {pillars.map(({ icon: Icon, key }) => (
              <div key={key} className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                    {t(`expertProfile.${key}.title`)}
                  </p>
                  <p className="font-display text-base font-semibold text-foreground">
                    {t(`expertProfile.${key}.degree`)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(`expertProfile.${key}.details`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;

