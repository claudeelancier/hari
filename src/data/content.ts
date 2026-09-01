export const site = {
  name: "Elancier Solutions",
  shortName: "Elancier",
  url: "https://elancier.com",
  tagline: "Web, mobile and digital products that move business.",
  description:
    "Elancier Solutions is a Madurai-based web and mobile development company creating high-performance websites, applications and digital products since 2013.",
  founded: 2013,
  phones: [
    { label: "Sales", display: "+91 81446 88721", href: "tel:+918144688721" },
    { label: "Office", display: "+91 80123 08030", href: "tel:+918012308030" },
  ],
  email: "admin@elancier.com",
  skype: { label: "elancier", href: "skype:selva8040?call" },
  whatsapp: "https://api.whatsapp.com/message/JMMCX6T3VMLPK1",
  hours: "Monday – Friday, 10:00 am to 6:00 pm IST",
  skypeHours: "Monday – Friday, 10:30 am to 6:00 pm IST",
  address: {
    city: "Madurai, Tamil Nadu",
    lines: [
      "94-19, 2nd floor, Mani Kothanar street",
      "Bypass Road, Sathyamoorthy Nagar",
      "Madurai, Tamil Nadu 625016",
    ],
    map: "https://www.google.com/maps/search/?api=1&query=94-19+Mani+Kothanar+street+Sathyamoorthy+Nagar+Madurai+625016",
  },
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/elanciersolutions/?ref=aymt_homepage_panel",
    },
    { label: "X / Twitter", href: "https://twitter.com/elanciermdu" },
    { label: "Instagram", href: "https://www.instagram.com/elanciersolutions/" },
    {
      label: "LinkedIn",
      href: "https://in.linkedin.com/company/elanciersolutions",
    },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 13, suffix: "+", label: "Years in Business" },
  { value: 450, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Projects Done" },
  { value: 95, suffix: "K+", label: "Hours Worked" },
];

export const extraStats = [
  { value: 13, suffix: "+", label: "Team Members" },
  { value: 12, suffix: "/5", label: "Support Window" },
];

export const clients = [
  { name: "Rare Tech", logo: "/images/client/rare_tech.png" },
  { name: "DCI", logo: "/images/client/dci.png" },
  { name: "Dforth Technologies", logo: "/images/client/dforth.svg" },
  { name: "Naga Foods", logo: "/images/client/naga.png" },
  { name: "Best Money Gold", logo: "/images/client/bmg.png" },
  { name: "Digicliff Solutions", logo: "/images/client/digicliff.png" },
  { name: "Talk New", logo: "/images/client/talknew.png" },
  { name: "Kuvempu University", logo: "/images/client/kuvempu.png" },
  { name: "Rajiv Gandhi University", logo: "/images/client/rguhsqr.png" },
  { name: "Akkamahadevi University", logo: "/images/client/akkama.png" },
  { name: "Zoppey", logo: "/images/client/zoppey.png" },
  { name: "Abna Mobiles", logo: "/images/client/abna.png" },
  { name: "Ssquare", logo: "/images/client/ssquare.png" },
  { name: "Kaviya Mobiles", logo: "/images/client/kaviya.png" },
  { name: "Joy Mobiles", logo: "/images/client/joy.png" },
  { name: "Vanitha Crackers", logo: "/images/client/vanitha.png" },
  { name: "PHD Prime", logo: "/images/client/phdprime.png" },
  { name: "New Happy Mobiles", logo: "/images/client/newhappymobiles.png" },
  { name: "Manjapai", logo: "/images/client/manjapai.png" },
  { name: "KVIS", logo: "/images/client/kvis.png" },
  { name: "Jaksi Cinema", logo: "/images/client/jaksi.png" },
  { name: "Rehaan Furnishing", logo: "/images/client/rehaan.png" },
  { name: "Vasantham & Co", logo: "/images/client/vasantham.png" },
];

export const services = [
  {
    id: "01",
    slug: "web-development",
    title: "Web Development",
    summary:
      "Custom websites and web applications built for performance, maintainability and business outcomes.",
    description:
      "From marketing sites to complex business platforms, we design and engineer web products using PHP, React, Angular, .NET and Node.js — with CMS, maintenance and long-term support.",
    techs: ["PHP", "React", "Angular", ".NET", "Node.js"],
    capabilities: [
      "Custom web applications",
      "CMS and WordPress development",
      "API-driven platforms",
      "Website redesign and maintenance",
      "Performance and accessibility",
    ],
    href: "/services/web-development",
  },
  {
    id: "02",
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    summary:
      "Storefronts and commerce systems that make products easier to discover, buy and manage.",
    description:
      "We build ecommerce experiences on Shopify, Magento, WooCommerce and custom stacks — covering catalog, checkout, payments and operations for growing brands.",
    techs: ["Shopify", "Magento", "WooCommerce", "Custom Commerce"],
    capabilities: [
      "Theme and storefront development",
      "Shopping cart and checkout flows",
      "Plugin and module development",
      "Catalog and inventory workflows",
      "Payment and order operations",
    ],
    href: "/services/ecommerce-development",
  },
  {
    id: "03",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Android, iOS and cross-platform apps planned around real user journeys and existing business systems.",
    description:
      "We architect and ship native and cross-platform applications with attention to device capability, infrastructure integration and store-ready delivery.",
    techs: ["Android", "iOS", "Cross-platform"],
    capabilities: [
      "Android application development",
      "iOS application development",
      "Cross-platform delivery",
      "API and backend integration",
      "App store deployment support",
    ],
    href: "/services/mobile-app-development",
  },
  {
    id: "04",
    slug: "ui-ux-design",
    title: "UI / UX & Creative Design",
    summary:
      "Interfaces, identity and digital experience design that make products clearer and more memorable.",
    description:
      "Our design practice covers product UI, web design, brand identity and supporting creative — from wireframes to production-ready visual systems.",
    techs: ["Web Design", "Product UI", "Brand Identity", "Digital Experience"],
    capabilities: [
      "Product and website UI",
      "Wireframes and prototypes",
      "Corporate identity and logo systems",
      "Indoor collaterals",
      "Outdoor promotional design",
    ],
    href: "/services/ui-ux-design",
  },
  {
    id: "05",
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary:
      "Search, social and email programs that keep your brand visible and in conversation with customers.",
    description:
      "We plan and run SEO, social and email marketing with a long-term view of visibility, brand consistency and audience growth.",
    techs: ["SEO", "Social Media", "Email Marketing"],
    capabilities: [
      "Search engine optimization",
      "Social media marketing",
      "Email campaigns",
      "Content and brand messaging support",
      "Ongoing visibility programs",
    ],
    href: "/services/digital-marketing",
  },
  {
    id: "06",
    slug: "web-development",
    title: "Emerging Technologies",
    summary:
      "Modern frontend ecosystems used to keep products fast, current and easier to evolve.",
    description:
      "We work with contemporary JavaScript ecosystems — React, Next.js, Node.js and Angular — when the product needs a modern, scalable frontend foundation.",
    techs: ["React.js", "Next.js", "Node.js", "Angular"],
    capabilities: [
      "Modern frontend architecture",
      "Component-driven interfaces",
      "API-first product builds",
      "Progressive enhancement",
      "Long-term stack evolution",
    ],
    href: "/services/web-development",
  },
];

export const processSteps = [
  {
    id: "01",
    title: "Discover",
    copy: "Understand the business, audience, requirements and the opportunity the product needs to capture.",
    details: ["Workshops and research", "Scope and constraints", "Opportunity mapping"],
  },
  {
    id: "02",
    title: "Design",
    copy: "Shape UX, interface, prototype and design system so the product is usable before it is built.",
    details: ["User flows", "Interface design", "Prototype and system"],
  },
  {
    id: "03",
    title: "Develop",
    copy: "Engineer frontend, backend, APIs and mobile experiences with the stack the product actually needs.",
    details: ["Frontend and backend", "API integration", "Mobile delivery"],
  },
  {
    id: "04",
    title: "Test",
    copy: "Validate performance, security, responsiveness and quality before anything reaches production.",
    details: ["QA and regression", "Responsive checks", "Performance review"],
  },
  {
    id: "05",
    title: "Launch",
    copy: "Deploy, instrument and support the product so it can keep improving after go-live.",
    details: ["Deployment", "Analytics", "Optimization and support"],
  },
];

export const techsMarquee = [
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "PHP",
  "LARAVEL",
  "ANGULAR",
  ".NET",
  "SHOPIFY",
  "MAGENTO",
  "WORDPRESS",
  "WOOCOMMERCE",
  "IOS",
  "ANDROID",
  "FLUTTER",
  "UI/UX",
];

export type ProjectCategory = "web" | "mobile" | "ecommerce" | "brand" | "apps";

export const projects: {
  name: string;
  industry: string;
  services: string;
  year: string;
  category: ProjectCategory;
  image: string;
}[] = [
  {
    name: "Zoppey",
    industry: "Retail / Mobile",
    services: "Mobile App, Website",
    year: "—",
    category: "mobile",
    image: "/images/portfolio/zoppey_mobile.jpg",
  },
  {
    name: "emplix",
    industry: "Business Apps",
    services: "Mobile App",
    year: "—",
    category: "apps",
    image: "/images/portfolio/emplix.png",
  },
  {
    name: "Now Way",
    industry: "Mobile Product",
    services: "Mobile App",
    year: "—",
    category: "mobile",
    image: "/images/portfolio/nowway.jpg",
  },
  {
    name: "Dforth Technologies",
    industry: "Technology",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/dforth.jpg",
  },
  {
    name: "Jaksi Cinema",
    industry: "Events / Entertainment",
    services: "Website",
    year: "—",
    category: "brand",
    image: "/images/portfolio/jaksi.jpg",
  },
  {
    name: "Rehaan Furnishing",
    industry: "Retail",
    services: "Website",
    year: "—",
    category: "ecommerce",
    image: "/images/portfolio/rehaan.jpg",
  },
  {
    name: "Vasantham & Co",
    industry: "Business Services",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/vasantham.jpg",
  },
  {
    name: "PHD Prime",
    industry: "Education",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/phdprime.jpg",
  },
  {
    name: "NBB",
    industry: "Enterprise",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/nbb_web.jpg",
  },
  {
    name: "NHRA",
    industry: "Healthcare",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/nhra_web.jpg",
  },
  {
    name: "NHRA Healthcare",
    industry: "Healthcare",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/hra_helth_web.jpg",
  },
  {
    name: "Non Stop",
    industry: "Digital Product",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/non_stop_web.jpg",
  },
  {
    name: "Bengaluru North University",
    industry: "Education",
    services: "Website",
    year: "—",
    category: "web",
    image: "/images/portfolio/bnu.jpg",
  },
  {
    name: "Talk Mate",
    industry: "Social / Communication",
    services: "Mobile App",
    year: "—",
    category: "mobile",
    image: "/images/portfolio/talkmate_mobile.jpg",
  },
  {
    name: "Vanitha",
    industry: "Retail",
    services: "Mobile App",
    year: "—",
    category: "mobile",
    image: "/images/portfolio/vanitha_mobile.jpg",
  },
  {
    name: "Vhave Shopping",
    industry: "Ecommerce",
    services: "Mobile App",
    year: "—",
    category: "ecommerce",
    image: "/images/portfolio/vhave_mobile.jpg",
  },
  {
    name: "Indian GST",
    industry: "Finance / Compliance",
    services: "Business App",
    year: "—",
    category: "apps",
    image: "/images/portfolio/indian_gst.jpg",
  },
];

export const featuredProjects = projects.slice(0, 6);

export const industries = [
  { name: "Ecommerce", note: "Catalogs, checkout and retail operations." },
  { name: "Education", note: "Universities and learning platforms." },
  { name: "Finance / Banking", note: "Trusted interfaces for money and compliance." },
  { name: "Healthcare", note: "Clear, careful digital service experiences." },
  { name: "Travel", note: "Tours, itineraries and booking journeys." },
  { name: "Social Platforms", note: "Networking and community products." },
  { name: "Enterprise", note: "Internal tools and large service systems." },
  { name: "B2B", note: "Service businesses that sell to other businesses." },
  { name: "Restaurants", note: "Hospitality, menus and local discovery." },
  { name: "Events", note: "Ticketing, cinema and live experiences." },
  { name: "Business Services", note: "Consultancies and operational brands." },
];

export const principles = [
  {
    id: "01",
    title: "Right Team",
    copy: "A focused group of designers and engineers who stay close to the work, not a revolving template factory.",
  },
  {
    id: "02",
    title: "Deep Experience",
    copy: "Building web and mobile products since 2013, across retail, education, healthcare, enterprise and local business.",
  },
  {
    id: "03",
    title: "User-Centered Design",
    copy: "Interfaces planned around how people actually move through a product — then engineered to hold that clarity.",
  },
  {
    id: "04",
    title: "Reliable Delivery",
    copy: "Design, develop, deploy and support with a bias toward shipping on time and keeping the product usable after launch.",
  },
];

export const values = [
  {
    title: "Quality as strategy",
    copy: "The original Elancier principle still holds: the quality of the project is the business strategy we follow.",
  },
  {
    title: "Customer-oriented culture",
    copy: "Long-term relationships, decisions made in the client’s interest, and work that can be maintained after launch.",
  },
  {
    title: "Craft with modern tools",
    copy: "Object-oriented engineering, contemporary frontend ecosystems, and design that stays usable on every screen.",
  },
  {
    title: "Local roots, digital reach",
    copy: "A Madurai studio helping businesses across India ship products that feel current, credible and complete.",
  },
];

export const timeline = [
  {
    year: "2013",
    title: "Elancier begins",
    copy: "The studio opens in Madurai as a web and mobile development practice.",
  },
  {
    year: "2015–2018",
    title: "Product range expands",
    copy: "Ecommerce, creative design and digital marketing join the core engineering offer.",
  },
  {
    year: "2019–2022",
    title: "Apps and platforms",
    copy: "Android, iOS and cross-platform work grows alongside custom business applications.",
  },
  {
    year: "2023–2026",
    title: "Modern product studio",
    copy: "React, Next.js, Node.js and contemporary product design sit alongside proven PHP, .NET and commerce stacks.",
  },
];

export const faqs = [
  {
    q: "What kinds of products does Elancier build?",
    a: "Websites, web applications, ecommerce stores, Android and iOS apps, UI/UX and brand systems, plus SEO, social and email marketing.",
  },
  {
    q: "Where is the studio based?",
    a: "Madurai, Tamil Nadu. We work with businesses locally and remotely across India.",
  },
  {
    q: "Can you join an existing product team?",
    a: "Yes. Dedicated developer support is available when you need engineers focused on your product, stack and delivery goals.",
  },
  {
    q: "How do projects typically start?",
    a: "Share the brief through Contact or Request a Quote. We clarify scope, timeline and budget, then move into discovery and design.",
  },
];

export const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "web-development": [
    {
      q: "Do you build both marketing sites and applications?",
      a: "Yes. We deliver static and dynamic websites, CMS platforms and custom web applications depending on the brief.",
    },
    {
      q: "Which stacks do you use?",
      a: "PHP, React, Angular, .NET and Node.js, with WordPress when a CMS is the right tool.",
    },
    {
      q: "Do you maintain sites after launch?",
      a: "Website maintenance is part of the web practice — updates, reliability and ongoing support.",
    },
  ],
  "ecommerce-development": [
    {
      q: "Which commerce platforms do you work with?",
      a: "Shopify, Magento, WooCommerce and custom commerce builds for catalogs, carts, plugins and checkout.",
    },
    {
      q: "Can you redesign an existing store?",
      a: "Yes. We can rebuild themes, improve flows and keep the catalog operational while the experience is updated.",
    },
  ],
  "mobile-app-development": [
    {
      q: "Do you build native and cross-platform apps?",
      a: "Yes. Android, iOS and cross-platform delivery, planned around user experience and existing infrastructure.",
    },
    {
      q: "Can you help with store submission?",
      a: "We support deployment so the application is ready for Google Play and the App Store as part of launch.",
    },
  ],
  "ui-ux-design": [
    {
      q: "Is design limited to websites?",
      a: "No. The practice covers product UI, web design, corporate identity, indoor collaterals and outdoor promotion.",
    },
    {
      q: "Do you prototype before development?",
      a: "Wireframes, process flows and HTML mockups are used so stakeholders can review the experience before engineering.",
    },
  ],
  "digital-marketing": [
    {
      q: "What marketing services are available?",
      a: "Search engine optimization, email marketing and social marketing across the channels the brand actually uses.",
    },
    {
      q: "Is this a one-off campaign model?",
      a: "SEO and brand visibility work best as an ongoing relationship, planned around business objectives and audience.",
    },
  ],
};

export const quoteNeeds = [
  "Website",
  "Mobile App",
  "Ecommerce",
  "UI/UX",
  "Digital Marketing",
  "Custom Development",
];

export const quoteBudgets = [
  "To be discussed",
  "Under ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹8L",
  "₹8L+",
];

export const quoteTimelines = [
  "As soon as possible",
  "4 – 8 weeks",
  "2 – 4 months",
  "Flexible / phased",
];
