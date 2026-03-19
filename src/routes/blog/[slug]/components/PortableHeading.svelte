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

  const spacing: Record<number, string> = {
    1: "mt-16 mb-6",
    2: "mt-12 mb-2",
    3: "mt-9 mb-2",
    4: "mt-8 mb-2",
    5: "mt-6 mb-2",
    6: "mt-6 mb-2"
  }
</script>

<svelte:element
  this={"h" + level}
  class={`font-serif font-bold tracking-tight ${sizes[level]} ${spacing[level]}`}
  style="font-family: 'Instrument Serif', Georgia, serif"
>
  {@render children()}
</svelte:element>