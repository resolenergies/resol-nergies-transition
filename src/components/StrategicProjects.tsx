import { useState } from "react";
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

const projects = [
  {
    id: "cadastre-pmm",
    label: "Cadastre Solaire & Potentiel ENR – Perpignan Méditerranée Métropole",
    role: "Initiation, cadrage et pilotage technique pour les 36 communes",
    description:
      "Mise en place du cadastre solaire et étude du potentiel maximal en énergies renouvelables du territoire, référencés dans le programme ODD de PMM.",
    tag: "Projet structurant de territoire",
    link: "https://toten-occitanie.fr/IMG/pdf/202010_club_tuto_fa_cadastresolaire.pdf",
    proofFile: "proofs/cadastre-pmm.png",
    mockupFile: "cadastre-pmm.svg",
    mockupAlt: "Capture d’écran simulée : interface de cadastre solaire (PMM).",
    accent: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: "laroque-diagnostic",
    label: "Sobriété énergétique – Diagnostic global Laroque-des-Albères",
    role: "AMO énergie & coordination avec la presse locale",
    description:
      "Accompagnement de la commune dans la définition d’une trajectoire de sobriété, valorisée dans la presse locale (L’Indépendant).",
    tag: "Sobriété & pédagogie",
    link: "https://www.lindependant.fr/2025/01/25/laroque-des-alberes-sobriete-energetique-un-diagnostic-pour-la-mairie-12470316.php",
    proofFile: "proofs/independant-laroque.png",
    mockupFile: "laroque-diagnostic.svg",
    mockupAlt: "Capture d’écran simulée : article de presse sur la sobriété énergétique.",
    accent: "bg-sky-500/10 text-sky-500",
  },
  {
    id: "cour-oasis",
    label: "Cour Oasis – Saint-Génis-des-Fontaines",
    role: "Référent technique reconnu par le réseau CARTE",
    description:
      "Projet de cour oasis suivi par le réseau national CARTE, comme exemple de rafraîchissement urbain, de confort d’été et de co-construction avec les usagers.",
    tag: "Innovation & adaptation climatique",
    link: "https://www.lindependant.fr/2025/07/09/la-cour-oasis-de-lecole-de-saint-genis-des-fontaines-inspire-les-experts-du-reseau-carte-12816865.php",
    proofFile: "proofs/independant-saint-genis-cour-oasis.png",
    mockupFile: "cour-oasis.svg",
    mockupAlt: "Capture d’écran simulée : article de presse sur une cour oasis.",
    accent: "bg-amber-500/10 text-amber-500",
  },
  {
    id: "odd-pmm",
    label: "Programme ODD – PMM",
    role: "Contribution au diagnostic du potentiel ENR et trajectoire climat",
    description:
      "Intégration du diagnostic énergétique et du potentiel ENR dans le programme ODD de Perpignan Méditerranée Métropole.",
    tag: "Stratégie climat & ODD",
    link: "https://perpignanmediterraneemetropole.fr/wp-content/uploads/2022/04/programme-odd.pdf",
    proofFile: "proofs/programme-odd-pmm.png",
    mockupFile: "odd-pmm.svg",
    mockupAlt: "Capture d’écran simulée : extrait PDF du programme ODD (diagnostic potentiel ENR).",
    accent: "bg-violet-500/10 text-violet-500",
  },
  {
    id: "citoyenr",
    label: "Centrales photovoltaïques citoyennes – Citoy’enR",
    role: "Appui à la montée en puissance des projets citoyens",
    description:
      "Accompagnement stratégique pour des centrales photovoltaïques citoyennes, articulation avec les politiques énergétiques de territoire.",
    tag: "Énergies renouvelables citoyennes",
    link: "https://www.facebook.com/citoyenr/photos/1252046450253971/",
    proofFile: "proofs/citoyenr.png",
    mockupFile: "citoyenr.svg",
    mockupAlt: "Capture d’écran simulée : publication annonçant une centrale photovoltaïque citoyenne.",
    accent: "bg-emerald-500/10 text-emerald-500",
  },
];

const StrategicProjects = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Projets stratégiques
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Des preuves concrètes sur le terrain
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Chaque projet illustre un positionnement de <strong>référent énergie senior</strong> :
            capacité à structurer les données, dialoguer avec les directions générales et
            transformer les diagnostics en décisions opérantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
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
                    {project.tag}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {project.label}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{project.role}</p>
              </div>

              <div className="p-5 space-y-4">
                <div className="rounded-xl border border-border/70 bg-muted/20 p-3">
                  <ProjectImage
                    preferredSrc={`${import.meta.env.BASE_URL}images/${project.proofFile}`}
                    fallbackSrc={`${import.meta.env.BASE_URL}images/${project.mockupFile}`}
                    alt={project.mockupAlt}
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="flex items-center justify-between px-5 py-3 border-t border-border/60 bg-background/80">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80"
                >
                  Consulter la ressource
                  <ExternalLink className="h-3 w-3" />
                </a>
                <span className="text-[11px] text-muted-foreground">
                  Réseaux : TOTEN Occitanie, CARTE, presse &amp; collectivités
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicProjects;

