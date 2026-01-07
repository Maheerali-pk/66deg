const Footer = () => {
  const footerLinks = {
    expertise: [
      "AI Transformation",
      "Modernize for AI",
      "Build with AI",
      "Manage and Scale AI",
    ],
    industries: [
      "Retail & CPG",
      "Healthcare & Life Sciences",
      "Financial Services",
      "Supply Chain & Distribution",
      "Manufacturing",
      "Travel & Hospitality",
      "Media & Entertainment",
    ],
    services: [
      "Artificial Intelligence",
      "Agentic AI",
      "Customer Engagement Suite",
      "AI-Powered Modernization & Migration",
      "Cloud Applications",
      "Data & Analytics",
      "Cloud Security & Compliance",
      "AI-Powered Workplace",
      "Managed Services",
    ],
    company: ["About Us", "Approach", "Careers", "Contact Us", "Google Cloud"],
    resources: ["Success Stories", "Insights", "Events", "Media"],
  };

  return (
    <footer className="bg-navy border-t border-white/10 py-16 text-white">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a
              href="/"
              className="text-white font-bold text-2xl tracking-tight mb-4 block"
            >
              66degrees
            </a>
            <p className="text-white/60 text-sm max-w-xs">
              Building the Agentic Enterprise with AI-powered solutions and
              Google Cloud expertise.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">
              expertise
            </h4>
            <ul className="space-y-2">
              {footerLinks.expertise.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">
              services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">
              company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">
              resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                Linkedin
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                X/Twitter
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                Youtube
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              Copyright 2025 | Powered by 66degrees
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                GDPR Privacy Notice
              </a>
              <a
                href="#"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200"
              >
                Support Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
