   <script lang="ts">
    let {open= $bindable(false), label, href, Icon} = $props()
	import { goto } from "$app/navigation";
  	import { HomeOutline } from "flowbite-svelte-icons";
 const navigate = (url:string) =>{
    goto(url)
    open = false
    }

   </script>
   
   <button onclick={()=>navigate(href)} class="flex items-center px-2 py-1.5 text-body rounded-base shadow bg-secondary rounded-lg group">
               <Icon class="w-5 h-5 text-foreground" />
               <span class="ms-3">{label}</span>
            </button>