"use client";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden ">
      {/* Background Image (fallback until video loads) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[60%]"
        style={{
          backgroundImage: `url('/videos/hero-image.jpg')`,
        }}
      />

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-[60%]"
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-image.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 max-w-container mx-auto px-6 w-full flex justify-between items-end">
        <div className="flex flex-col gap-16">
          <p
            className="text-white  leading-relaxed fade-in-up text-2xl max-w-lg"
            style={{ animationDelay: "0.1s" }}
          >
            Accelerate your agentic transformation with a proven approach, data
            and AI expertise, extensive IP, and an AI-powered delivery model.
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white  fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building the
            <br />
            <span className="font-normal">Agentic Enterprise</span>
          </h1>
        </div>

        {/* Latest News Card */}
        <div
          className="right-6 lg:right-0  fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#"
            className="backdrop-blur-3xl bg-latest-news border border-white/15 shadow-lg rounded-lg p-4 flex items-center gap-4 hover-lift"
          >
            <img
              src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/690bdb55fd202e6ece876da4_GoogleAI_Boston102125_112.avif"
              alt="Latest news"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="text-gray-light/60 text-sm mb-1">Latest News</p>
              <p className="text-gray-light  leading-snug">
                66degrees recognized as Leader in Everest <br /> Group PEAK
                Matrix for Google Cloud Services
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
