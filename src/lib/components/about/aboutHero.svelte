<script lang="ts">
  import aboutHeroImage from '../../assets/about-hero.webp';
	import Counter from '../Counter.svelte';
</script>

<section
  class="relative min-h-[70vh] mt-6 flex items-center justify-center overflow-hidden
  "
>
  <!-- Image -->
  <div class="absolute inset-0">
    

    <!-- Overlay -->
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div
      class="
      absolute inset-0
   
      "
    />
  </div>

  <!-- Content -->
  <div
    class="relative z-10 container mx-auto px-6 text-center animate-fade-up"
  >
    <span
      class="
      inline-block px-4 py-2 rounded-full
      bg-green-100 text-green-600 border border-green-200

      dark:bg-[hsl(216,88%,84%)]/10
      dark:text-green-400
      dark:border-[hsl(216,88%,84%)]/20

      text-sm font-medium mb-6
      "
    >
      About GGM Technologies
    </span>

    <h1
      class="
      text-4xl md:text-6xl lg:text-7xl
      font-bold mb-6 tracking-tight
 
      "
    >
      Building <span class="bg-clip-text text-transparent bg-linear-to-br from-green-400 to-green-600">Digital Excellence</span>
      <br />
      in Kenya
    </h1>

    <p
      class="
      text-lg md:text-xl max-w-2xl mx-auto mb-8
       text-gray-400
     
      "
    >
      We're a passionate team of developers, designers, and strategists
      dedicated to transforming businesses through innovative digital
      solutions.
    </p>

    <!-- Stats -->
    <div class="flex  gap-8 justify-center text-center">

      <div class="animate-scale-in" style="animation-delay: 0.2s">
        <Counter duration={1000} suffix="+" value={5} color="text-green-600
          dark:text-green-400"/>
        <div class="text-sm text-gray-400">
          Years Experience
        </div>
      </div>

      <div class="animate-scale-in" style="animation-delay: 0.3s">
       <Counter duration={1000} suffix="+" value={5} color="text-green-600
          dark:text-green-400"/>

        <div class="text-sm text-gray-400">
          Happy Clients
        </div>
       
      </div>

      <div class="animate-scale-in" style="animation-delay: 0.4s">
         <Counter duration={1000} suffix="%" value={98} color="text-green-600
          dark:text-green-400"/>
        <div class="text-sm text-gray-400">
          Success Rate
        </div>
      </div>

    </div>
  </div>
</section>