<script lang="ts">
  import type { DOMAttributes, HTMLLinkAttributes } from "svelte/elements";

  interface $$Props
    extends Omit<HTMLLinkAttributes, keyof DOMAttributes<HTMLLinkElement>> {}

  $: ({ class: classList, ...rest } = $$props);
</script>

<a
  on:click
  on:mouseenter
  on:mouseenter
  on:mouseleave
  href={rest.href}
  class="text-white hover:text-purple-light cursor-pointer transition-all hover:translate-y-1 {classList}"
  {...rest}
>
  <slot />
</a>
