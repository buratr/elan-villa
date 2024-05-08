<script lang="ts">
  import IconArrowLeft from "@assets/svgs/icons/arrow-left.svg?component";
  import { createEventDispatcher } from "svelte";

  export let options: string[] = [];
  export let index: number = 0;
  export let selectedValue: string = "Select";
  let value: string;
  const dispatch = createEventDispatcher();
  $: ({ class: classList, ...rest } = $$props);
</script>

<div class="relative w-fit">
  <select
    on:change={(e) => {
      value = options[e.target.selectedIndex - 1];
      dispatch("change", value);
    }}
    class="select bg-select flex text-white outline-none shadow-main rounded-[50px] pl-6 pr-8 py-2 text-ellipsis {classList}"
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
      class="stroke-white !w-auto !h-auto stroke-9 !-rotate-90"
    />
  </div>
</div>

<style lang="postcss">
  select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
  }

  .bg-select {
    background: linear-gradient(
        286.56deg,
        rgba(98, 97, 97, 0.8) -8.33%,
        rgba(0, 0, 0, 0) 93.15%
      ),
      linear-gradient(0deg, #141414, #141414);
  }
</style>
