<script lang="ts">
  import Counter from "@components/atoms/Counter.svelte";

  export let guests: {
    adults: number;
    children: number;
    babies: number;
    pets: number;
  } = {
    adults: 0,
    children: 0,
    babies: 0,
    pets: 0,
  };

  $: ({ class: classList, ...rest } = $$props);
</script>

<div
  class="flex flex-col bg-white/50 max-w-xs border shadow-select rounded-[30px] py-6 px-4 xl:px-9 gap-5 {classList}"
>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <span class="font-semibold">Adults</span>
      <span class="text-xs">13 yo or more</span>
    </div>
    <Counter class="!w-28 xl:w-32" gradient bind:count={guests.adults} />
  </div>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <span class="font-semibold">Children</span>
      <span class="text-xs">2 - 12 yo</span>
    </div>
    <Counter class="!w-28 xl:w-32" gradient bind:count={guests.children} />
  </div>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <span class="font-semibold">Babies</span>
      <span class="text-xs">0 - 24 months</span>
    </div>
    <Counter class="!w-28 xl:w-32" gradient bind:count={guests.babies} />
  </div>
  <div class="flex items-center justify-between">
    <div class="flex flex-col">
      <span class="font-semibold">Pets</span>
    </div>
    <Counter class="!w-28 xl:w-32" gradient bind:count={guests.pets} />
  </div>
</div>
