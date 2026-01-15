import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIMLSolutionsHero from "./components/AIMLSolutionsHero";
import ImperativeSection from "./components/ImperativeSection";
import WhyBlueprintSection from "./components/WhyBlueprintSection";
import BlueprintDelivers from "./components/BlueprintDelivers";
import AIMLSolutionsFAQ from "./components/AIMLSolutionsFAQ";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import SuccessStories from "@/components/SuccessStories";

export default function AIMLSolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIMLSolutionsHero />
      <ImperativeSection />
      <WhyBlueprintSection />
      <BlueprintDelivers />
      <SuccessStories />
      <Resources />
      <AIMLSolutionsFAQ />
      <CTA />
      <Footer />
    </div>
  );
}
