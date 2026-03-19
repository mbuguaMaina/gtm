<script lang="ts">
let {portableText = $bindable()} = $props()
  const value = portableText.value
  
</script>

<img
  src={value.asset.url}
  alt={value.alt || ""}
  class={`rounded-xl my-4 w-full object-cover h-100`}
/>