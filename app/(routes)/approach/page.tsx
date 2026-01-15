import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApproachHero from "./components/ApproachHero";
import Why66Degrees from "./components/Why66Degrees";
import FrameworkPillars from "./components/FrameworkPillars";
import ApproachSuccessStories from "./components/ApproachSuccessStories";
import TransformationLeaders from "./components/TransformationLeaders";
import ApproachFAQ from "./components/ApproachFAQ";
import ApproachCTA from "./components/ApproachCTA";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ApproachHero />
      <Why66Degrees />
      <FrameworkPillars />
      <ApproachSuccessStories />
      <TransformationLeaders />
      <Resources></Resources>
      <ApproachFAQ />
      <CTA></CTA>
      <Footer />
    </div>
  );
}
