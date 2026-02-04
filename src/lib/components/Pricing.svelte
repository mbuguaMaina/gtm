<script lang="ts">
  import {Button,Card} from "flowbite-svelte";
  import { Check, Star } from "@lucide/svelte";

  const packages = [
    {
      name: "The Launchpad",
      price: "20,000",
      description: "Perfect for new  brands ready to go online",
      features: [
        "Domain Name Registration",
        "SSL Certificate",
        "Custom domain setup",
        "Website hosting",
        "Custom e-commerce website design",
        "Mobile-responsive development",
        "Basic SEO optimization",
        "Product catalog setup",
        "Payment gateway integration",
        "30 days of support",
      ],
      popular: false,
    },
    {
      name: "The Accelerator",
      price: "45,000",
      description: "Everything you need to launch and grow your online presence",
      features: [
        "Everything in Launchpad",
        "Advanced SEO & content strategy",
        "Social media ad campaign setup",
        "Google Analytics & tracking",
        "Blog setup & content guidance",
        "90 days of support",
        "Performance optimization",
      ],
      popular: true,
    },
    {
      name: "Custom Package",
      price: "From 80,000",
      description: "Tailored solutions for established brands with specific needs",
      features: [
        "Everything in Accelerator",
        "Custom functionality development",
        "Advanced integrations",
        "Multi-platform setup",
        "Dedicated project manager",
        "6 months of support",
        "Ongoing maintenance options",
      ],
      popular: false,
    },
  ];
</script>

<section class="py-10 bg-linear-to-b from-muted to-background">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
     <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-accent to-accent/80 text-transparent bg-clip-text">
  Choose Your Growth Path
</h2>

      <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
        Transparent pricing packages designed to fit your business stage and goals. 
        No hidden fees, just clear value.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each packages as pkg, index}
        <Card
          class={`relative p-2 overflow-hidden transition-all duration-300 ${
            pkg.popular 
              ? 'ring border-0 ring-accent shadow-hero transform scale-105' 
              : 'shadow-card hover:shadow-elegant'
          }`}
        >
          {#if pkg.popular}
            <div class="absolute top-0 left-0 right-0 bg-linear-to-r from-accent to-accent/90 text-accent-foreground py-2 px-4 text-center font-semibold">
              <Star class="w-4 h-4 inline mr-2" />
              Most Popular
            </div>
          {/if}

          <hgroup class={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
            <h2 class="text-2xl font-bold mb-2">{pkg.name}</h2>
            <div class="text-4xl font-bold text-accent mb-2">{pkg.price}</div>
            <p class="text-muted-foreground">{pkg.description}</p>
          </hgroup>

          <div class="space-y-4">
            <ul class="space-y-3">
              {#each pkg.features as feature}
                <li class="flex items-center gap-3">
                  <div class="bg-accent/10 rounded-full p-1">
                    <Check class="w-4 h-4 text-accent" />
                  </div>
                  <span class="text-sm">{feature}</span>
                </li>
              {/each}
            </ul>

            <div class="pt-6">
              <Button   class="w-full" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </Card>
      {/each}
    </div>

    <div class="text-center mt-6">
      <p class="text-muted-foreground mb-4">
        Need something different? Let's discuss your specific requirements.
      </p>
      <Button class="bg-blue-500 text-white hover:bg-accent " size="lg">
        Schedule a Consultation
      </Button>
    </div>
  </div>
</section>
