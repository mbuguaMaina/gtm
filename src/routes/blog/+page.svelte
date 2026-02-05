<script lang="ts">
	// Svelte 5 runes for reactive state
	let selectedCategory = $state('all');
	let currentPage = $state(1);
	let email = $state('');
	let mobileMenuOpen = $state(false);

	// Blog posts data
	const blogPosts = [
		{
			id: 1,
			title: 'AI Integration: Best Practices for 2026',
			excerpt: 'Discover how businesses can effectively integrate AI solutions to improve efficiency and customer experience.',
			category: 'Technology',
			author: 'Sarah Kimani',
			authorInitials: 'SK',
			date: 'Jan 28, 2026',
			image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80'
		},
		{
			id: 2,
			title: 'Cybersecurity Trends You Can\'t Ignore',
			excerpt: 'Learn about the latest cybersecurity threats and how to protect your organization in an evolving digital landscape.',
			category: 'Innovation',
			author: 'David Ochieng',
			authorInitials: 'DO',
			date: 'Jan 25, 2026',
			image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80'
		},
		{
			id: 3,
			title: 'Digital Transformation for SMEs',
			excerpt: 'A comprehensive guide to help small and medium enterprises navigate their digital transformation journey.',
			category: 'Business',
			author: 'Mary Akinyi',
			authorInitials: 'MA',
			date: 'Jan 20, 2026',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
		},
		{
			id: 4,
			title: 'Building Scalable Web Applications',
			excerpt: 'Step-by-step guide on designing and deploying web applications that can grow with your business needs.',
			category: 'Tutorials',
			author: 'Peter Kariuki',
			authorInitials: 'PK',
			date: 'Jan 15, 2026',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
		},
		{
			id: 5,
			title: 'Mobile App Development Trends',
			excerpt: 'Explore the latest trends in mobile development and what frameworks are leading the industry forward.',
			category: 'Technology',
			author: 'Grace Njeri',
			authorInitials: 'GN',
			date: 'Jan 10, 2026',
			image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80'
		},
		{
			id: 6,
			title: 'Remote Work: Tools & Best Practices',
			excerpt: 'Essential tools and strategies for managing remote teams effectively in the modern workplace.',
			category: 'Business',
			author: 'Tom Maina',
			authorInitials: 'TM',
			date: 'Jan 5, 2026',
			image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
		}
	];

	const featuredPost = {
		title: 'The Future of Cloud Computing in Kenya',
		excerpt: 'Exploring how cloud technology is transforming businesses across East Africa and what it means for local enterprises looking to scale.',
		author: 'John Mwangi',
		authorInitials: 'JM',
		date: 'February 3, 2026',
		readTime: '8 min read',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
	};

	const categories = ['all', 'Technology', 'Innovation', 'Business', 'Tutorials'];

	// Derived state for filtered posts
	let filteredPosts = $derived(
		selectedCategory === 'all' 
			? blogPosts 
			: blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase())
	);

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
</script>

<svelte:head>
	<title>Blog - GGM Technologies</title>
</svelte:head>

 
	<!-- Hero Section -->
	<section class="bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
		<div class="container mx-auto px-6 text-center">
			<h2 class="text-5xl font-bold mb-4">Our Blog</h2>
			<p class="text-xl text-blue-100 max-w-2xl mx-auto">Stay updated with the latest insights, trends, and innovations in technology</p>
		</div>
	</section>

	<!-- Featured Post -->
	<section class="container mx-auto px-6 -mt-16 mb-16">
		<div class="bg-white rounded-2xl shadow-xl overflow-hidden">
			<div class="md:flex">
				<div class="md:w-1/2">
					<img src={featuredPost.image} alt="Featured" class="w-full h-full object-cover">
				</div>
				<div class="md:w-1/2 p-8 md:p-12">
					<span class="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Featured</span>
					<h3 class="text-3xl font-bold text-slate-800 mb-4">{featuredPost.title}</h3>
					<p class="text-slate-600 mb-6">{featuredPost.excerpt}</p>
					<div class="flex items-center mb-6">
						<div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
							{featuredPost.authorInitials}
						</div>
						<div>
							<p class="text-sm font-semibold text-slate-800">{featuredPost.author}</p>
							<p class="text-xs text-slate-500">{featuredPost.date} · {featuredPost.readTime}</p>
						</div>
					</div>
					<a href="/" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
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
							? 'bg-blue-600 text-white hover:bg-blue-700' 
							: 'bg-white text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-blue-600'}"
				>
					{category === 'all' ? 'All Posts' : category}
				</button>
			{/each}
		</div>
	</section>

	<!-- Blog Posts Grid -->
	<section class="container mx-auto px-6 pb-20">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredPosts as post (post.id)}
				<article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
					<img src={post.image} alt="Blog post" class="w-full h-48 object-cover">
					<div class="p-6">
						<span class="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-3">
							{post.category}
						</span>
						<h3 class="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition cursor-pointer">
							{post.title}
						</h3>
						<p class="text-slate-600 text-sm mb-4">{post.excerpt}</p>
						<div class="flex items-center justify-between pt-4 border-t border-slate-100">
							<div class="flex items-center">
								<div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
									{post.authorInitials}
								</div>
								<span class="text-xs text-slate-600">{post.author}</span>
							</div>
							<span class="text-xs text-slate-500">{post.date}</span>
						</div>
					</div>
				</article>
			{/each}
		</div>

		{#if filteredPosts.length === 0}
			<div class="text-center py-12">
				<p class="text-slate-600 text-lg">No posts found in this category.</p>
			</div>
		{/if}

		<!-- Pagination -->
		<div class="flex justify-center mt-12 space-x-2">
			<button 
				onclick={() => changePage(Math.max(1, currentPage - 1))}
				class="px-4 py-2 bg-white text-slate-600 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition"
			>
				Previous
			</button>
			{#each [1, 2, 3] as page}
				<button 
					onclick={() => changePage(page)}
					class="px-4 py-2 rounded-lg font-semibold
						{currentPage === page 
							? 'bg-blue-600 text-white' 
							: 'bg-white text-slate-600 border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition'}"
				>
					{page}
				</button>
			{/each}
			<button 
				onclick={() => changePage(Math.min(3, currentPage + 1))}
				class="px-4 py-2 bg-white text-slate-600 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition"
			>
				Next
			</button>
		</div>
	</section>

	<!-- Newsletter Section -->
	<section class="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16">
		<div class="container mx-auto px-6 text-center">
			<h3 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
			<p class="text-blue-100 mb-8 max-w-xl mx-auto">Get the latest tech insights, industry news, and exclusive updates delivered to your inbox.</p>
			<form onsubmit={handleSubscribe} class="max-w-md mx-auto flex gap-3">
				<input 
					type="email" 
					bind:value={email}
					placeholder="Enter your email" 
					required
					class="flex-1 px-4 py-3 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
				>
				<button 
					type="submit"
					class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
				>
					Subscribe
				</button>
			</form>
		</div>
	</section>
 

 

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
		margin: 0;
		padding: 0;
	}
</style>