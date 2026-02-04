<script>
  export let title = "Page Not Found";
</script>

<svelte:head>
  <title>404 - {title}</title>
</svelte:head>

<main class="min-h-screen flex flex-col items-center justify-center px-4">
  <div class="text-center space-y-4">
    <h1 class="text-6xl md:text-8xl font-bold tracking-tight">404</h1>

    <h2 class="text-xl md:text-2xl font-medium text-muted-foreground">
      {title}
    </h2>

    <p class="max-w-md text-muted-foreground">
      The page you are looking for does not exist or has been moved.
    </p>

    <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href="/"
        class="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
      >
        Back to Home
      </a>

      <a
        href="/contact"
        class="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
      >
        Contact Support
      </a>
    </div>
  </div>
</main>

<style>
  main {
    animation: fade 0.3s ease;
  }

  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
