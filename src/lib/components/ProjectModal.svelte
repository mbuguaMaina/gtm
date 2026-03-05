<script lang="ts">
	import { X, Send } from "@lucide/svelte";
	import { fade, fly } from "svelte/transition";
	import { onMount, tick } from "svelte";

	let { open = $bindable(false) } = $props();

	let modal: HTMLDivElement|null = $state(null);
	let firstInput: HTMLInputElement | null = $state(null);

	let name = $state("");
	let email = $state("");
	let message = $state("");
	let loading = $state(false);
	let success = $state(false);

	/* -------------------------
	   Scroll Lock
	------------------------- */

	$effect(() => {
		document.body.style.overflow = open ? "hidden" : "";
	});

	/* -------------------------
	   ESC close
	------------------------- */

	function handleKey(e: KeyboardEvent) {
		if (e.key === "Escape") open = false;
	}

	onMount(() => {
		window.addEventListener("keydown", handleKey);

		return () => {
			window.removeEventListener("keydown", handleKey);
		};
	});

	/* -------------------------
	   Focus trap
	------------------------- */

	async function trapFocus() {
		await tick();
		firstInput?.focus();
	}

	$effect(() => {
		if (open) trapFocus();
	});

	/* -------------------------
	   Submit
	------------------------- */

	async function submitForm(e: SubmitEvent) {
		e.preventDefault();

		loading = true;

		await new Promise((r) => setTimeout(r, 1200));

		success = true;
		loading = false;
	}
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-end md:items-center justify-center">

		<!-- Backdrop -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div
			class="absolute inset-0 bg-background/40 backdrop-blur-sm"
			role="button"
			tabindex="0"
			onclick={() => (open = false)}
			in:fade
			out:fade
		/>

		<!-- Modal -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			bind:this={modal}
			class="relative w-full md:w-150 md:max-w-[95%]
			bg-white dark:bg-neutral-900
			rounded-t-3xl md:rounded-2xl
			p-8 shadow-2xl"
			in:fly={{ y: 40, duration: 200 }}
			out:fly={{ y: 30, duration: 150 }}
			onclick={(e) => e.stopPropagation()}
		>

			<button
				class="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200"
				onclick={() => (open = !open)}
			>
				<X size="20" />
			</button>

			<h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
				Request a Project
			</h2>

			<p class="text-neutral-600 dark:text-neutral-400 mb-6">
				Tell us about your project and we’ll respond shortly.
			</p>

			{#if success}
				<div class="p-4 mb-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
					Request submitted successfully.
				</div>
			{/if}

			<form onsubmit={submitForm} class="space-y-4">

				<input
					bind:this={firstInput}
					type="text"
					placeholder="Full Name"
					bind:value={name}
					required
					class="input"
				/>

				<input
					type="email"
					placeholder="Email Address"
					bind:value={email}
					required
					class="input"
				/>

				<textarea
					rows="4"
					placeholder="Describe your project..."
					bind:value={message}
					required
					class="input resize-none"
				></textarea>

				<button
					type="submit"
					class="w-full flex items-center justify-center gap-2
					bg-black text-white
					dark:bg-white dark:text-black
					py-3 rounded-lg hover:opacity-90 transition"
					disabled={loading}
				>
					{#if loading}
						Sending...
					{:else}
						<Send size="18" />
						Send Request
					{/if}
				</button>

			</form>

		</div>
	</div>
{/if}

<style lang="postcss">
@reference "tailwindcss";
	.input {
		@apply w-full border border-neutral-300 dark:border-neutral-700
		rounded-lg px-4 py-3
		bg-white dark:bg-neutral-800
		text-neutral-900 dark:text-neutral-100
		focus:outline-none focus:ring-2 focus:ring-neutral-400;
	}
</style>