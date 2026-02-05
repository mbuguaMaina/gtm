
<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";
 
const {size = $bindable("lg") as "sm"|"md" |"lg", children, ...props} = $props()
</script>
<button class={`${size === "sm" ? "px-4 py-2" : size === "md" ? "px-6 py-3" : "px-8 py-4"} rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 group ${{...props.class}}`}>
{children}
  <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
