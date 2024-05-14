<script lang="ts">
  import { filtersStore, getFilterValueById, setFilterValueById } from "@lib/stores/filtersStore";

  // @ts-ignore
  import RangeSlider from "svelte-range-slider-pips";

  const max: number = 64286;
  const min: number = 0;

  let values = getFilterValueById('nightRange') || [min, max];

  $: if ($filtersStore) {
    values = getFilterValueById('nightRange') || [min, max];
  }
</script>

<RangeSlider suffix=" $" on:stop={(e) => { setFilterValueById('nightRange', e.detail.values); setFilterValueById('weekRange', undefined) }} float range values={values} {max} />

<style lang="postcss">
  :root {
    --range-slider: #d7dada; /* slider main background color */
    --range-handle-inactive: #99a2a2; /* inactive handle color */
    --range-handle: #c09ff9; /* non-focussed handle color */
    --range-handle-focus: #4a40d4; /* focussed handle color */
    --range-handle-border: var(--range-handle); /* handle border color */
    --range-range-inactive: var(
      --range-handle-inactive
    ); /* inactive range bar background color */
    --range-range: var(
      --range-handle-focus
    ); /* active range background color */
    --range-float-inactive: var(
      --range-handle-inactive
    ); /* inactive floating label background color */
    --range-float: var(
      --range-handle-focus
    ); /* floating label background color */
    --range-float-text: white; /* text color on floating label */
  }

  :global(.rangeSlider) {
    @apply !bg-black/20;
  }

  :global(.rangeBar) {
    @apply bg-gradient-to-r from-purple-dark to-purple-darker;
  }

  :global(.rangeSlider .rangeHandle .rangeNub) {
    @apply bg-white shadow-select;
  }

  :global(.rangeSlider .rangeHandle.active .rangeNub) {
    @apply bg-gradient-to-r from-purple-dark to-purple-darker;
  }

  :global(
      .rangeSlider .rangeHandle .rangeFloat,
      .rangeSlider .rangeHandle.active .rangeFloat,
      .rangeSlider.hoverable .rangeHandle:hover .rangeFloat
    ) {
    @apply bg-gradient-to-r from-purple-dark to-purple-darker;
    @apply rounded-[40px] px-4;
    @apply !opacity-100 !-top-3 -translate-x-1/2 -translate-y-full;
  }

  :global(.rangeSlider.focus .rangeNub) {
    @apply bg-gradient-to-r from-purple-dark to-purple-darker;
  }

  :global(.rangeSlider.focus .rangeBar) {
    @apply bg-gradient-to-r from-purple-dark to-purple-darker;
  }
</style>
