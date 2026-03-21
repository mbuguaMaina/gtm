<script lang="ts">
	import { ChevronLeft, ChevronRight, Quote, Star, TextQuote } from "@lucide/svelte";
	import { onMount } from "svelte";
	import Rating from "./Rating.svelte";

	 let {testimonials=$bindable([])} = $props()

	let index = $state(0);
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

  {#if testimonials.length === 0}
	 <p> </p>
  {:else}
	<section class="py-16">

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
{/if}