import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import OpenSource from "@/components/OpenSource";
import Team from "@/components/Team";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitch from "@/components/LanguageSwitch";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitch />
      <Hero />
      <About />
      <Publications />
      <OpenSource />
      <Team />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;