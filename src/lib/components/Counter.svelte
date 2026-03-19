<script lang="ts">
	import { onMount } from 'svelte';

	
let {value = $bindable(100), duration=$bindable(1600), suffix=$bindable(''),color=$bindable('')} = $props()
	let count = $state(0);

	function easeOutCubic(t:any) {
		return 1 - Math.pow(1 - t, 3);
	}

	onMount(() => {
		const start = performance.now();

		function animate(now:any) {
			const progress = Math.min((now - start) / duration, 1);
			const eased = easeOutCubic(progress);

			count = Math.floor(eased * value);

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		}

		requestAnimationFrame(animate);
	});
</script>

<span class={`text-3xl mb-2 font-bold ${color}`}>{count}{suffix}</span>