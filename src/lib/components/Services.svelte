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
    icon: CodeOutline,
    title: "Web Development",
    description:
      "Custom websites, dashboards, and web apps built for performance, scalability, and SEO. We develop fast, secure, and modern systems."
  },

  {
    icon: PaletteOutline,
    title: "UI / UX & Web Design",
    description:
      "Modern, conversion-focused designs that make your brand look professional. We design interfaces that are clean, fast, and easy to use."
  },

  {
    icon: SearchOutline,
    title: "SEO Optimization",
    description:
      "Improve your Google rankings with technical SEO, keyword strategy, and on-page optimization to bring consistent organic traffic."
  },

  {
    icon: PhoneOutline,
    title: "Digital Marketing",
    description:
      "Complete marketing strategies including content, funnels, and campaign planning to grow your business online."
  },

  {
    icon: MobilePhoneOutline,
    title: "Social Media Management",
    description:
      "We manage your Facebook, Instagram, TikTok, and LinkedIn pages with professional content, posting, and audience growth."
  },

  {
    icon: ArrowUpDownOutline,
    title: "Ads & PPC Campaigns",
    description:
      "Google Ads, Facebook Ads, and TikTok Ads campaigns focused on leads, sales, and measurable ROI."
  },

  {
    icon: CodeOutline,
    title: "Website Maintenance & Support",
    description:
      "Security updates, backups, bug fixes, and performance monitoring to keep your website running smoothly."
  },

  {
    icon: SearchOutline,
    title: "Analytics & Growth Tracking",
    description:
      "We track traffic, conversions, and user behavior to improve performance and make data-driven decisions."
  }
];
</script>

<section class="pb-5 bg-background  ">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-foreground  ">
        Our Core Services
      </h2>

      <p class="text-xl text-muted-foreground   max-w-3xl mx-auto">
       Full-service digital solutions for businesses — web development, marketing, SEO, and management.
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
          bg-secondary
            border-accent/20  
            rounded-2xl
            shadow-muted shadow-md
          "
          
        >
         
            <div
              class="
                mx-auto mb-4 p-3 rounded-full w-fit
                bg-accent/10  
                group-hover:bg-accent/20
                transition-colors
              "
            >
              <service.icon
                class="w-8 h-8 text-accent  "
              />
            </div>

            <h2 class="text-xl font-semibold  ">
              {service.title}
            </h2>
        

       
            <p
              class="
                text-muted-foreground  
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
