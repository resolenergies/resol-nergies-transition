import { useEffect } from "react";
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
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Mode spécial : vCard quand on arrive sur /#/contact
    if (window.location.hash !== "#/contact") return;

    if (!isMobileDevice()) {
      // Sur desktop, on enlève juste le hash et on reste sur l'accueil
      window.location.hash = "";
      return;
    }

    // Contenu vCard avec type MIME text/vcard pour déclencher "Ajouter aux contacts"
    // au lieu du téléchargement de fichier
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
    URL.revokeObjectURL(blobUrl);

    // Après quelques secondes, on revient à la page d'accueil
    const timeoutId = window.setTimeout(() => {
      window.location.href = window.location.origin + "/";
    }, 4000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
