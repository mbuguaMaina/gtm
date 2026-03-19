<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    buttonLabel?: string;
    onSubmit?: (data: { phone: string; website: string }) => void;
  }

  let {
    buttonLabel = 'Get Your Free Website Audit',
    onSubmit,
  }: Props = $props();

  let isOpen     = $state(false);
  let isClosing  = $state(false);
  let submitted  = $state(false);
  let phone      = $state('');
  let website    = $state('');
  let shakePhone = $state(false);
  let shakeUrl   = $state(false);

  function open() {
    submitted = false;
    phone     = '';
    website   = '';
    isOpen    = true;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    isClosing = true;
    setTimeout(() => {
      isOpen    = false;
      isClosing = false;
      document.body.style.overflow = '';
    }, 220);
  }

  function handleOverlayClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('overlay')) close();
  }

  function triggerShake(field: 'phone' | 'url') {
    if (field === 'phone') {
      shakePhone = false;
      requestAnimationFrame(() => { shakePhone = true; });
      setTimeout(() => { shakePhone = false; }, 450);
    } else {
      shakeUrl = false;
      requestAnimationFrame(() => { shakeUrl = true; });
      setTimeout(() => { shakeUrl = false; }, 450);
    }
  }

  function handleSubmit() {
    if (!phone.trim())   { triggerShake('phone'); return; }
    if (!website.trim()) { triggerShake('url');   return; }
    submitted = true;
    onSubmit?.({ phone: phone.trim(), website: website.trim() });
  }

  onMount(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) close(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });
</script>


<!-- ── Trigger ───────────────────────────────────────────────────────────── -->
<button class="trigger-btn" onclick={open}>
  <span class="dot"></span>
  {buttonLabel}
</button>


<!-- ── Overlay ───────────────────────────────────────────────────────────── -->
{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_interactive_supports_focus -->
  <div
    class="overlay"
    class:closing={isClosing}
    onclick={handleOverlayClick}
    role="dialog"
    aria-modal="true"
    aria-label="Free Website Audit"
  >
    <div class="modal" class:closing={isClosing}>

      <div class="modal-bar"></div>

      <div class="modal-inner">

        <button class="close-btn" onclick={close} aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {#if !submitted}

          <div class="badge">
            <span class="dot"></span>
            Limited spots this week
          </div>

          <h1>Is your website<br>leaving <em>money behind?</em></h1>

          <p class="sub">
            Drop your details and we'll send you a free audit — performance,
            SEO &amp; conversions — within 24 hours. No strings attached.
          </p>

          <div class="field">
            <label for="audit-phone">Phone Number</label>
            <div class="input-wrap" class:shake={shakePhone}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <input id="audit-phone" type="tel" bind:value={phone} placeholder="+254 7XX XXX XXX" />
            </div>
          </div>

          <div class="divider"><span>and</span></div>

          <div class="field">
            <label for="audit-url">Website URL</label>
            <div class="input-wrap" class:shake={shakeUrl}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253"
                />
              </svg>
              <input id="audit-url" type="url" bind:value={website} placeholder="https://yourwebsite.com" />
            </div>
          </div>

          <button class="btn" onclick={handleSubmit}>
            Send Me My Free Audit <span class="arrow">→</span>
          </button>

          <div class="trust">
            <div class="trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.9l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z"/>
              </svg>
              100% Free
            </div>
            <div class="trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
              No spam
            </div>
            <div class="trust-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Ready in 24 hrs
            </div>
          </div>

        {:else}

          <div class="success">
            <div class="success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
                viewBox="0 0 24 24" stroke="#84cc16" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>
            </div>
            <h2>You're all set! 🎉</h2>
            <p>
              We've got your details and will send your free website audit within
              <strong>24 hours</strong>. Keep your phone nearby!
            </p>
          </div>

        {/if}
      </div>
    </div>
  </div>
{/if}


<style>
  /* ─────────────────────────────────────────────────────────────────────────
     Design tokens — mapped to Tailwind's color scale.
     Light defaults here; dark overrides via :global(.dark) on <html>.
     Requires tailwind.config: darkMode: 'class'
  ───────────────────────────────────────────────────────────────────────── */
  :global(:root) {
    /* zinc scale (neutrals) */
    --wa-bg:           #ffffff;
    --wa-surface:      #f9fafb;   /* zinc-50  */
    --wa-border:       #e4e4e7;   /* zinc-200 */
    --wa-text:         #09090b;   /* zinc-950 */
    --wa-muted:        #71717a;   /* zinc-500 */
    --wa-subtle:       #a1a1aa;   /* zinc-400 */
    --wa-close-bg:     #f4f4f5;   /* zinc-100 */
    --wa-close-hover:  #e4e4e7;   /* zinc-200 */
    /* green / lime scale */
    --wa-accent:       #16a34a;   /* green-600 */
    --wa-accent-hover: #15803d;   /* green-700 */
    --wa-lime:         #84cc16;   /* lime-500  */
    --wa-lime-dim:     #a3e635;   /* lime-400  */
    --wa-lime-text:    #3f6212;   /* lime-800  */
    --wa-badge-bg:     #f7fee7;   /* lime-50   */
    --wa-badge-border: #bef264;   /* lime-300  */
    --wa-focus-ring:   rgba(132, 204, 22, 0.15);
    --wa-focus-border: rgba(132, 204, 22, 0.50);
    /* overlay */
    --wa-overlay:      rgba(9, 9, 11, 0.55);
  }

  :global(.dark) {
    --wa-bg:           #18181b;   /* zinc-900 */
    --wa-surface:      #27272a;   /* zinc-800 */
    --wa-border:       #3f3f46;   /* zinc-700 */
    --wa-text:         #fafafa;   /* zinc-50  */
    --wa-muted:        #a1a1aa;   /* zinc-400 */
    --wa-subtle:       #71717a;   /* zinc-500 */
    --wa-close-bg:     #27272a;   /* zinc-800 */
    --wa-close-hover:  #3f3f46;   /* zinc-700 */
    --wa-accent:       #22c55e;   /* green-500 */
    --wa-accent-hover: #4ade80;   /* green-400 */
    --wa-lime:         #a3e635;   /* lime-400  */
    --wa-lime-dim:     #bef264;   /* lime-300  */
    --wa-lime-text:    #a3e635;   /* lime-400  */
    --wa-badge-bg:     rgba(163, 230, 53, 0.08);
    --wa-badge-border: rgba(163, 230, 53, 0.25);
    --wa-focus-ring:   rgba(163, 230, 53, 0.10);
    --wa-focus-border: rgba(163, 230, 53, 0.40);
    --wa-overlay:      rgba(0, 0, 0, 0.72);
  }

  /* ── Keyframes ───────────────────────────────────────────────────────────── */
  @keyframes pulse {
    0%, 100% { opacity: 1;   transform: scale(1);    }
    50%       { opacity: 0.4; transform: scale(0.65); }
  }
  @keyframes overlayIn  { from { opacity: 0; } to { opacity: 1; } }
  @keyframes overlayOut { from { opacity: 1; } to { opacity: 0; } }
  @keyframes modalIn {
    from { opacity: 0; transform: translateY(24px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }
  @keyframes modalOut {
    from { opacity: 1; transform: translateY(0)    scale(1);    }
    to   { opacity: 0; transform: translateY(16px) scale(0.97); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0);    }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX( 6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX( 4px); }
  }

  /* ── Trigger ─────────────────────────────────────────────────────────────── */
  .trigger-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--wa-accent);
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.01em;
    padding: 12px 32px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
    transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
  }
  .trigger-btn:hover {
    background: var(--wa-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);
  }
  .trigger-btn:active { transform: translateY(0); }

  /* ── Dot ─────────────────────────────────────────────────────────────────── */
  .dot {
    width: 8px;
    height: 8px;
    background: var(--wa-lime-dim);
    border-radius: 50%;
    flex-shrink: 0;
    animation: pulse 2s infinite;
  }

  /* ── Overlay — position:fixed is CRITICAL and must NOT be a Tailwind class ─ */
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: var(--wa-overlay);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    animation: overlayIn 0.25s ease both;
  }
  .overlay.closing { animation: overlayOut 0.22s ease forwards; }

  /* ── Modal ───────────────────────────────────────────────────────────────── */
  .modal {
    background: var(--wa-bg);
    border-radius: 24px;
    width: 100%;
    max-width: 500px;
    position: relative;
    overflow: hidden;
    box-shadow:
      0 32px 80px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(0, 0, 0, 0.06);
    animation: modalIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .modal.closing { animation: modalOut 0.22s ease forwards; }

  .modal-bar {
    height: 5px;
    background: linear-gradient(90deg, var(--wa-lime) 0%, var(--wa-lime-dim) 100%);
  }

  .modal-inner { padding: 36px; }

  /* ── Close ───────────────────────────────────────────────────────────────── */
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background: var(--wa-close-bg);
    border: 1px solid var(--wa-border);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wa-subtle);
    transition: background 0.15s, transform 0.2s;
  }
  .close-btn:hover { background: var(--wa-close-hover); transform: rotate(90deg); }

  /* ── Badge ───────────────────────────────────────────────────────────────── */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--wa-badge-bg);
    border: 1px solid var(--wa-badge-border);
    color: var(--wa-lime-text);
    font-family: 'DM Sans', sans-serif;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 13px;
    border-radius: 100px;
    margin-bottom: 22px;
  }
  .badge .dot {
    width: 5px;
    height: 5px;
    background: var(--wa-lime);
  }

  /* ── Headings / body ─────────────────────────────────────────────────────── */
  h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(26px, 5vw, 34px);
    font-weight: 800;
    color: var(--wa-text);
    line-height: 1.1;
    letter-spacing: -0.025em;
    margin-bottom: 10px;
  }
  h1 em {
    font-style: normal;
    background: linear-gradient(135deg, var(--wa-accent), var(--wa-lime));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sub {
    color: var(--wa-muted);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.65;
    margin-bottom: 30px;
  }

  /* ── Fields ──────────────────────────────────────────────────────────────── */
  .field { margin-bottom: 18px; }

  label {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--wa-subtle);
    margin-bottom: 8px;
  }

  .input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .input-wrap svg {
    position: absolute;
    left: 15px;
    color: var(--wa-subtle);
    pointer-events: none;
    z-index: 1;
    transition: color 0.2s;
  }
  .input-wrap:focus-within svg { color: var(--wa-lime); }
  .input-wrap.shake { animation: shake 0.42s ease; }
  .input-wrap.shake input {
    border-color: #ef4444;
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);
  }

  input {
    width: 100%;
    background: var(--wa-surface);
    border: 1.5px solid var(--wa-border);
    color: var(--wa-text);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    padding: 14px 14px 14px 46px;
    border-radius: 12px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  input::placeholder { color: var(--wa-subtle); }
  input:focus {
    border-color: var(--wa-focus-border);
    box-shadow: 0 0 0 4px var(--wa-focus-ring);
  }

  /* ── Divider ─────────────────────────────────────────────────────────────── */
  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 22px 0;
  }
  .divider::before,
  .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--wa-border);
  }
  .divider span {
    font-size: 11px;
    color: var(--wa-subtle);
    letter-spacing: 0.08em;
  }

  /* ── Submit ──────────────────────────────────────────────────────────────── */
  .btn {
    width: 100%;
    padding: 16px;
    background: var(--wa-accent);
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.03em;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 4px;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  }
  .btn:hover {
    background: var(--wa-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  }
  .btn:active { transform: translateY(0); }
  .btn .arrow { margin-left: 8px; display: inline-block; transition: transform 0.2s; }
  .btn:hover .arrow { transform: translateX(4px); }

  /* ── Trust ───────────────────────────────────────────────────────────────── */
  .trust {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 20px;
    flex-wrap: wrap;
  }
  .trust-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11.5px;
    color: var(--wa-subtle);
    font-family: 'DM Sans', sans-serif;
  }
  .trust-item svg { color: var(--wa-lime); }

  /* ── Success ─────────────────────────────────────────────────────────────── */
  .success {
    text-align: center;
    padding: 16px 0 8px;
    animation: fadeUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .success-icon {
    width: 60px;
    height: 60px;
    background: var(--wa-badge-bg);
    border: 1.5px solid var(--wa-badge-border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 18px;
  }
  .success h2 {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: var(--wa-text);
    margin-bottom: 8px;
  }
  .success p {
    font-size: 14px;
    color: var(--wa-muted);
    line-height: 1.65;
    font-family: 'DM Sans', sans-serif;
  }
  .success strong { color: var(--wa-lime-text); }
</style>