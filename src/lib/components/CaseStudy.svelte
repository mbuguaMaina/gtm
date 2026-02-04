<script lang="ts">
 import {Button,Card} from "flowbite-svelte"
  import caseStudyImage from "../assets/olethardware-case-study.jpg";
	import { ArrowRight, Lightbulb, Target, TrendingUp } from "@lucide/svelte";
 
</script>

<section
  class="
    py-10
    bg-linear-to-b from-background to-muted
    
  "
>
  <div class="container mx-auto px-2 md:px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-foreground  ">
        Featured Case Study
      </h2>

      <p class="text-xl text-muted-foreground   max-w-2xl mx-auto">
        See how we transformed Olet Hardware's Online presence, attracting over 100,000 customers and increasing sales by 300%.
      </p>
    </div>

    <div class="max-w-6xl mx-auto">
      <Card class="overflow-hidden border-accent/25   shadow-elegant">
        <div class="grid md:grid-cols-2 gap-0">
          <div class="relative">
            <img
              src={caseStudyImage}
              alt="Olethardware.com website showcase"
              class="w-full h-full object-cover"
            />

            <div
              class="
                absolute inset-0
                bg-linear-to-r from-primary/20 to-transparent
                
              "
            ></div>
          </div>

          <div class="p-8 md:p-12 flex flex-col justify-center">
            <h3 class="text-xl font-bold mb-4 text-foreground  ">
              How We Built a Modern E-Commerce Plartform for Olet Hardware
            </h3>

            <p class="text-lg text-muted-foreground  ">
              Transforming its online presence to attract customers who value their time while showcasing high-value products.
            </p>

            <div class="space-y-6 mb-8">
              <!-- Challenge -->
              <div class="flex items-start gap-4">
                <div
                  class="
                    bg-accent/10  
                    p-2 rounded-lg
                    
                  "
                >
                  <Target class="w-5 h-5 text-accent " />
                </div>

                <div>
                  <h4 class="font-semibold mb-1  ">
                    The Challenge
                  </h4>
                  <p class="text-sm text-muted-foreground  ">
                   Olet Hardware needed professional online presence to
                    showcase products and attract high-end clients.
                  </p>
                </div>
              </div>

              <!-- Solution -->
              <div class="flex items-start gap-4">
                <div
                  class="
                    bg-accent/10  
                    p-2 rounded-lg
                    
                  "
                >
                  <Lightbulb class="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h4 class="font-semibold mb-1 ">
                    The Solution
                  </h4>
                  <p class="text-sm text-muted-foreground ">
                    Clean, elegant website with intuitive navigation, high-quality
                    product gallery, and mobile optimization.
                  </p>
                </div>
              </div>

              <!-- Result -->
              <div class="flex items-start gap-4">
                <div
                  class="
                    bg-accent/10  
                    p-2 rounded-lg
                     
                  "
                >
                  <TrendingUp class="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h4 class="font-semibold mb-1  ">
                    The Result
                  </h4>
                  <p class="text-sm text-muted-foreground  ">
                    Professional digital showroom with custom product categories
                    and exceptional user experience.
                  </p>
                </div>
              </div>
            </div>

            <Button   class="w-fit bg-accent gap-1  group">
              View Full Case Study
              <ArrowRight
                class="
                  w-4 h-4
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</section>
