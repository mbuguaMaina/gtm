<script lang="ts">
  import { Mail, Phone, MapPin, Clock } from "@lucide/svelte";

  type ContactItem = {
    icon: typeof Mail;
    title: string;
    content: string;
    href: string | null;
  };

  const contactInfo: ContactItem[] = [
    {
      icon: Mail,
      title: "Email",
      content: "ggmtechhub@gmail.com",
      href: "mailto:ggmtechhub@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+254 700 412 990",
      href: "tel:+254700412990",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Nairobi, Kenya",
      href: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM",
      href: null,
    },
  ];
</script>

<section class="py-16 md:py-20">
  <div class="container mx-auto px-4">
    <!-- Heading -->
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
        Contact Information
      </h2>

      <p class="mx-auto max-w-xl text-[hsl(215,16%,47%)]">
        Reach out through any of the following channels and we'll get back to you
        as soon as possible.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each contactInfo as item}
        {@const Icon = item.icon}

        <div
          class="group border-0 bg-[hsl(210,40%,96%)]/50 shadow-sm rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="flex flex-col items-center p-6 text-center">
            <!-- Icon -->
            <div
              class="mb-4 rounded-full bg-linear-to-br from-[hsl(217,91%,60%)] to-[hsl(195,85%,50%)] p-3 text-white transition-transform duration-300 group-hover:scale-110"
            >
              <Icon class="h-6 w-6  " />
            </div>

            <!-- Title -->
            <h3 class="mb-2 font-semibold text-foreground">
              {item.title}
            </h3>

            <!-- Content -->
            {#if item.href}
              <a
                href={item.href}
                class="text-[hsl(215,16%,47%)] transition-colors hover:text-primary"
              >
                {item.content}
              </a>
            {:else}
              <p class="text-[hsl(215,16%,47%)]">
                {item.content}
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
