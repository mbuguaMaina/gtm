<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let current = 0;
  const total = 4;

  let timer: ReturnType<typeof setTimeout>;
  let paused = false;

  const slides = [
    {
      tag: 'Web Development',
      title: 'We Build Digital Products',
      emphasis: 'People Actually Want',
      suffix: 'to Use',
      description:
        'From high-converting websites to scalable web applications — we help Kenyan businesses grow online with confidence and speed.',
      primary: {
        text: 'See Our Work',
        href: 'https://www.ggmtechnologies.co.ke/portfolio'
      },
      secondary: {
        text: 'Free Consultation',
        href: 'https://wa.me/+254700412990'
      }
    },
    {
      tag: 'Digital Marketing',
      title: 'Turn Your Online Presence into a',
      emphasis: 'Revenue Machine',
      suffix: '',
      description:
        "SEO, Google Ads, social media management — we run campaigns that don't just generate clicks, they generate customers.",
      primary: {
        text: 'Our Services',
        href: 'https://www.ggmtechnologies.co.ke/services'
      },
      secondary: {
        text: 'Talk to Us →',
        href: 'https://wa.me/+254700412990'
      }
    },
    {
      tag: 'E-Commerce',
      title: 'Build an',
      emphasis: 'E-Commerce Store',
      suffix: 'That Sells Around the Clock',
      description:
        'M-Pesa integration, product catalogs, fast checkout — fully optimized Kenyan e-commerce that works on every device.',
      primary: {
        text: 'View Pricing',
        href: 'https://www.ggmtechnologies.co.ke/pricing'
      },
      secondary: {
        text: 'Free Audit',
        href: 'https://wa.me/+254700412990'
      }
    },
    {
      tag: 'Trusted Partner',
      title: '',
      emphasis: '100% Client Satisfaction',
      suffix: '— Our Work Speaks for Itself',
      description:
        "Nairobi's go-to digital agency for businesses that are serious about growing online. Fast delivery, transparent pricing, zero jargon.",
      primary: {
        text: 'About Us',
        href: 'https://www.ggmtechnologies.co.ke/about'
      },
      secondary: {
        text: 'WhatsApp Us',
        href: 'https://wa.me/+254700412990'
      }
    }
  ];

  function goTo(index: number) {
    current = index;
    resetProgress();
  }

  function nextSlide() {
    current = (current + 1) % total;
    resetProgress();
  }

  function prevSlide() {
    current = (current - 1 + total) % total;
    resetProgress();
  }

  function resetProgress() {
    clearTimeout(timer);

    if (!paused) {
      timer = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
  }

  function pauseSlider() {
    paused = true;
    clearTimeout(timer);
  }

  function resumeSlider() {
    paused = false;
    resetProgress();
  }

  let touchStartX = 0;

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent) {
    const diff = event.changedTouches[0].clientX - touchStartX;

    if (Math.abs(diff) > 50) {
      diff < 0 ? nextSlide() : prevSlide();
    }
  }

  onMount(() => {
    resetProgress();
  });

  onDestroy(() => {
    clearTimeout(timer);
  });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
  class="hero"
  onmouseenter={pauseSlider}
  onmouseleave={resumeSlider}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
>
  <!-- Progress -->
  <div class="hero-progress-wrapper">
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div
      class="hero-progress"
      style:width={`${((current + 1) / total) * 100}%`}
    />
  </div>

  <!-- Slides -->
  <div
    class="slides-track"
    style:transform={`translateX(-${current * 100}%)`}
  >
    {#each slides as slide}
      <div class="slide">
        <div class="slide-bg"></div>

        <div class="slide-content">
          <div class="slide-tag">{slide.tag}</div>

          <h1>
            {slide.title}
            <em>{slide.emphasis}</em>
            {slide.suffix}
          </h1>

          <p>{slide.description}</p>

          <div class="slide-btns">
            <a href={slide.primary.href} class="btn-primary">
              {slide.primary.text}
            </a>

            <a href={slide.secondary.href} class="btn-ghost">
              {slide.secondary.text}
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Dots -->
  <div class="hero-controls" aria-label="Hero Controls" role="group" aria-describedby="hero-progress"  >
    <div class="dots">
      {#each slides as _, index}
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <button
          class:active={current === index}
          class="dot-btn"
          aria-label={`Slide ${index + 1}`}
          onclick={() => goTo(index)}
        />
      {/each}
    </div>
  </div>

  <!-- Arrows -->
  <div class="hero-arrows">
    <button
      class="arrow-btn"
      aria-label="Previous"
      onclick={prevSlide}
    >
      <svg viewBox="0 0 24 24">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <button
      class="arrow-btn"
      aria-label="Next"
      onclick={nextSlide}
    >
      <svg viewBox="0 0 24 24">
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </button>
  </div>
</section>

<style>
  .hero {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .slides-track {
    display: flex;
    transition: transform 0.6s ease;
    width: 100%;
  }

  .slide {
    min-width: 100%;
    position: relative;
    padding: 6rem 2rem;
  }

  .slide-content {
    max-width: 700px;
    position: relative;
    z-index: 2;
  }

  .slide-tag {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 5rem);
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  h1 em {
    font-style: normal;
    color: #00d46a;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .slide-btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-ghost {
    padding: 0.9rem 1.4rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
  }

  .btn-primary {
    background: #00d46a;
    color: #000;
  }

  .btn-ghost {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .hero-controls {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .dots {
    display: flex;
    gap: 0.7rem;
  }

  .dot-btn {
    width: 12px;
    height: 12px;
    border-radius: 999px;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dot-btn.active {
    width: 34px;
    background: #00d46a;
  }

  .hero-arrows {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
    padding: 0 1rem;
  }

  .arrow-btn {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    pointer-events: auto;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
  }

  .arrow-btn svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
  }

  .hero-progress-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
    z-index: 20;
  }

  .hero-progress {
    height: 100%;
    background: #00d46a;
    transition: width 0.4s linear;
  }
</style>