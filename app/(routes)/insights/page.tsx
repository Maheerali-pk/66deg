import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsHero from "./components/InsightsHero";
import InsightsSecondSection from "./components/InsightsSecondSection";
import ResourceGridList from "./components/ResourceGridList";
import CTA from "@/components/CTA";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <InsightsHero />
      <InsightsSecondSection />
      <ResourceGridList />
      <CTA />
      <Footer />
    </div>
  );
}
