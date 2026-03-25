<script lang="ts">
	import { createMeta } from "$lib/meta";
	import { ServiceSchema, WebPageSchema } from "$lib/schemas";
	import SEO from "$lib/SEO.svelte";

	// Svelte 5 runes for reactive state
	let selectedCategory = $state('all');
	let currentPage = $state(1);
	let email = $state('');
	let mobileMenuOpen = $state(false);
let {data}=$props()
 
	// Blog posts data
	const blogPosts = $derived(data.allPosts)

	const featuredPost = $derived(data.featuredPosts[0])
 

	const categories:any[] = $derived(['all', ...new Set(blogPosts.category)]);

	// Derived state for filtered posts
	let filteredPosts = $derived(
		selectedCategory === 'all' 
			? blogPosts 
			: blogPosts.filter((blogPosts:any) => blogPosts.category.toLowerCase() === selectedCategory.toLowerCase())
	);
$inspect(filteredPosts)
	// Functions
	function selectCategory(category:any) {
		selectedCategory = category.toLowerCase();
		currentPage = 1;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function handleSubscribe(e:any) {
		e.preventDefault();
		if (email) {
			alert(`Thanks for subscribing with ${email}!`);
			email = '';
		}
	}

	function changePage(page:number) {
		currentPage = page;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const meta = createMeta({
		title: "Articles - GGM Technologies",
		description:
			"Stay updated with the latest insights, trends, and innovations in technology",
		path: "/articles",
		keywords: ["Articles","Blog", "GGM Technologies", "Technology", "Innovation", "Business", "Tutorials"]
	})

	const schemas = [
		WebPageSchema({
			title: meta.title,
			description: meta.description,
			url: meta.url
		}),
		ServiceSchema({
			name: "Articles",
			description: meta.description,
			url: meta.url
		})
	]


</script>

 <SEO {schemas} {meta} />

 <article class=" animate-fade-up">


	<!-- Hero Section -->
	<section class="bg-linear-to-r from-green-600 via-green-800 to-green-900 text-white py-20 ">
		<div class="container mx-auto px-6 text-center">
			<h2 class="text-5xl font-bold mb-4">Our Articles</h2>
			<p class="text-xl text-green-100 max-w-2xl mx-auto">Stay updated with the latest insights, trends, and innovations in technology</p>
		</div>
	</section>

	<!-- Featured Post -->
	<section class="container mx-auto px-6 -mt-16 mb-16">
		<div class="bg-secondary rounded-2xl shadow-xl overflow-hidden">
			<div class="md:flex">
				<div class="md:w-1/2">
					<enhanced:img src={featuredPost.mainImage} alt="Featured" class="w-full h-full object-cover" />
				</div>
				<div class="md:w-1/2 p-8 md:p-12">
					<span class="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">Featured</span>
					<h3 class="text-3xl font-bold   mb-4">{featuredPost.title}</h3>
					<p class="  mb-6">{featuredPost.excerpt}</p>
					<div class="flex items-center mb-6">
						<div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center   font-semibold mr-3">
							{featuredPost.authors?.[0].name.slice(0,1)}
						</div>
						<div>
							<p class="text-sm font-semibold  ">{featuredPost.author}</p>
							<p class="text-xs  ">{featuredPost.date} · {featuredPost.readTime}</p>
						</div>
					</div>
					<a href="/articles/{featuredPost.slug}" class="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition">
						Read More 
						<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Categories Filter -->
	<section class="container mx-auto px-6 mb-8">
		<div class="flex flex-wrap gap-3">
			{#each categories as category}
				<button 
					onclick={() => selectCategory(category)}
					class="px-5 py-2 rounded-full font-medium transition
						{selectedCategory === category.toLowerCase() 
							? 'bg-green-600 text-white hover:bg-green-700' 
							: 'bg-white text-slate-600 border border-slate-200 hover:bg-green-50 hover:text-green-600'}"
				>
					{category === 'all' ? 'All Posts' : category}
				</button>
			{/each}
		</div>
	</section>

	<!-- Blog Posts Grid -->
	<section class="container mx-auto px-6 pb-20">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredPosts as post (post._id)}
				<a href="/articles/{post.slug}" class="bg-secondary border dark:border-green-500/10 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
				 
					<enhanced:img src={post.mainImage} alt="Blog post" class="w-full h-48 object-cover" />
					<div class="p-6">
						<span class="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold mb-3">
							{post.category.title}
						</span>
						<h3 class="text-xl font-bold  mb-3 hover:text-green-600 transition cursor-pointer">
							{post.title}
						</h3>
						<p class="  text-sm mb-4">{post.excerpt}</p>
						<div class="flex items-center justify-between pt-4 border-t border-accent/30">
							<div class="flex items-center">
								<div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center   text-xs font-semibold mr-2">
									{post.authors?.[0].name.slice(0,1)}
								</div>
								<span class="text-xs  ">{post.author}</span>
							</div>
							<span class="text-xs  ">{post.date}</span>
						</div>
					</div>
				</a>
			{/each}
		</div>

		{#if filteredPosts.length === 0}
			<div class="text-center py-12">
				<p class="text-slate-600 text-lg">No posts found in this category.</p>
			</div>
		{/if}

		 
		<div class="flex justify-center mt-12 space-x-2">
			<button 
				onclick={() => changePage(Math.max(1, currentPage - 1))}
				class="px-4 py-2 bg-white text-slate-600 rounded-lg border border-slate-200 hover:bg-green-50 hover:border-green-200 transition"
			>
				Previous
			</button>
			{#each [1, 2, 3] as page}
				<button 
					onclick={() => changePage(page)}
					class="px-4 py-2 rounded-lg font-semibold
						{currentPage === page 
							? 'bg-green-600 text-white' 
							: 'bg-white text-slate-600 border border-slate-200 hover:bg-green-50 hover:border-green-200 transition'}"
				>
					{page}
				</button>
			{/each}
			<button 
				onclick={() => changePage(Math.min(3, currentPage + 1))}
				class="px-4 py-2 bg-white text-slate-600 rounded-lg border border-slate-200 hover:bg-green-50 hover:border-green-200 transition"
			>
				Next
			</button>
		</div>
	</section>

	<!-- Newsletter Section -->
	<section class="bg-linear-to-r from-green-600 to-green-800 text-white py-16">
		<div class="container mx-auto px-6 text-center">
			<h3 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
			<p class="text-green-100 mb-8 max-w-xl mx-auto">Get the latest tech insights, industry news, and exclusive updates delivered to your inbox.</p>
			<form onsubmit={handleSubscribe} class="max-w-md mx-auto flex gap-3">
				<input 
					type="email" 
					bind:value={email}
					placeholder="Enter your email" 
					required
					class="flex-1 px-4 py-3 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
				>
				<button 
					type="submit"
					class="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition"
				>
					Subscribe
				</button>
			</form>
		</div>
	</section>
 
 </article>
 

 