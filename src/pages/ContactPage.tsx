import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/i.test(userAgent.toLowerCase());
};

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobileDevice()) {
      navigate("/", { replace: true });
      return;
    }

    const vcfUrl = `${import.meta.env.BASE_URL}contact.vcf`;

    // Déclenche l'ouverture de la vCard sur mobile
    window.location.href = vcfUrl;

    // Après quelques secondes, on revient à la page d'accueil
    const timeoutId = window.setTimeout(() => {
      navigate("/", { replace: true });
    }, 4000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-2xl font-semibold mb-4">Ajout du contact Résol Énergies</h1>
        <p className="text-muted-foreground">
          Votre téléphone va ouvrir une carte de contact pour ajouter nos coordonnées. Vous serez ensuite redirigé vers la page d&apos;accueil.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

