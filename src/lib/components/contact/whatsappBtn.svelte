<script lang="ts">
  import { MessageCircle } from "@lucide/svelte";

  const whatsappNumber = "+254700412990"; // Replace with actual number
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
</script>

<section class="bg-muted/30 py-12 md:py-16">
  <div class="container mx-auto px-4 text-center">
    <div class="mx-auto max-w-xl">
      <h2 class="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        Prefer WhatsApp?
      </h2>
      <p class="mb-6 text-muted-foreground">
        Get instant responses by starting a WhatsApp conversation with our team.
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-3 bg-[hsl(142,70%,45%)] px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[hsl(142,70%,40%)] hover:scale-105 hover:shadow-xl rounded-lg"
      >
        <MessageCircle class="h-6 w-6" />
        Start a Conversation
      </a>
    </div>
  </div>
</section>
