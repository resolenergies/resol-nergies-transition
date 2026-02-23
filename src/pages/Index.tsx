import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyReferent from "@/components/WhyReferent";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(userAgent.toLowerCase());
};

const Index = () => {
  const [showContactPrompt, setShowContactPrompt] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Mode spécial : vCard quand on arrive sur /#/contact
    if (window.location.hash === "#/contact" && isMobileDevice()) {
      setShowContactPrompt(true);
    } else if (window.location.hash === "#/contact") {
      // Sur desktop, on enlève juste le hash et on reste sur l'accueil
      window.location.hash = "";
    }
  }, []);

  const handleAddContact = () => {
    // Contenu vCard avec type MIME text/vcard pour déclencher "Ajouter aux contacts"
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:Marc Ribera Fuentes
N:Ribera Fuentes;Marc;;;
ORG:Résol Énergies;
EMAIL;TYPE=INTERNET:marc@resolenergies.com
TEL;TYPE=CELL:+33 6 47 43 82 58
ADR;TYPE=WORK:;;Perpignan;;;France
URL:https://www.resolenergies.com
PHOTO;VALUE=URI:https://www.resolenergies.com/images/logo-resol-energies.png
END:VCARD`;

    const blob = new Blob([vcfContent], { type: "text/vcard" });
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // On ne révoque pas immédiatement l'URL pour laisser le temps au navigateur d'ouvrir la fiche
    window.setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 10000);

    // Après quelques secondes, on revient à la page d'accueil
    window.setTimeout(() => {
      window.location.href = window.location.origin + "/";
    }, 8000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {showContactPrompt && (
          <section className="bg-background py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-xl mx-auto text-center space-y-6">
                <h1 className="text-2xl font-semibold">
                  Ajouter Résol Énergies à vos contacts
                </h1>
                <p className="text-muted-foreground">
                  Touchez le bouton ci-dessous pour ajouter{" "}
                  <span className="font-semibold">Marc Ribera Fuentes</span> à
                  votre carnet d&apos;adresses.
                </p>
                <button
                  type="button"
                  onClick={handleAddContact}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                >
                  Ajouter le contact à mon téléphone
                </button>
              </div>
            </div>
          </section>
        )}
        <Hero />
        <Services />
        <WhyReferent />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
