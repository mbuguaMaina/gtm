<script lang="ts">
  import { PortableText } from "@portabletext/svelte"
	import { portableComponents } from "./components/portableComponents.svelte";
	import { Facebook, Linkedin, Twitter } from "@lucide/svelte";
    const post:any = {
  title: "The Art of Building Products That People Actually Want to Use",

  description:
    "Exploring the intersection of design thinking, user empathy, and technical craftsmanship — and why the best products feel invisible.",

  tags: ["Product Design", "Engineering", "UX", "Startups"],

  createdAt: "2026-03-04T12:00:00Z",

//   mainImage: {
//     asset: {
//       url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2000"
//     }
//   },

  author: {
    name: "Alex Chen",

    bio: "Product designer and engineer with 10 years of experience building tools for creative professionals. Writes about design systems, developer experience, and the craft of building thoughtful software.",

    image: {
      asset: {
        url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face"
      }
    }
  },

  body: [
  {
      _type: "block",
      style: "h1",
      children: [
        {
          _type: "span",
          text: "Why Most Products Fail"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Every year, thousands of products launch with great fanfare — polished landing pages, enthusiastic Product Hunt campaigns, and ambitious roadmaps.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio accusantium delectus quibusdam nulla temporibus rerum nam magnam eaque iure, laborum unde ex! Atque, quis voluptatibus facilis repellat minima quod fugiat dolore, quisquam ut, natus dicta inventore officia. Ipsum, soluta itaque!"
        }
      ]
    },

    {
      _type: "image",
      asset: {
        url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2000"
      },
      alt: "Clean product workspace"
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Yet the vast majority fade into obscurity within months. The pattern is almost always the same: teams build what they think users want, rather than what users actually need."
        }
      ]
    },

    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "Why Most Products Fail"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "The difference between a product that endures and one that disappears isn't usually technical sophistication. It's empathy."
        }
      ]
    },

    {
      _type: "block",
      style: "blockquote",
      children: [
        {
          _type: "span",
          text: "The best interface is no interface. The best interaction is the one that feels so natural you forget it's designed."
        }
      ]
    },

    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "The Three Pillars of Product Craft"
        }
      ]
    },

    {
      _type: "block",
      style: "h3",
      children: [
        {
          _type: "span",
          text: "1. Radical Simplicity"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Simplicity isn't about having fewer features — it's about making the right features feel effortless."
        }
      ]
    },

    {
      _type: "image",
      asset: {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1400"
      },
      alt: "Team discussing product design",
      type:"small"
    },

    {
      _type: "block",
      style: "h3",
      children: [
        {
          _type: "span",
          text: "2. Emotional Resonance"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Great products make people feel something. Not through gratuitous animations, but through moments of genuine usefulness."
        }
      ]
    },

    {
      _type: "block",
      style: "h3",
      children: [
        {
          _type: "span",
          text: "3. Technical Integrity"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Users may not understand your architecture, but they feel it. A well-built product is fast, reliable, and predictable."
        }
      ]
    },

    {
      _type: "block",
      style: "h2",
      children: [
        {
          _type: "span",
          text: "Putting It Into Practice"
        }
      ]
    },

    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Start with one real user. Build the smallest thing that improves their day. Measure behavior instead of opinions."
        }
      ]
    }
  ]
}
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}



  const icons = [Twitter, Facebook, Linkedin]

</script>
<article class=" mx-auto pb-10 max-w-7xl">


<section class="mx-auto max-w-5xl">


<header class="mx-auto px-6 pt-12 pb-8">

<a href="/blog" class="flex my-3.5 pb-2 items-center gap-2 text-sm font-medium text-muted-foreground">
← Back to blogs
</a>

<div class="flex flex-wrap gap-2 mb-6">
{#each post.tags as tag}
<span class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 dark:text-slate-100 font-medium text-xs tracking-widest uppercase px-3 py-1">
{tag}
</span>
{/each}
</div>

<h1 class="font-serif text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.1] tracking-tight text-foreground">
{post.title}
</h1>

<p class="mt-6 text-[clamp(1.125rem,2vw,1.25rem)] leading-relaxed text-muted-foreground ">
{post.description}
</p>
<!-- author info and date -->

<div class="mt-8 flex items-center gap-4">

<img
src={post.author.image?.asset?.url}
alt={post.author.name}
class="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
/>

<div>
<p class="font-semibold m-0">{post.author.name}</p>

<div class="flex items-center gap-3 text-sm text-slate-500 mt-0.5">
<span>{formatDate(post.createdAt)}</span>
</div>

</div>
</div>
<!-- author info and date -->


</header>

<!-- FEATURED IMAGE -->

<div class="px-6">
<div class="overflow-hidden rounded-2xl">
{#if post?.mainImage?.asset?.url}
<img
src={post?.mainImage?.asset?.url}
class="w-full aspect-2/1 object-cover object-center block"
alt="Featured image for {post.title}"
/>
{/if}

</div>
</div>
</section>
<div class="  max-w-3xl mx-auto my-10">

<PortableText
  value={post.body}
  components={portableComponents}
/>
<div
  style="margin-top:3rem; display:flex; align-items:center; gap:0.75rem;"
>
  <span
    style="font-size:0.875rem; font-weight:500;"
  >
    Share this article :
  </span>

  {#each icons as Icon}
    <button
      
      class="bg-slate-50 cursor-pointer dark:bg-slate-800 text-slate-700 p-2 rounded-full dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
    >
      <Icon style="width:16px;height:16px;" />
    </button>
  {/each}
</div>

<div class="max-w-180 mx-auto px-6 py-16">
  <div class="rounded-xl border border-gray-200 dark:border-slate-800  bg-white cursor-pointer dark:bg-slate-900 text-slate-700 p-2 dark:text-slate-200   shadow-sm overflow-hidden">
    <div class="p-8 flex flex-col gap-5">
      
      <div class="flex gap-5 items-start flex-wrap">
        
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face"
          alt="Alex Chen"
          class="w-20 h-20 rounded-full object-cover border-2 border-gray-200 shrink-0"
        />

        <div class="flex-1">
          
          <p class="text-xs font-semibold uppercase tracking-widest ">
            Written by
          </p>

          <p class="mt-1 text-xl font-bold ">
            Alex Chen
          </p>

          <p class="mt-2 text-base leading-relaxed text-gray-500">
            Product designer and engineer with 10 years of experience building
            tools for creative professionals. Currently leading design at a
            stealth startup. Writes about the craft of product building.
          </p>

          <div class="mt-4 flex gap-2">
            
            <button class="inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-slate-100 text-gray-900 text-xs font-medium px-3 py-1.5 hover:bg-gray-50 transition">
              <Twitter class="w-3 h-3" />
              Follow
            </button>

            <button class="inline-flex items-center rounded-full bg-gray-100 text-gray-900 text-xs font-medium px-3 py-1.5 hover:bg-gray-200 transition">
              More articles
            </button>

          </div>

        </div>
      </div>

    </div>
  </div>
</div>
</div>


</article>