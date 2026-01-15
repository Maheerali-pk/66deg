import SectionHeadingWithSquare from "@/components/section-heading-with-square";

const OurCoreValues = () => {
  const values = [
    {
      label: "benefits",
      title: "Obsess Over Clients",
      description:
        "We are obsessed with our clients' success, measuring our own performance by the tangible, quantifiable business outcomes we help them achieve.",
    },
    {
      label: "challenge",
      title: "Commit to Your Craft",
      description:
        "We are committed to the relentless pursuit of technical mastery, ensuring our partners have access to world-class engineers and strategists who represent the highest standards of their craft.",
    },
    {
      label: "challenge",
      title: "Win Together",
      description:
        "We believe collective success is the only success that matters, fostering a culture of collaboration that allows us to function as a seamless extension of our clients' teams, unified toward a shared goal.",
    },
    {
      label: "challenge",
      title: "Be Resilient and Adaptable",
      description:
        "We embrace change with a solutions-first mindset, acting as a resilient and adaptable strategic partner capable of navigating any complexity to achieve results.",
    },
    {
      label: "challenge",
      title: "Thrive through Challenge",
      description:
        "We actively seek out the most ambitious and complex challenges, knowing they are the catalyst for the transformational breakthroughs and innovative work that deliver the greatest impact.",
    },
  ];

  return (
    <section className="py-24 sm:py-16 bg-background">
      <div className="container mx-auto">
        <div className="mb-12 flex justify-between sm:flex-col ">
          <h2 className="text-6xl sm:text-4xl text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-lg sm:text-sm text-text-primary max-w-lg">
            These five non-negotiable principles guide our behavior, our
            decisions, and our commitment to our clients and to each other.
          </p>
        </div>
        <div className="relative h-full w-full rounded-micro overflow-hidden mb-12">
          <img
            src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/690e29f222f881f3a243f8cf_Life%20at%2066degrees%20(1).png"
            alt="Life at 66degrees"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 ">
          {/* Left Column - Values List */}
          <div className=" grid grid-cols-3 sm:grid-cols-1 gap-6">
            {values.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="flex gap-8 items-center border border-navbar-border sm:h-fit sm:py-4 sm:px-4   h-52 justify-center px-8"
              >
                <div className="text-6xl font-semibold sm:text-3xl text-[#b7c4ce]">
                  0{index + 1}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold sm:text-xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-base sm:text-sm text-muted-foreground leading-tight ">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
            {values.slice(3).map((value, index) => (
              <div
                key={index}
                className="flex gap-8 items-center border border-navbar-border sm:h-fit sm:py-4 sm:px-4  h-40 justify-center px-8"
              >
                <div className="text-6xl font-semibold sm:text-3xl text-[#b7c4ce]">
                  0{index + 1 + 3}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold sm:text-xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-base sm:text-sm text-muted-foreground leading-tight ">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Right Column - Image */}
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
