

 <script lang="ts">

	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import NavItem from "./ui/navItem.svelte";

  let {open=$bindable(false)} = $props();
 
 onMount(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  });
  const items = [
   {
      label:"Home",
      href:"/",
   }
  ]
 
 </script>

<!-- drawer component -->
 {#if open}

<div transition:slide={ { duration: 300 , axis:'x' } }   class="fixed top-0 right-0 z-9999 h-screen  overflow-y-auto transition-transform   bg-white w-dvw p-4 border-e border-default"   aria-labelledby="drawer-navigation-label">
    <!--header text-->
   <div class="border-b  border-default pb-4 ps-4 flex items-center ">
      <a onclick={() => open = false} href="/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="/circularlogo.png" class="h-6 w-6" alt="Flowbite Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">GGM TECHNOLOGIES</span>
      </a>
      <button type="button" onclick={()=>open=false}   aria-controls="drawer-navigation" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
         <span class="sr-only">Close menu</span>
      </button>
   </div>
    <!--header text-->
<!-- Body Content -->
  <div class="py-5 overflow-y-auto">
       <menu class="flex flex-col mx-auto w-11/12 gap-2 text-body">
{#each items as item (item.href)}
       <NavItem label={item.label} href={item.href} bind:open  />
{/each}         
       </menu>
   </div>
</div>
{/if}