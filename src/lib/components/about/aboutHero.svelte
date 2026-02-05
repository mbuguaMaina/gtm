<script lang="ts">
  import aboutHeroImage from '../../assets/about-hero.webp';
</script>

<section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
  <!-- [hsl(220,20%,10%)] Image -->
  <div class="absolute inset-0">
    <img
      src={aboutHeroImage}
      alt="GGM Technologies Team"
      class="w-full h-full object-cover"
    />

    <!-- Overlay -->
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div
      class="absolute inset-0 bg-linear-to-b from-[hsl(220,20%,10%)]/80 via-[hsl(220,20%,10%)]/70 to-[hsl(220,20%,10%)]"
    />
  </div>

  <!-- Content -->
  <div
    class="relative z-10 container mx-auto px-6 text-center animate-fade-up"
  >
    <span
      class="inline-block px-4 py-2 rounded-full bg-[hsl(216,88%,84%)]/10 text-blue-500 text-sm font-medium mb-6 border border-[hsl(216,88%,84%)]/20"
    >
      About GGM Technologies
    </span>

    <h1
      class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 tracking-tight"
    >
      Building <span class="gradient-text">Digital Excellence</span>
      <br />
      in Kenya
    </h1>

    <p
      class="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8"
    >
      We're a passionate team of developers, designers, and strategists
      dedicated to transforming businesses through innovative digital
      solutions.
    </p>

    <!-- Stats -->
    <div class="flex flex-wrap gap-8 justify-center text-center">
      <div
        class="animate-scale-in"
        style="animation-delay: 0.2s"
      >
        <div class="text-3xl md:text-4xl font-bold text-blue-400">
          5+
        </div>
        <div class="text-sm text-muted">
          Years Experience
        </div>
      </div>

      <div
        class="animate-scale-in"
        style="animation-delay: 0.3s"
      >
        <div class="text-3xl md:text-4xl font-bold text-blue-400">
          50+
        </div>
        <div class="text-sm text-muted">
          Happy Clients
        </div>
      </div>

      <div
        class="animate-scale-in"
        style="animation-delay: 0.4s"
      >
        <div class="text-3xl md:text-4xl font-bold text-blue-400">
          98%
        </div>
        <div class="text-sm text-muted">
          Success Rate
        </div>
      </div>
    </div>
  </div>
</section>
