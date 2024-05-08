<script lang="ts">
  import type { DOMAttributes, HTMLButtonAttributes } from "svelte/elements";

  interface $$Props
    extends Omit<HTMLButtonAttributes, keyof DOMAttributes<HTMLButtonElement>> {
    active?: boolean;
    sm?: boolean;
  }

  export let active: boolean = false;
  export let sm: boolean = false;
  $: ({ class: classList, ...rest } = $$props);
</script>

<button
  on:click
  on:mouseenter
  class="group overflow-hidden cursor-pointerdisabled:pointer-events-none transition-all rounded-full flex justify-center p-1 items-center active:scale-95 bg-white/50 {classList}"
  {...rest}
>
  <slot />
</button>
