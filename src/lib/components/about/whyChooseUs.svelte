<script lang="ts">
  import { CheckCheck } from "@lucide/svelte";

  const reasons = [
    "5+ years of proven expertise in digital solutions",
    "98% client satisfaction rate",
    "24/7 dedicated support and maintenance",
    "Custom solutions tailored to your needs",
    "Competitive pricing with transparent quotes",
    "Local expertise with global standards",
  ];
</script>

<section class="py-24 relative bg-muted/50 
    border-y border-zinc-200  ">
  <div class="container mx-auto px-2 md:px-6">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      
      <!-- Left Content -->
      <div class="animate-fade-up">
        <span
          class="inline-block px-4 py-1.5 rounded-full bg-blue-400/10 text-blue-500 text-sm font-medium mb-6 border border-blue-300/20"
        >
          Why Choose Us
        </span>

        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Your Trusted Partner for
          <span class="bg-clip-text text-transparent bg-linear-to-r from-[hsl(231,94%,55%)] to-[hsl(197,87%,56%)]"> Digital Growth</span>
        </h2>

        <p class="text-[hsl(215,20%,65%)] mb-8 leading-relaxed">
          At GGM Technologies, we don't just build websites—we create digital
          experiences that drive real business results. Our team combines
          technical expertise with creative vision to deliver solutions that
          exceed expectations.
        </p>

        <div class="grid sm:grid-cols-2 gap-4">
          {#each reasons as reason, index}
            <div
              class="flex items-start gap-3 animate-fade-up"
              style={`animation-delay: ${index * 0.1}s`}
            >
              <CheckCheck class="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span class="text-sm text-black">{reason}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right Stats -->
      <div
        class="grid grid-cols-2 gap-6 animate-fade-up"
        style="animation-delay: 0.3s"
      >
        <div
          class="p-8 rounded-2xl bg-card border border-border text-center hover:border-blue-200 transition-colors"
        >
          <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
            50+
          </div>
          <div class="text-muted-foreground">Happy Clients</div>
        </div>

        <div
          class="p-8 rounded-2xl bg-card border border-border text-center hover:border-blue-200 transition-colors"
        >
          <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
            4.9
          </div>
          <div class="text-muted-foreground">Client Rating</div>
        </div>

        <div
          class="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
        >
          <div class="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
            150%
          </div>
          <div class="text-muted-foreground">Avg. Sales Increase</div>
        </div>

        <div
          class="p-8 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
        >
          <div class="text-4xl md:text-5xl text-blue-400 font-bold mb-2">24/7</div>
          <div class="opacity-90 text-gray-800">Support Available</div>
        </div>
      </div>
    </div>
  </div>
</section>
