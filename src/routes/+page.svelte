<script lang="ts">
	import { customers } from "$lib";
	import CaseStudy from "$lib/components/CaseStudy.svelte";
	import CTA from "$lib/components/CTA.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Marque from "$lib/components/Marque.svelte";
	import Pricing from "$lib/components/Pricing.svelte";
	import PromoBanner from "$lib/components/PromoBanner.svelte";
	import Services from "$lib/components/Services.svelte";
	import Testimonies from "$lib/components/Testimonies.svelte";
	import TrustBanner from "$lib/components/TrustBanner.svelte";
	import { createMeta } from "$lib/meta";
	import { OrganizationSchema, WebPageSchema, WebsiteSchema } from "$lib/schemas";
	import SEO from "$lib/SEO.svelte";
	import type { PageProps } from "./$types";
	
  let { data }: PageProps = $props();
 

const meta = createMeta ({
  title: "GGM Technologies | Web Design, SEO & Digital Growth Solutions in Kenya",
  description:
    "GGM Technologies helps businesses build, grow, and scale online with high-performance websites, SEO, web applications, e-commerce solutions, branding, and digital marketing strategies that drive real results.",
  path: "/",

  keywords: [
    // Brand
    "GGM Technologies",
    "ggmtechnologies",
    "ggmtechnologies.co.ke",

    // Core Services
    "web design",
    "web development",
    "website development",
    "custom web applications",
    "business websites",
    "responsive websites",
    "landing page design",
    "UI UX design",
    "frontend development",
    "backend development",
    "full stack development",

    // SEO & Marketing
    "SEO",
    "search engine optimization",
    "technical SEO",
    "local SEO",
    "SEO Kenya",
    "digital marketing",
    "digital marketing agency",
    "social media marketing",
    "SEM",
    "search engine marketing",
    "content marketing",
    "email marketing",
    "online advertising",
    "Google Ads management",

    // E-commerce
    "e-commerce development",
    "online store development",
    "shopify development",
    "woocommerce development",
    "payment integration",

    // Business Growth
    "business automation",
    "digital transformation",
    "startup technology solutions",
    "business growth solutions",
    "branding services",
    "conversion optimization",

    // Location SEO
    "web design Kenya",
    "web development Kenya",
    "digital marketing Kenya",
    "SEO agency Nairobi",
    "web developers Nairobi",
    "Kenya tech company",
    "Nairobi web agency"
  ],
  openGraph: {
    title: "GGM Technologies | Build. Grow. Scale.",
    description:
      "We build the digital infrastructure that drives real business growth — from high-performance websites and web apps to marketing strategies that convert.",
    url: "https://ggmtechnologies.co.ke",
    siteName: "GGM Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GGM Technologies - Digital Growth Solutions",
      },
    ],
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GGM Technologies | Build. Grow. Scale.",
    description:
      "Web design, SEO, digital marketing, and scalable software solutions for modern businesses.",
    images: ["/og-image.png"],
    creator: "@ggmtechnologies",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://ggmtechnologies.co.ke",
  },

  metadataBase: new URL("https://ggmtechnologies.co.ke"),

  category: "technology",

  authors: [
    {
      name: "GGM Technologies",
      url: "https://ggmtechnologies.co.ke",
    },
  ],

  creator: "GGM Technologies",
  publisher: "GGM Technologies",

  applicationName: "GGM Technologies",

  other: {
    "theme-color": "#0f172a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
});

const schemas = [
  OrganizationSchema(),
  WebsiteSchema(),
  WebPageSchema({
    title: meta.title,
    description: meta.description,
    url: meta.url
  })
]

</script>
 
<SEO {meta} {schemas} />
 <Hero  />
 <Marque techStack={customers} speed={20} />
 <TrustBanner />
 <CTA
 variant="secondary"
        title="Ready to Transform Your Business?"
        description="Get a free consultation and discover how we can help you build a stunning e-commerce presence that converts visitors into customers."
      
        highlight="No commitment required"
   />

<!-- <Services/> -->
 <Services /> 
 <PromoBanner />
 <CaseStudy caseStudy={data.caseStudy} />

 <CTA 
 variant="primary"
        title="Don't Wait - Your Competitors Are Already Online"
        description="Every day without a professional e-commerce store is a day of lost sales. Let's build something amazing together."
       
        highlight="Free SEO audit included"
      />
      <Testimonies />
       <Pricing/>


       