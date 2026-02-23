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

    const vcfUrl = `${import.meta.env.BASE_URL}contact.vcf`;

    // Déclenche l'ouverture de la vCard sur mobile
    window.location.href = vcfUrl;

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
