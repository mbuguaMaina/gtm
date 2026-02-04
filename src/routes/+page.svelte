<script>
	import CaseStudy from "$lib/components/CaseStudy.svelte";
	import CTA from "$lib/components/CTA.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Pricing from "$lib/components/Pricing.svelte";
	import PromoBanner from "$lib/components/PromoBanner.svelte";
	import Services from "$lib/components/Services.svelte";
	import TrustBanner from "$lib/components/TrustBanner.svelte";

</script>
 
 <Hero  />
 <CTA
 variant="secondary"
        title="Ready to Transform Your Business?"
        description="Get a free consultation and discover how we can help you build a stunning e-commerce presence that converts visitors into customers."
        buttonText="Get Free Consultation"
        highlight="No commitment required"
   />
<TrustBanner />
<Services/>
 <PromoBanner />
 <CaseStudy />

 <CTA 
 variant="primary"
        title="Don't Wait - Your Competitors Are Already Online"
        description="Every day without a professional e-commerce store is a day of lost sales. Let's build something amazing together."
        buttonText="Start Your Project Today"
        highlight="Free SEO audit included"
      />
       <Pricing/>


       