import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Map, Newspaper, Network, Building2, SunMedium } from "lucide-react";

const ProjectImage = ({
  preferredSrc,
  fallbackSrc,
  alt,
}: {
  preferredSrc: string;
  fallbackSrc: string;
  alt: string;
}) => {
  const [src, setSrc] = useState(preferredSrc);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-auto rounded-lg border border-border/60 bg-background"
      onError={() => {
        if (src !== fallbackSrc) setSrc(fallbackSrc);
      }}
    />
  );
};

const StrategicProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "cadastre-pmm",
      translationKey: "cadastrePmm",
      link: "https://toten-occitanie.fr/IMG/pdf/202010_club_tuto_fa_cadastresolaire.pdf",
      proofFile: "proofs/cadastre-pmm.png",
      mockupFile: "cadastre-pmm.svg",
      accent: "bg-emerald-500/10 text-emerald-500",
    },
    {
      id: "laroque-diagnostic",
      translationKey: "laroqueDiagnostic",
      link: "https://www.lindependant.fr/2025/01/25/laroque-des-alberes-sobriete-energetique-un-diagnostic-pour-la-mairie-12470316.php",
      proofFile: "proofs/independant-laroque.png",
      mockupFile: "laroque-diagnostic.svg",
      accent: "bg-sky-500/10 text-sky-500",
    },
    {
      id: "cour-oasis",
      translationKey: "courOasis",
      link: "https://www.lindependant.fr/2025/07/09/la-cour-oasis-de-lecole-de-saint-genis-des-fontaines-inspire-les-experts-du-reseau-carte-12816865.php",
      proofFile: "proofs/independant-saint-genis-cour-oasis.png",
      mockupFile: "cour-oasis.svg",
      accent: "bg-amber-500/10 text-amber-500",
    },
    {
      id: "odd-pmm",
      translationKey: "oddPmm",
      link: "https://perpignanmediterraneemetropole.fr/wp-content/uploads/2022/04/programme-odd.pdf",
      proofFile: "proofs/programme-odd-pmm.png",
      mockupFile: "odd-pmm.svg",
      accent: "bg-violet-500/10 text-violet-500",
    },
    {
      id: "citoyenr",
      translationKey: "citoyenr",
      link: "https://www.facebook.com/citoyenr/photos/1252046450253971/",
      proofFile: "proofs/citoyenr.png",
      mockupFile: "citoyenr.svg",
      accent: "bg-emerald-500/10 text-emerald-500",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t("strategicProjects.sectionLabel")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("strategicProjects.title")}
          </h2>
          <p
            className="text-muted-foreground text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("strategicProjects.description") }}
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const projectData = t(`strategicProjects.projects.${project.translationKey}`, { returnObjects: true }) as any;

            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-5 border-b border-border/60 bg-gradient-to-br from-background/80 to-background/40">
                  <div className="flex items-center gap-2 mb-2">
                    {project.id === "cadastre-pmm" && <Map className="h-4 w-4 text-primary" />}
                    {project.id === "laroque-diagnostic" && <Newspaper className="h-4 w-4 text-primary" />}
                    {project.id === "cour-oasis" && <Network className="h-4 w-4 text-primary" />}
                    {project.id === "odd-pmm" && <Building2 className="h-4 w-4 text-primary" />}
                    {project.id === "citoyenr" && <SunMedium className="h-4 w-4 text-primary" />}
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {projectData.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {projectData.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{projectData.role}</p>
                </div>

                <div className="p-5 space-y-4">
                  <div className="rounded-xl border border-border/70 bg-muted/20 p-3">
                    <ProjectImage
                      preferredSrc={`${import.meta.env.BASE_URL}images/${project.proofFile}`}
                      fallbackSrc={`${import.meta.env.BASE_URL}images/${project.mockupFile}`}
                      alt={projectData.mockupAlt}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{projectData.description}</p>
                </div>

                <div className="flex items-center justify-between px-5 py-3 border-t border-border/60 bg-background/80">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80"
                  >
                    {t("strategicProjects.consultResource")}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <span className="text-[11px] text-muted-foreground">
                    {t("strategicProjects.networks")}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategicProjects;

