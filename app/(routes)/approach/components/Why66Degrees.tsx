import SectionHeadingWithSquare from "@/components/section-heading-with-square";
import CustomSelect from "./CustomSelect";
import { navItems } from "@/data/navigation";

const Why66Degrees = () => {
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
    <section className="py-24 sm:py-16 ">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-8 items-center ">
          {/* Right Column - Text Content */}
          <div className="order-1 border border-divider-1 rounded-micro p-6 h-full ">
            <SectionHeadingWithSquare text="why 66degrees" />

            <p className="text-lg sm:text-base text-muted-foreground mb-8 leading-relaxed">
              Our methodology is built on the understanding that the current
              global inflection point demands more than just technology. Success
              requires a unified approach that manages the complexity of the
              build while preparing the organization for a fundamental shift in
              how work is done. We guide you through the convergence of
              expertise—from secure data transformation to advanced Agentic
              systems—while systematically cultivating the AI fluency required
              for your workforce to actively leverage, govern, and trust the new
              intelligence built into your core processes.
            </p>

            {/* Select Dropdowns */}
            <div className="space-y-4">
              <CustomSelect
                label="Industries"
                options={industries.map((industry) => industry.label)}
                placeholder="Select Item"
              />
              <CustomSelect
                label="Services"
                options={services.map((service) => service.label)}
                placeholder="Select Item"
              />
            </div>
          </div>

          {/* Left Column - Image */}
          <div className="relative h-[500px] sm:h-[400px] rounded-sm overflow-hidden order-2 lg:order-1">
            <img
              src="https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c9064/68dd5adbcc75b2bc818c91a8_08a3f15063936051cf799b00d8ace023_approach-1.png"
              alt="66degrees team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why66Degrees;
