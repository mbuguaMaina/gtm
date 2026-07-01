<script lang="ts">
  import { SEO as config } from "./config.js"

  let {
    meta,
    schemas = []
  } = $props()
</script>

<svelte:head>

  <!-- Primary SEO -->
  <title>{meta.title}</title>

  <meta name="title" content={meta.title} />
  <meta name="description" content={meta.description} />
  <meta
    name="keywords"
    content={typeof meta.keywords === "string"
      ? meta.keywords
      : meta.keywords?.join(", ")}
  />

  <meta name="author" content="GGM Technologies" />
  <meta name="creator" content="GGM Technologies" />
  <meta name="publisher" content="GGM Technologies" />

  <meta name="robots" content="index, follow" />
  <meta
    name="googlebot"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />

  <link rel="canonical" href={meta.url} />

  <!-- Theme -->
  <meta name="theme-color" content="#0f172a" />

  <!-- OpenGraph -->
  <meta property="og:type" content={meta.openGraph?.type || "website"} />
  <meta property="og:title" content={meta.openGraph?.title || meta.title} />
  <meta
    property="og:description"
    content={meta.openGraph?.description || meta.description}
  />

  <meta property="og:url" content={meta.openGraph?.url || meta.url} />

  <meta
    property="og:image"
    content={
      meta.openGraph?.images?.[0]?.url || meta.image
    }
  />

  <meta
    property="og:image:alt"
    content={
      meta.openGraph?.images?.[0]?.alt || meta.title
    }
  />

  <meta
    property="og:site_name"
    content={meta.openGraph?.siteName || config.siteName}
  />

  <meta
    property="og:locale"
    content={meta.openGraph?.locale || "en_KE"}
  />

  <!-- Twitter -->
  <meta
    name="twitter:card"
    content={meta.twitter?.card || "summary_large_image"}
  />

  <meta
    name="twitter:title"
    content={meta.twitter?.title || meta.title}
  />

  <meta
    name="twitter:description"
    content={meta.twitter?.description || meta.description}
  />

  <meta
    name="twitter:image"
    content={
      meta.twitter?.images?.[0] || meta.image
    }
  />

  {#if meta.twitter?.creator}
    <meta name="twitter:creator" content={meta.twitter.creator} />
  {/if}

  <!-- Mobile / PWA -->
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />

  <meta name="format-detection" content="telephone=no" />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Structured Data -->
  {#each schemas as schemaData}
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  {/each}

</svelte:head>