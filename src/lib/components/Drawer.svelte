

 <script lang="ts">

	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import NavItem from "./ui/navItem.svelte";
	import { X } from "@lucide/svelte";
	import { HomeOutline } from "flowbite-svelte-icons";
	import { navigationItems } from "$lib";
	 

  let {open=$bindable(false)} = $props();
 
 onMount(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  });
  
 
 </script>

<!-- drawer component -->
 {#if open}

<div transition:slide={ { duration: 300 , axis:'x' } }   class="fixed top-0 right-0 z-9999 h-screen  overflow-y-auto transition-transform   bg-background w-dvw p-4 border-e border-default"   aria-labelledby="drawer-navigation-label">
    <!--header text-->
   <div class="border-b  border-default pb-4 ps-4 flex items-center ">
      <a onclick={() => open = false} href="/" class="flex items-center space-x-2 rtl:space-x-reverse">
         <img src="/circularlogo.png" class="h-6 w-6" alt="GGM Logo" />
         <span class="self-center text-lg font-semibold whitespace-nowrap text-heading">GGM TECHNOLOGIES</span>
      </a>
      <button type="button" onclick={()=>open=false}   aria-controls="drawer-navigation" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center">
         <X class="text-foreground" />
         <span class="sr-only">Close menu</span>
      </button>
   </div>
    <!--header text-->
<!-- Body Content -->
  <div class="py-5 overflow-y-auto">
       <menu class="flex flex-col mx-auto w-11/12 gap-2 text-body">
{#each navigationItems as item (item.path)}
       <NavItem label={item.label} href={item.path} bind:open Icon={item.Icon} />
{/each}         
       </menu>
   </div>
</div>
{/if}