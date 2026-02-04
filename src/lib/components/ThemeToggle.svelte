<script lang="ts">
  import { applyTheme, getTheme, type Theme } from "$lib/theme";

  let theme: Theme = getTheme();

  function toggle() {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
  }
</script>

<button
  on:click={toggle}
  class="   relative  h-6 w-6 rounded-full bg-secondary text-secondary-foreground"
>
  {theme === "dark" ? "☀" : "🌙"}
</button>
