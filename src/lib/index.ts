import { Facebook, Instagram, Linkedin, Twitter } from "@lucide/svelte";
import { ArrowUpDownOutline, CodeOutline,   MobilePhoneOutline, PaletteOutline, PhoneOutline, ToolsOutline } from "flowbite-svelte-icons";
import SearchOutline from "flowbite-svelte-icons/SearchOutline.svelte";
import { Contact, Notebook } from "@lucide/svelte";
import { HomeOutline, UsersGroupSolid } from "flowbite-svelte-icons";
// place files you want to import through the `$lib` alias in this folder.
  export const socialLinks = [
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   url: "https://twitter.com/ggmtechhub",
    // },
    
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/ggmtechnologies",
    },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   url: "https://linkedin.com/company/ggmtechhub",
    // },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/ggmtechnologies",
    },
  ];

export const packages = [
  {
    name: "The Portfolio",
    price: "15,000",
    description: "A clean personal site to showcase your work and get noticed",
    features: [
      "Domain name registration",
      "Free SSL certificate",
      "Up to 5 pages (Home, About, Portfolio, Services, Contact)",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Social media links",
      "7 days of support",
    ],
    popular: false,
  },
  {
    name: "The Launchpad",
    price: "25,000",
    description: "Perfect for new brands ready to go online",
    features: [
      "Everything in Portfolio",
      "Custom e-commerce website design",
      "Product catalog setup",
      "Website hosting",
      "WhatsApp integration",
      "Basic SEO optimization",
    ],
    popular: false,
  },
  {
    name: "The Accelerator",
    price: "45,000",
    description: "Everything you need to launch and grow your online presence",
    features: [
      "Everything in Launchpad",
      "Advanced SEO & content strategy",
      "Google Analytics & tracking",
      "Blog setup ",
      "Performance optimization",
      "14 days of support",
    ],
    popular: true,
  },
  {
    name: "Custom Package",
    price: "From 80,000",
    description: "Tailored solutions for established brands with specific needs",
    features: [
      "Everything in Accelerator",
      "Custom functionality development",
      "Advanced integrations",
      "Multi-platform setup",
      "Dedicated project manager",
      "Ongoing maintenance options",
      "30 days of support",
    ],
    popular: false,
  },
];
  export  const services = [
  {
    tag: "web-development",
    icon: CodeOutline,
    title: "Web Development",
    description:
      "Custom websites, dashboards, and web apps built for performance, scalability, and SEO. We develop fast, secure, and modern systems."
  },

  {
    tag: "ui-ux-design",
    icon: PaletteOutline,
    title: "UI / UX & Web Design",
    description:
      "Modern, conversion-focused designs that make your brand look professional. We design interfaces that are clean, fast, and easy to use."
  },

  {
      tag: "seo-optimization",
    icon: SearchOutline,
    title: "SEO Optimization",
    description:
      "Improve your Google rankings with technical SEO, keyword strategy, and on-page optimization to bring consistent organic traffic."
  },

  // {
  //     tag: "digital-marketing",
  //   icon: PhoneOutline,
  //   title: "Digital Marketing",
  //   description:
  //     "Complete marketing strategies including content, funnels, and campaign planning to grow your business online."
  // },

  {
      tag: "social-media-management",
    icon: MobilePhoneOutline,
    title: "Social Media Management",
    description:
      "We manage your Facebook, Instagram, TikTok, and LinkedIn pages with professional content, posting, and audience growth."
  },

  {
      tag: "ads-ppc-campaigns",
    icon: ArrowUpDownOutline,
    title: "Ads & PPC Campaigns",
    description:
      "Google Ads, Facebook Ads, and TikTok Ads campaigns focused on leads, sales, and measurable ROI."
  },

  {
      tag: "maintenance-support",
    icon: CodeOutline,
    title: "Website Maintenance & Support",
    description:
      "Security updates, backups, bug fixes, and performance monitoring to keep your website running smoothly."
  }
];


export const fullservices: any = {
  "seo-optimization": {
    hero: {
      tag: "SEO Optimization",
      title: "SEARCH ENGINE Optimisation",
      description:
        "Most businesses rely on paid ads to survive — we help you build something better. Our SEO service makes your website the answer Google shows when your ideal customers are already searching for what you offer. Through technical improvements, smart keyword targeting, content that earns trust, and backlinks that signal authority, we grow your organic traffic steadily — so you're not paying for every click forever.",
      stats: [
        { value: "3X", label: "Average Traffic Growth in 6 Months" },
        { value: "6mo", label: "Typical Time to Visible Results" },
        { value: "40%", label: "Lower Customer Acquisition Cost vs Paid Ads" }
      ]
    },
    what: {
      title: "We make Google work for you — not your competitors.",
      text:
        "Search engine optimization isn't about tricks or shortcuts. It's about making your website genuinely easier for Google to understand, trust, and recommend. We audit what's holding you back, fix the technical issues that suppress your rankings, build out content around the exact terms your customers search, and earn backlinks that position you as an authority in your industry. The result is compounding, long-term traffic that doesn't disappear when your ad budget runs out.",
      steps: [
        "Audit & Research — We map your current rankings, find technical issues, and identify keyword opportunities your competitors are missing.",
        "On-Page SEO — Every page gets optimised: titles, headings, meta descriptions, internal links, and content structure.",
        "Technical SEO — We fix crawl errors, improve site speed, ensure mobile compatibility, and clean up your site architecture.",
        "Backlink Building — We build high-quality links from relevant, authoritative sites that signal trust to Google.",
        "Monthly Reporting — You receive clear, jargon-free reports showing traffic growth, keyword movements, and what we're working on next."
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Keyword Strategy — A prioritised map of the search terms most likely to bring qualified traffic to your business.",
        "Optimised Pages — Updated and improved page copy, metadata, and structure across your key landing pages.",
        "Technical Fixes — Resolved site speed issues, broken links, crawl errors, and mobile responsiveness problems.",
        "Backlinks — Legitimate, relevant links built over time that increase your domain authority.",
        "Local SEO — Google Business Profile optimisation and local keyword targeting for businesses serving a specific area.",
        "Monthly Reports — Transparent breakdowns of traffic, rankings, and progress every single month."
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 5,000", highlight: true }
      ]
    }
  },

  "ads-ppc-campaigns": {
    hero: {
      tag: "Ads & PPC",
      title: "Paid Ads Campaigns",
      description:
        "Running ads without a strategy is just burning money. We build and manage paid ad campaigns on Google, Facebook, Instagram, and TikTok that are engineered to convert — not just get impressions. From audience research and creative production to pixel tracking and continuous optimisation, we make sure every shilling you spend is working toward a measurable return.",
      stats: [
        { value: "2X", label: "Average Return on Ad Spend" },
        { value: "7d", label: "From Brief to Live Campaign" },
        { value: "Real", label: "Leads, Not Just Clicks" }
      ]
    },
    what: {
      title: "Ads that pay for themselves.",
      text:
        "Most businesses waste their ad budgets because they're targeting the wrong people, showing the wrong message, or sending traffic to pages that don't convert. We fix all three. We start with deep audience research to understand exactly who you're reaching and why they should care. Then we build campaigns with compelling creative, sharp copy, and precise targeting — and we track everything from first click to final sale. Once the data is in, we continuously test and optimise so your cost per lead keeps coming down as your results improve.",
      steps: [
        "Audience Research — We define who your best customers are and how to reach them with surgical precision.",
        "Creative Design — Scroll-stopping visuals and ad copy written to speak directly to your target audience.",
        "Campaign Setup — Full build of your ad account, campaigns, ad sets, budgets, and targeting parameters.",
        "Pixel & Conversion Tracking — We set up proper tracking so you know exactly which ads are driving sales.",
        "Optimisation — Ongoing testing and refinement based on real performance data, not guesswork."
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Ad Account Setup — A properly structured account from scratch, or a full audit and clean-up of your existing one.",
        "Campaign Build — Complete campaigns built with the right structure, audiences, placements, and bidding strategy.",
        "Pixel & Conversion Tracking — Accurate tracking of leads, purchases, calls, and other key actions.",
        "A/B Testing — Ongoing creative and audience tests that reveal what resonates and what to cut.",
        "Weekly or Monthly Reports — Clear performance summaries with spend, results, cost-per-lead, and recommendations.",
        "Scaling Strategy — A roadmap for increasing budget as performance improves, without losing efficiency."
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 25,000", highlight: true }
      ]
    }
  },

  "social-media-management": {
    hero: {
      tag: "Social Media",
      title: "Social Media Management",
      description:
        "Inconsistent posting, generic content, and unanswered DMs are silently costing you customers. We take full ownership of your social media presence — creating professional content, maintaining a consistent posting schedule, engaging your audience, and growing your following — so your brand looks credible and stays top of mind, every single day.",
      stats: [
        { value: "Daily", label: "Content Published on Your Behalf" },
        { value: "3X", label: "Higher Engagement With Strategic Content" },
        { value: "Pro", label: "Design Quality, Every Post" }
      ]
    },
    what: {
      title: "Your brand, showing up every day — professionally.",
      text:
        "Social media isn't optional anymore. It's often the first place a potential customer checks before deciding whether to trust you. We build a content strategy around your business goals, create visually consistent posts that reflect your brand, write captions that actually encourage engagement, and manage your community so no message goes unanswered. You stay focused on running your business while we make sure your audience never forgets you exist.",
      steps: [
        "Content Strategy — We define your brand voice, target audience, content pillars, and posting frequency.",
        "Design & Creative — Every post is designed to professional standards with your brand colours, fonts, and style.",
        "Scheduling & Posting — Content is planned in advance and published at optimal times for maximum reach.",
        "Community Management — We reply to comments and DMs, keeping your audience engaged and your reputation intact.",
        "Monthly Analytics — We review what's working, what's not, and adjust the strategy accordingly."
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Monthly Content Calendar — A planned schedule of posts across platforms, approved by you in advance.",
        "Custom Post Designs — Professionally designed graphics and visuals tailored to your brand identity.",
        "Captions & Copy — Engaging, on-brand text written for each post with clear calls to action.",
        "Hashtag Research — Strategic hashtag sets that expand your reach to the right audiences.",
        "DM & Comment Replies — Timely responses that keep your audience engaged and inquiries converted.",
        "Monthly Performance Report — A clear breakdown of reach, engagement, follower growth, and top-performing content."
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 20,000", highlight: true }
      ]
    }
  },

  "ui-ux-design": {
    hero: {
      tag: "UI / UX",
      title: "Website & Interface Design",
      description:
        "A beautiful website that confuses visitors doesn't convert. We design interfaces that are clean, modern, and deliberately structured to guide users toward taking action — whether that's booking a call, making a purchase, or submitting an enquiry. Every design decision we make is rooted in how real people actually use websites, not just what looks good in a mockup.",
      stats: [
        { value: "Modern", label: "UI That Builds Immediate Trust" },
        { value: "UX", label: "Designed Around User Behaviour" },
        { value: "Fast", label: "From Concept to Handoff" }
      ]
    },
    what: {
      title: "Design that earns trust and drives action.",
      text:
        "Most websites lose potential customers within seconds — not because of bad products, but because of confusing layouts, slow load times, or designs that feel unprofessional. We solve this with a structured design process: starting from how your users think and behave, building wireframes to lock in layout logic, then designing a polished, on-brand interface ready for development. We work across both desktop and mobile, ensuring a consistent experience wherever your customers find you.",
      steps: [
        "Discovery & Wireframing — We map user journeys and sketch low-fidelity layouts before any design work begins.",
        "UI Design — High-fidelity screens built in Figma with precise attention to typography, colour, and spacing.",
        "Prototype — Interactive prototypes that simulate real navigation and reveal usability issues before development.",
        "Client Review — Structured feedback rounds to refine the design until it's exactly right.",
        "Asset Export — Developer-ready files, UI kits, and style guides handed off cleanly for a smooth build."
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Figma Design Files — Complete, editable design files organised for easy handoff to any developer.",
        "Mobile Layout — Fully designed responsive layouts for all common mobile screen sizes.",
        "Desktop Layout — Optimised desktop designs that take full advantage of larger screen real estate.",
        "UI Component Kit — A reusable library of buttons, forms, cards, and elements for future consistency.",
        "Icons & Illustrations — Custom or curated icon sets that match your brand's visual language.",
        "Exported Assets — All images, icons, and graphics exported in the right formats for web use."
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 30,000", highlight: true }
      ]
    }
  },

  "web-development": {
    hero: {
      tag: "Web Development",
      title: "Web Development",
      description:
        "Your website is your most important sales asset — it needs to be fast, reliable, and built to grow with your business. We develop websites and web applications using modern technologies that prioritise performance, security, and SEO from the ground up. Whether you need a business website, a customer portal, or a full web platform, we build it properly so it doesn't need to be rebuilt in two years.",
      stats: [
        { value: "Fast", label: "Optimised for Speed & Core Web Vitals" },
        { value: "Secure", label: "Clean, Maintainable Codebase" },
        { value: "SEO", label: "Built in From Line One" }
      ]
    },
    what: {
      title: "Built properly. Built to last.",
      text:
        "Many businesses end up with websites that look fine but perform terribly — slow load times, poor mobile experience, no search visibility, and a codebase nobody can maintain. We prevent this by treating development as an engineering problem, not just a production task. We plan architecture carefully, write clean and documented code, test across devices and browsers before anything goes live, and deploy on infrastructure that can handle real traffic. The result is a website that works as hard as you do.",
      steps: [
        "Discovery & Planning — We define your goals, map user flows, choose the right technology stack, and build a delivery timeline.",
        "Frontend Development — Pixel-perfect implementation of your design across all devices, with attention to performance and accessibility.",
        "Backend Development — Server logic, databases, APIs, and integrations built for reliability and scale.",
        "Testing & QA — Thorough testing across browsers, devices, and user scenarios before anything goes live.",
        "Deployment & Handover — We deploy to a production environment and provide full documentation for ongoing management."
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Full Website — A complete, live website built to spec and optimised for performance and SEO.",
        "Admin Dashboard — A custom backend interface for managing content, users, orders, or data — built for non-technical users.",
        "API Development — Custom APIs that connect your website to third-party tools, payment gateways, or internal systems.",
        "User Authentication — Secure login, registration, and access control for websites with member areas or client portals.",
        "CMS Integration — A content management system so your team can update text, images, and pages without developer help.",
        "Deployment & Hosting Setup — Your site deployed on fast, secure infrastructure with SSL, backups, and monitoring configured."
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 30,000", highlight: true }
      ]
    }
  },

  "maintenance-support": {
    hero: {
      tag: "Maintenance & Support",
      title: "Website Maintenance & Support",
      description:
        "A website isn't a one-time project — it's an ongoing system that needs to be kept updated, secure, and performing well. We handle everything that happens after launch: monitoring for downtime, applying software updates, running security scans, fixing bugs, and optimising speed — so your website stays in top condition without you having to think about it.",
      stats: [
        { value: "24/7", label: "Uptime Monitoring & Alerts" },
        { value: "Proactive", label: "Security Updates Before Issues Arise" },
        { value: "Fast", label: "Bug Fixes With Clear Turnaround Times" }
      ]
    },
    what: {
      title: "We keep things running — so you can keep things growing.",
      text:
        "Most website problems don't announce themselves in advance. Plugins go out of date and create security vulnerabilities. Hosting configurations drift. Page speed degrades as content builds up. Small bugs compound into bigger ones. We prevent all of this through proactive monitoring and regular maintenance, and when something does go wrong, you have a team that knows your website and can resolve it quickly — not a support ticket queue that takes days to respond.",
      steps: [
        "Uptime Monitoring — We track your website around the clock and alert you immediately if anything goes down.",
        "Software & Plugin Updates — Core systems, plugins, and frameworks are kept current to prevent security vulnerabilities.",
        "Automated Backups — Your website and database are backed up regularly so we can restore quickly in any scenario.",
        "Bug Fixes & Changes — Ongoing issues and minor content updates resolved with agreed turnaround times.",
        "Monthly Reports — A clear summary of everything we did, your uptime stats, and the current health of your site."
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Bug Fixes — Fast resolution of technical issues as they arise, with transparent communication throughout.",
        "Software Updates — Regular updates to your CMS, plugins, themes, and server configuration.",
        "Automated Backups — Scheduled backups stored securely off-site so your data is never at risk.",
        "Security Monitoring — Active scanning for malware, vulnerabilities, and suspicious activity.",
        "Performance Optimisation — Ongoing checks on page speed, image compression, and caching to keep your site fast.",
        "Priority Support — Direct access to a team that already knows your website and can act immediately when you need help."
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 10,000", highlight: true }
      ]
    }
  }
};

export const pages = [
	{ id: "seo-optimization", label: "SEO", icon: "📈" },

	{ id: "ads-ppc-campaigns", label: "Paid Ads", icon: "🎯" },

	{ id: "social-media-management", label: "Social Media", icon: "📲" },

	{ id: "ui-ux-design", label: "Web Design", icon: "🎨" },

	{ id: "web-development", label: "Web Dev", icon: "⚙️" },

	{ id: "maintenance-support", label: "Maintenance", icon: "🛡️" }
];

export const customers = 
[
  {
    name: "Olet Hardware",
    logo: "/customers/olet.png",
    testimonial:
      "GGM Technologies transformed our online presence. Our new website is stunning and has attracted more customers. Their team was professional, responsive, and delivered on time. Highly recommend for any business looking to grow online.",
    url: "https://olethardware.com"
  },
  {
    name: "OutdoorQuest",
    logo: "/customers/outdoorquest.png",
    testimonial:
      "Working with GGM Technologies was a game-changer for our business. They built us a beautiful, user-friendly website that perfectly captures our brand. We've seen a significant increase in traffic and sales since the launch. Their team is talented, communicative, and truly cares about their clients' success.",
    url: "https://outdoorquest.co.ke"
  },
  {
    name: "GGM Technologies",
    logo: "/customers/ggm.png",
    testimonial:
      "GGM Technologies transformed our online presence. Our new website is stunning and has attracted more customers. Their team was professional, responsive, and delivered on time. Highly recommend for any business looking to grow online.",
    url: "https://ggmtechnologies.co.ke"
  }
]



export const essentialnavigationItems = [
  {
    path: "/services",
    label: "Services",
    Icon: HomeOutline,
  },
  {
    path: "/pricing",
    label: "Pricing",
    Icon: ToolsOutline,
  },
  
  {
    path: "/about",
    label: "About",
    Icon: UsersGroupSolid,
  },
  {
    path: "/contact",
    label: "Contact",
    Icon: Contact,
  } 
];
export const navigationItems = [
  {
    path: "/services",
    label: "Services",
    Icon: HomeOutline,
  },
  {
    path: "/pricing",
    label: "Pricing",
    Icon: ToolsOutline,
  },
  {
    path: "/portfolio",
    label: "Portfolio",
    Icon: Contact,
  },
  {
    path: "/about",
    label: "About",
    Icon: UsersGroupSolid,
  },
  {
    path: "/contact",
    label: "Contact",
    Icon: Contact,
  },
  {
    path: "/articles",
    label: "Articles",
    Icon: Notebook,
  }
];

export function getShareUrls(url: string, title: string, description?: string) {
  const encoded = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDesc = encodeURIComponent(description ?? '')

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    twitter: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    instagram: null, // Instagram has no web share API
  }
}