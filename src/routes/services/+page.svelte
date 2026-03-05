<script>
 
	import { createMeta } from "$lib/meta";
	import { ServiceSchema, WebPageSchema } from "$lib/schemas";

 
	import SEO from "$lib/SEO.svelte";
const meta = createMeta({
  title: "Digital Marketing and Web Development Services in Kenya | GGM Technologies",
  description:
    "Professional digital marketing services in Kenya to help businesses rank higher on Google. We offer SEO, social media marketing, Web Development, and more.",
  path: "/services",
  keywords: ["Digital Marketing services", "Web development services", "GGM Technologies", "Digital Marketing services"]
})

const schemas = [
  WebPageSchema({
    title: meta.title,
    description: meta.description,
    url: meta.url
  }),
  ServiceSchema({
    name: "Digital Marketing Services",
    description: meta.description,
    url: meta.url
  })
]
const services = [
		{
			title: "Performance Marketing",
			desc: "High-ROI paid campaigns across Google, Meta, and emerging platforms designed to scale revenue.",
			icon: "📈"
		},
		{
			title: "SEO & Organic Growth",
			desc: "Technical SEO, content strategy, and authority building that increases long-term search visibility.",
			icon: "🔎"
		},
		{
			title: "Brand Strategy",
			desc: "Brand positioning, messaging, and identity design that make businesses stand out.",
			icon: "🎯"
		},
		{
			title: "Conversion Optimization",
			desc: "Data-driven UX improvements that turn visitors into paying customers.",
			icon: "⚡"
		},
		{
			title: "Content Marketing",
			desc: "Authority-building blog, video, and social content strategies.",
			icon: "✍️"
		},
		{
			title: "Marketing Automation",
			desc: "CRM integration, funnels, and automated workflows that scale marketing.",
			icon: "🤖"
		}
	];
</script>
 <SEO {meta} {schemas} />
 
 
	
 

<div class="bg-background transition-colors duration-300 animate-fade-up">

<!-- HERO -->

<section class="max-w-7xl mx-auto px-6 py-24 text-center">

<h1 class="text-4xl md:text-6xl font-bold mb-6">
Growth Marketing
<span class="bg-linear-to-r from-[#22c55e] to-[#238045] text-transparent bg-clip-text">
Services
</span>
</h1>

<p class="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400">
GGM Technologies helps brands grow faster through strategic marketing,
data analytics, and high-performance digital campaigns.
</p>

</section>

<!-- SERVICES -->

<section class="max-w-7xl mx-auto px-6 pb-24">

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{#each services as service}

<div class="group p-8 rounded-xl border border-slate-800    hover:shadow-xl hover:-translate-y-1 transition">

<div class="text-3xl mb-4">{service.icon}</div>

<h3 class="text-xl font-semibold mb-3">
{service.title}
</h3>

<p class="text-slate-500 dark:text-slate-400 leading-relaxed">
{service.desc}
</p>

</div>

{/each}

</div>

</section>

<!-- PROCESS -->

<section class="py-24  ">

<div class="max-w-6xl mx-auto px-6">

<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
Our Growth Process
</h2>

<div class="grid md:grid-cols-4 gap-10 text-center">

<div>
<h3 class="font-semibold mb-2">1. Discovery</h3>
<p class="text-slate-500 dark:text-slate-400">
Understanding your goals, audience, and market.
</p>
</div>

<div>
<h3 class="font-semibold mb-2">2. Strategy</h3>
<p class="text-slate-500 dark:text-slate-400">
Designing a growth marketing plan tailored to your business.
</p>
</div>

<div>
<h3 class="font-semibold mb-2">3. Execution</h3>
<p class="text-slate-500 dark:text-slate-400">
Deploying campaigns and optimization strategies.
</p>
</div>

<div>
<h3 class="font-semibold mb-2">4. Growth</h3>
<p class="text-slate-500 dark:text-slate-400">
Continuous analysis, testing, and scaling.
</p>
</div>

</div>

</div>

</section>

<!-- CTA -->

<section class="max-w-5xl mx-auto px-6 py-24 text-center">

<h2 class="text-3xl md:text-4xl font-bold mb-6">
Ready to scale your business?
</h2>

<p class="text-slate-500 dark:text-slate-400 mb-8">
Work with GGM Technologies to build marketing systems that drive real revenue.
</p>

<div class="flex justify-center gap-4 flex-wrap">

<a
href="/contact"
class="px-6 py-3 rounded-lg bg-[#067a31] hover:bg-[#238045] text-white font-medium transition"
>
Book Strategy Call
</a>

<a
href="/portfolio"
class="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700   transition"
>
View Portfolio
</a>

</div>

</section>

</div>