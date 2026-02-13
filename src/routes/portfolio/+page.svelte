<script>
 
 
  import { ArrowRight, ExternalLink } from "@lucide/svelte";

  const categories = [
    "All",
    "Web Design",
    "E-Commerce",
    "SEO",
    "Mobile",
    "Custom Development"
  ];

  const projects = [
    {
      title: "FreshMart Online Store",
      description:
        "A full-featured e-commerce platform for a leading grocery chain, with real-time inventory and mobile ordering.",
      category: "E-Commerce",
      tags: ["Shopify", "React", "Node.js"]
    },
    {
      title: "Safari Adventures App",
      description:
        "A cross-platform mobile app connecting tourists with local safari guides across Kenya's national parks.",
      category: "Mobile",
      tags: ["React Native", "Firebase", "Maps API"]
    },
    {
      title: "Nairobi Legal Associates",
      description:
        "A professional corporate website with client portal, appointment booking, and document management.",
      category: "Web Design",
      tags: ["WordPress", "PHP", "MySQL"]
    },
    {
      title: "GreenLeaf SEO Campaign",
      description:
        "Comprehensive SEO strategy that boosted organic traffic by 340% for an agricultural export company.",
      category: "SEO",
      tags: ["SEMrush", "Analytics", "Content Strategy"]
    },
    {
      title: "MediTrack HMS",
      description:
        "Custom hospital management system with patient records, billing, and pharmacy integration.",
      category: "Custom Development",
      tags: ["Python", "Django", "PostgreSQL"]
    },
    {
      title: "UrbanStyle Boutique",
      description:
        "Modern fashion e-commerce site with AR try-on feature and integrated payment processing.",
      category: "E-Commerce",
      tags: ["Next.js", "Stripe", "Tailwind CSS"]
    }
  ];

  let active = $state("All");

  const filtered = $derived(
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)
  );
</script>

<div class="min-h-screen bg-[#0f172a] text-white">
 

  <!-- Hero -->
  <section class="relative overflow-hidden px-4 py-20 text-center sm:px-6 lg:px-8">
    <div class="absolute inset-0 bg-linear-to-b from-[#22c55e]/5 to-transparent" ></div>
    <div class="relative mx-auto max-w-3xl">
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        Our <span class="text-[#22c55e]">Portfolio</span>
      </h1>
      <p class="mt-4 text-lg leading-relaxed text-gray-400">
        From e-commerce platforms to custom enterprise solutions — explore the
        projects that showcase our expertise and drive real results.
      </p>
    </div>
  </section>

  <!-- Filters -->
  <section class="px-4 sm:px-6 lg:px-8">
    <div class="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
      {#each categories as cat}
        <button
          onclick={() => (active = cat)}
          class={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            active === cat
              ? "bg-[#22c55e] text-[#0f172a] shadow-lg shadow-[#22c55e]/25"
              : "border border-[#1e293b] text-gray-400 hover:border-[#22c55e]/50 hover:text-white"
          }`}
        >
          {cat}
        </button>
      {/each}
    </div>
  </section>

  <!-- Featured Case Study -->
  <section class="px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-[#22c55e]">
        Featured Case Study
      </h2>

      <div class="overflow-hidden rounded-2xl border border-[#1e293b] bg-[#1e293b]/30">
        <div class="grid items-center md:grid-cols-2">
          <!-- Image -->
          <div class="flex aspect-video items-center justify-center bg-linear-to-br from-[#22c55e]/20 to-[#0f172a] p-8 md:aspect-auto md:h-full">
            <div class="text-center">
              <div class="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-xl bg-[#22c55e]/20 text-[#22c55e]">
                <ExternalLink size={32} />
              </div>
              <p class="text-sm text-gray-500">Project Preview</p>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 lg:p-10">
            <span class="inline-block rounded-full bg-[#22c55e]/10 px-3 py-1 text-xs font-semibold text-[#22c55e]">
              E-Commerce
            </span>

            <h3 class="mt-4 text-2xl font-bold">Olet Hardware</h3>

            <p class="mt-2 text-sm leading-relaxed text-gray-400">
              We transformed Olet Hardware's brick-and-mortar business into a
              thriving online store, complete with inventory management, secure
              payments, and a customer loyalty program.
            </p>

            <div class="mt-6 grid grid-cols-3 gap-4">
              {#each [
                { label: "Challenge", value: "Limited online reach" },
                { label: "Solution", value: "Full e-commerce platform" },
                { label: "Result", value: "200% revenue growth" }
              ] as item}
                <div>
                  <p class="text-xs font-semibold uppercase text-[#22c55e]">
                    {item.label}
                  </p>
                  <p class="mt-1 text-sm text-gray-300">{item.value}</p>
                </div>
              {/each}
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              {#each ["WooCommerce", "React", "Node.js", "Mpesa API"] as tag}
                <span class="rounded-md border border-[#1e293b] bg-[#0f172a] px-2.5 py-1 text-xs text-gray-400">
                  {tag}
                </span>
              {/each}
            </div>

            <a
              href="/"
              class="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#22c55e] px-6 py-2.5 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-[#16a34a]"
            >
              View Case Study <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Grid -->
  <section class="px-4 pb-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each filtered as project}
          <div
            class="group overflow-hidden rounded-xl border border-[#1e293b] bg-[#1e293b]/20 transition-all duration-300 hover:border-[#22c55e]/40 hover:shadow-lg hover:shadow-[#22c55e]/5"
          >
            <div class="relative flex aspect-video items-center justify-center bg-linear-to-br from-[#1e293b] to-[#0f172a]">
              <span class="text-3xl font-bold text-[#1e293b]">
                {project.title.charAt(0)}
              </span>

              <div class="absolute inset-0 flex items-center justify-center bg-[#0f172a]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="/"
                  class="inline-flex items-center gap-2 rounded-lg bg-[#22c55e] px-4 py-2 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-[#16a34a]"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div class="p-5">
              <span class="inline-block rounded-full bg-[#22c55e]/10 px-2.5 py-0.5 text-xs font-semibold text-[#22c55e]">
                {project.category}
              </span>

              <h3 class="mt-2 text-lg font-bold text-white">
                {project.title}
              </h3>

              <p class="mt-1 text-sm leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div class="mt-3 flex flex-wrap gap-1.5">
                {#each project.tags as tag}
                  <span class="rounded border border-[#1e293b] px-2 py-0.5 text-xs text-gray-500">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="border-t border-[#1e293b] bg-linear-to-b from-[#0f172a] to-[#0b1120] px-4 py-20 text-center sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
        Have a project in <span class="text-[#22c55e]">mind</span>?
      </h2>

      <p class="mt-4 text-gray-400">
        Let's collaborate to build something extraordinary. Our team is ready
        to turn your vision into reality.
      </p>

      <a
        href="/contact"
        class="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#22c55e] px-8 py-3 text-base font-semibold text-[#0f172a] transition-colors hover:bg-[#16a34a]"
      >
        Get Started <ArrowRight size={18} />
      </a>
    </div>
  </section>

 
</div>
