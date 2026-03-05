<script>
	import ContactHero from "$lib/components/contact/contactHero.svelte";
	import ContactInfoCards from "$lib/components/contact/contactInfoCards.svelte";
	import Faq from "$lib/components/contact/faq.svelte";
	import ResponseInfo from "$lib/components/contact/responseInfo.svelte";
	import SocialLinks from "$lib/components/contact/socialLinks.svelte";
	import WhatsappBtn from "$lib/components/contact/whatsappBtn.svelte";
	import { createMeta } from "$lib/meta";
	import { ServiceSchema, WebPageSchema } from "$lib/schemas";
	import SEO from "$lib/SEO.svelte";
const meta = createMeta({
	title: "Contact Us | GGM Technologies",
	description:
		"Get in touch with GGM Technologies for any inquiries, feedback, or collaboration opportunities.",
	path: "/contact",
	keywords: ["Contact", "GGM Technologies", "Inquiries", "Feedback", "Collaboration"]
})
const schemas = [
  WebPageSchema({
    title: meta.title,
    description: meta.description,
    url: meta.url
  }),
  ServiceSchema({
    name: "Contact Us",
    description: meta.description,
    url: meta.url
  })
]
</script>
<SEO {meta} {schemas} />
<section class="animate-fade-up">
<ContactHero />
      <ResponseInfo />
      <ContactInfoCards />
      <WhatsappBtn />
      <SocialLinks />
      <Faq />
	</section>