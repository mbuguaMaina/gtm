<script lang="ts">
import {getImageUrl} from "$lib/sanity/lib/sanity.client"
let {portableText = $bindable()} = $props()
  const value = portableText.value
  
</script>

<img
  src={getImageUrl(value)}
  alt={value.alt || ""}
  class={`rounded-xl my-4  w-full object-cover h-50 md:h-90`}
/>