import SectionHeadingWithSquare from "@/components/section-heading-with-square";
import { Button } from "@/components/ui/button";
import CustomSelect from "../../approach/components/CustomSelect";
import { navItems } from "@/data/navigation";

const AboutUsMission = () => {
  // Get Industries and Services from navigation data
  const solutionsItem = navItems.find((item) => item.label === "Solutions");
  const industryGroup = solutionsItem?.dropdownItems?.find(
    (group) => group.category === "Industry"
  );
  const serviceGroup = solutionsItem?.dropdownItems?.find(
    (group) => group.category === "Service"
  );

  const industries = industryGroup?.items || [];
  const services = serviceGroup?.items || [];

  return (
    <section className="py-24 sm:py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-8 ">
          {/* Left Column - Text Content */}
          <div className="order-1 border border-divider-1 rounded-micro p-6 h-full">
            <SectionHeadingWithSquare text="our mission" />
            <h2 className="text-6xl sm:text-4xl text-foreground mb-4">
              Transforming Complexity into Clarity.
            </h2>
            <p className="text-lg sm:text-base text-muted-foreground mb-8 leading-relaxed">
              Our vision is to be the catalyst for a future where every business
              operates as an intelligent enterprise—where data is a strategic
              asset, complexity is transformed into clarity, and autonomous
              systems unlock human potential to define the next era of growth
              and innovation.
            </p>

            {/* Select Dropdowns */}
            <Button
              variant="secondary"
              className="rounded-none uppercase font-family-secondary w-fit mb-8"
            >
              Discover our expertise
            </Button>
            <div className="space-y-4 ">
              <CustomSelect
                label="Industry"
                options={industries}
                placeholder="Select Item"
              />
              <CustomSelect
                label="Services"
                options={services}
                placeholder="Select Item"
              />
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] sm:h-[400px] rounded-sm overflow-hidden order-2 lg:order-1">
            <img
              src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/691b4182f258dcd2062f985e_About%20Us%20Benefits%20(2).png"
              alt="About Us Benefits"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMission;
