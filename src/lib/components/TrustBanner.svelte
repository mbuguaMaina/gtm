<script lang="ts">
	import { TrendingUp } from "@lucide/svelte";
  import { StarOutline, UsersOutline, AwardOutline, ArrowUpOutline } from "flowbite-svelte-icons";

  const stats = [
    {
      icon: UsersOutline,
      value: "50+",
      label: "Happy Clients"
    },
    {
      icon: StarOutline,
      value: "4.9/5",
      label: "Client Rating"
    },
    {
      icon: AwardOutline,
      value: "98%",
      label: "Project Success"
    },
    {
      icon: TrendingUp,
      value: "150%",
      label: "Avg. Sales Increase"
    }
  ];
</script>

<section
  class="
    py-14
    bg-muted/50 dark:bg-zinc-900/70
    border-y border-zinc-200 dark:border-zinc-800
    transition-colors duration-200
  "
>
  <div class="container mx-auto px-6">
    <div class="text-center mb-10">
      <h3 class="text-2xl font-bold text-foreground dark:text-zinc-100 mb-2">
        Proven Solutions Trusted by Ambitious Brands
      </h3>

      <p class="text-muted-foreground dark:text-zinc-400">
        Join successful businesses that chose us to grow their online presence
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each stats as stat}
        <div
          class="
            text-center p-5  
            
          
            transition-all duration-200
          "
        >
          <div
            class="
              bg-accent/10 dark:bg-accent/20
              w-12 h-12 rounded-full
              flex items-center justify-center
              mx-auto mb-3
            "
          >
            <svelte:component
              this={stat.icon}
              class="w-6 h-6 text-accent dark:text-accent/90"
            />
          </div>

          <div
            class="
              text-2xl font-bold mb-1
              text-accent dark:text-accent/90
            "
          >
            {stat.value}
          </div>

          <div class="text-sm text-muted-foreground dark:text-zinc-400">
            {stat.label}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
