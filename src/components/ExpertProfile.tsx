import { GraduationCap, Atom, Landmark } from "lucide-react";

const ExpertProfile = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Profil expert
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Une expertise senior au croisement de la science, de la technique et des territoires.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Marc Ribera Fuentes accompagne les collectivités comme{" "}
              <strong>Référent énergie dédié</strong>, en s&apos;appuyant sur une triple
              légitimité : scientifique, technique et institutionnelle. Cette combinaison rare
              lui permet de faire dialoguer stratégie climatique, ingénierie énergétique et
              contraintes opérationnelles des services.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Atom className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                  Pilier scientifique
                </p>
                <p className="font-display text-base font-semibold text-foreground">
                  Docteur (PhD) en Sciences Environnementales – UAB
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Thèse doctorale sur le développement d&apos;outils d&apos;évaluation du
                  comportement environnemental des territoires, à l&apos;Université Autonome
                  de Barcelone (UAB).
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                  Pilier technique
                </p>
                <p className="font-display text-base font-semibold text-foreground">
                  Master Énergies Renouvelables &amp; Efficacité Énergétique – CIRCE
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Spécialisation en conception et optimisation de systèmes énergétiques, au
                  Centre de Recherche sur les Ressources et la Consommation d&apos;Énergie
                  (CIRCE).
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Landmark className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                  Pilier institutionnel
                </p>
                <p className="font-display text-base font-semibold text-foreground">
                  10+ ans au cœur des politiques publiques de l&apos;énergie
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Expérience opérationnelle au sein de Perpignan Méditerranée Métropole, de la
                  Ville de Colomiers, de la Communauté de Communes ACVI et du Département du
                  Val-de-Marne, sur les volets stratégie énergétique, cadastres solaires,
                  sobriété et rénovation du patrimoine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;

