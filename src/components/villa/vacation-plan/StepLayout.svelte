<script lang="ts">
  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="flex flex-col w-full {classList}">
  <div class="flex w-full pb-7 md:pb-16">
    <slot name="title" />
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 md:gap-8">
    <div class=" ">
      <slot name="desc" />
    </div>

    <div class="col-span-2">
      <slot name="option" />
    </div>
  </div>

  <slot></slot>
</div>
