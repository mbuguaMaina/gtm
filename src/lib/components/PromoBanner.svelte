<script lang="ts">
 
  import {Button } from "flowbite-svelte";
  import { GiftBoxOutline, ClockOutline } from "flowbite-svelte-icons";
</script>

<section
  class="
    py-12
    bg-linear-to-r from-accent to-accent/90
     
    text-accent-foreground
    relative
    overflow-hidden
  "
>
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-4">
        <div
          class="
            bg-white/10  
            p-3 rounded-full
             
          "
        >
          <GiftBoxOutline class="w-6 h-6" />
        </div>

        <div>
          <h3 class="text-xl font-bold mb-1">
            Limited Time: Free SEO Audit Worth 5000 KES
          </h3>

          <p class="opacity-90">
            Get a comprehensive SEO analysis with every website package this month
          </p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div
          class="
            flex items-center gap-2 text-sm
            
            px-3 py-2 rounded-full
           
          "
        >
          <ClockOutline class="w-4 h-4" />
          <span>Ends March 21st</span>
        </div>

        <Button
           
        
          class="whitespace-nowrap  "
        >
          Claim Offer
        </Button>
      </div>
    </div>
  </div>

  <!-- subtle glow overlay for dark mode -->
  <div
    class="
      pointer-events-none absolute inset-0
      bg-[radial-gradient(600px_at_50%_50%,rgba(255,255,255,0.12),transparent)]
      opacity-0  
      transition-opacity
    "
  ></div>
</section>
