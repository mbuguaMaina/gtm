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
      "SSL certificate",
      "Up to 5 pages (Home, About, Portfolio, Services, Contact)",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Social media links",
      "3 days of support",
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
      "Payment gateway integration (M-Pesa, PayHero, etc.)",
      "Website hosting",
      "Basic SEO optimization",
      "7 days of support",
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
      "Blog setup & content guidance",
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
        "Rank higher on Google and attract customers who are already searching for your services. We use technical SEO, keyword strategy, content optimization, and backlink building to grow your organic traffic steadily and reduce dependency on paid ads.",
      stats: [
        { value: "3X", label: "Avg Traffic Growth" },
        { value: "6mo", label: "To see results" },
        { value: "40%", label: "Lower cost vs ads" }
      ]
    },
    what: {
      title: "We make Google work for you.",
      text:
        "SEO improves your website structure, content, and authority so it ranks higher on search engines and brings consistent long-term traffic.",
      steps: [
        "Audit & Research",
        "On Page SEO",
        "Technical SEO",
        "Backlinks",
        "Reporting"
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Keyword Strategy",
        "Optimised Pages",
        "Technical Fixes",
        "Backlinks",
        "Local SEO",
        "Reports"
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 5,000", highlight: true },
      ]
    }
  },

  "ads-ppc-campaigns": {
    hero: {
      tag: "Ads & PPC",
      title: "Paid Ads Campaigns",
      description:
        "Launch high-converting ad campaigns on Google, Facebook, Instagram, and TikTok. We handle audience targeting, creatives, tracking, and optimization to ensure every shilling spent on ads generates measurable results.",
      stats: [
        { value: "2X", label: "Avg ROI" },
        { value: "7d", label: "Setup time" },
        { value: "Fast", label: "Results" }
      ]
    },
    what: {
      title: "Ads focused on ROI",
      text:
        "We create, test, and optimize campaigns that bring real leads and sales instead of wasted ad spend.",
      steps: [
        "Audience Research",
        "Creative Design",
        "Campaign Setup",
        "Tracking",
        "Optimization"
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Ad Account Setup",
        "Campaign Build",
        "Pixel Tracking",
        "A/B Testing",
        "Reports",
        "Scaling"
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        { name: "Growth", price: "KES 25,000", highlight: true },
      ]
    }
  },

  "social-media-management": {
    hero: {
      tag: "Social Media",
      title: "Social Media Management",
      description:
        "Build a strong online presence with consistent, professional content. We manage your social media pages, create engaging posts, reply to messages, and grow your audience so your brand stays active and trusted.",
      stats: [
        { value: "Daily", label: "Posting" },
        { value: "3X", label: "Engagement" },
        { value: "Pro", label: "Design" }
      ]
    },
    what: {
      title: "Build authority online",
      text:
        "We plan, design, and publish content that grows your brand, increases engagement, and builds trust with your audience.",
      steps: [
        "Content Plan",
        "Design",
        "Posting",
        "Community",
        "Reports"
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Content Calendar",
        "Post Design",
        "Captions",
        "Hashtags",
        "DM Replies",
        "Analytics"
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
       
        { name: "Growth", price: "KES 20,000", highlight: true },
         
      ]
    }
  },

  "ui-ux-design": {
    hero: {
      tag: "UI / UX",
      title: "Website Design",
      description:
        "Modern, clean, and conversion-focused designs that make your brand look professional. We design interfaces that are easy to use, visually appealing, and built to guide users toward taking action.",
      stats: [
        { value: "UI", label: "Modern" },
        { value: "UX", label: "Optimised" },
        { value: "Fast", label: "Delivery" }
      ]
    },
    what: {
      title: "Design that converts",
      text:
        "We create user-friendly layouts and professional visuals that improve usability and increase conversions.",
      steps: [
        "Wireframe",
        "UI Design",
        "Prototype",
        "Review",
        "Export"
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Figma Design",
        "Mobile Layout",
        "Desktop Layout",
        "UI Kit",
        "Icons",
        "Assets"
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
      
        { name: "Growth", price: "KES 30,000", highlight: true },
      
      ]
    }
  },

  "web-development": {
    hero: {
      tag: "Web Development",
      title: "Web Development",
      description:
        "We build fast, secure, and scalable websites and web applications using modern technologies. From business websites to dashboards and full platforms, our development focuses on performance, SEO, and long-term reliability.",
      stats: [
        { value: "Fast", label: "Performance" },
        { value: "Secure", label: "Code" },
        { value: "SEO", label: "Ready" }
      ]
    },
    what: {
      title: "Built for scale",
      text:
        "Our development process ensures your website works smoothly, loads fast, and can grow with your business.",
      steps: [
        "Planning",
        "Frontend",
        "Backend",
        "Testing",
        "Deploy"
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Website",
        "Dashboard",
        "API",
        "Authentication",
        "CMS",
        "Deployment"
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
        
        { name: "Growth", price: "KES 30,000", highlight: true },
    
      ]
    }
  },

  "maintenance-support": {
    hero: {
      tag: "Maintenance",
      title: "Maintenance & Support",
      description:
        "Keep your website secure, updated, and running smoothly. We monitor performance, fix bugs, apply updates, and ensure your system stays fast, safe, and reliable at all times.",
      stats: [
        { value: "24/7", label: "Support" },
        { value: "Secure", label: "Updates" },
        { value: "Fast", label: "Fixes" }
      ]
    },
    what: {
      title: "We keep things running",
      text:
        "We handle updates, backups, and technical issues so you can focus on running your business.",
      steps: [
        "Monitoring",
        "Updates",
        "Backups",
        "Fixes",
        "Reports"
      ]
    },
    deliverables: {
      title: "WHAT YOU GET",
      items: [
        "Bug Fixes",
        "Updates",
        "Backups",
        "Security",
        "Speed",
        "Support"
      ]
    },
    pricing: {
      title: "PRICING",
      plans: [
 
        { name: "Growth", price: "KES 10,000", highlight: true },
     
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
    path: "/blog",
    label: "Blog",
    Icon: Notebook,
  }
];