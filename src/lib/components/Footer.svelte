<script lang="ts">
  import {Button} from "flowbite-svelte";
  import { Mail, Phone, MapPin } from "@lucide/svelte";
</script>

<footer class="bg-primary text-primary-foreground py-16">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
      <div class="col-span-1 md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">GGM Technologies</h3>
        <p class="text-primary-foreground/80 mb-6 max-w-md">
          We specialize in creating beautiful e-commerce experiences for brands of all sizes. 
          Let's build something amazing together.
        </p>
        <Button class="bg-accent text-primary-foreground"  size="lg">
          Start Your Project
        </Button>
      </div>

      <div>
        <h4 class="font-semibold mb-4">Services</h4>
        <ul class="space-y-2 text-primary-foreground/80">
          <li> Web Design & Development</li>
          <li> E-commerce Solutions</li>
          <li> SEO & Content</li>
          <li> Social Media Advertising</li>
        </ul>
      </div>
<div>
  <h4 class="font-semibold mb-4">Company</h4>
  <ul class="space-y-3"><li><a href="/about" class="text-primary-foreground/80  transition-colors duration-300">About Us</a></li>
    <li><a href="/projects" class="text-primary-foreground/80  transition-colors duration-300">Our Work</a></li>
    <li><a href="/careers" class="text-primary-foreground/80  transition-colors duration-300">Careers</a></li>
    <li><a href="/blog" class="text-primary-foreground/80  transition-colors duration-300">Blog</a></li></ul></div>
      <div>
        <h4 class="font-semibold mb-4">Contact</h4>
        <div class="space-y-3">
          <div class="flex items-center gap-3 text-primary-foreground/80">
            <Mail class="w-4 h-4" />
            <span>ggmtechnologies@gmail.com</span>
          </div>
          <div class="flex items-center gap-3 text-primary-foreground/80">
            <Phone class="w-4 h-4" />
            <span>0700412990</span>
          </div>
          <div class="flex items-center gap-3 text-primary-foreground/80">
            <MapPin class="w-4 h-4" />
            <span>Nairobi, Kenya.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p class="text-primary-foreground/60 text-sm">
        © 2024 GGM Technologies. All rights reserved.
      </p>
      <div class="flex gap-6 mt-4 md:mt-0">
        <a href="/privacy-policy" class="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
          Privacy Policy
        </a>
        <a href="terms-of-service" class="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>
