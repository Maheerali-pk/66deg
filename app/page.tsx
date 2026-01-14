import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import WhatWeDo from "@/components/WhatWeDo";
import BusinessImpact from "@/components/BusinessImpact";
import ExpertiseTabs from "@/components/ExpertiseTabs";
import GoogleCloudPartner from "@/components/GoogleCloudPartner";
import SuccessStories from "@/components/SuccessStories";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ClientLogos />
      <WhatWeDo />
      <BusinessImpact />
      <ExpertiseTabs />
      <GoogleCloudPartner />
      <SuccessStories />
      <Resources />
      <CTA />
      <Footer />
    </div>
  );
}
