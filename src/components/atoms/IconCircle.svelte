<script lang="ts">
  import type { DOMAttributes, HTMLButtonAttributes } from "svelte/elements";

  interface $$Props
    extends Omit<HTMLButtonAttributes, keyof DOMAttributes<HTMLButtonElement>> {
    active?: boolean;
  }

  export let active: boolean = false;
  $: ({ class: classList, ...rest } = $$props);
</script>

<button
  on:click
  on:mouseenter
  class="group overflow-hidden cursor-pointerdisabled:pointer-events-none transition-all rounded-full flex justify-center items-center active:scale-95 bg-gradient-to-r from-purple-dark to-purple-darker {classList}"
  {...rest}
>
  <div
    class="{active
      ? 'bg-white/0'
      : 'bg-white hover:bg-white/0'} transition-all p-2"
  >
    <slot />
  </div>
</button>
