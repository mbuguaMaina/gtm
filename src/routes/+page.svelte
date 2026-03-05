<script>
	import CaseStudy from "$lib/components/CaseStudy.svelte";
	import CTA from "$lib/components/CTA.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Marque from "$lib/components/Marque.svelte";
	import Pricing from "$lib/components/Pricing.svelte";
	import PromoBanner from "$lib/components/PromoBanner.svelte";
	import Services from "$lib/components/services/Services.svelte";
	import Testimonies from "$lib/components/Testimonies.svelte";
	 
	import TrustBanner from "$lib/components/TrustBanner.svelte";
	import { createMeta } from "$lib/meta";
	 
 
	import { OrganizationSchema, WebPageSchema, WebsiteSchema } from "$lib/schemas";
	import SEO from "$lib/SEO.svelte";
	import { ChevronDown } from "@lucide/svelte";
	import { ReactSolid } from "flowbite-svelte-icons";
 

const meta = createMeta({
  title: "GGM Technologies | Digital Marketing Agency",
  description:
    "GGM Technologies helps businesses grow through SEO, web design and development, and digital marketing.",
  path: "/",
  keywords: ["digital marketing", "SEO", "web design", "web development", "e-commerce","SEM","social media marketing","content marketing"]
})

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
 <Marque techStack={[
		"Svelte",
		"SvelteKit",
		"TypeScript",
		"Node.js",
		"PostgreSQL",
		"Tailwind",
		"Cloudflare",
		"Docker",
		"Stripe",
		"Vercel"
	]} />
 <TrustBanner />
 <CTA
 variant="secondary"
        title="Ready to Transform Your Business?"
        description="Get a free consultation and discover how we can help you build a stunning e-commerce presence that converts visitors into customers."
        buttonText="Get Free Consultation"
        highlight="No commitment required"
   />

<!-- <Services/> -->
 <Services /> 
 <PromoBanner />
 <CaseStudy />

 <CTA 
 variant="primary"
        title="Don't Wait - Your Competitors Are Already Online"
        description="Every day without a professional e-commerce store is a day of lost sales. Let's build something amazing together."
        buttonText="Start Your Project Today"
        highlight="Free SEO audit included"
      />
      <Testimonies />
       <Pricing/>


       