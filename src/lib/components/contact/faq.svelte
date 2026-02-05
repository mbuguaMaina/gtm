<script lang="ts">
	import { slide } from "svelte/transition";

  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: "What services does GGM Technologies offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, SEO optimization, and custom software solutions tailored to your business needs.",
    },
    {
      question: "How much does a typical project cost?",
      answer:
        "Project costs vary based on scope, complexity, and timeline. We provide custom quotes after understanding your specific requirements. Contact us for a free consultation and detailed estimate.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on the scope and complexity. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes! We offer various support and maintenance packages to keep your digital products running smoothly. This includes updates, security patches, performance optimization, and technical support.",
    },
    {
      question: "Can you work with clients outside Kenya?",
      answer:
        "Absolutely! We work with clients globally and have experience managing remote projects across different time zones. We use modern collaboration tools to ensure seamless communication.",
    },
  ];

  let openItem: number | null = null;

  function toggle(index: number) {
    openItem = openItem === index ? null : index;
  }
</script>

<section class="py-16 md:py-20">
  <div class="container mx-auto px-4">
    <!-- Heading -->
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold text-[hsl(0,0%,100%)] md:text-4xl">
        Frequently Asked Questions
      </h2>

      <p class="mx-auto max-w-xl text-muted-foreground">
        Find answers to common questions about our services and processes.
      </p>
    </div>

    <!-- Accordion -->
    <div class="mx-auto max-w-3xl">
      <div class="w-full">
        {#each faqs as faq, index}
          <div class="border-b border-border" >
            <!-- Trigger -->
            <button
              class="flex w-full items-center justify-between py-5 text-left text-base font-medium text-muted-foreground transition-colors hover:text-[hsl(217,91%,60%)] md:text-lg"
              on:click={() => toggle(index)}
            >
              {faq.question}

              <span class="ml-4 text-xl">
                {openItem === index ? "−" : "+"}
              </span>
            </button>

            <!-- Content -->
            {#if openItem === index}
              <div class="pb-5 text-[hsl(215,16%,47%)]" transition:slide={{duration:250}}>
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
