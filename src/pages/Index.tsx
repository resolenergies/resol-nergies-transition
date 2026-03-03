import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpertProfile from "@/components/ExpertProfile";
import Services from "@/components/Services";
import StrategicProjects from "@/components/StrategicProjects";
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
    // Lien direct vers le fichier .vcf statique — fonctionne sur iOS Safari/Chrome/Firefox
    window.location.href = "/contact.vcf";
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
                <p className="text-sm text-muted-foreground">
                  Sur iPhone (Safari, Firefox, Chrome) : si le contact ne
                  s&apos;ouvre pas automatiquement, ouvrez le fichier téléchargé
                  <span className="font-semibold"> contact.vcf </span>
                  depuis vos téléchargements puis choisissez de l&apos;ajouter
                  à vos contacts.
                </p>
              </div>
            </div>
          </section>
        )}
        <Hero />
        <Services />
        <ExpertProfile />
        <StrategicProjects />
        <WhyReferent />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
