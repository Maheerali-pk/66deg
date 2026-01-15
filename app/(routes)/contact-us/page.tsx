import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import OfficeLocations from "./components/OfficeLocations";
import ClientLogos from "@/components/ClientLogos";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <OfficeLocations />
      <ClientLogos></ClientLogos>
      <div className="mb-10"></div>
      <Footer />
    </div>
  );
}
