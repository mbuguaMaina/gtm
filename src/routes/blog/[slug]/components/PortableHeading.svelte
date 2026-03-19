<script lang="ts">
  let { level = $bindable(2), children } = $props()

  const sizes: Record<number, string> = {
    1: "text-[clamp(2.25rem,5vw,3.75rem)]",
    2: "text-[1.75rem]",
    3: "text-[1.35rem]",
    4: "text-[1.15rem]",
    5: "text-lg",
    6: "text-base"
  }
 
</script>

<svelte:element
  this={"h" + level}
  class={`font-serif font-bold tracking-tight ${sizes[level]} my-2`}

>
  {@render children()}
</svelte:element>