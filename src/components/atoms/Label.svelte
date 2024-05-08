<script lang="ts">
    $: ({ class: classList, ...rest } = $$props);
  </script>
  
  <span
    class="text-black-light uppercase font-medium leading-6 tracking-[4px] text-sm {classList}"
    {...rest}
  >
    <slot />
  </span>
  