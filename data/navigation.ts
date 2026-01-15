import { type DropdownGroup, type DropdownItem } from "@/components/NavDropdown";

export interface NavItem {
	label: string;
	hasDropdown: boolean;
	href?: string;
	dropdownItems?: DropdownGroup[];
	isMultiColumn?: boolean;
}

export type { DropdownItem };

export const navItems: NavItem[] = [
	{
		label: "Solutions",
		hasDropdown: true,
		isMultiColumn: true,
		href: "/solutions",
		dropdownItems: [
			{
				category: "Expertise",
				items: [
					{ label: "Modernize for AI", href: "/solutions/modernize-for-ai" },
					{ label: "Build with AI", href: "/solutions/build-with-ai" },
					{ label: "Manage & Scale AI", href: "/solutions/manage-scale-ai" },
				],
			},
			{
				category: "Industry",
				items: [
					{ label: "Retail & CPG", href: "/solutions/retail-cpg" },
					{ label: "Healthcare & Life Sciences", href: "/solutions/healthcare" },
					{ label: "Financial Services", href: "/solutions/financial-services" },
					{ label: "Supply Chain & Distribution", href: "/solutions/supply-chain" },
					{ label: "Manufacturing", href: "/solutions/manufacturing" },
					{ label: "Travel & Hospitality", href: "/solutions/travel-hospitality" },
					{ label: "Media & Entertainment", href: "/solutions/media-entertainment" },
				],
			},
			{
				category: "Service",
				items: [
					{ label: "AI / ML", href: "/solutions/ai-ml-solutions" },
					{ label: "Customer Engagement Suite", href: "/solutions/customer-engagement" },
					{ label: "AI-Powered Modernization & Migration", href: "/solutions/modernization" },
					{ label: "Data & Analytics", href: "/solutions/data-analytics" },
					{ label: "Cloud Applications", href: "/solutions/cloud-applications" },
					{ label: "Security & Compliance", href: "/solutions/security-compliance" },
					{ label: "AI-Powered Workplace", href: "/solutions/ai-workplace" },
					{ label: "Managed Services", href: "/solutions/managed-services" },
				],
			},
		],
	},
	{ label: "Approach", hasDropdown: false, href: "/approach" },
	{
		label: "Company",
		hasDropdown: true,
		href: "/company",
		dropdownItems: [
			{
				category: null,
				items: [
					{ label: "About Us", href: "/about-us" },
					// { label: "Careers", href: "/careers" },
					// { label: "Google Cloud", href: "/google-cloud" },
				],
			},
		],
	},
	{
		label: "Resources",
		hasDropdown: true,
		href: "/resources",
		dropdownItems: [
			{
				category: null,
				items: [
					{ label: "Insights", href: "/insights" },
					// { label: "Events", href: "/events" },
					// { label: "Media", href: "/media" },
				],
			},
		],
	},
];
