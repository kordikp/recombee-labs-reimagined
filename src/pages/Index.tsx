import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import OpenSource from "@/components/OpenSource";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Publications />
      <OpenSource />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;