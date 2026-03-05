<script>
	import AboutHero from "$lib/components/about/aboutHero.svelte";
	import CoreValues from "$lib/components/about/coreValues.svelte";
	import MissionVission from "$lib/components/about/missionVission.svelte";
	import WhyChooseUs from "$lib/components/about/whyChooseUs.svelte";
	import ContactCTA from "$lib/components/contactCTA.svelte";
	import FinalCTA from "$lib/components/marketing/FinalCTA.svelte";
	import Services from "$lib/components/Services.svelte";
	import { createMeta } from "$lib/meta";
	import { ServiceSchema, WebPageSchema } from "$lib/schemas";
	import SEO from "$lib/SEO.svelte";

	const meta = createMeta({
		title: "About - GGM Technologies",
		description:
			"Learn more about GGM Technologies, our mission, vision, and core values",
		path: "/about",
		keywords: ["About", "GGM Technologies", "Mission", "Vision", "Core Values"]
	})
	const schemas = [
		WebPageSchema({
			title: meta.title,
			description: meta.description,
			url: meta.url
		}),
		ServiceSchema({
			name: "About GGM Technologies",
			description: meta.description,
			url: meta.url
		})
	]


</script>

<SEO {schemas} {meta} />
 <AboutHero />
        <MissionVission />
        <CoreValues />
        <Services />
        <WhyChooseUs />
        <ContactCTA />
		<!-- <FinalCTA /> -->