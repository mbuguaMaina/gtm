<script lang="ts">
	import { socialLinks } from "$lib";
 let {size = $bindable("md")}:{size?: "sm" | "md" | "lg"} = $props()


</script>



    <div class="flex flex-wrap justify-center gap-4">
      {#each socialLinks as social}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          class="group flex {size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-16 w-16' : 'h-14 w-14'} items-center justify-center rounded-full border border-background cursor-pointer    shadow-sm transition-all duration-300 hover:border-[#3c83f6] bg-gray-100 dark:bg-slate-800 hover:bg-linear-to-br hover:from-blue-500 hover:to-[hsl(195,85%,50%)] hover:text-white hover:shadow-lg hover:scale-110"
        >
          <social.icon  class="h-5 w-5" />
        </a>
      {/each}
    </div>
 
