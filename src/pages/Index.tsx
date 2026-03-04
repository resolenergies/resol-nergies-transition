import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpertProfile from "@/components/ExpertProfile";
import Services from "@/components/Services";
import StrategicProjects from "@/components/StrategicProjects";
import WhyReferent from "@/components/WhyReferent";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
