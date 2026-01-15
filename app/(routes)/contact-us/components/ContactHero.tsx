import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactHero = () => {
  return (
    <section className="py-40 sm:py-40 bg-dark-background min-h-screen">
      <div className="container mx-auto grid grid-cols-[1.3fr_1fr] sm:grid-cols-1 gap-20">
        <ContactForm></ContactForm>
        <ContactInfo></ContactInfo>
      </div>
    </section>
  );
};

export default ContactHero;
