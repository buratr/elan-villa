<script lang="ts">
  import type { DOMAttributes, HTMLButtonAttributes } from "svelte/elements";

  interface $$Props
    extends Omit<HTMLButtonAttributes, keyof DOMAttributes<HTMLButtonElement>> {
    light?: boolean;
    dark?: boolean;
    gap?: '1' | '2' | '3';
  }

  export let light: boolean = false;
  export let dark: boolean = false;
  export let gap: '1' | '2' | '3' = '3';
  $: ({ class: classList, ...rest } = $$props);
</script>

<button
  on:click
  on:mouseenter
  class="group overflow-hidden cursor-pointer disabled:pointer-events-none hover:shadow-none shadow-main transition-all rounded-full flex justify-center items-center active:scale-95 
  {dark
    ? 'dark'
    : 'bg-gradient-to-r from-purple-dark to-purple-darker'} {classList}"
  {...rest}
>

  <div
    class="bg-purple/0 {light
      ? 'hover:bg-purple-light'
      : 'hover:bg-purple-light'} transition-all p-{gap}"
  >
    <slot />
  </div>
</button>

<style lang="postcss">
  .dark {
    background: linear-gradient(0deg, #141414, #141414),
      linear-gradient(
        291.67deg,
        rgba(98, 97, 97, 0.8) -33.08%,
        rgba(0, 0, 0, 0) 91.58%
      );
  }
</style>
