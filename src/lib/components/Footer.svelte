<script lang="ts">
  import { Mail, Phone, MapPin } from "@lucide/svelte";
	import ProjectModal from "./ProjectModal.svelte";
	import { services } from "$lib";
 
 
  let {openModal = $bindable(false)}:{openModal:boolean} = $props();
  
</script>

<footer class="bg-zinc-950 text-zinc-100 py-16">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
      <div class="col-span-1 md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">GGM Technologies</h3>
        <p class="text-white mb-6 max-w-md">
     Helping Kenyan businesses move from ideas to impact with modern websites, smart SEO strategies, and results-driven digital marketing. GGM Technologies
 creates fast, scalable, and user-focused digital experiences designed to increase visibility, improve credibility, and accelerate business growth in today’s competitive digital world.
        </p>
        <!-- <Button onclick={() => openModal = !openModal} class="bg-[#22c55e] text-zinc-100"  size="lg">
          Start Your Project
        </Button> -->
        <ProjectModal />
      </div>

      <div>
        <h4 class="font-semibold mb-4">Services</h4>
        <ul class="space-y-2 text-white">
        {#each services as service}
          <li> <a href="/services?tag={service.tag}">{service.title}</a></li>
        {/each}
       
        </ul>
      </div>
<div>
  <h4 class="font-semibold mb-4">Company</h4>
  <ul class="space-y-3"><li><a href="/about" class="text-zinc-100/80  transition-colors duration-300">About Us</a></li>
    <li><a href="/portfolio" class="text-zinc-100/80  transition-colors duration-300">Our Work</a></li>
    <!-- <li><a href="/careers" class="text-zinc-100/80  transition-colors duration-300">Careers</a></li> -->
    <li><a href="/articles" class="text-zinc-100/80  transition-colors duration-300">Blog</a></li></ul></div>
      <div>
        <h4 class="font-semibold mb-4">Contact</h4>
        <div class="space-y-3">
          <div class="flex items-center gap-3 text-zinc-100/80">
            <Mail class="w-4 h-4" />
            <span>ggmtechhub@gmail.com</span>
          </div>
          <div class="flex items-center gap-3 text-zinc-100/80">
            <Phone class="w-4 h-4" />
            <span>0700412990</span>
          </div>
          <div class="flex items-center gap-3 text-zinc-100/80">
            <MapPin class="w-4 h-4" />
            <span>Nairobi, Kenya.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-zinc-700 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-zinc-100/60 text-sm">
        © 2024 GGM Technologies. All rights reserved.
      </p>
      <div class="flex gap-6 mt-4 md:mt-0">
        <a href="/privacy-policy" class="text-zinc-100/60 hover:text-zinc-100 text-sm transition-colors">
          Privacy Policy
        </a>
        <a href="terms-of-service" class="text-zinc-100/60 hover:text-zinc-100 text-sm transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>
