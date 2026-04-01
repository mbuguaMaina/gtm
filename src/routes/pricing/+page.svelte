<script lang="ts">
	import Faq from "$lib/components/contact/faq.svelte";
	import WhatsappBtn from "$lib/components/contact/whatsappBtn.svelte";
	import Pricing from "$lib/components/Pricing.svelte";

	// Dark mode state - can be controlled by parent component or global store
	let isDarkMode = $state(false);

	// Billing toggle
	let isAnnual = $state(false);

	// Pricing plans
	const plans = [
		{
			name: 'Starter',
			description: 'Perfect for small businesses starting their digital journey',
			monthlyPrice: 49999,
			annualPrice: 499990,
			features: [
				'Social Media Management (3 platforms)',
				'Content Creation (8 posts/month)',
				'Basic Analytics & Reporting',
				'Email Marketing (up to 1,000 subscribers)',
				'Monthly Strategy Session',
				'Email Support',
				'Brand Guidelines Setup'
			],
			highlighted: false,
			cta: 'Get Started'
		},
		{
			name: 'Growth',
			description: 'Ideal for growing businesses ready to scale',
			monthlyPrice: 129999,
			annualPrice: 1299990,
			features: [
				'Social Media Management (5 platforms)',
				'Content Creation (20 posts/month)',
				'Advanced Analytics & Reporting',
				'Email Marketing (up to 5,000 subscribers)',
				'SEO Optimization & Strategy',
				'Google Ads Management (up to KES 100k spend)',
				'Bi-weekly Strategy Sessions',
				'Priority Support',
				'Influencer Outreach',
				'A/B Testing & Optimization'
			],
			highlighted: true,
			badge: 'Most Popular',
			cta: 'Start Free Consultation'
		},
		{
			name: 'Enterprise',
			description: 'For established brands seeking comprehensive marketing solutions',
			monthlyPrice: null,
			annualPrice: null,
			customPricing: true,
			features: [
				'Full-Service Digital Marketing',
				'Unlimited Content Creation',
				'Custom Analytics Dashboard',
				'Email Marketing (unlimited subscribers)',
				'Advanced SEO & SEM Strategy',
				'Unlimited Ad Spend Management',
				'Weekly Strategy & Planning',
				'Dedicated Account Manager',
				'Video Production & Photography',
				'PR & Media Relations',
				'Market Research & Competitor Analysis',
				'Custom Campaigns & Promotions'
			],
			highlighted: false,
			cta: 'Contact Sales'
		}
	];

	// Additional features
	const additionalFeatures = [
		{
			category: 'Creative Services',
			items: ['Graphic Design', 'Copywriting', 'Video Editing', 'Brand Development']
		},
		{
			category: 'Digital Marketing',
			items: ['Social Media Marketing', 'PPC Campaigns', 'SEO Services', 'Email Marketing']
		},
		{
			category: 'Analytics & Reporting',
			items: ['Monthly Performance Reports', 'ROI Tracking', 'Competitor Analysis', 'Campaign Insights']
		}
	];

 

	let openFaqIndex = $state(null);

	function toggleFaq(index:any) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	function formatPrice(price:any) {
		return new Intl.NumberFormat('en-KE', {
			style: 'currency',
			currency: 'KES',
			minimumFractionDigits: 0
		}).format(price);
	}

	function getPrice(plan:any) {
		if (plan.customPricing) return 'Custom';
		const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
		return formatPrice(price);
	}

	function getSavings(plan:any) {
		if (plan.customPricing) return 0;
		const annualTotal = plan.monthlyPrice * 12;
		const savings = annualTotal - plan.annualPrice;
		return Math.round((savings / annualTotal) * 100);
	}
</script>

<div  >
	<!-- Hero Section -->
	<section class="bg-linear-to-br from-green-600 via-green-700 grid place-items-center h-auto to-green-900 pt-20 pb-5 md:py-20  text-white dark:from-green-800 dark:via-green-900 dark:to-gray-900">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
				Services That Drives Results
			</h1>

            <h2 class="mb-2 text-2xl font-semibold md:text-4xl">Transparent pricing</h2> 
			<p class="mx-auto mb-8 max-w-3xl text-xl text-green-100 md:text-2xl">
		  No hidden fees, no surprises—just growth.
			</p>

			<!-- Billing Toggle -->
			<!-- <div class="inline-flex items-center gap-4 rounded-full bg-white/10 p-1 backdrop-blur-sm">
				<button
					onclick={() => (isAnnual = false)}
					class="rounded-full px-6 py-2 text-sm font-medium transition {!isAnnual
						? 'bg-white text-green-600'
						: 'text-white hover:text-green-100'}"
				>
					Monthly
				</button>
				<button
					onclick={() => (isAnnual = true)}
					class="rounded-full px-6 py-2 text-sm font-medium transition {isAnnual
						? 'bg-white text-green-600'
						: 'text-white hover:text-green-100'}"
				>
					Annual
					<span class="ml-2 text-xs text-green-300">Save 17%</span>
				</button>
			</div> -->
		</div>
	</section>

	<!-- Pricing Cards -->
	<!-- <section class="bg-gray-50 py-16 dark:bg-gray-900">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid gap-8 lg:grid-cols-3">
				{#each plans as plan}
					<div
						class="relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 {plan.highlighted
							? 'border-green-600 ring-2 ring-green-600 dark:border-green-500 dark:ring-green-500'
							: 'border-gray-200'}"
					>
						{#if plan.badge}
							<div
								class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white dark:bg-green-500"
							>
								{plan.badge}
							</div>
						{/if}

						<div class="mb-6">
							<h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
								{plan.name}
							</h3>
							<p class="text-gray-600 dark:text-gray-400">{plan.description}</p>
						</div>

						<div class="mb-6">
							<div class="flex items-baseline">
								<span class="text-5xl font-bold text-gray-900 dark:text-white">
									{getPrice(plan)}
								</span>
								{#if !plan.customPricing}
									<span class="ml-2 text-gray-600 dark:text-gray-400">
										/{isAnnual ? 'year' : 'month'}
									</span>
								{/if}
							</div>
							{#if isAnnual && !plan.customPricing && getSavings(plan) > 0}
								<p class="mt-2 text-sm text-green-600 dark:text-green-400">
									Save {getSavings(plan)}% with annual billing
								</p>
							{/if}
						</div>

						<button
							class="mb-6 w-full rounded-lg px-6 py-3 font-semibold transition {plan.highlighted
								? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'
								: 'border-2 border-green-600 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-950'}"
						>
							{plan.cta}
						</button>

						<div class="flex-1">
							<ul class="space-y-3">
								{#each plan.features as feature}
									<li class="flex items-start gap-3">
										<svg
											class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5 13l4 4L19 7"
											></path>
										</svg>
										<span class="text-gray-700 dark:text-gray-300">{feature}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section> -->

	<!-- Feature Comparison -->
	<!-- <section class="bg-white py-16 dark:bg-gray-800">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
					What's Included in Every Plan
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					All plans come with these essential features
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each additionalFeatures as section}
					<div class="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
						<h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
							{section.category}
						</h3>
						<ul class="space-y-2">
							{#each section.items as item}
								<li class="flex items-start gap-2">
									<svg
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 13l4 4L19 7"
										></path>
									</svg>
									<span class="text-gray-700 dark:text-gray-300">{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section> -->

   <Pricing />
	<!-- FAQ Section -->
	<section class="bg-gray-50 py-16 dark:bg-gray-900">
		 

     <Faq />
			 
 
	</section>

	<!-- CTA Section -->
	<section class="bg-gradient-to-r from-green-600 to-green-800 py-16 text-white dark:from-green-700 dark:to-green-900">
		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Ready to Grow Your Business?</h2>
			<p class="mb-8 text-xl text-green-100">
				Let's create a marketing strategy that delivers real results for your brand.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
			 <WhatsappBtn />
				<a
				
					href="mailto:ggmtechhub@gmail.com"
					class="inline-block rounded-lg border-2 border-white bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800 dark:bg-green-800 dark:hover:bg-green-900"
				>
					Mail Us
				</a>
			</div>
			<p class="mt-6 text-sm text-green-200">
				No commitment required • Free marketing audit • Custom strategy proposal
			</p>
		</div>
	</section>
</div>

<style>
	/* Ensure dark mode classes work properly */
	:global(.dark) {
		color-scheme: dark;
	}
</style>