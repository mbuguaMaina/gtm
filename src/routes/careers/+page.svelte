<script>
	// Set this to true when you have open positions, false when you don't
	let hasOpenPositions = $state(false);

	// Job listings data
	const jobs = [
		{
			id: 1,
			title: 'Senior Software Engineer',
			location: 'Nairobi, Kenya',
			type: 'Full-time',
			posted: '2 days ago',
			description:
				"We're looking for an experienced software engineer to lead development on our core platform. You'll work with modern technologies and mentor junior developers.",
			skills: ['React', 'Node.js', 'AWS', 'MongoDB']
		},
		{
			id: 2,
			title: 'Product Designer (UI/UX)',
			location: 'Nairobi, Kenya / Remote',
			type: 'Full-time',
			posted: '1 week ago',
			description:
				"Join our design team to create beautiful, intuitive user experiences. You'll work on products used by thousands of users daily.",
			skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
		},
		{
			id: 3,
			title: 'DevOps Engineer',
			location: 'Nairobi, Kenya',
			type: 'Full-time',
			posted: '3 days ago',
			description:
				"Help us build and maintain robust infrastructure. You'll automate deployments, ensure system reliability, and optimize performance.",
			skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
		},
		{
			id: 4,
			title: 'Data Scientist',
			location: 'Nairobi, Kenya / Remote',
			type: 'Full-time',
			posted: '5 days ago',
			description:
				'Use data to drive insights and build predictive models. Work with large datasets and cutting-edge machine learning techniques.',
			skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL']
		},
		{
			id: 5,
			title: 'Marketing Manager',
			location: 'Nairobi, Kenya',
			type: 'Full-time',
			posted: '1 week ago',
			description:
				"Lead our marketing efforts and brand strategy. You'll develop campaigns, manage budgets, and grow our market presence.",
			skills: ['Digital Marketing', 'SEO/SEM', 'Content Strategy', 'Analytics']
		}
	];

	const benefits = [
		{
			title: 'Innovation First',
			description:
				'Work with cutting-edge technologies and contribute to groundbreaking projects that shape the future.',
			icon: 'lightning'
		},
		{
			title: 'Collaborative Culture',
			description:
				'Join a diverse team of talented professionals who support each other and grow together.',
			icon: 'team'
		},
		{
			title: 'Learning & Development',
			description:
				'Access continuous learning opportunities, training programs, and career advancement paths.',
			icon: 'book'
		},
		{
			title: 'Work-Life Balance',
			description:
				'Flexible working hours, remote work options, and generous leave policies to maintain your wellbeing.',
			icon: 'smile'
		},
		{
			title: 'Competitive Compensation',
			description:
				'Attractive salary packages, performance bonuses, and comprehensive benefits including health insurance.',
			icon: 'dollar'
		},
		{
			title: 'Global Impact',
			description:
				"Work on projects that reach users worldwide and make a meaningful difference in people's lives.",
			icon: 'globe'
		}
	];

	const hiringSteps = [
		{
			number: 1,
			title: 'Apply',
			description: 'Submit your application with your resume and cover letter'
		},
		{
			number: 2,
			title: 'Screen',
			description: 'Initial phone or video call to discuss your background and goals'
		},
		{
			number: 3,
			title: 'Interview',
			description: 'Technical and cultural fit interviews with team members'
		},
		{
			number: 4,
			title: 'Offer',
			description: 'Receive your offer and join the GGM Technologies family'
		}
	];
</script>

<!-- Hero Section -->
<section class="bg-linear-to-br from-green-600 via-green-700 to-green-900 text-white py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Join Our Team</h1>
		<p class="mx-auto mb-8 max-w-3xl text-xl text-green-100 md:text-2xl">
			Build the future of technology with us. We're looking for talented individuals passionate
			about innovation.
		</p>
		<a
			href="#openings"
			class="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition hover:bg-green-50"
		>
			View Open Positions
		</a>
	</div>
</section>

<!-- Why Join Us Section -->
<section class="bg-background py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Join GGM Technologies?</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				We offer more than just a job. We provide a platform for growth, innovation, and making a
				real impact.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each benefits as benefit}
				<div class="rounded-xl bg-green-50 dark:bg-secondary p-6 transition hover:shadow-lg">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
						{#if benefit.icon === 'lightning'}
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
						{:else if benefit.icon === 'team'}
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
								></path>
							</svg>
						{:else if benefit.icon === 'book'}
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
								></path>
							</svg>
						{:else if benefit.icon === 'smile'}
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						{:else if benefit.icon === 'dollar'}
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						{:else if benefit.icon === 'globe'}
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
						{/if}
					</div>
					<h3 class="mb-2 text-xl font-semibold text-foreground">{benefit.title}</h3>
					<p class="text-muted-foreground">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Open Positions Section -->
<section id="openings" class=" py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">Open Positions</h2>
			{#if hasOpenPositions}
				<p class="text-lg text-muted-foreground">Explore opportunities to join our growing team</p>
			{/if}
		</div>

		{#if !hasOpenPositions}
			<!-- No Positions Available Message -->
			<div class="mx-auto max-w-3xl">
				<div class="rounded-xl border border-secondary bg-secondary p-12 text-center shadow-sm">
					<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full dark:bg-background bg-green-100">
						<svg class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-foreground">No Open Positions at the Moment</h3>
					<p class="mb-6 text-lg text-muted-foreground">
						Thank you for your interest in joining GGM Technologies! While we don't have any open
						positions right now, we're always growing and would love to hear from talented individuals
						like you.
					</p>
					<p class="mb-8 text-gray-600">
						We encourage you to submit your resume for future opportunities. We'll keep your
						information on file and reach out when a position that matches your skills becomes
						available.
					</p>
					<div class="flex flex-col justify-center gap-4 sm:flex-row">
						<a href="mailto:ggmtechhub@gmail.com"
							class="rounded-lg bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700"
						>
							Submit Your Resume
						</a>
						<a
							href="mailto:ggmtechhub@gmail.com"
							class="rounded-lg border-2 border-green-600 bg-white px-8 py-3 font-medium text-green-600 transition hover:bg-green-50"
						>
							Contact HR Team
						</a>
					</div>
					<div class="mt-8 border-t border-gray-200 pt-8">
						<p class="text-sm text-gray-500">
							Want to stay updated? Follow us on social media or check back regularly for new
							opportunities.
						</p>
					</div>
				</div>
			</div>
		{:else}
			<!-- Job Listings -->
			<div class="space-y-6">
				{#each jobs as job (job.id)}
					<div
						class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
					>
						<div class="flex flex-col md:flex-row md:items-center md:justify-between">
							<div class="flex-1">
								<h3 class="mb-2 text-xl font-semibold text-gray-900">{job.title}</h3>
								<div class="mb-3 flex flex-wrap gap-4 text-sm text-gray-600">
									<span class="flex items-center">
										<svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											></path>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											></path>
										</svg>
										{job.location}
									</span>
									<span class="flex items-center">
										<svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											></path>
										</svg>
										{job.type}
									</span>
									<span class="flex items-center">
										<svg class="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											></path>
										</svg>
										Posted {job.posted}
									</span>
								</div>
								<p class="mb-3 text-gray-600">
									{job.description}
								</p>
								<div class="flex flex-wrap gap-2">
									{#each job.skills as skill}
										<span
											class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
										>
											{skill}
										</span>
									{/each}
								</div>
							</div>
							<div class="mt-4 md:ml-6 md:mt-0">
								<button
									class="w-full rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition hover:bg-green-700 md:w-auto"
								>
									Apply Now
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Can't find position -->
			<div class="mt-12 rounded-xl border border-green-100 bg-green-50 p-8 text-center">
				<h3 class="mb-3 text-2xl font-semibold text-gray-900">Don't see the right position?</h3>
				<p class="mx-auto mb-6 max-w-2xl text-gray-600">
					We're always looking for talented individuals. Send us your resume and tell us what makes
					you special.
				</p>
				<button
					class="rounded-lg bg-green-600 px-8 py-3 font-medium text-white transition hover:bg-green-700"
				>
					Submit General Application
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- Application Process -->
<section class="bg-white dark:bg-background py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Hiring Process</h2>
			<p class="text-lg text-muted-foreground">Simple, transparent, and designed to get to know you better</p>
		</div>

		<div class="grid gap-8 md:grid-cols-4">
			{#each hiringSteps as step}
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white"
					>
						{step.number}
					</div>
					<h3 class="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
					<p class="text-muted-foreground">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-linear-to-r from-green-600 to-green-800 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold md:text-4xl">Ready to Make an Impact?</h2>
		<p class="mb-8 text-xl text-green-100">
			Join us in shaping the future of technology in Kenya and beyond.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="#openings"
				class="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition hover:bg-green-50"
			>
				View Open Positions
			</a>
			<a
				href="mailto:ggmtechhub@gmail.com"
				class="inline-block rounded-lg border-2 border-white bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
			>
				Contact HR Team
			</a>
		</div>
	</div>
</section>