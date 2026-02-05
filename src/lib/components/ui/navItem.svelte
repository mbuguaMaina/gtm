   <script lang="ts">
    let {open= $bindable(false), label, href} = $props()
	import { goto } from "$app/navigation";
  	import { HomeOutline } from "flowbite-svelte-icons";
 const navigate = (url:string) =>{
    goto(url)
    open = false
    }

   </script>
   
   <button onclick={()=>navigate(href)} class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-gray-200 hover:text-blue-600 rounded-lg group">
               <HomeOutline />
               <span class="ms-3">{label}</span>
            </button>