<script lang="ts">
  import { applyTheme, getTheme, type Theme } from "$lib/theme";
	import { Moon , Sun, SunIcon } from "@lucide/svelte";
	 

  let theme: Theme = getTheme();

  function toggle() {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
  }
</script>

<button
  on:click={toggle}
  class="   relative  h-8 w-8 rounded-md shadow  grid place-items-center bg-background text-foreground"
>
  {#if theme === "dark" } <SunIcon class="h-5 w-5" />  {:else} <Moon class="h-5 w-5 " />{/if}
</button>
