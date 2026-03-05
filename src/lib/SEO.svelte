<script>
  import { SEO as config } from "./config.js"

  let {
    meta,
    schemas = []
  } = $props()
</script>

<svelte:head>

<title>{meta.title}</title>

<meta name="description" content={meta.description} />

<link rel="canonical" href={meta.url} />

<!-- OpenGraph -->
<meta property="og:type" content="website" />
<meta property="og:title" content={meta.title} />
<meta property="og:description" content={meta.description} />
<meta property="og:url" content={meta.url} />
<meta property="og:image" content={meta.image} />
<meta property="og:site_name" content={config.siteName} />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={meta.title} />
<meta name="twitter:description" content={meta.description} />
<meta name="twitter:image" content={meta.image} />

{#each schemas as schema}
<script type="application/ld+json">
{JSON.stringify(schema)}
</script>
{/each}

</svelte:head>