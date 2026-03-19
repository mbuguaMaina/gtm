<script lang="ts">
	import { ChevronLeft, ChevronRight, Quote, Star, TextQuote } from "@lucide/svelte";
	import { onMount } from "svelte";
	import Rating from "./Rating.svelte";

	const testimonials = [
		{
			name: "John Mwangi",
			role: "Contractor",
			text: "The doors I purchased from Olet Hardware were extremely high quality. Delivery was fast and the finishing was perfect."
		},
		{
			name: "Grace Wanjiku",
			role: "Home Owner",
			text: "Amazing customer service and durable products. My mahogany doors still look brand new after years."
		},
		{
			name: "Peter Otieno",
			role: "Interior Designer",
			text: "I recommend Olet Hardware to my clients because the craftsmanship of their wood products is excellent."
		},
		{
			name: "Samuel Kariuki",
			role: "Builder",
			text: "Reliable supplier for construction materials. The quality of their MDF boards and doors is unmatched."
		}
	];

	let index = 0;
	let interval: any;

	function next() {
		index = (index + 1) % testimonials.length;
	}

	function prev() {
		index = (index - 1 + testimonials.length) % testimonials.length;
	}

	onMount(() => {
		interval = setInterval(next, 5000);
		return () => clearInterval(interval);
	});
</script>

 <!-- <div class="embedsocial-hashtag" data-ref="b0cd1f7540358120e23e1b24956b083de72f1482"> <a class="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding" href="https://embedsocial.com/" target="_blank" title="Widget by EmbedSocial" > <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial"> <div class="es-widget-branding-text">Widget by EmbedSocial</div> </a> </div> 
 
 
 <script lang="ts"> (function(d, s, id) { var js:any; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript")); </script>  -->

<section class="py-20 container mx-auto relative overflow-hidden">

	<div class="text-center mb-12 px-4">
		<h2 class="text-3xl font-bold text-foreground">
			What Our Customers Say
		</h2>
		<p class="text-muted-foreground mt-2">
			Real feedback from our happy clients
		</p>
	</div>

	<div class="overflow-hidden max-w-7xl mx-auto relative">

		<div
			class="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
			style="transform: translateX(-{index * 100}%);"
		>

			{#each testimonials as testimonial}
				<div class="w-full shrink-0 flex justify-center px-4">
					<div
						class="w-[96dvw] md:w-[50dvw] px-10 rounded-3xl bg-secondary dark:bg-secondary/40 py-20 "
					>
					<Quote class="w-12 h-12    mb-8" />
                    <Rating  />
                    <br>
                    

						<p class="text-lg text-muted-foreground mb-8 leading-relaxed">
							"{testimonial.text}"
						</p>

						<div class="flex items-center gap-4">

							<div
								class="w-12 h-12 rounded-full flex items-center justify-center font-semibold
								 bg-background"
							>
								{testimonial.name[0]}
							</div>

							<div>
								<p class="font-semibold text-foreground">
									{testimonial.name}
								</p>
								<p class="text-sm text-neutral-500 dark:text-neutral-400">
									{testimonial.role}
								</p>
							</div>

						</div>

					</div>

				</div>
			{/each}

		</div>
        	<button
		onclick={prev}
		class="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
		bg-background
		hover:scale-105 transition"
	>
		<ChevronLeft />
	</button>

	<button
		onclick={next}
		class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
		 bg-background
		hover:scale-105 transition"
	>
		<ChevronRight />
	</button>

	</div>



</section>