<script lang="ts">
  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="flex flex-col w-full {classList}">
  <div class="grid grid-cols-1 md:grid-cols-6 md:gap-8 justify-center">
    <div class="hidden md:block md:col-span-1"></div>
    <div class="md:col-span-1">
      <slot name="title" />
    </div>

    <div class="md:col-span-2">
      <slot name="info" />
    </div>
    <div class="hidden md:block md:col-span-2"></div>
  </div>

  <slot></slot>
</div>
