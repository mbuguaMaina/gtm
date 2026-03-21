<script lang="ts">
	import { TrendingUp } from "@lucide/svelte";
  import { StarOutline, UsersOutline, AwardOutline, ArrowUpOutline } from "flowbite-svelte-icons";
	import Counter from "./Counter.svelte";

  const stats = [
    {
      icon: UsersOutline,
      value: 50,
      label: "Happy Clients",
      suffix:"+"
      
    },
    {
      icon: StarOutline,
      value: 4.9,
      label: "Client Rating",
      suffix:"/5"
      
    },
    {
      icon: AwardOutline,
      value: 98,
      label: "Project Success",
      suffix:"%"
    },
    {
      icon: TrendingUp,
      value: 99,
      label: "Response Rate",
      suffix:"%"
    }
  ];
</script>

<section
  class="
    py-14
    border-t border-zinc-200  dark:border-slate-800
    transition-colors duration-200
  "
>
  <div class="container mx-auto px-6">
    <div class="text-center mb-10">
      <h3 class="text-2xl font-bold text-foreground   mb-2">
        Proven Solutions Trusted by Ambitious Brands
      </h3>

      <p class="text-muted-foreground  ">
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
              bg-accent/10  
              w-12 h-12 rounded-full
              flex items-center justify-center
              mx-auto mb-3
            "
          >
            <stat.icon
              class="w-6 h-6 text-accent  "
            />
          </div>

          <div
            class="
              text-2xl font-bold mb-1
              text-accent  
            "
          >
          <Counter
        value={stat.value}
        duration={1200}
        suffix={stat.suffix}
      />
          
          </div>

          <div class="text-sm text-muted-foreground  ">
            {stat.label}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
