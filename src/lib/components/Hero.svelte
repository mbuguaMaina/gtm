<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import Counter from "./Counter.svelte";
	import WebsiteAuditModal from "./WebsiteAuditModal.svelte";
	import { ArrowBigRight, ChevronRight } from "@lucide/svelte";
const services = [
		"Performance Marketing",
		"SEO & Content Strategy",
		"Brand Positioning",
		"Conversion Optimization"
	];

	let activeIndex = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			activeIndex = (activeIndex + 1) % services.length;
		}, 2500);

		return () => clearInterval(interval);
	});

</script>
<section
  class="  h-[84dvh] mt-6  flex items-center justify-center overflow-hidden"
>
  <!-- Background Image -->
  <div
 
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/hero-background.jpg');"
  >
    <div
   
      class="absolute inset-0 bg-linear-to-r from-black/90 to-black/70"
    ></div>
  </div>

  <!-- Content -->
  <div
    data-lov-id="src/components/Hero.tsx:14:6"
    class="  z-10 container mx-auto px-6 text-center text-white animate-fade-up"
  >
 

<h1 in:fly={{ y: 30, duration: 600 }}>
			 We Build 
            <span class="text-green-500">Digital Products</span>
               People Actually Want to Use
			 
		</h1>


    <p
   
      class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
    >
    <!-- Transform your online presence with cutting-edge web development, strategic SEO, and stunning design solutions that convert visitors into customers. -->
     From high-converting websites to scalable web applications and marketing systems, we help businesses grow with confidence.
    </p>

    <!-- Buttons -->
    <div
  
      class="flex flex-wrap-reverse   gap-3 md:gap-4 justify-evenly md:justify-center items-center"
    >
      <a href="/portfolio"
     
        class="inline-flex items-center justify-center gap-2 font-medium
                 text-green-500     
              border-2 border-green-500
               duration-300 transform hover:scale-105 h-11 rounded-md
               text-lg px-8 py-3"
      >
        Our Work <ArrowBigRight />
      </a>

     <WebsiteAuditModal />
    </div>

    <!-- Stats -->
    <div
     
      class="mt-16 grid  grid-cols-3 gap-3 md:gap-8  max-w-4xl mx-auto"
    >

      <div class="text-center">
      <Counter
        value={5}
        duration={1600}
        suffix="+"
      />
        <div class="text-lg opacity-80">Years of Experience</div>
      </div>

      <div class="text-center">
      <Counter
        value={98}
        duration={1600}
        suffix="%"
      />
        <div class="text-lg opacity-80">Client Satisfaction</div>
      </div>

      <div class="text-center">
      <Counter
        value={24}
        duration={1600}
        suffix="/7"
      />
        <div class="text-lg opacity-80">Support Available</div>
      </div>

    </div>
  </div>
</section>

<style>
 

	h1 {
		font-size: clamp(2rem, 4vw, 2.7rem);
		font-weight: 700;
		line-height: 1.2;
		margin-bottom: 1rem;
	}

 

	p {
		font-size: 1.2rem;
		color: #cbd5e1;
		margin-bottom: 2rem;
	}

 

	button {
		padding: 0.9rem 1.6rem;
		font-size: 1rem;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
	}

	 
</style>