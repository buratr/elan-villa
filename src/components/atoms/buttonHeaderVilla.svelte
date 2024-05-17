<script lang="ts">
   // import type { HTMLAttributes } from "svelte/elements";
    import { icons } from "@lib/icons/index";
  
    export let iconName: string = '';
    export let buttonName: string = '';
    export let dark: boolean = false;
    export let src: string | undefined = undefined;
    export let stroke: string = '60';
    export let size: string = '32';
    export let trigger: string = 'hover';

    const getIconSource = (name: string) => {
      const icon = icons.find((icon) => icon.name === name);
      return icon ? icon.src : "https://cdn.lordicon.com/hlywgxmy.json";
    };
  </script>
  
  <button
    on:click
    on:mouseenter
    class="btn-menu-villa flex items-center gap-4 {dark ? 'dark' : ''} {$$restProps.class}" {...$$restProps}
  >
    <div class="btn-name hidden md:inline-block text-white hover:text-purple-light cursor-pointer transition-all hover:translate-y-1">
      {buttonName}
    </div>
  
    <div class="group overflow-hidden cursor-pointer disabled:pointer-events-none hover:shadow-none shadow-main transition-all rounded-full flex justify-center items-center active:scale-95 
        {dark ? 'bg-white' : 'bg-black'}" >

      <div class="bg-purple/0 transition-all p-1">
        <div class="{dark ? 'text-black' : 'text-white'} transition-all flex">
          <lord-icon
            src={src ? src : getIconSource(iconName)}
            trigger={trigger}
            style="width:{size}px;height:{size}px"
            class="current-color"
            stroke={stroke}
          >
          </lord-icon>
        </div>
      </div>
    </div>
  </button>
  
  <style lang="postcss">
    .btn-menu-villa:hover .btn-name {
      --tw-translate-y: 0.25rem; /* 4px */
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      color: rgb(192 159 249 / 1);
    }
    .btn-menu-villa:hover .group {
      background-color: rgb(192 159 249 / 1);
    }
  </style>
  