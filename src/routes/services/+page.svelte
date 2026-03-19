<script lang="ts">
	import { createMeta } from "$lib/meta";
	import { ServiceSchema, WebPageSchema } from "$lib/schemas";
	import SEO from "$lib/SEO.svelte";
	import {   MenuIcon } from "@lucide/svelte";
	import { onMount } from "svelte";

 import { page } from "$app/state";
	import ProjectModal from "$lib/components/ProjectModal.svelte";

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
 onMount(() => {
  const tag = page.url.searchParams.get("tag");
  if (tag ) {
    activePage = tag;
  }
  })


let activePage = "seo";
	let sidebarOpen = false;

	const pages = [
		{ id: "seo", label: "SEO", icon: "📈" },
		{ id: "ppc", label: "Paid Ads", icon: "🎯" },
		{ id: "social", label: "Social Media", icon: "📲" },
		{ id: "content", label: "Content", icon: "✍️" },
		{ id: "webdesign", label: "Web Design", icon: "🎨" },
		{ id: "webdev", label: "Web Dev", icon: "⚙️" },
		{ id: "maintenance", label: "Maintenance", icon: "🛡️" }
	];

	function setPage(id:any) {
		activePage = id;
		sidebarOpen = false;
	}
const services:any = {
  seo: {
    hero: {
      tag: "SEO",
      title: "SEARCH ENGINE Optimisation",
      description:
        "Get found on Google organically. We build sustainable search visibility that brings qualified traffic to your business.",
      stats: [
        { value: "3X", label: "Avg Traffic Growth" },
        { value: "6mo", label: "To see results" },
        { value: "40%", label: "Lower cost vs ads" }
      ]
    },

    what: {
      title: "We make Google work for you.",
      text:
        "SEO improves your site so it ranks higher on Google and brings consistent organic traffic.",
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
        { name: "Starter", price: "KES 35,000" },
        { name: "Growth", price: "KES 75,000", highlight: true },
        { name: "Authority", price: "Custom" }
      ]
    }
  },


  ppc: {
    hero: {
      tag: "PPC",
      title: "Paid Ads Campaigns",
      description:
        "Run profitable campaigns on Google, Facebook and TikTok with data-driven targeting.",
      stats: [
        { value: "2X", label: "Avg ROI" },
        { value: "7d", label: "Setup time" },
        { value: "Fast", label: "Results" }
      ]
    },

    what: {
      title: "Ads focused on ROI",
      text:
        "We build, test and scale ads that generate leads and sales.",
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
        { name: "Starter", price: "KES 25,000" },
        { name: "Growth", price: "KES 60,000", highlight: true },
        { name: "Authority", price: "Custom" }
      ]
    }
  },


  social: {
    hero: {
      tag: "SMM",
      title: "Social Media Management",
      description:
        "Grow your brand on Instagram, Facebook, TikTok and LinkedIn with consistent content.",
      stats: [
        { value: "Daily", label: "Posting" },
        { value: "3X", label: "Engagement" },
        { value: "Pro", label: "Design" }
      ]
    },

    what: {
      title: "Build authority online",
      text:
        "We plan, design and manage content that grows your audience.",
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
        { name: "Starter", price: "KES 20,000" },
        { name: "Growth", price: "KES 45,000", highlight: true },
        { name: "Authority", price: "Custom" }
      ]
    }
  },


  webdesign: {
    hero: {
      tag: "Web Design",
      title: "Website Design",
      description:
        "Modern UI/UX design that makes your brand look premium and professional.",
      stats: [
        { value: "UI", label: "Modern" },
        { value: "UX", label: "Optimised" },
        { value: "Fast", label: "Delivery" }
      ]
    },

    what: {
      title: "Design that converts",
      text:
        "We design clean, modern interfaces focused on usability.",
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
        { name: "Starter", price: "KES 30,000" },
        { name: "Growth", price: "KES 80,000", highlight: true },
        { name: "Authority", price: "Custom" }
      ]
    }
  },


  webdev: {
    hero: {
      tag: "Web Development",
      title: "Web Development",
      description:
        "High-performance websites and web apps built for speed and scale.",
      stats: [
        { value: "Fast", label: "Performance" },
        { value: "Secure", label: "Code" },
        { value: "SEO", label: "Ready" }
      ]
    },

    what: {
      title: "Built for scale",
      text:
        "We develop fast, secure and scalable websites and dashboards.",
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
        { name: "Starter", price: "KES 50,000" },
        { name: "Growth", price: "KES 120,000", highlight: true },
        { name: "Authority", price: "Custom" }
      ]
    }
  },


  maintenance: {
    hero: {
      tag: "Maintenance",
      title: "Maintenance & Support",
      description:
        "We keep your website secure, fast and always running.",
      stats: [
        { value: "24/7", label: "Support" },
        { value: "Secure", label: "Updates" },
        { value: "Fast", label: "Fixes" }
      ]
    },

    what: {
      title: "We keep things running",
      text:
        "Ongoing updates, backups and monitoring for your site.",
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
        { name: "Starter", price: "KES 10,000" },
        { name: "Growth", price: "KES 25,000", highlight: true },
        { name: "Authority", price: "Custom" }
      ]
    }
  }
};
</script>
 <SEO {meta} {schemas} />
 
 
	
 

<div class="bg-[hsl(223,47%,7%)] text-[#e2dfdf] transition-colors duration-300 animate-fade-up">

<div class="flex  ">

	<!-- overlay -->
	{#if sidebarOpen}
		<button
	 
		 
			class="fixed inset-0 bg-black/60 z-40 md:hidden"
			onclick={() => (sidebarOpen = false)}
		> <span class="">close sidebar</span> </button>
	{/if}

	<!-- hamburger -->
	<button
		class="fixed top-18 left-4 z-50 md:hidden    h-10   flex items-center justify-center px-1 capitalize gap-1 bg-[#1a1919] border border-white/10 rounded"
		onclick={() => (sidebarOpen = !sidebarOpen)}
	>
	 <MenuIcon  size={24}/>  other services
	</button>

	<!-- sidebar -->
	<aside
		class={`fixed  md:top-4  z-50 w-65 min-h-screen pt-10 md:pt-8 bg-[#141414] border-r border-white/10
		transition-transform duration-300
		${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
	>
		<div class="p-6 border-b border-white/10">
			<div class="text-lime-400 text-xl tracking-widest font-bold">
				GGM Technologies
			</div>
			<div class="text-xs text-gray-400 tracking-widest">
				Services & Solutions
			</div>
		</div>

		<nav class="py-4">
			<div class="text-[10px] px-6 text-gray-500 uppercase tracking-widest">
				Services
			</div>

			{#each pages as p}
				<button
					onclick={() => setPage(p.id)}
					class={`flex items-center gap-3 px-6 py-3 text-sm cursor-pointer border-l-2
					${
						activePage === p.id
							? "border-lime-400 text-lime-400 bg-lime-400/5"
							: "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
					}`}
				>
					<span>{p.icon}</span>
					<span>{p.label}</span>
				</button>
			{/each}
		</nav>

		 <div class="w-full grid place-items-center">
       <ProjectModal title="	Get Quote →"  className="bg-lime-400" />
     </div>
   
	</aside>

	<!-- main -->
	<main class="flex-1 pt-14 md:pt-0 md:ml-65">

	 

{#if services[activePage]}
			<div>

				<!-- hero -->
				<section class="px-6 md:px-16 md:py-10 py-5 border-b border-white/10">

					<div class="text-xs tracking-[0.2em] block max-w-1/3 text-center border-dotted text-lime-400 border-2 rounded-xl border-lime-400  mt-12 mb-6 px-2 py-1  ">
						{activePage.toUpperCase()} 
					</div>
       

					<h1 class="text-5xl md:text-7xl font-bold leading-none mb-6">
						{services[activePage].hero.title.split(' ').slice(0, services[activePage].hero.title.split(' ').length - 1).join(' ')} <br />
						<span class="italic text-lime-400">{services[activePage].hero.title.split(' ').slice(-1)}</span>
					</h1>

					<p class="max-w-xl text-white/70">
						{services[activePage].hero.description}
					</p>

					<div class="flex gap-10 mt-10 flex-wrap">

					
						{#each services[activePage].hero.stats as s}	<div>
							<div class="text-3xl text-lime-400">{s.v}</div>
							<div class="text-xs text-gray-400">
								{s.l}
							</div>		</div>
							{/each}
				

						
					</div>

				</section>

				<!-- what -->
				<section class="px-6 md:px-16 py-14 border-b border-white/10">

					<div class="text-xs tracking-[0.2em] text-gray-500 mb-8">
						WHAT IT IS
					</div>

					<h2 class="text-2xl mb-6">
						{services[activePage].what.title}
					</h2>

					<p class="text-white/70 max-w-xl">
						{services[activePage].what.text}
					</p>

					<div class="mt-10 space-y-3">

						{#each services[activePage].what.steps as step, i}

							<div class="flex gap-4 border border-white/10 p-4 rounded">

								<div class="text-lime-400 text-xl">
									{String(i + 1).padStart(2, "0")}
								</div>

								<div>{step}</div>

							</div>

						{/each}

					</div>

				</section>

				<!-- deliverables -->

				<section class="px-6 md:px-16 py-14 border-b border-white/10">

					<div class="text-xs tracking-[0.2em] text-gray-500 mb-8">
					{	services[activePage].deliverables.title}
					</div>

					<div class="grid md:grid-cols-3 gap-4">

						{#each services[activePage].deliverables.items as item}

							<div class="border border-white/10 p-5 rounded bg-[#141414]">

								<div class="text-lime-400 mb-2">✓</div>

								<div class="text-sm text-white/80">
									{item}
								</div>

							</div>

						{/each}

					</div>

				</section>

				<!-- pricing -->

				<section class="px-6 md:px-16 py-14">

					<div class="text-xs tracking-[0.2em] text-gray-500 mb-8">
						{services[activePage].pricing.title}
					</div>

					<div class="grid md:grid-cols-3 gap-4">

						 {#each services[activePage].pricing.plans as plan}

						 

						<div class={`border ${plan.highlight ? 'border-lime-400' : 'border-white/10'} p-6 rounded bg-lime-400/5`}>

							<div class="text-xs text-gray-400 mb-2">
								{plan.name}
							</div>

							<div class="text-3xl">
								{ plan.price}
							</div>

						</div>
{/each}
					 

					</div>

				</section>

			</div>
		{/if}

	</main>

</div>

</div>