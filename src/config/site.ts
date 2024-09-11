// export const siteConfig = {
//   name: "shadcn/ui",
//   url: "https://ui.shadcn.com",
//   ogImage: "https://ui.shadcn.com/og.jpg",
//   description:
//     "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
//   links: {
//     twitter: "https://twitter.com/shadcn",
//     github: "https://github.com/shadcn-ui/ui",
//   },
// };

// export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "YourSaaS",
  url: "https://yoursaas.com",
  ogImage: "https://yoursaas.com/og.jpg",
  description:
    "Your SaaS product description goes here. Highlight key features and benefits.",
  links: {
    twitter: "https://twitter.com/yoursaas",
    github: "https://github.com/yoursaas",
    linkedin: "https://linkedin.com/company/yoursaas",
    facebook: "https://facebook.com/yoursaas",
  },
  features: [
    "Feature 1: Description of your first key feature",
    "Feature 2: Description of your second key feature",
    "Feature 3: Description of your third key feature",
  ],
  pricing: {
    free: {
      name: "Free Tier",
      price: 0,
      features: ["Basic feature 1", "Basic feature 2"],
    },
    pro: {
      name: "Pro Tier",
      price: 19.99,
      features: ["All Free features", "Pro feature 1", "Pro feature 2"],
    },
    enterprise: {
      name: "Enterprise Tier",
      price: "Custom",
      features: [
        "All Pro features",
        "Enterprise feature 1",
        "Enterprise feature 2",
      ],
    },
  },
  contact: {
    email: "support@yoursaas.com",
    phone: "+1 (123) 456-7890",
  },
};

export type SiteConfig = typeof siteConfig;
