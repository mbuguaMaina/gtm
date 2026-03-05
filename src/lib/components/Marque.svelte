<script lang="ts">
 
    let {techStack}:{techStack:any[]} = $props();
</script>

<section class="marquee-wrapper">
	<div class="fade-left"></div>
	<div class="fade-right"></div>

	<div class="marquee">
		<div class="track">
			{#each [...techStack, ...techStack] as tech}
                {#if typeof tech !== "string"}
            
                    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <tech class="text-foreground" />
                {:else}
				<div class="item">{tech}</div>
                {/if}
			{/each}
		</div>
	</div>
</section>

 

<style>
/* Theme Variables */

:root {
	--bg: #ffffff;
	--glass-bg: rgba(0,0,0,0.04);
	--border: rgba(0,0,0,0.08);
	--text: #1f2937;
	--fade: #ffffff;
}

:global(.dark),
:global([data-theme="dark"]) {
	--bg: hsl(223, 47%, 7%);
	--glass-bg: rgba(255,255,255,0.05);
	--border: rgba(255,255,255,0.08);
	--text: #cbd5e1;
	--fade: #0a0f1c;
}

/* Layout */

.marquee-wrapper {
	position: relative;
	width: 100%;
	overflow: hidden;
	padding: 3rem 0;
	background: var(--bg);
}

.marquee {
	width: 100%;
	overflow: hidden;
}

.track {
	display: flex;
	gap: 3rem;
	width: max-content;
	animation: scroll 25s linear infinite;
}

/* Tech items */

.item {
	padding: 0.8rem 1.8rem;
	border-radius: 999px;
	background: var(--glass-bg);
	border: 1px solid var(--border);
	color: var(--text);
	font-weight: 500;
	white-space: nowrap;
	backdrop-filter: blur(10px);
	transition: all 0.3s ease;
}

/* .item:hover {
	transform: scale(1.02);
} */

/* Animation */

@keyframes scroll {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50%);
	}
}

/* Edge fades */

.fade-left,
.fade-right {
	position: absolute;
	top: 0;
	width: 120px;
	height: 100%;
	z-index: 2;
	pointer-events: none;
}

.fade-left {
	left: 0;
	background: linear-gradient(to right, var(--fade), transparent);
}

.fade-right {
	right: 0;
	background: linear-gradient(to left, var(--fade), transparent);
}

/* Pause on hover */

.marquee:hover .track {
	animation-play-state: paused;
}
</style>