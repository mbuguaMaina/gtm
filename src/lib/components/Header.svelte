<script lang="ts">
  import { page } from '$app/state';
	import { FacebookIcon, Menu, TwitterIcon } from '@lucide/svelte';
	import Drawer from './Drawer.svelte';
 
   let open = $state(false), toggleOpen = () => open = !open;

  const isActive = (path: string) => page.url.pathname === path;
</script>

<header class="sticky transition duration-300 top-0 z-50 w-full px-2 bg-background/10 backdrop-filter backdrop-blur">
  <nav class="md:mx-auto   md:max-w-6xl md:px-6 transition-all duration-300 lg:px-12">
    <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-0.5">

      <!-- Logo Section -->
      <div class="flex w-full justify-between lg:w-auto items-center">
        <a
          class="group flex items-center space-x-2 transition-all duration-200"
          aria-label="GGM Technologies - Home"
          href="/"
        >
          <img src="/circularlogo.png" class="w-10 h-10 object-contain  " alt="GGM Technologies - logo">
        
        </a>

        <!-- Mobile Menu Links -->
        <div class="lg:hidden">
          <div class="flex items-center bg-background/75  backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">

            <!-- HOME -->
            <a

            href="/"
              class="relative cursor-pointer text-xs font-medium px-3 py-1 rounded-full transition-colors hover:text-blue-500"
              class:bg-background={isActive('/')}
              class:text-blue-500={isActive('/')}
              class:text-foreground={!isActive('/')}
            >
              <span class="text-xs">Home</span>

              {#if isActive('/')}
              <div class="absolute inset-0 w-full  rounded-full -z-10">
                <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-t-full">
                  <div class="absolute w-8 h-3 bg-blue-400/20 rounded-full blur-sm -top-1 -left-1"></div>
                  <div class="absolute w-6 h-3 bg-blue-400/20 rounded-full blur-sm -top-0.5"></div>
                  <div class="absolute w-3 h-2 bg-blue-400/20 rounded-full blur-xs top-0 left-1.5"></div>
                </div>
              </div>
              {/if}
            </a>

            <!-- ABOUT -->
            <a
              href="/about"
              class="relative cursor-pointer text-xs font-medium px-3 py-1 rounded-full transition-colors hover:text-blue-500"
              class:bg-background={isActive('/about')}
              class:text-blue-500={isActive('/about')}
              class:text-foreground={!isActive('/about')}
            >
              <span class="text-xs">About</span>

                {#if isActive('/about')}
                <div class="absolute inset-0 w-full  rounded-full -z-10">
                <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-t-full">
                  <div class="absolute w-8 h-3 bg-blue-400/20 rounded-full blur-sm -top-1 -left-1"></div>
                  <div class="absolute w-6 h-3 bg-blue-400/20 rounded-full blur-sm -top-0.5"></div>
                  <div class="absolute w-3 h-2 bg-blue-400/20 rounded-full blur-xs top-0 left-1.5"></div>
                </div>
              </div>
              {/if}
            </a>

            <!-- CONTACT -->
            <a
              href="/contact"
              class="relative cursor-pointer text-xs font-medium px-3 py-1 rounded-full transition-colors hover:text-blue-500"
              class:bg-background={isActive('/contact')}
              class:text-blue-500={isActive('/contact')}
              class:text-foreground={!isActive('/contact')}
            >
              <span class="text-xs">Contact</span>
                {#if isActive('/account')}
                <div class="absolute inset-0 w-full  rounded-full -z-10">
                <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-t-full">
                  <div class="absolute w-8 h-3 bg-blue-400/20 rounded-full blur-sm -top-1 -left-1"></div>
                  <div class="absolute w-6 h-3 bg-blue-400/20 rounded-full blur-sm -top-0.5"></div>
                  <div class="absolute w-3 h-2 bg-blue-400/20 rounded-full blur-xs top-0 left-1.5"></div>
                </div>
              </div>
              {/if}
            </a>

          </div>
        </div>

        <!-- Mobile Theme Switcher -->
          <div class="flex items-center bg-background/75 md:hidden  backdrop-blur-lg   px-1.5 py-1.5 rounded-full shadow-lg">
        <Menu onclick={toggleOpen} />
      </div>
      </div>

      <!-- Desktop Navigation (ABSOLUTE DIV KEPT INTACT) -->
      <div class="absolute inset-0 m-auto hidden size-fit lg:block">
        <ul class="flex gap-8 text-sm">

          <li>
            <a
              href="/"
              class="block hover:text-blue-500"
              class:text-blue-500={isActive('/')}
              class:font-medium={isActive('/')}
              class:text-muted-foreground={!isActive('/')}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              class="block hover:text-blue-500"
              class:text-blue-500={isActive('/about')}
              class:font-medium={isActive('/about')}
              class:text-muted-foreground={!isActive('/about')}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/services"
              class="block hover:text-blue-500"
              class:text-blue-500={isActive('/services')}
              class:text-muted-foreground={!isActive('/services')}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="/portfolio"
              class="block hover:text-blue-500"
              class:text-blue-500={isActive('/portfolio')}
              class:text-muted-foreground={!isActive('/portfolio')}
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="/careers"
              class="block hover:text-blue-500"
              class:text-blue-500={isActive('/careers')}
              class:text-muted-foreground={!isActive('/careers')}
            >
              Careers
            </a>
          </li>

          <li>
            <a
              href="/blog"
              class="block hover:text-blue-500"
              class:text-blue-500={isActive('/blog')}
              class:text-muted-foreground={!isActive('/blog')}
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="/contact"
              class="block hover:text-blue-500"
              class:text-blue-500={isActive('/contact')}
              class:text-muted-foreground={!isActive('/contact')}
            >
              Contact
            </a>
          </li>

        </ul>
      </div>

      <!-- Desktop Theme Switcher -->
      <ul class="hidden lg:flex gap-2 items-center">
         <li>

<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
  <TwitterIcon />
</a>
         </li>
         <li>

<a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
  <FacebookIcon />
</a>
         </li>
         <li>

<a href="https://twitter.com/yourusername" aria-label="tiktok link" target="_blank" rel="noopener noreferrer">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z"/>
</svg>

</a>
         </li>
      </ul>

    </div>
  </nav>
</header>
      <Drawer bind:open={open} />
