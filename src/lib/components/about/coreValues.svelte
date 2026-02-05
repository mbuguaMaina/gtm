<script lang="ts">
  import {
    Shield,
    Zap,
    Users,
    Award,
    Clock,
    Heart
  } from '@lucide/svelte';

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We uphold the highest ethical standards in all our dealings.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description:
        'Constantly pushing boundaries with cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Working together as one team with our clients and partners.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Delivering quality that exceeds expectations every time.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description:
        'Consistent delivery and 24/7 support you can count on.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description:
        'Genuine love for what we do drives our best work.'
    }
  ];
</script>

<section class="py-24 relative overflow-hidden">
  <!-- Background accent -->
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-linear-to-r from-secondary to-secondary/90 text-primary-foreground blur-3xl"
  />

  <div class="container mx-auto px-6 relative z-10">
    <!-- Header -->
    <div class="text-center mb-16 animate-fade-up">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Our Core <span class="gradient-text">Values</span>
      </h2>

      <p class="text-muted-foreground max-w-2xl mx-auto">
        The principles that define who we are and how we work
      </p>
    </div>

    <!-- Values Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each values as value, index}
        <div
          class="group flex items-start gap-4 p-6 rounded-xl
                 bg-blue-50/70 hover:bg-blue-50/70
                 border border-transparent hover:border-blue-bg-blue-50/70
                 transition-all duration-300 animate-fade-up"
          style="animation-delay: {index * 0.1}s"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-lg bg-white
                   flex items-center justify-center shrink-0
                   group-hover:scale-110 transition-transform"
          >
            <value.icon
              class="w-6 h-6 text-blue-400"
            />
          </div>

          <!-- Text -->
          <div>
            <h3 class="font-semibold text-lg mb-1">
              {value.title}
            </h3>

            <p class="text-muted-foreground text-sm">
              {value.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
