const ClientLogos = () => {
  const logos = [
    { name: "Bill", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904e072bc979b8dd82ea622_Bill.png" },
    { name: "Best Life Brands", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904ded72ac4bf88738f801f_Best%20Life%20Brands.png" },
    { name: "Gordon Food Service", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904d4f22f23c0285a74556f_Gordon%20Food%20Service.png" },
    { name: "PGA", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904df2f28269c74d25f6a05_PGA.png" },
    { name: "KeyBank", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904d4dc0466e5a480b8f35e_KeyBank.png" },
    { name: "Burns and McDonnel", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904e1b6ea418e95a15c3a07_Burns%20and%20Mcdonnel.png" },
    { name: "MDIC", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904d5e96942b20552bc2b0e_MDIC.png" },
    { name: "Dwyer", url: "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/6904dfc30466e5a480bca6a6_Dwyer.png" },
  ];

  return (
    <section className="py-12 bg-background overflow-hidden border-t border-border/30">
      <div className="relative">
        <div className="flex marquee">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
              <img 
                src={logo.url} 
                alt={logo.name}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
              <img 
                src={logo.url} 
                alt={logo.name}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

