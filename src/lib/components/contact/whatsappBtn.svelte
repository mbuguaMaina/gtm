<script lang="ts">
  import { MessageCircle } from "@lucide/svelte";

  const whatsappNumber = "+254700412990"; // Replace with actual number
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
</script>

 
    

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-3 bg-[hsl(142,70%,45%)] px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[hsl(142,70%,40%)] hover:scale-105 hover:shadow-xl rounded-lg"
      >
        <MessageCircle class="h-6 w-6" />
        Chat on WhatsApp
      </a>
   
 