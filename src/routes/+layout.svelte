<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  import { onMount } from "svelte";
  import { applyTheme, getTheme } from "$lib/theme";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { slide } from 'svelte/transition';

  onMount(() => {
   applyTheme(getTheme(), false); 
  });
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<main  transition:slide={{ duration: 300, axis:"x" }}>
	<Header />
	
	{@render children()}

	<Footer/>
</main>

