<script lang="ts">
  import { ArrowRight, Mail, Phone, MapPin } from '@lucide/svelte';

  // If you have a Button component, import it:
  // import Button from '@/lib/components/ui/Button.svelte';
</script>

<section class="py-24 bg-gradient-dark relative overflow-hidden">


  <div class="container mx-auto px-6 relative z-10">
    <div class="max-w-4xl mx-auto text-center animate-fade-up">
      <h2 class="text-3xl text-white md:text-5xl font-bold mb-6">
        Ready to <span class="gradient-text">Transform</span> Your Business?
      </h2>

      <p class="text-muted text-lg mb-10 max-w-2xl mx-auto">
        Get a free consultation and discover how we can help you build a
        stunning digital presence that converts visitors into customers.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <!-- Primary -->
        <button
          class="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-400 text-primary-foreground hover:opacity-90 transition"
        >
          Get Free Consultation
          <ArrowRight
            class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
          />
        </button>

        <!-- Outline -->
        <button
          class="inline-flex items-center justify-center px-6 py-3 rounded-lg  border border-blue-400 text-white hover:text-blue-500 transition"
        >
          View Our Work
        </button>
      </div>

      <!-- Contact Info -->
      <div class="grid sm:grid-cols-3 gap-8 text-left">
        <!-- Email -->
        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0"
          >
            <Mail class="w-5 h-5 text-[hsl(219,88%,59%)]" />
          </div>

          <div>
            <div class="text-sm text-muted mb-1">Email Us</div>
            <a
              href="mailto:ggmtechhub@gmail.com"
              class="font-medium text-zinc-100 hover:text-[hsl(219,88%,59%)] transition-colors"
            >
               ggmtechhub@gmail.com
            </a>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0"
          >
            <Phone class="w-5 h-5 text-[hsl(219,88%,59%)]" />
          </div>

          <div>
            <div class="text-sm text-muted mb-1">Call Us</div>
            <a
              href="tel:+254700000000"
              class="font-medium text-zinc-100 hover:text-[hsl(219,88%,59%)] transition-colors"
            >
              +254 700 000 000
            </a>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0"
          >
            <MapPin class="w-5 h-5 text-blue-500" />
          </div>

          <div>
            <div class="text-sm text-zinc-100 mb-1">Visit Us</div>
            <div class="font-medium text-white">Nairobi, Kenya</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
