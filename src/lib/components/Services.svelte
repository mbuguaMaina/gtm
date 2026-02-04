<script lang="ts">
     import { Card  } from "flowbite-svelte";
 
 
 
   

  import {
    PaletteOutline,
    SearchOutline,
    PhoneOutline,
    CodeOutline,
    MobilePhoneOutline,
    ArrowUpDownOutline
  } from "flowbite-svelte-icons";

  const services = [
    {
      icon: PaletteOutline,
      title: "Web Design & Development",
      description:
        "Custom e-commerce solutions built on Shopify, WooCommerce, or bespoke platforms. We create beautiful, conversion-focused designs."
    },
    {
      icon: SearchOutline,
      title: "SEO & Content Strategy",
      description:
        "We don't just build sites, we help them get found. Includes on-page SEO, blog setup, and comprehensive keyword research."
    },
    {
      icon: PhoneOutline,
      title: "Social Media Advertising",
      description:
        "Targeted ad campaigns across Facebook, Instagram, and Google to drive qualified traffic and increase sales."
    },
    {
      icon: CodeOutline,
      title: "Custom Development",
      description:
        "Tailored solutions for unique business needs. API integrations, custom features, and advanced functionality."
    },
    {
      icon: MobilePhoneOutline,
      title: "Mobile Optimization",
      description:
        "Responsive designs that work flawlessly across all devices. Your customers can shop anywhere, anytime."
    },
    {
      icon: ArrowUpDownOutline ,
      title: "Growth Analytics",
      description:
        "Comprehensive tracking and reporting to measure success and identify opportunities for continuous improvement."
    }
  ];
</script>

<section class="py-20 bg-background dark:bg-zinc-900/60">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-zinc-100">
        Our Core Services
      </h2>

      <p class="text-xl text-muted-foreground dark:text-zinc-400 max-w-3xl mx-auto">
        Comprehensive e-commerce solutions designed to elevate your artisan brand
        and drive meaningful business growth
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {#each services as service}
        <Card
          class="
            group transition-all duration-300
            hover:-translate-y-1 hover:shadow-card
            relative overflow-hidden
text-center
p-3
            dark:before:absolute
            dark:before:inset-0
            dark:before:rounded-xl
            dark:before:opacity-0
            dark:before:transition-opacity
            dark:hover:before:opacity-100
            dark:before:shadow-[0_0_16px_rgba(var(--accent),0.25)]
            border-accent/20 dark:border-accent/50
            rounded-2xl
            shadow-muted shadow-md
          "
          
        >
         
            <div
              class="
                mx-auto mb-4 p-3 rounded-full w-fit
                bg-accent/10 dark:bg-accent/15
                group-hover:bg-accent/20
                transition-colors
              "
            >
              <service.icon
                class="w-8 h-8 text-accent dark:text-accent/90"
              />
            </div>

            <h2 class="text-xl font-semibold dark:text-zinc-100">
              {service.title}
            </h2>
        

       
            <p
              class="
                text-muted-foreground dark:text-zinc-400
                text-center leading-relaxed
              "
            >
              {service.description}
            </p>
         
        </Card>
      {/each}
    </div>
  </div>
</section>
