<script lang="ts">
	import { createMeta } from "$lib/meta";
	import { ServiceSchema, WebPageSchema } from "$lib/schemas";
	import SEO from "$lib/SEO.svelte";
	import {   MenuIcon } from "@lucide/svelte";
	import { onMount } from "svelte";

 import { page } from "$app/state";
	import ProjectModal from "$lib/components/ProjectModal.svelte";
	import { fullservices, pages } from "$lib";

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
let activePage = $state("seo-optimization");
 onMount(() => {
  const tag = page.url.searchParams.get("tag");
  if (tag ) {
    activePage = tag;
  }
  })
	let sidebarOpen = $state(false);
	function setPage(id:any) {
		activePage = id;
		sidebarOpen = false;
	}
 
 


 

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
			<div class="text-green-400 text-xl tracking-widest font-bold">
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
							? "border-green-400 text-green-400 bg-green-400/5"
							: "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
					}`}
				>
					<span>{p.icon}</span>
					<span>{p.label}</span>
				</button>
			{/each}
		</nav>

		 <div class="w-full grid place-items-center">
       <ProjectModal title="	Get Quote →"  className="bg-green-400" />
     </div>
   
	</aside>

	<!-- main -->
	<main class="flex-1 pt-14 md:pt-0 md:ml-65">

	 

{#if fullservices[activePage]}
			<div>

				<!-- hero -->
				<section class="px-6 md:px-16 md:py-10 py-5 border-b border-white/10">

					<div class="text-xs tracking-[0.2em] block min-w-1/3 max-w-max text-center border-dotted text-green-400 border-2 rounded-xl border-green-400  mt-12 mb-6 px-2 py-1  ">
						{activePage.toUpperCase()} 
					</div>
       

					<h1 class="text-5xl md:text-7xl font-bold leading-none mb-6">
						{fullservices[activePage].hero.title.split(' ').slice(0, fullservices[activePage].hero.title.split(' ').length - 1).join(' ')} <br />
						<span class="italic text-green-400">{fullservices[activePage].hero.title.split(' ').slice(-1)}</span>
					</h1>

					<p class="max-w-xl text-white/70">
						{fullservices[activePage].hero.description}
					</p>

					<div class="flex gap-10 mt-10 flex-wrap">

					
						{#each fullservices[activePage].hero.stats as s}	<div>
							<div class="text-3xl text-green-400">{s.v}</div>
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
						{fullservices[activePage].what.title}
					</h2>

					<p class="text-white/70 max-w-xl">
						{fullservices[activePage].what.text}
					</p>

					<div class="mt-10 space-y-3">

						{#each fullservices[activePage].what.steps as step, i}

							<div class="flex gap-4 border border-white/10 p-4 rounded">

								<div class="text-green-400 text-xl">
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
					{	fullservices[activePage].deliverables.title}
					</div>

					<div class="grid md:grid-cols-3 gap-4">

						{#each fullservices[activePage].deliverables.items as item}

							<div class="border border-white/10 p-5 rounded bg-[#141414]">

								<div class="text-green-400 mb-2">✓</div>

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
						{fullservices[activePage].pricing.title}
					</div>

					<div class="grid md:grid-cols-3 gap-4">

						 {#each fullservices[activePage].pricing.plans as plan}

						 

						<div class={`border ${plan.highlight ? 'border-green-400' : 'border-white/10'} p-6 rounded bg-green-400/5`}>

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