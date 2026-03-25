<script lang="ts">
	import { getImageUrl } from "$lib/sanity";

 
  import caseStudyImage from "../assets/olethardware-case-study.jpg";
	import {   Lightbulb, Target, TrendingUp } from "@lucide/svelte";
  
let { caseStudy=$bindable() } = $props();
 
$effect(() => {
  console.log("Received case study data:", caseStudy);
}); 
</script>

 
  <div class="container mx-auto px-2 rounded-md bg-secondary p-2 my-10  md:px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-foreground  ">
        Featured Case Study
      </h2>

      <p class="text-xl text-muted-foreground   max-w-2xl mx-auto">
        See how we transformed Business's Online presence, attracting more customers and increasing sales by over 25%.
      </p>
    </div>

 
      <div class="overflow-hidden rounded-md bg-background  mx-auto border-accent/25 w-full max-w-6xl shadow-elegant">
        <div class="flex flex-col md:flex-row w-full gap-0">
          <div class="relative flex-[1.2]">
            <enhanced:img
              src={getImageUrl(caseStudy.coverImage)!}
              alt="Olethardware.com website showcase"
              class="   object-cover "
            />

            <div
              class="
                absolute inset-0
                bg-linear-to-r from-primary/20 to-transparent
                
              "
            ></div>
          </div>

          <div class=" px-7 flex flex-col flex-1 justify-center">
            <h3 class="text-xl font-bold mb-4 text-foreground  ">
              {caseStudy.title}
            </h3>

            <p class="text-sm text-muted-foreground pb-6  ">
         {     caseStudy.excerpt}
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
                   {caseStudy.challenge}
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
                    {caseStudy.solution}
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
                    {caseStudy.results}
                  </p>
                </div>
              </div>
            </div>

            <!-- <Button   class="w-fit bg-accent gap-1  group">
              View Full Case Study
              <ArrowRight
                class="
                  w-4 h-4
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Button> -->
          </div>
        </div>
      </div>
  
  </div>
 
