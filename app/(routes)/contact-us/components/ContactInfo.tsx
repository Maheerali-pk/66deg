import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <h2 className="text-6xl sm:text-3xl text-white mb-20">
          We'd Love to Hear From You and Answer Your Questions
        </h2>

        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl sm:text-xl text-white mb-4">
              Client Support
            </h3>
            <p className="text-lg sm:text-base text-white w-2/3 mb-4">
              If you are an existing 66degrees client in need of support, please
              visit our support portal.
            </p>
            <Button
              variant="link"
              size="link"
              className="text-white border-b border-b-white"
            >
              client support portal
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-4 w-1/2">
            <div className="flex gap-1 flex-col">
              <span className="text-lg  text-gray-light/60">Email</span>
              <p className="text-base text-white">hello@66degrees.com</p>
            </div>
            <div className="h-px bg-gray-light/30 w-full"></div>

            <div className="flex gap-1 flex-col">
              <span className="text-lg  text-gray-light/60">Phone</span>
              <p className="text-base text-white">312-380-6838</p>
            </div>

            <div className="h-px bg-gray-light/30 w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
