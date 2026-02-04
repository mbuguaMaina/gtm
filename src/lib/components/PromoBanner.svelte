<script lang="ts">
 
  import {Button } from "flowbite-svelte";
  import { GiftBoxOutline, ClockOutline } from "flowbite-svelte-icons";
</script>

<section
  class="
    py-12
    bg-linear-to-r from-accent to-accent/90
    dark:from-accent/90 dark:to-accent/70
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
            bg-white/10 dark:bg-white/15
            p-3 rounded-full
            dark:ring-1 dark:ring-white/20
            dark:shadow-[0_0_12px_rgba(255,255,255,0.15)]
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
            bg-white/10 dark:bg-white/15
            px-3 py-2 rounded-full
            dark:ring-1 dark:ring-white/20
          "
        >
          <ClockOutline class="w-4 h-4" />
          <span>Ends March 21st</span>
        </div>

        <Button
           
        
          class="whitespace-nowrap dark:shadow-[0_0_14px_rgba(0,0,0,0.25)]"
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
      opacity-0 dark:opacity-100
      transition-opacity
    "
  ></div>
</section>
