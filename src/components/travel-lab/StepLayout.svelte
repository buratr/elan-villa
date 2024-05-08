<script lang="ts">
  import Circle from "@components/atoms/Circle.svelte";

  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="flex flex-col w-full {classList}">
  <div class="grid grid-cols-11 justify-center md:gap-8">
    <div class="col-span-5">
      <slot name="left" />
    </div>
    <div class="relative">
      <div class="absolute w-full h-full dashed-vertical -z-10 top-5"></div>
      <slot name="icon" />
    </div>
    <div class="col-span-5">
      <slot name="right" />
    </div>
  </div>

  <slot />
</div>
