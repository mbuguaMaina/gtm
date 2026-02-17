<script lang="ts">
	import type { Snippet } from "svelte";
	import { slide } from "svelte/transition";

  let liEl:any;
  let tooltipEl:any = $state();
  
  let align = $state("right"); // "right" | "left"
const { isActive,  children, item={}}:{isActive:(path:string)=>boolean,  children:Snippet, item:any} = $props()
  function updatePosition() {
    if (!liEl || !tooltipEl) return;

    const rect = liEl.getBoundingClientRect();
    const tooltipWidth = tooltipEl.offsetWidth;
    const spaceRight = window.innerWidth - rect.right;

    align = spaceRight >= tooltipWidth ? "right" : "left";
  }
</script>

<li
  bind:this={liEl}
  class="relative group p-3"
  onmouseenter={updatePosition}
>
  <a
    href={item.path}
    class="block hover:text-blue-500 py-2 transition-colors text-black dark:text-white duration-200 px-3 rounded-full"
    class:text-blue-500={isActive(item.path)}
    class:bg-blue-100={isActive(item.path)}
    class:font-medium={isActive(item.path)}
    class:text-muted-foreground={!isActive(item.path)}
  >
    {@render children()}
  </a>
{#if item.children}

  <div
  transition:slide={{
    duration: 300,
     
      axis: "y"
  }} 
    bind:this={tooltipEl}
    class={`absolute top-14  hidden group-hover:block
      min-w-80 max-w-sm translate-y-20
      bg-white text-black text-sm p-4 rounded-md shadow-lg
      transition-all  ease-out
      duration-300
        group-hover:translate-y-0
      ${align === "right" ? "right-0  translate-x-1/2" : "left-0 -translate-x-1/2"}
    `}
  >
   <ul class="flex gap-2 justify-between w-full">
    {#each item.children as child}
        <a class="bg-gray-300 p-2 px-4 rounded-full" href={child.path}>{child.label}</a>
    {/each}
   </ul>
  </div>
  {/if}
</li>
