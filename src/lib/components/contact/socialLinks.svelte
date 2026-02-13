<script lang="ts">
  import { Facebook, Twitter, Linkedin, Instagram } from "@lucide/svelte";

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/ggmtechhub",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/ggmtechhub",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/ggmtechhub",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/ggmtechhub",
    },
  ];
</script>

<section class="py-12 md:py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="mb-4 text-2xl font-bold text-foreground md:text-3xl">
      Follow Us
    </h2>
    <p class="mb-8 text-[hsl(215,16%,47%)]">
      Stay updated with our latest projects and insights.
    </p>

    <div class="flex flex-wrap justify-center gap-4">
      {#each socialLinks as social}
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${social.name}`}
          class="group flex h-14 w-14 items-center justify-center rounded-full border border-border bg-[hsl(0,0%,100%)] text-[hsl(215,16%,47%)] shadow-sm transition-all duration-300 hover:border-[#3c83f6] hover:bg-linear-to-br hover:from-blue-500 hover:to-[hsl(195,85%,50%)] hover:text-white hover:shadow-lg hover:scale-110"
        >
          <svelte:component this={social.icon} class="h-5 w-5" />
        </a>
      {/each}
    </div>
  </div>
</section>
