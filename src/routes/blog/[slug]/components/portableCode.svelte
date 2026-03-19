<script lang="ts">

  export let value: any

  let codeEl: HTMLElement

  function copyCode() {
    navigator.clipboard.writeText(value.code)
  }

  
</script>

<div class="relative my-8">

<button
  on:click={copyCode}
  class="absolute right-3 top-3 text-xs px-2 py-1 rounded bg-slate-700 text-white"
>
Copy
</button>

<pre class="rounded-xl bg-slate-900 text-slate-100 overflow-x-auto p-6">
<code bind:this={codeEl} class={"language-" + (value.language || "javascript")}>
{value.code}
</code>
</pre>

</div>