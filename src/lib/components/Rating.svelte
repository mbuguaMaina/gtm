<script lang="ts">
	import { Star } from "@lucide/svelte";

 let {rating = 4} = $props();
</script>

<div class="flex items-center gap-1">
	{#each Array(5) as _, i}
		<Star
			class="w-5 h-5 {i < rating 
				? 'text-amber-400 fill-amber-400' 
				: 'text-neutral-300 dark:text-neutral-600'}"
		/>
	{/each}
</div>