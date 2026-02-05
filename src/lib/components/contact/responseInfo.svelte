<script lang="ts">
  import { Clock, CheckCircle2 } from "@lucide/svelte";
	import { CheckCircleOutline } from "flowbite-svelte-icons";
</script>

<section class="border-y border-border bg-linear-to-r from-[hsl(217,91%,60%)]/5 to-[hsl(195,85%,50%)]/5 py-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
      
      <div class="flex items-center gap-2 text-[hsl(215,16%,47%)]">
        <Clock class="h-5 w-5 text-[hsl(217,91%,60%)]" />
        <span>
          We typically respond within 
          <strong class="text-foreground"> 24 hours</strong>
        </span>
      </div>

      <div class="hidden h-4 w-px bg-border sm:block"></div>

      <div class="flex items-center gap-2 text-[hsl(215,16%,47%)]">
        <CheckCircleOutline class="h-5 w-5 text-[hsl(195,85%,50%)]" />
        <span>
          <strong class="text-foreground">Free consultation</strong> for new projects
        </span>
      </div>

    </div>
  </div>
</section>
