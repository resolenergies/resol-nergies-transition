import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Parlons de votre projet de 
              <span className="text-primary"> transition énergétique</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contactez-nous pour un premier échange gratuit et sans engagement. 
              Nous étudierons ensemble vos besoins et définirons la meilleure 
              approche pour atteindre vos objectifs.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:marc@resolenergies.com" className="text-foreground font-medium hover:text-primary transition-colors">
                    marc@resolenergies.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <a href="tel:+33640305326" className="text-foreground font-medium hover:text-primary transition-colors">
                    +33 (0) 6 40 30 53 26
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="text-foreground font-medium">
                    Perpignan, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-elevated">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Demandez un devis gratuit
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="votre@email.fr"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
                  Vous êtes
                </label>
                <select
                  id="type"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="collectivite">Une collectivité</option>
                  <option value="entreprise">Une entreprise</option>
                  <option value="particulier">Un particulier</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Votre projet
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Envoyer ma demande
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
