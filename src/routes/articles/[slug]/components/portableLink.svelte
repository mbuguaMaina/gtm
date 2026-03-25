<script lang="ts">
  export let value: any
</script>

<a
  href={value?.href}
  target={value?.href?.startsWith("http") ? "_blank" : "_self"}
  rel="noopener noreferrer"
  class="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:opacity-80"
>
  <slot />
</a>