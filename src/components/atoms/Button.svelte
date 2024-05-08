<script lang="ts">
  import type { DOMAttributes, HTMLButtonAttributes } from "svelte/elements";

  type Style =
    | "primary"
    | "secondary"
    | "light"
    | "muted"
    | "dark"
    | "outlined"
    | undefined;
  interface $$Props
    extends Omit<HTMLButtonAttributes, keyof DOMAttributes<HTMLButtonElement>> {
    style?: Style;
  }

  export let style: Style = undefined;

  $: ({ class: classList, ...rest } = $$props);
</script>

<button
  on:click
  on:mouseenter
  class="{style} group relative z-10 overflow-hidden cursor-pointer disabled:pointer-events-none px-35 py-2.5 shadow-main rounded-full flex justify-center items-center gap-2 uppercase font-medium text-xs leading-6 tracking-[2px] active:scale-95 transition-all {classList}"
  {...rest}
>
  <slot />
  <slot name="icon" />
</button>

<style lang="postcss">
  .outlined {
    @apply bg-transparent border border-purple-secondary text-purple-secondary;
    @apply hover:border-transparent hover:bg-gradient-to-r from-purple-light to-purple-light hover:text-white;

    &.active {
      @apply border-transparent bg-gradient-to-r from-purple-dark to-purple-darker text-white;
    }
  }

  .secondary {
    @apply bg-purple text-white;
    @apply hover:bg-gradient-to-r from-purple-dark to-purple-darker hover:text-white;
  }

  .primary {
    @apply bg-gradient-to-r from-purple-dark to-purple-darker text-white;

    &::before {
      @apply absolute top-0 right-0 bottom-0 left-0 transition-all -z-10 opacity-0;
      content: "";
      @apply bg-gradient-to-r from-purple-light to-purple-light;
      
    }

    &:hover::before {
      @apply opacity-100;
    }
  }

  .muted {
    @apply bg-white/50 text-white;
    @apply hover:bg-white hover:text-purple;
  }

  .light {
    @apply bg-white text-purple;
    @apply hover:bg-purple-light hover:text-white;
  }

  .dark {
    @apply bg-black text-purple-light;
    @apply hover:bg-purple-light hover:text-white;
  }
</style>
