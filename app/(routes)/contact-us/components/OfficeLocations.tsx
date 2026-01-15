const OfficeLocations = () => {
  const offices = [
    {
      city: "Chicago, IL",
      address: "550 W. Adams Suite 910 Chicago, IL 60661",
    },
    {
      city: "India",
      address:
        "16/2, 2nd Floor, Sobha Alexander Plaza, Commissariat Rd, Ashok Nagar, Bengaluru, Karnataka 560025",
    },
    {
      city: "Costa Rica",
      address:
        "Zona Franca Metropolitana, Edificio Administrativo Heredia Ulloa, 40104, Costa Rica",
    },
  ];

  return (
    <section className="relative py-24 sm:py-16 bg-background container flex flex-col  overflow-hidden mt-20 mb-40 sm:mb-10">
      {/* Background Image */}
      <img
        src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68ff99b8ca495b0d0c08a7af_contact-us-card.png"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center">
        <h2 className="text-6xl sm:text-4xl text-white mb-12">
          Office Locations
        </h2>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-6">
          {offices.map((office, index) => (
            <div key={index} className="space-y-2 bg-white px-6 py-10">
              <h3 className="text-3xl sm:text-2xl  text-foreground">
                {office.city}
              </h3>
              <p className="text-base sm:text-sm text-text-primary leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
