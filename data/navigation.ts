import { type DropdownGroup } from "@/components/NavDropdown";

export interface NavItem {
  label: string;
  hasDropdown: boolean;
  href?: string;
  dropdownItems?: DropdownGroup[];
  isMultiColumn?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: "Solutions",
    hasDropdown: true,
    isMultiColumn: true,
    dropdownItems: [
      {
        category: "Expertise",
        items: ["Modernize for AI", "Build with AI", "Manage & Scale AI"],
      },
      {
        category: "Industry",
        items: [
          "Retail & CPG",
          "Healthcare & Life Sciences",
          "Financial Services",
          "Supply Chain & Distribution",
          "Manufacturing",
          "Travel & Hospitality",
          "Media & Entertainment",
        ],
      },
      {
        category: "Service",
        items: [
          "AI / ML",
          "Customer Engagement Suite",
          "AI-Powered Modernization & Migration",
          "Data & Analytics",
          "Cloud Applications",
          "Security & Compliance",
          "AI-Powered Workplace",
          "Managed Services",
        ],
      },
    ],
  },
  { label: "Approach", hasDropdown: false, href: "/approach" },
  { label: "Success Stories", hasDropdown: false, href: "/success-stories" },
  {
    label: "Company",
    hasDropdown: true,
    dropdownItems: [
      { category: null, items: ["About Us", "Careers", "Google Cloud"] },
    ],
  },
  {
    label: "Resources",
    hasDropdown: true,
    dropdownItems: [
      { category: null, items: ["Insights", "Events", "Media"] },
    ],
  },
];
