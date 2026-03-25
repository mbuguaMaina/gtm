<script lang="ts">
 
  import {  Sparkles } from "@lucide/svelte";
 
	import WhatsappBtn from "./contact/whatsappBtn.svelte";
 
 
  let {variant=$bindable("primary"), title=$bindable(""), description=$bindable(""), highlight=$bindable("")}:{
variant?:"primary" | "secondary" | "urgent"  , title?:string, description?:string, highlight?:string
  } = $props()
  
  let variantStyles = $derived({
    primary: "bg-linear-to-r from-secondary to-secondary/90 ",
    secondary: "bg-gradient-to-r from-secondary to-secondary/90 border border-accent/20",
    urgent: "bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground"
  }[variant] ?? "bg-linear-to-r from-secondary to-secondary/90 ");
</script>

<section class={`py-16 ${variantStyles}`}>
  <div class="container mx-auto px-6 text-center">
    <div class="max-w-3xl mx-auto">
      {#if highlight}
        <div class="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Sparkles class="w-4 h-4" />
          {highlight}
        </div>
      {/if}

      <h2 class="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p class="text-lg md:text-xl mb-8 opacity-90">{description}</p>

     <WhatsappBtn />
    </div>
  </div>
</section>
