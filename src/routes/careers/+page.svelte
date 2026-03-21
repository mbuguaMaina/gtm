<script lang="ts">
  // Svelte 5 runes
  let darkMode = $state(false);
  let hasOpenings = $state(true); // Toggle to simulate both states
  let submitted = $state(false);
  let submitting = $state(false);
  let activeTab = $state('all');

  // Form state
  let form = $state({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    portfolio: '',
    linkedin: '',
    message: ''
  });

  let formErrors:any = $state({});

  const jobOpenings = [
    {
      id: 1,
      title: 'Full-Stack Web Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Nairobi, Kenya',
      tags: ['engineering'],
      description: 'Build scalable, performant web applications using modern JavaScript frameworks. Work closely with our design and product teams to deliver exceptional user experiences.',
      requirements: ['3+ years with React/Vue/Svelte', 'Node.js & REST API experience', 'Git & CI/CD familiarity', 'Strong problem-solving skills'],
      posted: '5 days ago'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Nairobi, Kenya (Hybrid)',
      tags: ['design'],
      description: "Craft intuitive, conversion-focused digital experiences that make our clients look world-class. You'll lead design from wireframe to final handoff.",
      requirements: ['Figma & prototyping mastery', '2+ years UI/UX portfolio', 'Understanding of web development constraints', 'Strong visual communication skills'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Nairobi, Kenya',
      tags: ['marketing'],
      description: 'Drive client growth through data-led SEO strategies, PPC campaigns, and social media marketing. Own campaign performance from planning to reporting.',
      requirements: ['Google Ads & Meta Ads certified', 'SEO tools proficiency (Semrush/Ahrefs)', 'Analytical & reporting skills', 'Content strategy experience'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Sales & Business Development Executive',
      department: 'Sales',
      type: 'Full-time',
      location: 'Nairobi, Kenya',
      tags: ['sales'],
      description: 'Identify and close new business opportunities, build long-term client relationships, and help ambitious brands discover how GGM Technologies can transform their digital presence.',
      requirements: ['2+ years in tech/agency sales', 'Strong communication & negotiation', 'CRM experience', 'Self-driven with a growth mindset'],
      posted: '2 weeks ago'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Roles' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Sales' }
  ];

  const filteredJobs = $derived(
    activeTab === 'all'
      ? jobOpenings
      : jobOpenings.filter(j => j.tags.includes(activeTab))
  );

  const roleOptions = [
    'Web Developer (Frontend)',
    'Web Developer (Backend)',
    'Full-Stack Developer',
    'UI/UX Designer',
    'Graphic Designer',
    'Digital Marketing Specialist',
    'SEO Specialist',
    'Social Media Manager',
    'Sales Executive',
    'Project Manager',
    'Content Writer',
    'Other'
  ];

  function validateForm() {
    const errors:any = {};
    if (!form.name.trim()) errors.name = 'Full name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Valid email is required';
    if (!form.role) errors.role = 'Please select a role you are interested in';
    if (!form.experience) errors.experience = 'Please indicate your experience level';
    formErrors = errors;
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit() {
    if (!validateForm()) return;
    submitting = true;
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800));
    submitting = false;
    submitted = true;
  }

  function resetForm() {
    form = { name: '', email: '', phone: '', role: '', experience: '', portfolio: '', linkedin: '', message: '' };
    formErrors = {};
    submitted = false;
  }

  function toggleDark() {
    darkMode = !darkMode;
  }
</script>

<!-- Root wrapper with dark mode class -->
<div class={darkMode ? 'dark' : ''}>
  <div class="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">

    <!-- ───────── NAV ───────── -->
    <nav class="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="https://ggmtechnologies.co.ke" class="flex items-center gap-2.5 group" target="_blank" rel="noopener noreferrer">
          <div class="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span class="text-white font-black text-xs tracking-tight">GGM</span>
          </div>
          <span class="font-bold text-gray-900 dark:text-white text-sm tracking-tight hidden sm:block">
            GGM <span class="text-blue-600">Technologies</span>
          </span>
        </a>

        <div class="flex items-center gap-3">
          <!-- Dev toggle for demo: switch between openings states -->
          <button
            onclick={() => hasOpenings = !hasOpenings}
            class="text-xs px-3 py-1.5 rounded-full border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-blue-400 transition-colors"
            title="Toggle openings state (demo)"
          >
            {hasOpenings ? '📋 Has Openings' : '📭 No Openings'}
          </button>

          <!-- Dark mode toggle -->
          <button
            onclick={toggleDark}
            class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {#if darkMode}
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
              </svg>
            {:else}
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            {/if}
          </button>

          <a
            href="https://ggmtechnologies.co.ke/contact"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>

    <!-- ───────── HERO ───────── -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-950 text-white py-20 sm:py-28">
      <!-- Background grid pattern -->
      <div class="absolute inset-0 opacity-10" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E&quot;);"></div>

      <!-- Decorative blobs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-blue-100 text-sm font-medium mb-6 border border-white/20">
          <span class={`w-2 h-2 rounded-full ${hasOpenings ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`}></span>
          {hasOpenings ? 'We\'re Actively Hiring' : 'No Active Openings'}
        </span>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
          Build the Future of<br/>
          <span class="text-blue-200">Digital Africa</span> with Us
        </h1>

        <p class="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          GGM Technologies is a Nairobi-based agency crafting websites, digital campaigns, and web applications that help African businesses compete globally. Join our team of builders and creators.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          {#if hasOpenings}
            <a
              href="#openings"
              class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/30 text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              View Open Roles
            </a>
          {/if}
          <a
            href="#register"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors text-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            Stay Notified
          </a>
        </div>
      </div>
    </section>

    <!-- ───────── VALUES / CULTURE ───────── -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">Why Join GGM Technologies?</h2>
          <p class="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">We're a team that ships real products, learns fast, and supports each other's growth.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each [
            { icon: '🚀', title: 'Real Impact', desc: 'Your work ships to actual clients and drives their business growth from day one.' },
            { icon: '🌍', title: 'Kenyan-First', desc: 'We understand the African market deeply and build digital products that truly fit it.' },
            { icon: '📚', title: 'Continuous Learning', desc: 'Monthly skill sessions, tool access, and a culture that values curiosity and growth.' },
            { icon: '💡', title: 'Creative Freedom', desc: 'We value bold ideas. If you have a better way to do something, we want to hear it.' }
          ] as value}
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200 group">
              <div class="text-3xl mb-4">{value.icon}</div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{value.title}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.desc}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- ───────── JOB OPENINGS (when hasOpenings = true) ───────── -->
    {#if hasOpenings}
      <section id="openings" class="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">Open Positions</h2>
              <p class="text-gray-500 dark:text-gray-400">
                {filteredJobs.length} role{filteredJobs.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <!-- Filter tabs -->
            <div class="flex gap-2 flex-wrap">
              {#each tabs as tab}
                <button
                  onclick={() => activeTab = tab.id}
                  class={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              {/each}
            </div>
          </div>

          {#if filteredJobs.length === 0}
            <div class="text-center py-16 text-gray-400 dark:text-gray-600">
              <div class="text-5xl mb-4">🔍</div>
              <p class="font-semibold text-gray-500 dark:text-gray-400">No roles in this department right now.</p>
              <button onclick={() => activeTab = 'all'} class="mt-3 text-blue-600 text-sm hover:underline">View all roles</button>
            </div>
          {:else}
            <div class="grid gap-5">
              {#each filteredJobs as job}
                <div class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-200">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div class="flex-1">
                      <div class="flex items-center gap-3 flex-wrap mb-2">
                        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                          {job.department}
                        </span>
                        <span class="text-xs text-gray-400 dark:text-gray-500">{job.posted}</span>
                      </div>

                      <h3 class="text-lg font-black text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {job.title}
                      </h3>

                      <div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3 flex-wrap">
                        <span class="flex items-center gap-1">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          {job.location}
                        </span>
                        <span class="flex items-center gap-1">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          {job.type}
                        </span>
                      </div>

                      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{job.description}</p>

                      <div class="flex flex-wrap gap-2">
                        {#each job.requirements as req}
                          <span class="text-xs px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                            {req}
                          </span>
                        {/each}
                      </div>
                    </div>

                    <div class="sm:ml-6 flex sm:flex-col gap-3 sm:items-end sm:justify-start">
                      <a
                        href="#register"
                        onclick={() => { form.role = job.title; }}
                        class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors shadow-sm whitespace-nowrap"
                      >
                        Apply Now
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </section>
    {:else}
      <!-- ───────── NO OPENINGS STATE ───────── -->
      <section class="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-4xl">
            📭
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4">
            No Open Positions Right Now
          </h2>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 text-base">
            We don't have any active job openings at the moment, but our team is always growing. 
            Exceptional talent finds a home here — register below and we'll reach out when a role matches your profile.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {#each [
              { label: 'Avg. Response Time', value: '3 Days' },
              { label: 'Roles We Hire For', value: '10+' },
              { label: 'Team Members', value: 'Growing 🌱' }
            ] as stat}
              <div class="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                <div class="text-xl font-black text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            {/each}
          </div>

          <div class="flex items-center gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-left">
            <div class="w-10 h-10 flex-shrink-0 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class="text-sm text-blue-800 dark:text-blue-300">
              <strong>Tip:</strong> Register your interest below — we'll email you when a matching role opens. It takes less than 2 minutes.
            </p>
          </div>
        </div>
      </section>
    {/if}

    <!-- ───────── REGISTER FORM ───────── -->
    <section id="register" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <!-- Section header -->
        <div class="text-center mb-10">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            Opportunity Alerts
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3">
            Register Your Interest
          </h2>
          <p class="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            {hasOpenings
              ? "Don't see the right fit? Register and we'll notify you when a matching role opens."
              : "Be the first to know when we open new positions. Fill in your details and we'll reach out."}
          </p>
        </div>

        <!-- Form card -->
        <div class="bg-white dark:bg-gray-950 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">

          {#if submitted}
            <!-- Success state -->
            <div class="p-10 sm:p-14 text-center">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-3">You're on the list! 🎉</h3>
              <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                Thanks for your interest in joining GGM Technologies. We've received your details and will get back to you as soon as a matching opportunity arises.
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onclick={resetForm}
                  class="px-6 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  Submit Another
                </button>
                <a
                  href="https://ggmtechnologies.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          {:else}
            <!-- Form -->
            <div class="p-6 sm:p-10">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <!-- Name -->
                <div class="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="name">
                      Full Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      bind:value={form.name}
                      placeholder="e.g. Jane Wanjiku"
                      class={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                        formErrors.name
                          ? 'border-red-400 dark:border-red-600'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500'
                      }`}
                    />
                    {#if formErrors.name}
                      <p class="mt-1 text-xs text-red-500">{formErrors.name}</p>
                    {/if}
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="email">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      bind:value={form.email}
                      placeholder="you@email.com"
                      class={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                        formErrors.email
                          ? 'border-red-400 dark:border-red-600'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500'
                      }`}
                    />
                    {#if formErrors.email}
                      <p class="mt-1 text-xs text-red-500">{formErrors.email}</p>
                    {/if}
                  </div>
                </div>

                <!-- Phone -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    bind:value={form.phone}
                    placeholder="+254 7XX XXX XXX"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <!-- Role of Interest -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="role">
                    Role of Interest <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    bind:value={form.role}
                    class={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      formErrors.role
                        ? 'border-red-400 dark:border-red-600'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                  >
                    <option value="">Select a role...</option>
                    {#each roleOptions as opt}
                      <option value={opt}>{opt}</option>
                    {/each}
                  </select>
                  {#if formErrors.role}
                    <p class="mt-1 text-xs text-red-500">{formErrors.role}</p>
                  {/if}
                </div>

                <!-- Experience Level -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="experience">
                    Experience Level <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    bind:value={form.experience}
                    class={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${
                      formErrors.experience
                        ? 'border-red-400 dark:border-red-600'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500'
                    }`}
                  >
                    <option value="">Select level...</option>
                    <option value="intern">Intern / Student</option>
                    <option value="junior">Junior (0–2 years)</option>
                    <option value="mid">Mid-level (2–5 years)</option>
                    <option value="senior">Senior (5+ years)</option>
                    <option value="lead">Lead / Manager</option>
                  </select>
                  {#if formErrors.experience}
                    <p class="mt-1 text-xs text-red-500">{formErrors.experience}</p>
                  {/if}
                </div>

                <!-- Portfolio -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="portfolio">
                    Portfolio / Website
                  </label>
                  <input
                    id="portfolio"
                    type="url"
                    bind:value={form.portfolio}
                    placeholder="https://yoursite.com"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <!-- LinkedIn -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="linkedin">
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedin"
                    type="url"
                    bind:value={form.linkedin}
                    placeholder="https://linkedin.com/in/..."
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <!-- Message -->
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5" for="message">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="message"
                    bind:value={form.message}
                    rows="4"
                    placeholder="Briefly describe your background, what you're passionate about, and why you want to join GGM Technologies..."
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 resize-none"
                  ></textarea>
                </div>

              </div>

              <!-- Privacy note + Submit -->
              <div class="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p class="text-xs text-gray-400 dark:text-gray-600 flex-1">
                  By registering, you agree to GGM Technologies storing your details to match you with future opportunities. We'll never share your data.
                </p>
                <button
                  onclick={handleSubmit}
                  disabled={submitting}
                  class="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-bold transition-colors shadow-sm shadow-blue-600/20 w-full sm:w-auto justify-center"
                >
                  {#if submitting}
                    <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Submitting...
                  {:else}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    Register My Interest
                  {/if}
                </button>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </section>

   

  </div>
</div>
 
   