<script lang="ts">
  import { page } from '$app/state';
	import { Facebook,   Twitter  } from '@lucide/svelte';
	import Drawer from './Drawer.svelte';
	import ListItem from './listItem.svelte';
 import { navigationItems } from "$lib/navigations";
	import ThemeToggle from './ThemeToggle.svelte';
   import logo from "$lib/assets/circularlogo.png";
	import SocialLinks from './contact/socialLinks.svelte';
   let open = $state(false), toggleOpen = () => open = !open;


  const isActive = (path: string) => page.url.pathname === path;
</script>

<header class="fixed  transition duration-300 top-0 z-50 w-full px-2 bg-background ">
  <nav class="md:mx-auto shadow-md rounded-md md:p-1.5   md:max-w-6xl md:px-6 transition-all duration-300 lg:px-12">
    <div class="relative flex flex-wrap items-center justify-between gap-2 md:gap-6 py-1.5  md:py-3 lg:gap-0 lg:py-0.5">
      <!-- Logo Section -->
      <div class="flex w-full  justify-between lg:w-auto items-center">
        <a
          class="group flex items-center space-x-2 transition-all duration-200"
          aria-label="GGM Technologies - Home"
          href="/"
        >
          <enhanced:img src={logo} class="w-10 h-10 object-contain  " alt="GGM Technologies - logo" />
        
        </a>
        <!-- Mobile Menu Links -->
       
          <div class="flex items-center  lg:hidden  bg-background/60 dark:bg-slate-900 backdrop-blur-lg   py-1 px-1 rounded-full shadow-lg">

        
{#each navigationItems as item}
      <a
              href={item.path}
              class="relative cursor-pointer text-xs font-medium px-3 py-1 rounded-full transition-colors hover:text-green-500"
              class:bg-background={isActive(item.path)}
              class:text-[#22c55e]={isActive(item.path)}
              class:text-foreground={!isActive(item.path)}
            >
              <span class="text-xs">{item.label}</span>

                {#if isActive(item.path)}
                <div class="absolute inset-0 w-full  rounded-full -z-10">
                <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#22c55e] rounded-t-full">
                  <div class="absolute w-8 h-3 bg-[#22c55e]/20 rounded-full blur-sm -top-1 -left-1"></div>
                  <div class="absolute w-6 h-3 bg-[#22c55e]/20 rounded-full blur-sm -top-0.5"></div>
                  <div class="absolute w-3 h-2 bg-[#22c55e]/20 rounded-full blur-xs top-0 left-1.5"></div>
                </div>
              </div>
              {/if}
            </a>
{/each}
          </div>
     
        <!-- Mobile Theme Switcher -->
          <div class="flex items-center gap-1 md:gap-3   md:hidden       py-1.5 ">
  <ThemeToggle />
 
      </div>
      </div>

      <!-- Desktop Navigation (ABSOLUTE DIV KEPT INTACT) -->
      <div class="absolute inset-0 m-auto hidden size-fit lg:block">
        <ul class="flex  text-sm">
{#each navigationItems as item}
          <ListItem isActive={isActive}   item={item}>
            {item.label}  
            </ListItem>
            {/each}

        </ul>
      </div>
      <!-- Desktop Theme Switcher -->
      <ul class="hidden lg:flex gap-2 items-center">
   <SocialLinks />
          <div class="hidden md:inline-block">
 <ThemeToggle />
</div>
      </ul>
    </div>
  </nav>
</header>
      <Drawer bind:open={open} />
