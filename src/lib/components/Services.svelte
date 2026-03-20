<script lang="ts">
	import { services } from "$lib";
     import { Card  } from "flowbite-svelte";
  
</script>

<section class="py-20 bg-background  ">
  <div class="container mx-auto px-6">
    <div class="text-center mb-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-foreground  ">
        Our Core Services
      </h2>

      <p class=" text-muted-foreground   max-w-3xl mx-auto">
       At GGM Technologies, we help businesses thrive in the digital world. From websites to digital marketing and business automation, we provide end-to-end solutions that drive results.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {#each services as service}
      <a 
        href="/services?tag={service.tag}"
      >
        <Card
      
          class="
            group transition-all duration-300
            hover:-translate-y-1 hover:shadow-card
            relative overflow-hidden
text-center
p-3
          bg-secondary
            border-accent/20  
            rounded-2xl
            shadow-muted shadow-md
          "
          
        >
         
            <div
              class="
                mx-auto mb-4 p-3 rounded-full w-fit
                bg-accent/10  
                group-hover:bg-accent/20
                transition-colors
              "
            >
              <service.icon
                class="w-8 h-8 text-accent  "
              />
            </div>

            <h2 class="text-xl font-semibold  ">
              {service.title}
            </h2>
        

       
            <p
              class="
                text-muted-foreground  
                text-center leading-relaxed
              "
            >
              {service.description}
            </p>
         
        </Card></a>
      {/each}
    </div>
  </div>
</section>
