<script lang="ts">
  import { ArrowRight, Calendar } from "@lucide/svelte";
	import Button from "../ui/Button.svelte";
</script>

<section class="py-20 bg-linear-to-br from-secondary to-primary text-primary-foreground">
  <div class="container px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center animate-fade-in">
      
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Ready to See Real Growth?
      </h2>

      <p class="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
        Let's discuss how we can transform your marketing and drive measurable results.
        Schedule a free strategy call—no commitments, just insights.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        
        <Button
          size="lg"
          class="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Calendar class="mr-2 h-5 w-5" />
          Schedule Free Consultation
        </Button>

        <Button
          size="lg"
          variant="outline"
          class="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 backdrop-blur-sm"
        >
          Get a Custom Proposal
          <ArrowRight class="ml-2 h-5 w-5" />
        </Button>

      </div>

      <div class="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80 text-sm">
        
        <div class="flex items-center gap-2">
          <!-- svelte-ignore element_invalid_self_closing_tag -->
          <div class="w-2 h-2 rounded-full bg-accent" />
          No credit card required
        </div>

        <div class="flex items-center gap-2">
          <!-- svelte-ignore element_invalid_self_closing_tag -->
          <div class="w-2 h-2 rounded-full bg-accent" />
          30-minute strategy session
        </div>

        <div class="flex items-center gap-2">
          <!-- svelte-ignore element_invalid_self_closing_tag -->
          <div class="w-2 h-2 rounded-full bg-accent" />
          Tailored recommendations
        </div>

      </div>

    </div>
  </div>
</section>
