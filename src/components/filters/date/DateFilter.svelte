<script lang="ts">
  import RangePicker from "@components/filters/date/RangePicker.svelte";
  import {
    setFilterValueById,
    getFilterValueById,
    filtersStore,
  } from "@lib/stores/filtersStore";

  let selectedDates = getFilterValueById("datesFilter") || [];

  $: if ($filtersStore) {
    selectedDates = getFilterValueById('datesFilter') || [];
  }
</script>

<RangePicker
  {selectedDates}
  className="villas"
  on:dates-change={(e) => {
    setFilterValueById("datesFilter", e.detail.selectedDates);
    setFilterValueById('eventsFilter', undefined); 
    setFilterValueById('seasonFilter', undefined);
  }}
/>

<style lang="postcss">
  :global(
      .separate.flatpickr-calendar.open,
      .separate.flatpickr-calendar.inline
    ) {
    @apply !w-auto;
  }

  :global(.separate.flatpickr-calendar .flatpickr-months) {
    @apply !whitespace-nowrap;
  }
  :global(.flatpickr-calendar) {
    @apply px-12 py-11 w-auto rounded-[30px];
  }

  :global(.flatpickr-current-month input.cur-year) {
    @apply font-semibold !text-black;
  }

  :global(.flatpickr-current-month) {
    @apply !p-0;
  }

  :global(.numInputWrapper) {
    @apply text-2xl font-semibold !w-20;
  }

  :global(.numInputWrapper:hover) {
    @apply !bg-transparent;
  }

  :global(.numInputWrapper span.arrowUp, .numInputWrapper span.arrowDown) {
    @apply !hidden;
  }

  :global(.flatpickr-prev-month, .flatpickr-next-month) {
    @apply stroke-black stroke-2;
  }

  :global(.flatpickr-prev-month:hover, .flatpickr-next-month:hover) {
    @apply scale-125 transition-all;
  }

  :global(.flatpickr-prev-month) {
    @apply whitespace-nowrap;
  }

  :global(.cur-month) {
    @apply text-2xl !m-0;
  }

  :global(.flatpickr-weekdays) {
    @apply mb-3 mt-4;
  }

  :global(.cur-month:hover) {
    @apply !bg-transparent;
  }

  :global(.flatpickr-months) {
    @apply relative;
  }

  :global(.flatpickr-weekdaycontainer) {
    @apply text-xs;
  }

  :global(span.flatpickr-weekday) {
    @apply text-purple-light;
  }

  :global(.flatpickr-day) {
    @apply text-base font-semibold flex items-center !rounded-none !border-none max-w-none !mt-0 transition-all;
  }

  :global(.flatpickr-day:hover) {
    @apply bg-purple-light;
  }

  :global(.flatpickr-day.inRange) {
    @apply bg-black !shadow-none;
    @apply text-white;
  }

  :global(.flatpickr-days .dayContainer) {
    @apply gap-y-1;
    @apply !justify-start;
  }

  :global(.flatpickr-day.today.inRange) {
    @apply bg-black;
  }

  :global(
      .flatpickr-day.selected,
      .flatpickr-day.endRange,
      .flatpickr-day.startRange
    ) {
    @apply !bg-purple-light !border-none !bg-gradient-to-r from-purple-dark to-purple-darker;
  }

  :global(
      .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n + 1)),
      .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n + 1)),
      .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n + 1))
    ) {
    @apply !bg-purple-light !border-none;
    box-shadow: -10px 0 0 #c09ff9;
  }
  :global(.flatpickr-calendar .flatpickr-innerContainer) {
    @apply !justify-center;
  }

  :global(.flatpickr-calendar.villas) {
    @apply px-8;
  }

  :global(.flatpickr-calendar.villas-mobile) {
    @apply px-0 border-0 shadow-none;
  }

  :global(.flatpickr-calendar:before, .flatpickr-calendar:after) {
    content: none !important;
  }

</style>