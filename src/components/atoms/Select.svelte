<script lang="ts">
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";

  export let options: string[] = [];
  export let index: number = 0;
  export let selectedValue: string = "Select";
  let value: string;

  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="relative">
  <select
    on:change={() => (value = options[index])}
    class="select outline-none shadow-main rounded-[50px] pl-5 pr-8 py-2 text-ellipsis {classList}"
    {...rest}
  >
    <option disabled selected>{selectedValue}</option>
    {#each options as option, i}
      <option value={i}>{option}</option>
    {/each}
  </select>
  <div class="absolute top-1/2 !-translate-y-1/2 right-4 transition-transform">
    <IconArrowLeft
      width="8"
      class="stroke-purple-secondary !w-auto !h-auto stroke-9 !rotate-90"
    />
    <IconArrowLeft
      width="8"
      class="stroke-purple-secondary !w-auto !h-auto stroke-9 !-rotate-90"
    />
  </div>
</div>

<style lang="postcss">
  select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }
</style>
