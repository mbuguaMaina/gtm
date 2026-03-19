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

 <a
              href={item.path}
              class="relative cursor-pointer text-xs font-medium px-3 py-1 rounded-full transition-colors hover:text-green-500"
              class:bg-background={isActive(item.path)}
              class:text-[#22c55e]={isActive(item.path)}
              class:text-foreground={!isActive(item.path)}
            >
              <span class="text-base">{@render children()}</span>

                {#if isActive(item.path)}
                <div class="absolute inset-0 w-full  rounded-full -z-10">
                <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#22c55e] rounded-t-full">
                  <div class="absolute w-8 h-3 bg-[#22c55e]/20 rounded-full blur-sm -top-1 -left-1"></div>
                  <div class="absolute w-6 h-3 bg-[#22c55e]/20 rounded-full blur-sm -top-0.5"></div>
                  <div class="absolute w-3 h-2 bg-[#22c55e]/20 rounded-full blur-xs top-0 left-1.5"></div>
                </div>
              </div>
              {/if}
            </a>
