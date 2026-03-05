
<script lang="ts">
import { Search, Target, Share2, FileText, Palette, BarChart3 } from "@lucide/svelte";

const services = [
  { icon: Search, title: "SEO", desc: "Dominate search rankings with data-backed strategies that drive organic traffic and qualified leads." },
  { icon: Target, title: "PPC Advertising", desc: "Precision-targeted campaigns that maximize ROAS and convert clicks into customers." },
  { icon: Share2, title: "Social Media", desc: "Build engaged communities and viral brand presence across every platform that matters." },
  { icon: FileText, title: "Content Marketing", desc: "Compelling content that educates, entertains, and converts — from blog posts to video." },
  { icon: Palette, title: "Branding", desc: "Distinctive brand identities that capture attention and build lasting emotional connections." },
  { icon: BarChart3, title: "Analytics", desc: "Deep performance insights and reporting that turn data into actionable growth strategies." },
];
</script>


 
    <section class="py-24   ">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-accent md:text-[hsl(38,92%,50%)] text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 class="text-4xl md:text-5xl font-bold mt-3 text-foreground mb-4">Services That <span class="text-gradient">Deliver</span></h2>
          <p class="text-[hsl(215,20%,65%)] max-w-2xl mx-auto">End-to-end marketing solutions engineered for measurable growth.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each services as s (s.title)}
            <div
class="group relative p-8 rounded-xl border border-border bg-background  dark:bg-[hsl(222,47%,14%)] hover:border-[hsl(263,70%,50%)]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div class="w-12 h-12 rounded-lg dark:bg-slate-900 bg-slate-100  flex items-center justify-center mb-5 group-hover:bg-[hsl(263,70%,50%)]/20 transition-colors">
                <s.icon class="h-6 w-6 text-blue-500 dark:text-[hsl(38,92%,50%)]" />
              </div>
              <h3 class="text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
              <p class="text-[hsl(215,20%,65%)] text-sm leading-relaxed">{s.desc}</p>
            </div>
    {/each}
        </div>
      </div>
    </section>
 

 