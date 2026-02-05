<script>
  // Svelte 5 runes state (static data can still live in $state)
  const caseStudies = $state([
    {
      company: "TechFlow SaaS",
      industry: "B2B Software",
      result: "180% ROI Increase",
      metric: "in 3 months",
      description:
        "Transformed their digital presence with a comprehensive SEO and content strategy, resulting in 3x organic traffic and 45% more qualified leads.",
      testimonial:
        "GrowthPulse didn't just meet our expectations—they completely transformed our marketing approach. The results speak for themselves.",
      author: "Sarah Chen, CMO",
    },
    {
      company: "Wellness Hub",
      industry: "E-commerce",
      result: "320% Revenue Growth",
      metric: "year-over-year",
      description:
        "Scaled their paid advertising campaigns while maintaining profitability, expanding into new markets and customer segments.",
      testimonial:
        "The strategic insights and execution were flawless. They truly understand what it takes to grow a modern brand.",
      author: "Michael Roberts, Founder",
    },
    {
      company: "Urban Design Co",
      industry: "Architecture",
      result: "250% Lead Generation",
      metric: "in 6 months",
      description:
        "Repositioned their brand and launched an integrated marketing campaign that established them as industry thought leaders.",
      testimonial:
        "Working with this team has been transformative. Our pipeline has never been stronger, and our brand recognition is at an all-time high.",
      author: "Jennifer Liu, CEO",
    },
  ]);
</script>

<section class="py-20 bg-background">
  <div class="container px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div
      class="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up"
    >
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
      >
        Results That Matter
      </h2>

      <p class="text-lg text-muted-foreground">
        Don't just take our word for it. See how we've helped businesses like
        yours achieve remarkable growth through strategic marketing.
      </p>
    </div>

    <!-- Grid -->
    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {#each caseStudies as study, index}
        <div
          class="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-card border border-border rounded-2xl"
          style={`animation-delay: ${index * 0.1}s`}
        >
          <div class="p-6">
            <!-- Top -->
            <div class="mb-6">
              <div
                class="text-sm font-semibold text-secondary mb-1"
              >
                {study.industry}
              </div>

              <h3
                class="text-2xl font-bold text-foreground mb-2"
              >
                {study.company}
              </h3>

              <div class="flex items-baseline gap-2">
                <div
                  class="text-3xl font-bold text-secondary"
                >
                  {study.result}
                </div>

                <div
                  class="text-sm text-muted-foreground"
                >
                  {study.metric}
                </div>
              </div>
            </div>

            <!-- Description -->
            <p class="text-muted-foreground mb-6">
              {study.description}
            </p>

            <!-- Testimonial -->
            <div class="pt-6 border-t border-border">
              <!-- Quote Icon (Lucide SVG inline) -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-accent mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 8h4v4H7zM13 8h4v4h-4zM7 14h4v2H7zM13 14h4v2h-4z"
                />
              </svg>

              <p
                class="text-sm italic text-foreground mb-3"
              >
                "{study.testimonial}"
              </p>

              <p
                class="text-sm font-semibold text-muted-foreground"
              >
                — {study.author}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
