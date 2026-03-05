<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
  import { onMount } from "svelte";
  import { applyTheme, getTheme } from "$lib/theme";
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
 
  import { page } from "$app/state";
import ProjectModal from "$lib/components/ProjectModal.svelte";

	let openModal = $state(false);



  onMount(() => {
   applyTheme(getTheme(), false); 
  });
	let { children } = $props();
 
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
 
<ProjectModal bind:open={openModal}  />


{#key page.url.pathname}
 <main>
	<Header />
	
	{@render children()}

	<Footer bind:openModal={openModal} />
</main>
{/key}


