import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUsHero from "./components/AboutUsHero";
import AboutUsMission from "./components/AboutUsMission";
import OurCoreValues from "./components/OurCoreValues";
import CTA from "@/components/CTA";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutUsHero />
      <AboutUsMission />
      <OurCoreValues />
      <CTA />
      <Footer />
    </div>
  );
}
