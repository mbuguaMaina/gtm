<script lang="ts">
  import { Target, Eye, Lightbulb } from "@lucide/svelte";

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses across Kenya and Africa with cutting-edge digital solutions that drive growth, enhance efficiency, and create lasting competitive advantages in the digital marketplace.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading digital transformation partner in East Africa, recognized for our innovative approach, exceptional quality, and commitment to client success.",
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description:
        "We combine creative excellence with technical expertise, delivering bespoke solutions tailored to each client's unique needs while maintaining the highest standards of quality and integrity.",
    },
  ];
</script>

<section class="py-24 bg-linear-to-r from-accent/10   to-accent-5 border border-accent/20">
  <div class="container mx-auto px-6">
    
    <div class="text-center mb-16 animate-fade-up">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        What <span class="gradient-text">Drives Us</span>
      </h2>
      <p class="text-muted-foreground max-w-2xl mx-auto">
        Our core values and vision guide every project we undertake
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each cards as card, index}
        <div
          class="group relative p-8 rounded-2xl bg-zinc-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 animate-fade-up"
          style={`animation-delay: ${index * 0.15}s`}
        >
          <div
            class="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors"
          >
            <card.icon
              class="w-7 h-7 text-blue-600"
            />
          </div>

          <h3 class="text-xl font-semibold mb-4">{card.title}</h3>

          <p class="text-muted-foreground leading-relaxed">
            {card.description}
          </p>
        </div>
      {/each}
    </div>

  </div>
</section>
