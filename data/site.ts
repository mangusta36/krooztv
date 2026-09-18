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
      { href: "/subscription", label: "IPTV Subscription" },
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
    title: "Live and on-demand viewing",
    description:
      "Access live television alongside movies and series through one IPTV subscription, subject to plan and content availability."
  },
  {
    title: "Flexible plan options",
    description:
      "Choose from monthly and longer subscription periods without changing the core device and entertainment experience."
  },
  {
    title: "Broad device compatibility",
    description:
      "Use compatible Smart TVs, streaming devices, phones, tablets, computers, or IPTV players with the supplied setup details."
  },
  {
    title: "Setup and customer support",
    description:
      "Tutorials and support routes help you identify a compatible player, complete setup, and resolve common playback questions."
  },
  {
    title: "Quality-ready streaming",
    description:
      "HD, FHD, and 4K availability depends on the selected content, your device, and the quality of your internet connection."
  },
  {
    title: "Clear service information",
    description:
      "Plan details, setup resources, support information, and service policies are easy to find before you subscribe."
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
    title: "HD, FHD, and 4K-ready viewing",
    description:
      "Available picture quality depends on the program, subscription, device capabilities, player settings, and internet connection."
  },
  {
    title: "A stable internet connection",
    description:
      "A consistent wired or strong Wi-Fi connection helps reduce interruptions when streaming live and on-demand content."
  },
  {
    title: "Compatible player setup",
    description:
      "Install a suitable IPTV app on your device, then enter the account or portal details provided for your subscription."
  },
  {
    title: "Subscription delivery and help",
    description:
      "After choosing a plan, use the listed subscription channel to confirm account delivery, setup instructions, and support options."
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
      "Multi-device use depends on the subscription option you choose. Review the plans page or contact krooz tv support to confirm the number of connections before subscribing."
  },
  {
    question: "What is included with a subscription?",
    answer:
      "krooz tv subscriptions provide access to live TV and on-demand entertainment such as movies, series, and sports, with availability depending on the selected plan."
  },
  {
    question: "Can I get a trial?",
    answer:
      "Yes. Contact krooz tv to request a trial and receive the appropriate next steps."
  },
  {
    question: "How is subscription information delivered?",
    answer:
      "After selecting a plan, use the listed subscription contact channel to confirm account delivery and receive the setup details for your compatible IPTV player."
  },
  {
    question: "Which devices are supported?",
    answer:
      "Compatible options include Smart TV, Android TV, phones, tablets, Fire TV devices, MAG devices, Windows and Mac computers, and supported IPTV player apps."
  },
  {
    question: "Do I need satellite equipment?",
    answer:
      "No satellite dish is required for IPTV. You need a suitable internet connection, a compatible device and player, and active subscription details."
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
      "Ask a general question through the krooz tv WhatsApp contact channel."
  },
  {
    title: "Subscription help",
    description:
      "Confirm current plan details, request a trial, or ask about account delivery before subscribing."
  },
  {
    title: "Technical support",
    description:
      "Share your device, player, connection type, and the playback issue through the client help channel."
  }
];
