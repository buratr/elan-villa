<script lang="ts">
import type { DOMAttributes, HTMLLinkAttributes } from "svelte/elements";
import BurgerIcon from "@assets/svgs/icons/burger-icon.svg?component";

export let light: boolean = false;
export let dark: boolean = false;
export let gap: '1' | '2' | '3' = '3';

</script>

<div class="menu ">
    
        <button
        on:click
        on:mouseenter
        on:mouseleave
        class="menu-text">
        Menu
        </button>
   
    
    <button
        on:click
        on:mouseenter
        class="menu-burger  
        {dark
            ? 'dark'
            : 'bg-gradient-to-r from-purple-dark to-purple-darker'} "
        >

        <div
            class="bg-purple/0 {light
            ? 'hover:bg-purple-light'
            : 'hover:bg-purple-light'} transition-all p-{gap}"
        >
        <BurgerIcon width="24" height="24" class="stroke-2" stroke="white" />
        </div>
    </button>

  </div>

  
  <style lang="postcss">

    .dark {
        background: linear-gradient(0deg, #141414, #141414),
        linear-gradient(
            291.67deg,
            rgba(98, 97, 97, 0.8) -33.08%,
            rgba(0, 0, 0, 0) 91.58%
        );
    }
    .menu-text {
        @apply hidden md:block text-white hover:text-purple-light cursor-pointer transition-all hover:translate-y-1   items-center uppercase text-xl;
    }

    .menu-burger{
        @apply  overflow-hidden cursor-pointer  shadow-main transition-all rounded-full flex justify-center items-center active:scale-95;
    }
    
    .menu {
      @apply md:ml-0 ml-auto cursor-pointer flex justify-between items-center gap-4 lg:gap-9;
    }
    .menu:hover .menu-text{
        @apply text-purple-light translate-y-1
    }
    .menu:hover .menu-burger{
        @apply shadow-none
    }
    .menu:hover .menu-burger div{
        @apply bg-purple-light
    }
  </style>