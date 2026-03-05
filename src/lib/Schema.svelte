<script>
  let { data } = $props();
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(data)}
  </script>
</svelte:head>