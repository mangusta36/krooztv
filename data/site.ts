export const siteUrl = "https://www.kroztv.online";
export const whatsappNumber = "212753936672";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export function getWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`
  );

  return `${whatsappUrl}?text=${encodedMessage}`;
}

export const generalWhatsAppUrl = getWhatsAppUrl("Hello, I'm interested in krooz tv.");
export const trialHref = generalWhatsAppUrl;
export const resellerWhatsAppUrl = getWhatsAppUrl(
  "Hello, I'm interested in becoming a krooz tv reseller."
);
export const clientHelpWhatsAppUrl = getWhatsAppUrl(
  "Hello, I need help with my krooz tv account."
);

export const navItems = [
  { href: "/", label: "krooz tv Official" },
  { href: "/subscription", label: "IPTV Subscription" },
  { href: "/reseller", label: "IPTV Reseller" },
  { href: "/blog", label: "Blog" },
  { href: "/tutorials", label: "Installation Tutorial" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" }
];

export const secondaryNavItems = [
  { href: "/", label: "krooz tv Official 2026" },
  { href: "/reviews", label: "krooz tv reviews" }
];

export const footerGroups = [
  {
    title: "Services",
    links: [
      { href: "/plans", label: "IPTV Subscription" },
      { href: "/reseller", label: "Reseller IPTV" },
      { href: "/blog", label: "Blog" },
      { href: "/tutorials", label: "Installation Tutorials" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/support", label: "Support" },
      { href: "/contact", label: "Contact Us" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/refund-policy", label: "Refund Policy" },
      { href: "/dmca", label: "DMCA" }
    ]
  }
];

export const heroHighlights = [
  "Customer support when you need it",
  "High-quality video streaming",
  "HD, UHD and 4K-ready entertainment",
  "Live channels with program guide support"
];

export const coreBenefits = [
  {
    title: "24/7 support mindset",
    description:
      "Support is presented as part of the service journey, with visible routes for help before and after subscription."
  },
  {
    title: "HD, FHD, and 4K-ready experience",
    description:
      "The site communicates picture quality clearly without relying on exaggerated technical promises."
  },
  {
    title: "Worldwide viewing focus",
    description:
      "The information architecture is built for international audiences, multi-device access, and easier setup."
  }
];

export const featureItems = [
  {
    title: "Live TV subscription",
    description:
      "Present live channel access clearly for visitors who want the main service value immediately."
  },
  {
    title: "Sports coverage",
    description:
      "Keep sports high in the page hierarchy so the site speaks to one of the biggest IPTV use cases."
  },
  {
    title: "Movies and series",
    description:
      "Show entertainment breadth without padding the page with questionable catalog counts."
  },
  {
    title: "Support and tutorials",
    description:
      "Connect subscription, support, and installation guidance into one smoother customer journey."
  }
];

export const pricingPlans = [
  {
    duration: "1 Month Subscription",
    priceLabel: "$15",
    description: "A flexible short-term option with the complete viewing experience.",
    features: [
      "Live TV access",
      "Movies and series",
      "HD / FHD / 4K-ready plan structure",
      "Smart TV, mobile, and computer compatibility",
      "Worldwide access presentation",
      "Customer support path"
    ],
    cta: "Subscribe"
  },
  {
    duration: "3 Month Subscription",
    priceLabel: "$37",
    description: "A balanced option for ongoing viewing across your compatible devices.",
    features: [
      "Live TV access",
      "Movies and series",
      "HD / FHD / 4K-ready plan structure",
      "Smart TV, mobile, and computer compatibility",
      "Worldwide access presentation",
      "Customer support path"
    ],
    cta: "Subscription"
  },
  {
    duration: "6 Month Subscription",
    priceLabel: "$49",
    description: "A longer subscription period with the same straightforward setup and support.",
    features: [
      "Live TV access",
      "Movies and series",
      "HD / FHD / 4K-ready plan structure",
      "Smart TV, mobile, and computer compatibility",
      "Worldwide access presentation",
      "Customer support path"
    ],
    cta: "Subscribe"
  },
  {
    duration: "12 Month Subscription",
    priceLabel: "$67",
    description: "Our longest subscription option for year-round entertainment access.",
    features: [
      "Live TV access",
      "Movies and series",
      "HD / FHD / 4K-ready plan structure",
      "Smart TV, mobile, and computer compatibility",
      "Worldwide access presentation",
      "Customer support path"
    ],
    cta: "Subscribe"
  }
];

export function getPlanWhatsAppUrl(plan: Pick<(typeof pricingPlans)[number], "duration" | "priceLabel">) {
  const planName = plan.duration.replace(" Subscription", "");

  return getWhatsAppUrl(
    `Hello, I'm interested in the krooz tv ${planName} plan for ${plan.priceLabel}.`
  );
}

export const entertainmentCards = [
  {
    title: "Live TV",
    description:
      "Present live television as the anchor experience, with a layout that makes channel-focused viewing easy to understand."
  },
  {
    title: "Movies",
    description:
      "Position movies as part of a broader entertainment library instead of burying them in generic sales copy."
  },
  {
    title: "Series",
    description:
      "Highlight ongoing shows and binge-friendly viewing in a cleaner, more organized visual system."
  },
  {
    title: "Sports",
    description:
      "Keep sports highly visible in the conversion flow so the value proposition lands quickly for key audiences."
  },
  {
    title: "International entertainment",
    description:
      "Communicate worldwide interest and multilingual viewing needs without overstating specific catalog counts."
  }
];

export const coverageRegions = [
  "USA and Canada",
  "United Kingdom and Ireland",
  "Europe",
  "Latin America",
  "Middle East and North Africa",
  "International audiences"
];

export const whyChooseItems = [
  {
    title: "Thousands of Channels",
    description:
      "A clearer channel-first experience for viewers who want quick access to everyday entertainment and events."
  },
  {
    title: "Video On Demand",
    description:
      "Movies and series are presented as a meaningful part of the platform, not as an afterthought."
  },
  {
    title: "Watch on Any Device",
    description:
      "The site is structured around real device categories so setup feels easier from the first visit."
  },
  {
    title: "World Class Support",
    description:
      "Support, tutorials, and contact routes remain visible across the site to lower friction."
  },
  {
    title: "Safe & Secure Payment",
    description:
      "Conversion sections are written to support a clean checkout journey once approved payment details are connected."
  },
  {
    title: "Clear Service Policies",
    description:
      "Legal and policy pages are included so refund and rights information can be completed in one place."
  }
];

export const deviceItems = [
  "Smart TV",
  "Android TV",
  "Android phones and tablets",
  "iPhone and iPad",
  "Amazon Fire TV and Fire Stick",
  "MAG devices",
  "Windows and Mac computers",
  "IPTV apps and players"
];

export const streamingItems = [
  {
    title: "HD, FHD, and 4K-ready plans",
    description:
      "The site supports quality-focused messaging without relying on exact technical claims that are not yet approved."
  },
  {
    title: "Fast channel access",
    description:
      "Emphasize responsive browsing and a smoother viewing experience instead of quoting unverified switching speeds."
  },
  {
    title: "Library updates",
    description:
      "Communicate active content maintenance in a concise, professional way that feels credible."
  },
  {
    title: "Quick account delivery flow",
    description:
      "Subscription messaging is designed around a faster post-purchase handoff once real fulfillment details are finalized."
  }
];

export const tutorialCategories = [
  {
    title: "Smart TV",
    description: "Setup guidance for large-screen living room viewing."
  },
  {
    title: "Fire TV / Fire Stick",
    description: "Installation steps tailored to Amazon streaming devices."
  },
  {
    title: "Android",
    description: "Phone, tablet, and Android TV onboarding guidance."
  },
  {
    title: "iOS",
    description: "iPhone and iPad setup patterns for compatible IPTV apps."
  },
  {
    title: "Windows / Mac",
    description: "Desktop setup guidance for laptop and computer viewing."
  },
  {
    title: "MAG",
    description: "Portal-style configuration guidance for MAG users."
  }
];

export const faqItems = [
  {
    question: "Can one subscription be used on more than one device?",
    answer:
      "Multi-device use depends on the subscription option you choose. The site is structured so connection details can be clarified on the plans page or during support."
  },
  {
    question: "What is included with a subscription?",
    answer:
      "The service is presented around live TV, movies, series, and sports, with setup support and device compatibility guidance included in the overall experience."
  },
  {
    question: "Can I get a trial?",
    answer:
      "Yes. Contact krooz tv to request a trial and receive the appropriate next steps."
  },
  {
    question: "How is subscription information delivered?",
    answer:
      "The site explains the account delivery journey at a high level, but operational details should be confirmed through the support or contact process."
  },
  {
    question: "Which devices are supported?",
    answer:
      "The current site architecture highlights Smart TV, Android TV, phones, tablets, Fire TV devices, MAG devices, computers, and IPTV player apps."
  },
  {
    question: "Do I need satellite equipment?",
    answer:
      "No satellite dish messaging is used in the new experience. The service is presented as an internet-based streaming setup."
  },
  {
    question: "Where can I get setup help?",
    answer:
      "The tutorials and support sections are designed to guide installation and answer common setup questions."
  }
];

export const supportCards = [
  {
    title: "Pre-sales questions",
    description:
      "Route visitors toward plans, trial information, or reseller details before they commit."
  },
  {
    title: "Setup guidance",
    description:
      "Use the tutorials hub and support content to reduce onboarding friction across device types."
  },
  {
    title: "Ongoing assistance",
    description:
      "Keep post-purchase help visible so customers know where to turn when they need account or playback support."
  }
];

export const contactOptions = [
  {
    title: "General inquiries",
    description:
      "Add your approved business email, ticketing flow, or live chat connection here when ready."
  },
  {
    title: "Subscription help",
    description:
      "Use this area for approved checkout, billing, or activation contact details later."
  },
  {
    title: "Technical support",
    description:
      "Use this section for the final support channel you want customers to rely on for setup and playback questions."
  }
];
