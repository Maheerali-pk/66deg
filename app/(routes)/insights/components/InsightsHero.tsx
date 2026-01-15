const InsightsHero = () => {
  return (
    <section className="relative h-[32rem] flex items-end pb-20 overflow-hidden bg-dark-background">
      {/* Background Image - Top */}
      <div className="h-56 absolute top-10 right-32 overflow-hidden">
        <img
          className="object-cover"
          src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68f7efee6d99f09102596719_Export%20%232.svg"
          alt="Insights"
        />
      </div>

      {/* Background Image - Bottom Right */}
      <img
        className="absolute bottom-0 right-0 w-auto   translate-y-30 translate-x-60"
        src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68f7efee6d99f09102596719_Export%20%232.svg"
        alt="Insights"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="text-8xl sm:text-4xl font-light text-white mb-6 leading-tight">
            Insights
          </h1>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
