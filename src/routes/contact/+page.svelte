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
      <div class="flex flex-col text-center items-center justify-center w-full  ">
  <h2 class="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Prefer WhatsApp?
      </h2>
      <p class="mb-6 text-muted-foreground">
        Get instant responses by starting a WhatsApp conversation with our team.
      </p>
    <WhatsappBtn />
      </div>
  <section class="py-6 md:py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="mb-4 text-2xl font-bold text-foreground md:text-3xl">
      Follow Us
    </h2>
    <p class="mb-8 text-[hsl(215,16%,47%)]">
      Stay updated with our latest projects and insights.
    </p>
      <SocialLinks />
  </div>
  </section>
  
      <Faq />
	</section>