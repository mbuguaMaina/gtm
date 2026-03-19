<script lang="ts">
  // ── TYPES ──────────────────────────────────────────────────
  export type PricingPackage = {
    planName:    string;    // e.g. "Growth", "Starter", "Authority"
    serviceName: string;    // e.g. "SEO Optimisation"
    serviceVal:  string;    // chip val: "seo" | "ppc" | "social" | "content" | "design" | "dev" | "maintenance" | "ecommerce" | "branding"
    price:       string;    // e.g. "KES 75,000" or "Custom"
    priceUnit?:  string;    // e.g. "/ month" or "one-time project"
    features?:   string[];  // shown in the modal's package banner
    budgetIndex?: number;   // 0–10 index into budgetMap; auto-derived from price if omitted
    timeline?:   string;    // pre-selected timeline val; defaults to "1month"
    isFeatured?: boolean;   // renders "Most Popular" accent on the button
  };

  // ── PROPS ──────────────────────────────────────────────────
  const {
    title       = $bindable("Start Your Project"),
    description = $bindable(""),
    package: pkg,
  }: {
    title?:       string;
    description?: string;
    package?:     PricingPackage;
  } = $props();

  // ── MODAL STATE ────────────────────────────────────────────
  let overlayOpen = $state(false);
  let currentStep = $state(0);
  let submitted   = $state(false);
  let submitting  = $state(false);
  let refNumber   = $state("");
  const totalSteps = 5;

  // ── FORM STATE ─────────────────────────────────────────────
  let firstName        = $state("");
  let lastName         = $state("");
  let email            = $state("");
  let phone            = $state("");
  let company          = $state("");
  let role             = $state("");
  let website          = $state("");
  let contactMethod    = $state("email");

  let selectedServices = $state<string[]>([]);
  let projectType      = $state("");
  let industry         = $state("");
  let referralSource   = $state("");

  let projectName        = $state("");
  let projectDescription = $state("");
  let targetAudience     = $state("");
  let goals              = $state("");
  let competitors        = $state("");
  let priority           = $state("normal");
  let uploadedFiles      = $state<File[]>([]);

  let budgetIndex     = $state(2);
  let timeline        = $state("1month");
  let startDate       = $state("");
  let additionalNotes = $state("");

  let errors       = $state<Record<string, string>>({});
  let termsAccepted = $state(false);
  let isDragging   = $state(false);

  // ── STATIC DATA ────────────────────────────────────────────
  const services = [
    { val: "seo",         label: "SEO Optimisation"  },
    { val: "ppc",         label: "Paid Ads / PPC"    },
    { val: "social",      label: "Social Media"       },
    { val: "content",     label: "Content Marketing" },
    { val: "design",      label: "Web Design"        },
    { val: "dev",         label: "Web Development"   },
    { val: "maintenance", label: "Maintenance"       },
    { val: "ecommerce",   label: "E-commerce"        },
    { val: "branding",    label: "Branding"          },
  ];

  const contactMethods = [
 
    { val: "whatsapp", label: "💬 WhatsApp"    },
    { val: "call",     label: "📞 Phone Call"  },
    { val: "zoom",     label: "🎥 Zoom/Meet" },
  ];

  const priorities = [
    { val: "normal", label: "Normal", icon: "🟢" },
    { val: "high",   label: "High",   icon: "🟡" },
    { val: "urgent", label: "Urgent", icon: "🔴" },
  ];

  const timelines = [
    { val: "asap",     title: "ASAP",       sub: "Rush delivery"    },
    { val: "2weeks",   title: "1–2 Weeks",  sub: "Fast turnaround"  },
    { val: "1month",   title: "1 Month",    sub: "Standard"         },
    { val: "2months",  title: "2–3 Months", sub: "Full build"       },
    { val: "flexible", title: "Flexible",   sub: "No hard deadline" },
    { val: "ongoing",  title: "Ongoing",    sub: "Monthly retainer" },
  ];

  const budgetMap = [
    "Under KES 20,000",
    "KES 20,000 – 50,000",
    "KES 50,000 – 100,000",
    "KES 100,000 – 200,000",
    "KES 200,000 – 350,000",
    "KES 350,000 – 500,000",
    "KES 500,000 – 750,000",
    "KES 750,000 – 1M",
    "KES 1M – 2M",
    "KES 2M – 5M",
    "KES 5M+",
  ];

  const projectTypes = [
    "New website from scratch",
    "Website redesign",
    "Ongoing marketing retainer",
    "One-time campaign",
    "E-commerce store setup",
    "Web application / portal",
    "Full digital package",
    "Other",
  ];

  const industries = [
    "Retail & E-commerce",
    "Food & Hospitality",
    "Healthcare & Wellness",
    "Real Estate & Construction",
    "Education & Training",
    "Finance & Insurance",
    "Technology & SaaS",
    "Legal & Professional Services",
    "NGO & Nonprofit",
    "Government & Public Sector",
    "Beauty & Fashion",
    "Agriculture & Food Production",
    "Media & Entertainment",
    "Other",
  ];

  const stepLabels = ["Contact", "Service", "Project", "Budget", "Review"];

  // ── DERIVED ────────────────────────────────────────────────
  let budgetLabel = $derived(budgetMap[budgetIndex]);

  let summaryRows = $derived<[string, string][]>([
    ...(pkg
      ? [[
          "Package",
          `${pkg.planName} — ${pkg.serviceName} · ${pkg.price}${pkg.priceUnit ? " " + pkg.priceUnit : ""}`,
        ] as [string, string]]
      : []),
    ["Contact",      `${firstName} ${lastName}`.trim() || "—"],
    ["Email",        email    || "—"],
    ["Phone",        phone    || "—"],
    ["Company",      company  || "Not provided"],
    ["Contact via",  contactMethods.find(c => c.val === contactMethod)?.label ?? "—"],
    [
      "Services",
      selectedServices.length
        ? services.filter(s => selectedServices.includes(s.val)).map(s => s.label).join(", ")
        : "—",
    ],
    ["Project Type", projectType || "—"],
    ["Industry",     industry    || "—"],
    ["Project",      projectName || "—"],
    ["Description",  projectDescription || "—"],
    ["Audience",     targetAudience || "Not specified"],
    ["Budget",       budgetLabel],
    ["Timeline",     timelines.find(t => t.val === timeline)?.title ?? "—"],
    ["Priority",     priority.charAt(0).toUpperCase() + priority.slice(1)],
    ["Files",        uploadedFiles.length ? `${uploadedFiles.length} file(s) attached` : "None"],
    ["Notes",        additionalNotes || "None"],
  ]);

  // ── PACKAGE HELPERS ────────────────────────────────────────
  /** Derive a budget slider index from a price string like "KES 75,000" */
  function guessBudgetIndex(price: string): number {
    if (!price || price.toLowerCase() === "custom") return 5;
    const n = parseInt(price.replace(/[^\d]/g, ""), 10);
    if (isNaN(n))         return 5;
    if (n < 20_000)       return 0;
    if (n < 50_000)       return 1;
    if (n < 100_000)      return 2;
    if (n < 200_000)      return 3;
    if (n < 350_000)      return 4;
    if (n < 500_000)      return 5;
    if (n < 750_000)      return 6;
    if (n < 1_000_000)    return 7;
    if (n < 2_000_000)    return 8;
    if (n < 5_000_000)    return 9;
    return 10;
  }

  function applyPackage() {
    if (!pkg) return;
    selectedServices = [pkg.serviceVal];
    budgetIndex      = pkg.budgetIndex ?? guessBudgetIndex(pkg.price);
    timeline         = pkg.timeline   ?? "1month";
  }

  // ── MODAL CONTROL ──────────────────────────────────────────
  function openModal() {
    // reset all fields
    firstName = lastName = email = phone = company = role = website = "";
    contactMethod = "email";
    selectedServices = [];
    projectType = industry = referralSource = "";
    projectName = projectDescription = targetAudience = goals = competitors = "";
    priority = "normal";
    uploadedFiles = [];
    budgetIndex = 2;
    timeline = "1month";
    startDate = additionalNotes = "";
    errors = {};
    termsAccepted = false;
    submitted = false;

    applyPackage();                          // apply package pre-fills on top

    overlayOpen = true;
    currentStep = 0;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlayOpen = false;
    document.body.style.overflow = "";
  }

  // ── VALIDATION ─────────────────────────────────────────────
  function validateStep(step: number): boolean {
    const e: Record<string, string> = {};
    if (step === 0) {
      if (!firstName.trim()) e.firstName = "First name is required";
      if (!lastName.trim())  e.lastName  = "Last name is required";
      if (!email.trim() || !email.includes("@")) e.email = "Valid email is required";
      if (!phone.trim())     e.phone     = "Phone number is required";
    }
    if (step === 1) {
      if (!selectedServices.length) e.services    = "Select at least one service";
      if (!projectType)              e.projectType = "Please select a project type";
      if (!industry)                 e.industry    = "Please select your industry";
    }
    if (step === 2) {
      if (!projectName.trim())        e.projectName        = "Project name is required";
      if (!projectDescription.trim()) e.projectDescription = "Please describe your project";
    }
    if (step === 3) {
      if (!timeline) e.timeline = "Please select a timeline";
    }
    errors = e;
    return Object.keys(e).length === 0;
  }

  function next() { if (validateStep(currentStep) && currentStep < totalSteps - 1) currentStep++; }
  function back() { errors = {}; if (currentStep > 0) currentStep--; }

  // ── FILE & SERVICE HELPERS ─────────────────────────────────
  function toggleService(val: string) {
    // prevent deselecting the locked plan service
    if (pkg?.serviceVal === val && selectedServices.includes(val)) return;
    selectedServices = selectedServices.includes(val)
      ? selectedServices.filter(s => s !== val)
      : [...selectedServices, val];
  }

  function handleFiles(files: FileList | null) {
    if (!files) return;
    uploadedFiles = [
      ...uploadedFiles,
      ...[...files].filter(f => f.size <= 10 * 1024 * 1024),
    ].slice(0, 8);
  }

  function removeFile(i: number) { uploadedFiles = uploadedFiles.filter((_, idx) => idx !== i); }
  function fmtSize(b: number) {
    return b < 1_048_576 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1_048_576).toFixed(1)} MB`;
  }

  // ── SUBMIT ─────────────────────────────────────────────────
  function submitRequest() {
    submitting = true;
    setTimeout(() => {
      submitting = false;
      submitted  = true;
      refNumber  =
        "GGM-" +
        Math.random().toString(36).toUpperCase().slice(2, 8) +
        "-" +
        Date.now().toString().slice(-4);
    }, 1400);
  }

  // ── SHARED STYLE HELPERS ───────────────────────────────────
  const baseInput =
    "w-full rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-zinc-100   ";
  const focusRing =
    "border-gray-200 bg-gray-50 focus:border-green-400 focus:bg-white focus:shadow-[0_0_0_3px] focus:shadow-green-500/10 dark:border-green-400/15 dark:bg-green-400/5 dark:focus:border-green-400 dark:focus:bg-green-400/8";
  const errorRing = "border-red-400 bg-red-50 dark:border-red-400/50 dark:bg-red-400/8";

  function inputCls(hasError: boolean, extra = "") {
    return `${baseInput} ${hasError ? errorRing : focusRing} ${extra}`;
  }

  const selectCls =
    "w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-green-400 focus:bg-white focus:shadow-[0_0_0_3px] focus:shadow-green-500/10 dark:border-green-400/15 dark:bg-green-400/5  placeholder:text-zinc-100 dark:focus:border-green-400 dark:focus:bg-green-400/8";
  const plainInput =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-zinc-100 focus:border-green-400 focus:bg-white focus:shadow-[0_0_0_3px] focus:shadow-green-500/10 dark:border-green-400/15 dark:bg-green-400/5   dark:focus:border-green-400 dark:focus:bg-green-400/8";
  const labelCls =
    "mb-1.5 block text-[10px] font-bold uppercase tracking-widest  ";

  // ── PORTAL ACTION ──────────────────────────────────────────
  // Teleports the node out of the component DOM tree and appends
  // it directly to <body>, so z-index, overflow:hidden, CSS
  // transforms, and stacking contexts on parent elements never
  // clip or obscure the modal.
  function portal(node: HTMLElement) {
    document.body.appendChild(node);
    return {
      destroy() {
        node.remove();
      },
    };
  }
</script>


 
{#if pkg}
 
  <button
    onclick={openModal}
    class="group relative w-full overflow-hidden rounded-xl border px-4 py-2.5 text-sm font-bold transition-all duration-200 active:scale-[0.98] bg-linear-to-r  
      {pkg.isFeatured
        ? ' ring border-0 ring-accent from-accent  to-accent/80 shadow-hero transform scale-105'
        : 'shadow-card hover:shadow-elegant border border-accent text-accent ring-0'}"
  >
    <!-- shimmer sweep on featured -->
    {#if pkg.isFeatured}
      <span class="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>
    {/if}
    <span class="relative flex items-center justify-center gap-2">
      Get Started with {pkg.planName}
      <svg
        class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </button>

{:else}
  <!-- GENERIC BUTTON -->
  <button
    onclick={openModal}
    class="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-green-950 shadow-lg shadow-green-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-green-400/30 active:scale-95 dark:bg-green-400 dark:text-green-950 dark:hover:bg-green-300"
  >
    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none">
      <path d="M10 2l8 4.5v7L10 18l-8-4.5v-7L10 2z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M10 2v16M2 6.5l8 5 8-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    {title}
  </button>
{/if}


 
{#if overlayOpen}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  use:portal
  class="fixed inset-0 z-999 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
  onclick={closeModal}
>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_interactive_supports_focus -->
<div
  role="dialog"
  aria-modal="true"
  onclick={(e) => e.stopPropagation()}
  class="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-green-500/20 bg-white shadow-2xl shadow-black/40 dark:border-green-400/15 dark:bg-[#0f1c12]"
  style="max-height: 92vh;"
>

  <!-- ── HEADER ────────────────────────────────────────────── -->
  <div class="flex shrink-0 items-start justify-between border-b border-green-500/10 px-6 py-5 dark:border-green-400/10">
    <div class="flex flex-col gap-1.5">
   
      <!-- Title -->
      <h2 class="font-syne text-2xl font-extrabold tracking-tight text-gray-900 dark:text-green-50">
        {#if pkg}
          Get Started with <span class="font-instrument italic  dark:text-green-400">{pkg.planName}</span>
        {:else}
          Start Your <span class="font-instrument italic  dark:text-green-400">Project</span>
        {/if}
      </h2>
    </div>
    <!-- Close -->
    <button
      onclick={closeModal}
      aria-label="Close"
      class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-400 transition-all hover:border-red-300 hover:bg-red-50 hover:text-red-500 dark:border-green-400/15 dark:bg-green-400/5 dark:text-green-600 dark:hover:border-red-400/40 dark:hover:bg-red-400/10 dark:hover:text-red-400"
    >
      <svg class="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
        <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
 


  <!-- ── PROGRESS ───────────────────────────────────────────── -->
  {#if !submitted}
  <div class="flex shrink-0 items-center gap-1.5 border-b border-green-500/10 px-6 py-4 dark:border-green-400/10">
    {#each stepLabels as label, i}
      <div class="flex flex-col items-center gap-1.5">
        <div class="flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold transition-all duration-300
          {i < currentStep
            ? 'border-green-500 bg-green-500 text-green-950 dark:border-green-400 dark:bg-green-400'
            : i === currentStep
            ? 'border-green-500 bg-green-50 text-green-600 shadow-[0_0_0_3px] shadow-green-500/15 dark:border-green-400 dark:bg-green-400/10 dark:text-green-400'
            : 'border-gray-200 bg-white text-gray-400 dark:border-green-400/15 dark:bg-transparent dark:text-green-700'}">
          {#if i < currentStep}
            <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          {:else}{i + 1}{/if}
        </div>
        <span class="hidden text-[9px] font-semibold uppercase tracking-wider sm:block
          {i === currentStep ? 'text-green-600 dark:text-green-400' : i < currentStep ? '/70 ' : 'text-gray-400 dark:text-green-800'}">
          {label}
        </span>
      </div>
      {#if i < stepLabels.length - 1}
        <div class="mb-4 h-px flex-1 transition-all duration-500
          {i < currentStep ? 'bg-green-400/50' : 'bg-gray-200 dark:bg-green-400/10'}">
        </div>
      {/if}
    {/each}
  </div>
  {/if}

  <!-- ── BODY ───────────────────────────────────────────────── -->
  <div
    class="flex-1 overflow-y-auto px-6 py-5"
    style="scrollbar-width:thin;scrollbar-color:rgba(74,222,128,.2) transparent;"
  >

    <!-- SUCCESS ──────────────────────────────────────────────── -->
    {#if submitted}
      <div class="flex flex-col items-center gap-4 py-10 text-center">
        <div class="flex h-16 w-16 items-center justify-center rounded-full border-2 border-green-500 bg-green-50  dark:border-green-400 dark:bg-green-400/10 dark:text-green-400">
          <svg class="h-7 w-7" viewBox="0 0 28 28" fill="none">
            <path d="M5 14l6 6 12-12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <h3 class="font-syne text-2xl font-extrabold text-gray-900 dark:text-green-50">
            Request <span class="font-instrument italic  dark:text-green-400">Submitted!</span>
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-500 dark:text-green-600">
            {#if pkg}
              Your <strong class="text-gray-700 dark:text-green-300">{pkg.planName} — {pkg.serviceName}</strong> request has been received.
            {:else}
              Your project request has been received.
            {/if}
            <br/>Our team will reach out within <strong class="text-gray-700 dark:text-green-400">24 hours</strong>.
          </p>
        </div>
        <div class="rounded-xl border border-green-500/25 bg-green-50 px-6 py-3 text-center dark:border-green-400/20 dark:bg-green-400/8">
          <p class="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-green-600">Reference Number</p>
          <p class="mt-1 font-syne text-lg font-bold tracking-widest text-green-600 dark:text-green-400">{refNumber}</p>
        </div>
        <button onclick={closeModal}
          class="mt-2 rounded-xl bg-green-500 px-7 py-2.5 text-sm font-bold text-green-950 transition-all hover:-translate-y-0.5 hover:bg-green-400 dark:bg-green-400 dark:hover:bg-green-300">
          Close Window
        </button>
      </div>

    <!-- ── STEP 1 · CONTACT ──────────────────────────────── -->
    {:else if currentStep === 0}
      <p class="mb-5 font-instrument text-base italic text-gray-500 ">
        Who should we reach out to?
      </p>

      <div class="grid grid-cols-2 gap-3">
        <div>
          <label for="name" class={labelCls}>First Name <span class="">*</span></label>
          <input id="name" type="text" bind:value={firstName} placeholder="e.g. James" autocomplete="given-name"
            class={inputCls(!!errors.firstName)}/>
          {#if errors.firstName}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.firstName}</p>{/if}
        </div>
        <div>
          <label for="lastName" class={labelCls}>Last Name <span class="">*</span></label>
          <input id="lastName" type="text" bind:value={lastName} placeholder="e.g. Mwangi" autocomplete="family-name"
            class={inputCls(!!errors.lastName)}/>
          {#if errors.lastName}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.lastName}</p>{/if}
        </div>
      </div>

      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <label for="email" class={labelCls}>Email <span class="">*</span></label>
          <input id="email"  type="email" bind:value={email} placeholder="you@company.com" autocomplete="email"
            class={inputCls(!!errors.email)}/>
          {#if errors.email}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.email}</p>{/if}
        </div>
        <div>
          <label for="phone" class={labelCls}>Phone / WhatsApp <span class="">*</span></label>
          <input id="phone" type="tel" bind:value={phone} placeholder="+254 700 000 000" autocomplete="tel"
            class={inputCls(!!errors.phone)}/>
          {#if errors.phone}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.phone}</p>{/if}
        </div>
      </div>

      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <label for="company" class={labelCls}>Company Name</label>
          <input id="company" type="text" bind:value={company} placeholder="e.g. Acme Ltd" class={plainInput}/>
        </div>
        <div>
          <label for="role" class={labelCls}>Your Role / Title</label>
          <input id="role" type="text" bind:value={role} placeholder="e.g. Marketing Manager" class={plainInput}/>
        </div>
      </div>

      <div class="mt-3">
        <label for="website" class={labelCls}>Website (if any)</label>
        <input id="website" type="url" bind:value={website} placeholder="https://yoursite.com" class={plainInput}/>
        <p class="mt-1 text-[11px] text-gray-400 dark:text-green-700">Helps us understand your current online presence.</p>
      </div>

      <div class="mt-4">
        <label for="contactMethod" class="{labelCls} mb-2">Preferred Contact Method <span class="">*</span></label>
        <div class="flex flex-wrap gap-1">
          {#each contactMethods as m}
            <button type="button" onclick={() => (contactMethod = m.val)}
              class="rounded-full border px-3 py-1.5 text-xs font-semibold transition-all
                {contactMethod === m.val
                  ? 'border-green-500 bg-green-50 text-green-600 dark:border-green-400 dark:bg-green-400/12 dark:text-green-400'
                  : 'border-gray-200 bg-white text-gray-500 hover:border-green-300 dark:border-green-400/15 dark:bg-transparent dark:text-green-700'}">
              {m.label}
            </button>
          {/each}
        </div>
      </div>

    <!-- ── STEP 2 · SERVICE ──────────────────────────────── -->
    {:else if currentStep === 1}
      <p class="mb-5 font-instrument text-base italic text-gray-500 ">
        What services do you need?
      </p>

      <div class="mb-4">
        <div  class="{labelCls} mb-2">
          Services Required <span class="">*</span>
          <span class="ml-1 font-normal normal-case tracking-normal text-gray-400">(select all that apply)</span>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each services as s}
            {@const fromPkg = pkg?.serviceVal === s.val}
            <button
              type="button"
              onclick={() => toggleService(s.val)}
              title={fromPkg ? "Included with your chosen plan" : undefined}
              class="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all
                {selectedServices.includes(s.val)
                  ? 'border-green-500 bg-green-50 text-green-600 dark:border-green-400 dark:bg-green-400/12 dark:text-green-400'
                  : 'border-gray-200 bg-white text-gray-500 hover:border-green-300 dark:border-green-400/15 dark:bg-transparent dark:text-green-700'}
                {fromPkg ? 'ring-1 ring-green-400/40 ring-offset-1' : ''}"
            >
              {#if selectedServices.includes(s.val)}
                <svg class="h-2.5 w-2.5" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5l2.5 2.5 4.5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              {/if}
              {s.label}
              {#if fromPkg}
                <span class="rounded-full bg-green-500/15 px-1.5 py-px text-[9px] font-bold uppercase text-green-600 dark:bg-green-400/15 dark:text-green-400">
                  plan
                </span>
              {/if}
            </button>
          {/each}
        </div>
        {#if errors.services}
          <p class="mt-1.5 text-[11px] font-semibold text-red-500">{errors.services}</p>
        {/if}
      </div>

      <div class="mt-4">
        <label for="projectType" class={labelCls}>Project Type <span class="">*</span></label>
        <select id="projectType" bind:value={projectType} class="{selectCls} {errors.projectType ? 'border-red-400' : ''}">
          <option value="" disabled>Select project type…</option>
          {#each projectTypes as t}<option value={t}>{t}</option>{/each}
        </select>
        {#if errors.projectType}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.projectType}</p>{/if}
      </div>

      <div class="mt-3">
        <label for="industry" class={labelCls}>Industry <span class="">*</span></label>
        <select id="industry" bind:value={industry} class="{selectCls} {errors.industry ? 'border-red-400' : ''}">
          <option value="" disabled>Select your industry…</option>
          {#each industries as ind}<option value={ind}>{ind}</option>{/each}
        </select>
        {#if errors.industry}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.industry}</p>{/if}
      </div>

      <div class="mt-3">
        <label for="referralSource" class={labelCls}>Where did you hear about us?</label>
        <select id="referralSource" bind:value={referralSource} class={selectCls}>
          <option value="" disabled selected>Select…</option>
          <option>Google Search</option>
          <option>Social Media (Instagram / Facebook)</option>
          <option>Referral from a friend or colleague</option>
          <option>LinkedIn</option>
          <option>Saw our work / portfolio</option>
          <option>Previous client</option>
          <option>Other</option>
        </select>
      </div>

    <!-- ── STEP 3 · PROJECT DETAILS ──────────────────────── -->
    {:else if currentStep === 2}
      <p class="mb-5 font-instrument text-base italic text-gray-500 ">
        Tell us what you're building.
      </p>

      <div class="mb-3">
        <label for="projectName" class={labelCls}>Project Name <span class="">*</span></label>
        <input id="projectName" type="text" bind:value={projectName} placeholder="e.g. Acme Online Store Redesign"
          class={inputCls(!!errors.projectName)}/>
        {#if errors.projectName}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.projectName}</p>{/if}
      </div>

      <div class="mb-3">
        <label for="projectDescription" class={labelCls}>Project Description <span class="">*</span></label>
        <textarea id="projectDescription" bind:value={projectDescription} rows={3}
          placeholder="Describe what you need, the problem you're solving, and any key requirements…"
          class={inputCls(!!errors.projectDescription, "resize-y leading-relaxed")}></textarea>
        {#if errors.projectDescription}<p class="mt-1 text-[11px] font-semibold text-red-500">{errors.projectDescription}</p>{/if}
      </div>

      <div class="mb-3">
        <label for="targetAudience" class={labelCls}>Target Audience</label>
        <input id="targetAudience" type="text" bind:value={targetAudience}
          placeholder="e.g. Kenyan SME owners aged 25–45" class={plainInput}/>
      </div>

      <div class="mb-3">
        <label for="goals" class={labelCls}>Goals & Success Metrics</label>
        <textarea id="goals" bind:value={goals} rows={2}
          placeholder="e.g. Increase online sales by 30%, generate 50 leads/month…"
          class="{plainInput} resize-y leading-relaxed"></textarea>
      </div>

      <div class="mb-4">
        <label for="competitors" class={labelCls}>Competitor / Inspiration URLs</label>
        <input id="competitors"  type="text" bind:value={competitors}
          placeholder="https://site1.com, https://site2.com" class={plainInput}/>
        <p class="mt-1 text-[11px] text-gray-400 dark:text-green-700">Sites you admire or competitors to outperform.</p>
      </div>

      <div class="my-3 h-px bg-gray-100 dark:bg-green-400/8"></div>

      <!-- Priority -->
      <div class="mb-4">
        <label for="priority" class="{labelCls} mb-2">Priority Level</label>
        <div class="flex gap-2">
          {#each priorities as p}
            <button type="button" onclick={() => (priority = p.val)}
              class="flex flex-1 flex-col items-center gap-1 rounded-xl border py-2.5 text-center transition-all
                {priority === p.val
                  ? 'border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-400/10'
                  : 'border-gray-200 bg-gray-50 hover:border-green-200 dark:border-green-400/12 dark:bg-transparent'}">
              <span class="text-base">{p.icon}</span>
              <span class="text-[11px] font-semibold
                {priority === p.val ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-green-700'}">
                {p.label}
              </span>
            </button>
          {/each}
        </div>
        <p class="mt-1.5 text-[11px] text-gray-400 dark:text-green-700">Urgent projects may carry a rush fee.</p>
      </div>

      <!-- File upload -->
      <div>
        <label for="attachments" class="{labelCls} mb-2">Attachments / Reference Files</label>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="relative cursor-pointer rounded-xl border-2 border-dashed p-5 text-center transition-all
            {isDragging
              ? 'border-green-400 bg-green-50 dark:border-green-400 dark:bg-green-400/10'
              : 'border-gray-200 bg-gray-50 hover:border-green-300 dark:border-green-400/20 dark:bg-green-400/5'}"
          ondragover={(e) => { e.preventDefault(); isDragging = true; }}
          ondragleave={() => (isDragging = false)}
          ondrop={(e) => { e.preventDefault(); isDragging = false; handleFiles(e.dataTransfer?.files ?? null); }}
        >
          <input type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,.xls,.xlsx"
            onchange={(e) => handleFiles((e.target as HTMLInputElement).files)}
            class="absolute inset-0 h-full w-full cursor-pointer opacity-0"/>
          <div class="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-green-200 bg-green-50  dark:border-green-400/25 dark:bg-green-400/10 dark:text-green-400">
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none">
              <path d="M10 13V4M10 4L7 7M10 4l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 14v2a1 1 0 001 1h12a1 1 0 001-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="text-sm font-semibold text-gray-600 dark:text-green-300">Drop files here or click to upload</p>
          <p class="mt-0.5 text-xs text-gray-400 dark:text-green-700">PDFs, images, docs — max 10 MB each</p>
        </div>
        {#if uploadedFiles.length}
          <div class="mt-2 flex flex-col gap-1.5">
            {#each uploadedFiles as file, i}
              <div class="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-green-400/15 dark:bg-green-400/5">
                <svg class="h-3.5 w-3.5 shrink-0  dark:text-green-400" viewBox="0 0 16 16" fill="none">
                  <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L9 2z" stroke="currentColor" stroke-width="1.3"/>
                  <path d="M9 2v4h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
                </svg>
                <span class="flex-1 truncate text-xs text-gray-700 dark:text-green-200">{file.name}</span>
                <span class="text-[10px] text-gray-400 dark:text-green-700">{fmtSize(file.size)}</span>
                <button id="removeFile" title="Remove file" type="button" onclick={() => removeFile(i)}
                  class="text-gray-400 transition-colors hover:text-red-500 dark:text-green-700 dark:hover:text-red-400">
                  <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 1.5l9 9M10.5 1.5l-9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
            {/each}
          </div>
        {/if}
      </div>

    <!-- ── STEP 4 · BUDGET & TIMELINE ────────────────────── -->
    {:else if currentStep === 3}
      <p class="mb-5 font-instrument text-base italic text-gray-500 ">
        What's your budget and when do you need this done?
      </p>

      <!-- Budget -->
      <div class="mb-5">
        <label for="budget" class="{labelCls} mb-2">Estimated Budget (KES) <span class="">*</span></label>

        <!-- Package price anchor (shown when pkg provided) -->
        {#if pkg}
          <div class="mb-3 flex items-center gap-3 rounded-xl border border-green-500/25 bg-green-50/70 px-4 py-2.5 dark:border-green-400/20 dark:bg-green-400/8">
            <svg class="h-4 w-4 shrink-0  dark:text-green-400" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.3"/>
              <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <div>
              <p class="text-xs font-bold text-green-700 dark:text-green-300">
                {pkg.price}{pkg.priceUnit ? " " + pkg.priceUnit : ""}
              </p>
              <p class="text-[10px] text-green-600 ">
                Fixed price for the {pkg.planName} plan. Adjust the slider if your total budget differs.
              </p>
            </div>
          </div>
        {/if}

        <div class="mb-3 flex items-baseline gap-1.5">
          <span class="font-syne text-2xl font-extrabold tracking-tight  dark:text-green-400">
            {budgetLabel}
          </span>
          <span class="text-xs text-gray-400 dark:text-green-700">total budget</span>
        </div>
        <input type="range" bind:value={budgetIndex} min="0" max="10" step="1"
          class="h-1 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-green-500 dark:bg-green-400/20 dark:accent-green-400"/>
        <div class="mt-1.5 flex justify-between">
          {#each ["<20K","50K","100K","200K","350K","500K","750K","1M","2M","5M","5M+"] as tick}
            <span class="text-[9px] font-semibold text-gray-400 dark:text-green-800">{tick}</span>
          {/each}
        </div>
      </div>

      <div class="my-4 h-px bg-gray-100 dark:bg-green-400/8"></div>

      <!-- Timeline -->
      <div class="mb-4">
        <label for="timeline" class="{labelCls} mb-2">Preferred Timeline <span class="">*</span></label>
        <div class="grid grid-cols-3 gap-2">
          {#each timelines as tl}
            <button type="button" onclick={() => (timeline = tl.val)}
              class="rounded-xl border py-2.5 text-center transition-all
                {timeline === tl.val
                  ? 'border-green-500 bg-green-50 dark:border-green-400 dark:bg-green-400/10'
                  : 'border-gray-200 bg-gray-50 hover:border-green-200 dark:border-green-400/12 dark:bg-transparent'}">
              <p class="text-xs font-bold {timeline === tl.val ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-green-200'}">{tl.title}</p>
              <p class="mt-0.5 text-[10px] text-gray-400 dark:text-green-700">{tl.sub}</p>
            </button>
          {/each}
        </div>
        {#if errors.timeline}<p class="mt-1.5 text-[11px] font-semibold text-red-500">{errors.timeline}</p>{/if}
      </div>

      <div class="my-4 h-px bg-gray-100 dark:bg-green-400/8"></div>

      <div class="mb-3">
        <label for="startDate" class={labelCls}>Preferred Start Date</label>
        <input id="startDate" type="date" bind:value={startDate} class={plainInput}/>
        <p class="mt-1 text-[11px] text-gray-400 dark:text-green-700">Leave blank if you're flexible.</p>
      </div>
      <div>
        <label for="additionalNotes" class={labelCls}>Additional Notes or Questions</label>
        <textarea id="additionalNotes" bind:value={additionalNotes} rows={3}
          placeholder="Anything else we should know before our first conversation?"
          class="{plainInput} resize-y leading-relaxed"></textarea>
      </div>

    <!-- ── STEP 5 · REVIEW & SUBMIT ──────────────────────── -->
    {:else if currentStep === 4}
      <p class="mb-4 font-instrument text-base italic  ">
        Review your request before sending.
      </p>

      <div class="mb-4 overflow-hidden rounded-xl border border-gray-200 dark:border-green-400/15">
        {#each summaryRows as [key, val], i}
          <div class="flex gap-3 border-b border-gray-100 px-4 py-2.5 last:border-b-0 dark:border-green-400/8
            {key === 'Package'
              ? 'bg-green-50 dark:bg-green-400/8'
              : i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-gray-50/60 dark:bg-green-400/3'}">
            <span class="w-28 shrink-0 pt-px text-[10px] font-bold uppercase tracking-wider
              {key === 'Package' ? 'text-green-600 ' : 'text-gray-400 dark:text-green-700'}">
              {key}
            </span>
            <span class="flex-1 wrap-break-word text-xs leading-relaxed
              {key === 'Package' ? 'font-semibold text-green-700 dark:text-green-300' : 'text-gray-700 dark:text-green-200'}">
              {val}
            </span>
          </div>
        {/each}
      </div>

      <!-- Terms checkbox -->
     
      <div
    

        class="flex cursor-pointer items-start gap-3 rounded-xl border border-green-500/20 bg-green-50/60 p-4 dark:border-green-400/15 dark:bg-green-400/6"
        onclick={() => (termsAccepted = !termsAccepted)}
      >
        <div id="terms" class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-all
          {termsAccepted
            ? 'border-green-500 bg-green-500 dark:border-green-400 dark:bg-green-400'
            : 'border-gray-300 dark:border-green-400/30'}">
          {#if termsAccepted}
            <svg class="h-2.5 w-2.5 text-white dark:text-green-950" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5l2.5 2.5 4.5-5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          {/if}
        </div>
        <p class="text-xs leading-relaxed text-gray-600 dark:text-green-300">
          I confirm the information above is accurate and agree to GGM Technologies'
          <a href="https://ggmtechnologies.co.ke/terms-of-service" target="_blank"
            onclick={(e) => e.stopPropagation()}
            class="text-green-600 underline-offset-2 hover:underline dark:text-green-400">Terms of Service</a>
          and
          <a href="https://ggmtechnologies.co.ke/privacy-policy" target="_blank"
            onclick={(e) => e.stopPropagation()}
            class="text-green-600 underline-offset-2 hover:underline dark:text-green-400">Privacy Policy</a>.
          I understand the team will contact me within 24 hours.
        </p>
      </div>
    {/if}

  </div><!-- /body -->

  <!-- ── FOOTER ─────────────────────────────────────────────── -->
  {#if !submitted}
  <div class="flex shrink-0 items-center justify-between gap-3 border-t border-gray-100 px-6 py-4 dark:border-green-400/10">

    <!-- Step dots -->
    <div class="flex items-center gap-2">
      <span class="text-[11px] font-semibold text-gray-400 dark:text-green-700">{currentStep + 1} / {totalSteps}</span>
      <div class="flex gap-1">
        {#each Array(totalSteps) as _, i}
          <div class="h-1.5 rounded-full transition-all duration-300
            {i === currentStep
              ? 'w-5 bg-green-500 dark:bg-green-400'
              : i < currentStep
              ? 'w-1.5 bg-green-300 dark:bg-green-600'
              : 'w-1.5 bg-gray-200 dark:bg-green-400/15'}">
          </div>
        {/each}
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex gap-2">
      {#if currentStep > 0}
        <button onclick={back}
          class="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-600 transition-all hover:border-gray-300 hover:bg-white dark:border-green-400/15 dark:bg-green-400/5 dark:text-green-300 dark:hover:border-green-400/30">
          <svg class="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back
        </button>
      {/if}

      {#if currentStep < totalSteps - 1}
        <button onclick={next}
          class="inline-flex items-center gap-1.5 rounded-xl bg-green-500 px-5 py-2 text-sm font-bold text-green-950 shadow-sm shadow-green-500/20 transition-all hover:-translate-y-0.5 hover:bg-green-400 dark:bg-green-400 dark:text-green-950 dark:hover:bg-green-300">
          Continue
          <svg class="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
            <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      {:else}
        <button onclick={submitRequest} disabled={submitting || !termsAccepted}
          class="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2 text-sm font-bold text-green-950 shadow-sm shadow-green-500/20 transition-all hover:-translate-y-0.5 hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 dark:bg-green-400 dark:text-green-950 dark:hover:bg-green-300">
          {#if submitting}
            <svg class="h-3.5 w-3.5 animate-spin" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.8" stroke-dasharray="28" stroke-dashoffset="10"/>
            </svg>
            Sending…
          {:else}
            <svg class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M2 8l12-6-6 12-2-4-4-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Send Request
          {/if}
        </button>
      {/if}
    </div>

  </div>
  {/if}

</div><!-- /modal -->
</div><!-- /overlay -->
{/if}