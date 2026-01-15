const WhyBlueprintSection = () => {
  const stats = [
    {
      percentage: "85%",
      description:
        "Of AI projects fail due to poor data quality or little to no relevant data, a foundational risk our blueprint is designed to mitigate",
    },
    {
      percentage: "30%",
      description:
        "The percentage of AI projects that Gartner reports move past the pilot stage. Our blueprint provides the roadmap to scale beyond experimentation",
    },
    {
      percentage: "17%",
      description:
        "The small percentage of companies that rate their in-house generative AI solutions as excellent. Our blueprint provides the expertise to join this top tier.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-16 overflow-hidden container mx-auto sm:w-[calc(100%-1rem)]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c9187_offerings-2.avif')`,
        }}
      />

      {/* Dark Overlay */}

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-6xl sm:text-4xl sm:w-full w-1/2 mx-auto font-light text-white mb-4">
            Why a Strategic Blueprint is Non-Negotiable
          </h2>
          <p className="text-lg sm:text-base text-white/90 max-w-3xl mx-auto">
            Without a strategic plan, AI projects are prone to failure. Our
            blueprint is designed to help you avoid the statistics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-14 sm:gap-6 bg-latest-news p-16 sm:p-4 ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" backdrop-blur-md  rounded-sm p-6 sm:p-4 flex flex-col gap-8"
            >
              <div className="text-8xl sm:text-5xl text-white leading-none">
                {stat.percentage}
              </div>
              <div className="h-px w-full bg-divider-2/25"></div>
              <p className="text-base sm:text-sm text-white leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBlueprintSection;
