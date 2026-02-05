<script lang="ts">
  import Button from "../ui/Button.svelte";
  import { ArrowRight } from "@lucide/svelte";
  import heroBg from "@/assets/hero-bg.jpg";
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  
  <!-- Background Image with Overlay -->
  <div
    class="absolute inset-0 z-0"
    style={`
      background-image:
        linear-gradient(
          135deg,
          hsl(var(--hero-gradient-from)) 0%,
          hsl(var(--hero-gradient-to)) 100%
        ),
        url(${heroBg});
      background-blend-mode: multiply;
      background-size: cover;
      background-position: center;
    `}
  ></div>

  <!-- Content -->
  <div class="container relative z-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center animate-fade-in">
      
      <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        We Help Brands Grow with
        <span class="text-accent"> Precision Marketing</span>
      </h1>

      <p class="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-light">
        Transform your business with data-driven strategies, transparent processes,
        and measurable results that matter.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
        <Button
          size="lg"
          class="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Get a Free Strategy Call
          <ArrowRight class="ml-2 h-5 w-5" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          class="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 backdrop-blur-sm"
        >
          View Our Work
        </Button>

      </div>

      <!-- Trust Indicators -->
      <div class="mt-12 flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
        
        <div class="text-center">
          <div class="text-3xl font-bold text-accent">500+</div>
          <div class="text-sm">Brands Transformed</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-accent">180%</div>
          <div class="text-sm">Average ROI Increase</div>
        </div>

        <div class="text-center">
          <div class="text-3xl font-bold text-accent">98%</div>
          <div class="text-sm">Client Satisfaction</div>
        </div>

      </div>
    </div>
  </div>

  <!-- Decorative Gradient -->
  <div class="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-10" ></div>
</section>
