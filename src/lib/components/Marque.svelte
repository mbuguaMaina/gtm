<script lang="ts">


  let { techStack, speed = $bindable(50) }: { techStack: any[]; speed?: number } = $props();

  const MIN_HALF_PX  = 2800; // px — safe upper bound for viewport width
  const ITEM_WIDTH   = 180;  // px — rough estimate per item incl. gap

  const copies = $derived(
    (() => {
      const n = techStack.length;
      if (n === 0) return 4;

      const halfWidthPerCopy = n * ITEM_WIDTH;           // px for one copy
      const copiesNeeded     = Math.ceil(MIN_HALF_PX / halfWidthPerCopy) * 2; // ×2 → even
      return Math.max(4, copiesNeeded);                  // minimum 4 copies
    })()
  );

  // Flat list: copies × techStack, all in one array
  const items = $derived(
    Array.from({ length: copies }, () => techStack).flat()
  );


 
  const duration = $derived(
    Math.min(60, Math.max(10,
      Math.round((techStack.length * ITEM_WIDTH) / speed)
    ))
  );
</script>

<section class="marquee-wrapper">
  <div class="fade fade--left"  aria-hidden="true"></div>
  <div class="fade fade--right" aria-hidden="true"></div>

  <div class="marquee" aria-label="Product stack" role="marquee">

    <div
      class="track"
      style="--duration:{duration}s"
    >
      {#each items as tech, i (i)}
        {#if typeof tech?.name !== 'string'}
          <!-- Svelte component branch -->
          <!-- svelte-ignore element_invalid_self_closing_tag -->
          <tech class="text-foreground item item--component" aria-hidden="true" />
        {:else}
          <a class="item" aria-hidden={i >= techStack.length ? 'true' : undefined} href={tech.url} target="_blank" rel="noopener noreferrer">
            {#if tech.logo}
              <img
                src={tech.logo}
                alt=""
                width="24"
                height="24"
                class="item-logo"
                loading="lazy"
                decoding="async"
              />
            {/if}
            <span>{tech.name}</span>
          </a>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  /* ── Theme tokens ─────────────────────────────────────────────────── */
  :root {
    --mq-bg:     #ffffff;
    --mq-glass:  rgba(0, 0, 0, 0.04);
    --mq-border: rgba(0, 0, 0, 0.08);
    --mq-text:   #1f2937;
    --mq-fade:   #ffffff;
  }

  :global(.dark),
  :global([data-theme='dark']) {
    --mq-bg:     hsl(223 47% 7%);
    --mq-glass:  rgba(255, 255, 255, 0.05);
    --mq-border: rgba(255, 255, 255, 0.08);
    --mq-text:   #cbd5e1;
    --mq-fade:   hsl(223 47% 7%);
  }

  /* ── Wrapper ──────────────────────────────────────────────────────── */
  .marquee-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-block: 3rem;
    background: var(--mq-bg);
    /* Isolate stacking context so fades sit above the track */
    isolation: isolate;
  }

  /* ── Scroll container ─────────────────────────────────────────────── */
  .marquee {
    width: 100%;
    overflow: hidden;
  }

  /* ── Track ────────────────────────────────────────────────────────── */
  .track {
    display: flex;
    gap: 1.25rem;
    width: max-content;

    /*
      will-change: transform
        → promotes to its own GPU compositor layer, preventing
          layout recalculations from affecting animation smoothness.

      animation-fill-mode: both
        → applies the first keyframe before the animation starts,
          so the element is already at translateX(0) on first paint.
          This eliminates the "sudden jump" on load.
    */
    will-change: transform;
    animation: scroll var(--duration, 20s) linear infinite;
    animation-fill-mode: both;
  }

  /* Pause when hovering anywhere over the marquee */
  .marquee:hover .track {
    animation-play-state: paused;
  }

  /* Reduce motion: respect user preference */
  @media (prefers-reduced-motion: reduce) {
    .track {
      animation: none;
    }
  }

  /* ── Animation ────────────────────────────────────────────────────── */
  /*
    We translate exactly -50%.
    Because copies is always even, -50% lands on an identical
    copy boundary → the browser snaps back to 0 invisibly.
  */
  @keyframes scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ── Items ────────────────────────────────────────────────────────── */
  .item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.55rem 1.25rem;
    border-radius: 9999px;
    background: var(--mq-glass);
    border: 1px solid var(--mq-border);
    color: var(--mq-text);

    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    user-select: none;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .item--component {
    padding: 0;
    background: transparent;
    border: none;
    backdrop-filter: none;
  }

  .item-logo {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    object-fit: contain;
    /* Prevent logos from affecting layout before they load */
    flex-shrink: 0;
  }

  /* ── Edge fades ───────────────────────────────────────────────────── */
  .fade {
    position: absolute;
    inset-block: 0;
    width: clamp(60px, 10vw, 140px);
    z-index: 2;
    pointer-events: none;
  }

  .fade--left {
    left: 0;
    background: linear-gradient(to right, var(--mq-fade) 30%, transparent);
  }

  .fade--right {
    right: 0;
    background: linear-gradient(to left, var(--mq-fade) 30%, transparent);
  }
</style>